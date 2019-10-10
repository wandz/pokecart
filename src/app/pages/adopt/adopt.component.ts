import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'poke-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.scss']
})
export class AdoptComponent implements OnInit {
  private pokemons: Pokemon[] = [];

  constructor(private readonly pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getAll()
      .subscribe((pokemons) => this.pokemons = pokemons);
  }

}
