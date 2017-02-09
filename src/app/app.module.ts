import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { ToasterModule, ToasterService } from 'angular2-toaster';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';

import { ProductService } from './product/product.service';
import { CartService }  from './cart/cart.service';
import { APIService } from './api/api.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ToasterModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent, ProductComponent, CartComponent ],
  providers:    [ ProductService, CartService, APIService, ToasterService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }