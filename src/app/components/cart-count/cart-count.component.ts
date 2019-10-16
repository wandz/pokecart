import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart.model';

@Component({
  selector: 'poke-cart-count',
  templateUrl: './cart-count.component.html',
  styleUrls: ['./cart-count.component.scss']
})
export class CartCountComponent implements OnInit {
  private cart: Cart;
  @Output() clickEvent = new EventEmitter<void>();

  constructor(private readonly cartService: CartService) {
  }

  ngOnInit() {
    this.cartService.subscribe((cart: Cart) => {
      this.cart = cart;
    });
  }

  getCartCount() {
    return this.cart.getCount();
  }

  onClick() {
    this.clickEvent.emit();
  }
}
