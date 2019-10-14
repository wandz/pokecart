import { CardComponent } from './card.component';
import { render } from '@testing-library/angular';
import { Pokemon } from 'src/app/models/pokemon.model';
import { FEATURE_TOGGLES_DI_TOKEN, FeatureToggleDirective } from '../../directives/feature-toggle.directive';
import { EventEmitter } from '@angular/core';

describe('CardComponent', () => {
  const declarations = [ FeatureToggleDirective ];

  it('renders a pokemon name', async () => {
    const pokemon = new Pokemon(1, 'Pikachu');
    const component = await render(CardComponent, {
      componentProperties: { pokemon },
      declarations
    });
    expect(component.getByText('Pikachu')).toBeTruthy();
  });

  it('has a sprite with alt text', async () => {
    const pokemon = new Pokemon(1, 'Bulbasauro');
    const component = await render(CardComponent, {
      componentProperties: {pokemon},
      declarations
    });

    expect(component.getByAltText('Bulbasauro sprite')).not.toBeNull();
  });

  it('does not renders the adoption button if toggle is disabled', async () => {
    const pokemon = new Pokemon(1, 'Bulbasauro');
    const component = await render(CardComponent, {
      componentProperties: {pokemon},
      declarations
    });

    expect(component.queryByText('Adopt')).toBeNull();
  });

  it('calls adopted callback when click on adopt button', async () => {
    const adoptedCallback = jest.fn();
    const pokemon = new Pokemon(1, 'Bulbasauro');
    const component = await render(CardComponent, {
      providers: [{
        provide: FEATURE_TOGGLES_DI_TOKEN, useValue: {'show-cartcount': true}
      }],
      componentProperties: {pokemon, adopted: {emit: adoptedCallback} as any},
      declarations
    });

    component.click(component.getByText('Adopt'));

    expect(adoptedCallback).toBeCalled();
  });
});
