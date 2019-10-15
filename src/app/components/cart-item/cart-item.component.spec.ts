import {CartItemComponent} from './cart-item.component';
import {render} from '@testing-library/angular';
import {Pokemon} from '../../models/pokemon.model';
import {PokemonSpriteComponent} from '../pokemon-sprite/pokemon-sprite.component';

describe('CartItemComponent', () => {
  it('renders the added to cart pokemon name', async () => {
    const pokemon = new Pokemon(1, 'Bulbassaur');
    const component = await render(CartItemComponent, {
      componentProperties: { pokemon },
      declarations: [PokemonSpriteComponent]
    });

    expect(component.queryByText('Bulbassaur')).not.toBeNull();
  });
});
