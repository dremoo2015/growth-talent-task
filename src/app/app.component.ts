import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    HeaderComponent,
    HomeComponent,
    CartComponent,
    SingleProductComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'project';
  currentUser: string = 'Ahlam';
}
