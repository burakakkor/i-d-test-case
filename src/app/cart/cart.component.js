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
var cart_service_1 = require("./cart.service");
var api_service_1 = require("../api/api.service");
var CartComponent = (function () {
    function CartComponent(cartService, apiService, router) {
        this.cartService = cartService;
        this.apiService = apiService;
        this.router = router;
    }
    CartComponent.prototype.getCart = function () {
        var _this = this;
        this.cartService
            .getCart()
            .then(function (cart) {
            _this.cart = cart;
            console.log(_this.cart);
        });
    };
    CartComponent.prototype.removeProductFromCart = function (id) {
        this.apiService
            .removeProductFromCart(id)
            .then(function (response) { return response; }); //TODO:notify
    };
    CartComponent.prototype.ngOnInit = function () {
        this.getCart();
    };
    return CartComponent;
}());
CartComponent = __decorate([
    core_1.Component({
        selector: 'cart',
        moduleId: module.id,
        templateUrl: '../../public/views/dist/partials/cart.html'
    }),
    __metadata("design:paramtypes", [cart_service_1.CartService,
        api_service_1.APIService,
        router_1.Router])
], CartComponent);
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map