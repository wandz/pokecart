import { Injectable } from '@angular/core';
import {Cart} from '../models/cart.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartObservable: Observable<Cart> = of(new Cart());

  subscribe(callback: (cart: Cart) => void) {
    this.cartObservable.subscribe(callback);
  }
}
