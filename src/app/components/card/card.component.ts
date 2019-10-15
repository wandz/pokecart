import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from 'src/app/models/pokemon.model';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'poke-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() pokemon: Pokemon;

  constructor(private readonly cartService: CartService) { }

  adopt() {
    this.cartService.addPokemon(this.pokemon);
  }

}
