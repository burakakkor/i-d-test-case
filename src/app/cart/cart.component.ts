import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Cart }           from './cart';
import { CartService }    from './cart.service';
import { APIService } from '../api/api.service';

@Component({
  selector: 'cart',
  moduleId: module.id,
  templateUrl: '../../public/views/dist/partials/cart.html'
})
export class CartComponent implements OnInit {
  cart: Cart;

  constructor(
    private cartService: CartService,
    private apiService: APIService,
    private router: Router) { }

  getCart(): void {
    this.cartService
        .getCart()
        .then(cart => {
          this.cart = cart;
          console.log(this.cart);
        });
  }

  removeProductFromCart(id): void {
    this.apiService
        .removeProductFromCart(id)
        .then(response => response); //TODO:notify
  }

  ngOnInit(): void {
    this.getCart();
  }
}