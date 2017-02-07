"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_service_1 = require("./product.service");
var ProductComponent = (function () {
    function ProductComponent(productService, router) {
        this.productService = productService;
        this.router = router;
    }
    ProductComponent.prototype.getHeroes = function () {
        var _this = this;
        this.productService
            .getHeroes()
            .then(function (products) {
            console.log(products);
            _this.products = products;
        });
    };
    //   add(name: string): void {
    //     name = name.trim();
    //     if (!name) { return; }
    //     this.heroService.create(name)
    //       .then(product => {
    //         this.products.push(product);
    //         this.selectedProduct = null;
    //       });
    //   }
    ProductComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'partial-products',
        templateUrl: '../../public/views/dist/partials/partial-products.html'
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        router_1.Router])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map