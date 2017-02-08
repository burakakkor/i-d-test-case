import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Product }           from './product';
import { ProductService }    from './product.service';

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
    private router: Router) { }

  getProducts(): void {
    this.productService
        .getProducts()
        .then(products => this.products = products);
  }

  addProductToCart(product): void {
    this.productService
        .addProductToCart(product);
  }

  ngOnInit(): void {
    this.getProducts();
  }
}