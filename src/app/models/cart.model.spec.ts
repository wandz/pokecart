import { Cart } from './cart.model';
import PokemonMocks from '../../../mocks/pokemon.mocks';

describe('Cart', () => {
  it('add a pokemon to a cart', () => {
    const pokemon = PokemonMocks.bulbassaur;
    const cart = new Cart();
    cart.addPokemon(pokemon);
    expect(cart.getCount()).toBe(1);
  });

  it('get cart pokemons', () => {
    const pokemon = PokemonMocks.bulbassaur;
    const cart = new Cart();
    cart.addPokemon(pokemon);
    const pokemons = cart.getPokemons();

    expect(pokemons.length).toBe(1);
    expect(pokemons[0].name).toBe('Bulbassaur');
  });
});
