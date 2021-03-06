import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Product } from './product';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private dataUrl = 'api/data';

  constructor(private http: Http) { }

  getProducts(): Promise<Product[]> {
    return this.http.get(this.dataUrl)
               .toPromise()
               .then(response => response.json() as Product[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}