import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Product }           from './product';
import { ProductService }    from './product.service';

@Component({
  moduleId: module.id,
  selector: 'partial-products',
  templateUrl: '../../public/views/dist/partials/partial-products.html'
})
export class ProductComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;

  constructor(
    private productService: ProductService,
    private router: Router) { }

  getHeroes(): void {
    this.productService
        .getHeroes()
        .then(products => {
            console.log(products);

            this.products = products;
        });
  }

//   add(name: string): void {
//     name = name.trim();
//     if (!name) { return; }
//     this.heroService.create(name)
//       .then(product => {
//         this.products.push(product);
//         this.selectedProduct = null;
//       });
//   }

  ngOnInit(): void {
    this.getHeroes();
  }

//   onSelect(hero: Hero): void {
//     this.selectedHero = hero;
//   }

//   gotoDetail(): void {
//     this.router.navigate(['/detail', this.selectedHero.id]);
//   }
}