import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Cart }           from './cart';
import { CartService }    from './cart.service';
import { APIService } from '../api/api.service';

import { ToasterService } from 'angular2-toaster';

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
    private toasterService: ToasterService,
    private router: Router) { }

  getCart(): void {
    this.cartService
        .getCart()
        .then(cart => this.cart = cart);
  }

  removeProductFromCart(id): void {
    this.apiService
        .removeProductFromCart(id)
        .then(cart => {
          this.toasterService.pop('warning', 'Item removed from your cart!', '');
          this.cart = cart;
        });
  }

  checkVoucher(code): void {
    this.apiService
      .checkVoucher(code)
      .then(response => {
        this.toasterService.pop('success', 'Discount!', '');
      })
      .catch(response => {
        this.toasterService.pop('error', 'Invalid voucher code.', '');
      });
  }

  checkout(): void {
    
  }

  ngOnInit(): void {
    this.getCart();
  }
}