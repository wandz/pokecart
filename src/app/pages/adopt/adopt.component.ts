import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.model';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'poke-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.scss']
})
export class AdoptComponent implements OnInit {
  public pokemons: Observable<Pokemon[]> = of([]);

  constructor(private readonly pokemonService: PokemonService, private readonly router: Router) {
  }

  ngOnInit() {
    this.pokemons = this.pokemonService.getAll();
    this.pokemons.subscribe({
      error: () => this.router.navigate(['500'])
    });
  }

  goToCart() {
    this.router.navigate(['cart']);
  }
}
