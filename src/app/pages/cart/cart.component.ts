import { Component, OnInit } from '@angular/core';
import { Cart } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'poke-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart;

  constructor(private readonly cartService: CartService) {
  }

  ngOnInit() {
    this.cartService.subscribe((cart: Cart) => {
      this.cart = cart;
    });
  }

}
