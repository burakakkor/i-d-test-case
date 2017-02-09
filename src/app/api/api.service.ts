import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Cart } from '../cart/cart';
import { Product } from '../product/product';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class APIService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private cartUrl = 'api/cart';

  constructor(private http: Http) { }

	addProductToCart(id): Promise<Response> {

    return this.http.post(this.cartUrl, {id: id})
               .toPromise()
               .then(response => response)
               .catch(this.handleError);
  }

	removeProductFromCart(id): Promise<Response> {
    return this.http.delete(this.cartUrl + '/' + id)
               .toPromise()
               .then(response => response)
               .catch(this.handleError);
	}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}