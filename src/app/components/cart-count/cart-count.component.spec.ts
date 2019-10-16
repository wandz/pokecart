import {render} from '@testing-library/angular';
import {CartCountComponent} from './cart-count.component';
import {CartService} from '../../services/cart.service';
import {Pokemon} from '../../models/pokemon.model';
import {Cart} from '../../models/cart.model';

describe('CartCountComponent', () => {
  it('shows count of pokemon', async () => {
    const cart = new Cart();
    cart.addPokemon(new Pokemon(1, 'Bulbasauro'));

    const fakeCartService = { subscribe: (callback) => {callback(cart); } };
    const component = await render(CartCountComponent, {
      providers: [{ provide: CartService, useValue: fakeCartService }]
    });

    expect(component.queryByText('1')).not.toBeNull();
  });
});
