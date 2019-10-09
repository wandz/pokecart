import { Pokemon } from './pokemon.model';

export interface PokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}
