import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../../models/pokemon.model';

@Component({
  selector: 'poke-pokemon-sprite',
  templateUrl: './pokemon-sprite.component.html',
  styleUrls: ['./pokemon-sprite.component.scss']
})
export class PokemonSpriteComponent implements OnInit {

  @Input() pokemon: Pokemon;

  constructor() { }

  ngOnInit() {
  }

}
