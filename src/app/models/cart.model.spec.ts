import { Pokemon } from './pokemon.model';
import { Cart } from './cart.model';

describe('Cart', () => {
  it('add a pokemon to a cart', () => {
    const pokemon = new Pokemon(1, 'Bulbasauro');
    const cart = new Cart();
    cart.addPokemon(pokemon);
    expect(cart.getCount()).toBe(1);
  });
});
