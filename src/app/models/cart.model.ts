import { Pokemon } from './pokemon.model';

export class Cart {
  public constructor(private readonly pokemons: Pokemon[] = []) {}

  addPokemon(pokemon: Pokemon) {
    this.pokemons.push(pokemon);
  }

  getCount() {
    return this.pokemons.length;
  }

  getPokemons() {
    return this.pokemons;
  }
}
