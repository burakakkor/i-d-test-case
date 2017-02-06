import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {
  getProducts(): Promise<Product[]> {
    return Promise.resolve(null);
  }
}