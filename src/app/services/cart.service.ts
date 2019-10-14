import { Injectable } from '@angular/core';
import { Cart } from '../models/cart.model';
import { Subject } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly cart: Cart = new Cart();
  private readonly cartObservable: Subject<Cart> = new Subject<Cart>();

  subscribe(callback: (cart: Cart) => void) {
    this.cartObservable.subscribe(callback);
    callback(this.cart);
  }

  addPokemon(pokemon: Pokemon) {
    this.cart.addPokemon(pokemon);
    this.cartObservable.next(this.cart);
  }
}
