import {CardComponent} from './card.component';
import {render} from '@testing-library/angular';
import {Pokemon} from 'src/app/models/pokemon.model';
import {FEATURE_TOGGLES_DI_TOKEN, FeatureToggleDirective} from '../../directives/feature-toggle.directive';
import {CartService} from '../../services/cart.service';
import {PokemonSpriteComponent} from '../pokemon-sprite/pokemon-sprite.component';

describe('CardComponent', () => {
  const declarations = [FeatureToggleDirective, PokemonSpriteComponent];

  it('renders a pokemon name', async () => {
    const pokemon = new Pokemon(1, 'Pikachu');
    const component = await render(CardComponent, {
      componentProperties: {pokemon},
      declarations
    });
    expect(component.getByText('Pikachu')).toBeTruthy();
  });

  it('does not renders the adoption button if toggle is disabled', async () => {
    const pokemon = new Pokemon(1, 'Bulbasauro');
    const component = await render(CardComponent, {
      componentProperties: {pokemon},
      declarations
    });

    expect(component.queryByText('Adotar')).toBeNull();
  });

  it('calls adopted callback when click on adopt button', async () => {
    const mockCardService = {addPokemon: jest.fn()};
    const pokemon = new Pokemon(1, 'Bulbasauro');
    const component = await render(CardComponent, {
      providers: [{
        provide: FEATURE_TOGGLES_DI_TOKEN, useValue: {'show-cartcount': true}
      }, {
        provide: CartService, useValue: mockCardService
      }],
      componentProperties: {pokemon},
      declarations
    });

    component.click(component.queryByText('Adotar'));

    expect(mockCardService.addPokemon).toBeCalled();
  });

  it('calls adopted callback when press enter on adopt button', async () => {
    const mockCardService = {addPokemon: jest.fn()};
    const pokemon = new Pokemon(1, 'Bulbasauro');
    const component = await render(CardComponent, {
      providers: [{
        provide: FEATURE_TOGGLES_DI_TOKEN, useValue: {'show-cartcount': true}
      }, {
        provide: CartService, useValue: mockCardService
      }],
      componentProperties: {pokemon},
      declarations
    });
    component.keyDown(component.queryByText('Adotar'), {key: 'Enter', code: 13});

    expect(mockCardService.addPokemon).toBeCalled();
  });
});
