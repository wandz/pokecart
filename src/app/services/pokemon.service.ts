import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon.model';
import { HttpClient, HttpResponse } from '@angular/common/http';

interface PokemonResponse {
  name: string;
  url: string;
}

interface PokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonResponse[];
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Pokemon[]> {
    return this.httpClient.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon/')
      .pipe(map((response: PokemonListResponse) => this.deserializeResponseList(response)));
  }

  private deserializeResponseList(pokemonListResponse: PokemonListResponse): Pokemon[] {
    return pokemonListResponse.results.map((pokemonResult) => this.deserializePokemonResponse(pokemonResult));
  }

  private deserializePokemonResponse(pokemonResult): Pokemon {
    return new Pokemon(pokemonResult.name);
  }
}
