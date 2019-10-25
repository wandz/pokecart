import {Injectable, OnInit} from '@angular/core';
import { Cart } from '../models/cart.model';
import { Subject } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly cartObservable: Subject<Cart> = new Subject<Cart>();

  subscribe(callback: (cart: Cart) => void) {
    this.cartObservable.subscribe(callback);
    callback(this.getCart());
  }

  addPokemon(pokemon: Pokemon) {
    const cart = this.getCart();
    cart.addPokemon(pokemon);
    this.cartObservable.next(cart);
    localStorage.setItem('cart', this.serializeCartToLocalStorage(cart));
  }

  private getCart() {
    const localStorageCart = localStorage.getItem('cart') || '[]';
    return this.deserializeCart(JSON.parse(localStorageCart));
  }

  private serializeCartToLocalStorage(cart) {
    return JSON.stringify(cart.getPokemons().map((pokemon: Pokemon) => ({
      id: pokemon.id,
      name: pokemon.name
    })));
  }

  private deserializeCart(cartObject: any) {
    return new Cart(this.deserializePokemons(cartObject));
  }

  private deserializePokemons(cartObject: any[]) {
    return cartObject.map((pokemonObject) => new Pokemon(pokemonObject.id, pokemonObject.name));
  }
}
