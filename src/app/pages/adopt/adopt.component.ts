import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {PokemonService} from '../../services/pokemon.service';
import {Pokemon} from '../../models/pokemon.model';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'poke-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.scss']
})
export class AdoptComponent implements OnInit {
  public pokemons: Observable<Pokemon[]> = of([]);
  public isBrowser = isPlatformBrowser(this.platformId);

  constructor(private readonly pokemonService: PokemonService,
              private readonly router: Router,
              @Inject(PLATFORM_ID) private platformId: any) {
  }

  ngOnInit() {
    this.pokemons = this.pokemonService.getAll();
    this.pokemons.subscribe({
      error: () => this.router.navigate(['500'])
    });
  }
}
