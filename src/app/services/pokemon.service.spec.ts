import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PokemonService } from './pokemon.service';
import { Pokemon } from '../models/pokemon.model';
import { PokemonResponse } from '../models/pokemon-response.model';

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

  it('get all pokemons', () => {
    const charmander = new Pokemon('Charmander');
    const pikachu = new Pokemon('Pikachu');
    const pokemons = [charmander, pikachu];
    const pokemonResponse = { results: pokemons };

    pokemonService.getAll().subscribe((response) => {
      expect(response).toEqual(pokemons);
    });

    const request = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/');
    request.flush(pokemonResponse);
  });
});
