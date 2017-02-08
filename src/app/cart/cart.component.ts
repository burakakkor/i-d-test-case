import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Cart }           from './cart';
import { CartService }    from './cart.service';

@Component({
  selector: 'cart',
  moduleId: module.id,
  templateUrl: '../../public/views/dist/partials/cart.html'
})
export class CartComponent implements OnInit {
  cart: Cart;

  constructor(
    private cartService: CartService,
    private router: Router) { }

  getCart(): void {
    this.cartService
        .getCart()
        .then(cart => {
          console.log(cart);
          this.cart = cart;
          console.log(this.cart);
        });
  }

  ngOnInit(): void {
    this.getCart();
  }
}