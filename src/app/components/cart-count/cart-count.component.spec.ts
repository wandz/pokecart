import { render } from '@testing-library/angular';
import { CartCountComponent } from './cart-count.component';
import { CartService } from '../../services/cart.service';
import { Pokemon } from '../../models/pokemon.model';
import { Cart } from '../../models/cart.model';

describe('CartCountComponent', () => {
  it('shows count of pokemon', async () => {
    const cart = new Cart();
    const pokemon = new Pokemon(1, 'Bulbasauro');
    cart.addPokemon(pokemon);
    const component = await render(CartCountComponent, {
      providers: [{ provide: CartService, useValue: { subscribe: (callback) => {callback(cart); } } }]
    });

    expect(component.queryByText('1')).not.toBeNull();
  });
});
