import { Pokemon } from './pokemon.model';

export class Cart {
  private readonly pokemons: Pokemon[] = [];

  addPokemon(pokemon: Pokemon) {
    this.pokemons.push(pokemon);
  }

  getCount() {
    return this.pokemons.length;
  }
}
