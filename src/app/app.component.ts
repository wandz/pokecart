import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { Pokemon } from './models/pokemon.model';

@Component({
  selector: 'poke-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pokecart';

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
  }
}
