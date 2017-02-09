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
  total: number = 0;
  isOnSale: boolean = false;

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
          this.cart = cart;
          this.toasterService.pop('warning', 'Item removed from your cart!', '');
        });
  }

  checkVoucher(code, cart): void {
    this.apiService
      .checkVoucher(code, cart)
      .then(response => {
        var discount = parseInt(response.json().discount);

        this.total = this.cart.total - discount; // new total
        this.isOnSale = true; // enable new total text

        this.toasterService.pop('success', 'Discount!', '');
      })
      .catch(response => {
        this.isOnSale = false; // enable new total text

        this.toasterService.pop('error', 'Invalid voucher code.', '');
      });
  }

  checkout(): void {
    this.toasterService.pop('warning', 'Soon to be implemented', '');
  }

  ngOnInit(): void {
    this.getCart();
  }
}