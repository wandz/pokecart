import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'poke-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @Input() pokemons: Pokemon[];

  constructor() {
  }

  ngOnInit() {
  }

}
