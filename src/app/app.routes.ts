import { Routes } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'single-product/:id', component: SingleProductComponent },
];
