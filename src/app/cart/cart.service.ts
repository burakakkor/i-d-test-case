import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Cart } from './cart';

@Injectable()
export class CartService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private cartUrl = 'api/cart';

  constructor(private http: Http) { }

  getCart(): Promise<Cart> {
    return this.http.get(this.cartUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}