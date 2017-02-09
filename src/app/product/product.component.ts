import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Product }           from './product';
import { ProductService }    from './product.service';
import { APIService } from '../api/api.service';

import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'products',
  moduleId: module.id,
  templateUrl: '../../public/views/dist/partials/products.html'
})
export class ProductComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;

  constructor(
    private productService: ProductService,
    private apiService: APIService,
    private toasterService: ToasterService,
    private router: Router) { }

  getProducts(): void {
    this.productService
        .getProducts()
        .then(products => this.products = products);
  }

  addProductToCart(product): void {
    this.apiService
        .addProductToCart(product)
        .then(response => {
          this.toasterService.pop('success', 'Item added to your cart!', '');
          return response;
        });
  }

  ngOnInit(): void {
    this.getProducts();
  }
}