import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Cart }           from './cart';
import { CartService }    from './cart.service';

@Component({
  moduleId: module.id,
  selector: 'partial-cart',
  templateUrl: '../../public/views/dist/partials/partial-products.html'
})
export class CartComponent implements OnInit {
  cart: Cart;

  constructor(
    private cartService: CartService,
    private router: Router) { }

  getCart(): void {
    this.cartService
        .getCart()
        .then(cart => this.cart = cart);
  }

  ngOnInit(): void {
    this.getCart();
  }
}