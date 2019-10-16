import {CardComponent} from './card.component';
import {render} from '@testing-library/angular';
import {Pokemon} from 'src/app/models/pokemon.model';
import {FeatureToggleDirective} from '../../directives/feature-toggle.directive';
import {CartService} from '../../services/cart.service';
import {PokemonSpriteComponent} from '../pokemon-sprite/pokemon-sprite.component';
import {TestBed} from '@angular/core/testing';
import {withFeatureToggle} from 'testUtils';

describe('CardComponent', () => {
  let mockCardService;

  beforeEach(() => {
    mockCardService = {addPokemon: jest.fn()};

    TestBed.configureTestingModule({
      declarations: [FeatureToggleDirective, PokemonSpriteComponent],
      providers: [{
        provide: CartService,
        useValue: mockCardService
      }],
    });
  });

  it('renders a pokemon name', async () => {
    const pokemon = new Pokemon(1, 'Pikachu');
    const component = await render(CardComponent, {
      componentProperties: {pokemon},
    });
    expect(component.getByText('Pikachu')).toBeTruthy();
  });

  it('does not renders the adoption button if toggle is disabled', async () => {
    const pokemon = new Pokemon(1, 'Bulbasauro');
    const component = await render(CardComponent, {
      componentProperties: {pokemon},
    });

    expect(component.queryByText('Adotar')).toBeNull();
  });

  describe('adopting a pokemon', () => {
    beforeEach(() => withFeatureToggle(['show-cartcount']));

    it('calls adopted callback when click on adopt button', async () => {
      const pokemon = new Pokemon(1, 'Bulbasauro');
      const component = await render(CardComponent, {
        componentProperties: {pokemon},
      });

      component.click(component.queryByText('Adotar'));

      expect(mockCardService.addPokemon).toBeCalled();
    });

    it('calls adopted callback when press enter on adopt button', async () => {
      const pokemon = new Pokemon(1, 'Bulbasauro');
      const component = await render(CardComponent, {
        componentProperties: {pokemon},
      });
      component.keyDown(component.queryByText('Adotar'), {key: 'Enter', code: 13});

      expect(mockCardService.addPokemon).toBeCalled();
    });
  });
});
