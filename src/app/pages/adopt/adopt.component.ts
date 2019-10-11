import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.model';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'poke-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.scss']
})
export class AdoptComponent implements OnInit {
  public pokemons: Observable<Pokemon[]> = of([]);

  constructor(private readonly pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemons = this.pokemonService.getAll();
  }
}
