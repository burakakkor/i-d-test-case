import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Product }           from './product';
import { ProductService }    from './product.service';
import { APIService } from '../api/api.service';

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

          return response;
        }); //TODO:notify
  }

  ngOnInit(): void {
    this.getProducts();
  }
}