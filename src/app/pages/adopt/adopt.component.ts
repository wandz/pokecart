import { Component, Inject, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.model';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { IFeatureToggle } from '../../models/app-config.model';
import { FEATURE_TOGGLES_DI_TOKEN } from '../../directives/feature-toggle.directive';

@Component({
  selector: 'poke-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.scss']
})
export class AdoptComponent implements OnInit {
  public pokemons: Observable<Pokemon[]> = of([]);

  constructor(private readonly pokemonService: PokemonService, private readonly router: Router,
              @Inject(FEATURE_TOGGLES_DI_TOKEN) private toggles: IFeatureToggle) {
  }

  ngOnInit() {
    this.pokemons = this.pokemonService.getAll();
    this.pokemons.subscribe({
      error: () => this.router.navigate(['500'])
    });
  }

  goToCart() {
    if (this.toggles['show-cartpage']) {
      this.router.navigate(['cart']);
    }
  }
}
