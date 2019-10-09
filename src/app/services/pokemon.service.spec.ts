import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { PokemonService } from './pokemon.service';
import { Pokemon } from '../models/pokemon.model';

describe('PokemonService', () => {
  let pokemonService: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService]
    });

    httpMock = TestBed.get(HttpTestingController);
    pokemonService = TestBed.get(PokemonService);
  });

  it('get all pokemons', done => {
    const charmander = new Pokemon(4, 'Charmander');
    const pikachu = new Pokemon(5, 'Pikachu');
    const pokemons = [charmander, pikachu];
    const pokemonResponse = {
      results: [
        { name: 'Charmander', url: 'https://pokeapi.co/api/v2/pokemon/4' },
        { name: 'Pikachu', url: 'https://pokeapi.co/api/v2/pokemon/5' }
      ]
    };

    pokemonService.getAll().subscribe(response => {
      expect(response).toEqual(pokemons);
      done();
    });

    const request = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/');
    request.flush(pokemonResponse);
  });
});
