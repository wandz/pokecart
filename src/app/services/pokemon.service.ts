import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { PokemonResponse } from '../models/pokemon-response.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Pokemon[]> {
    return this.httpClient.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon/')
      .pipe(map((response) => response.results));
  }
}
