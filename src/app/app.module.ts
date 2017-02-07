import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';

import { ProductComponent }   from './product/product.component';
import { ProductService }     from './product/product.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent, ProductComponent ],
  providers:    [ ProductService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }