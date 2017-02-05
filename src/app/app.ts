import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import {enableProdMode} from '@angular/core'; //for production
import { AppModule } from './app.module';

//enableProdMode(); //for production
platformBrowserDynamic().bootstrapModule(AppModule);