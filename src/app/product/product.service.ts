import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product } from './product';

@Injectable()
export class ProductService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private dataUrl = 'api/data';
  private cartUrl = 'api/cart';

  constructor(private http: Http) { }

  getProducts(): Promise<Product[]> {
    return this.http.get(this.dataUrl)               
               .toPromise()
               .then(response => response.json() as Product[])
               .catch(this.handleError);
  }

  addProductToCart(product): Promise<Response> {
    var body: string = JSON.stringify(product);
    var headers = new Headers({ 'content-type': 'application/json' });
    var options = new RequestOptions({ headers: headers });

    return this.http.post(this.cartUrl, body, options)
               .toPromise()
               .then(response => response)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}