import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../services/products/products.service';
import { Product } from '../shared/models/Product';
import { Brand } from '../shared/models/brand';
import { CartService } from '../services/Cart/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  products: Product[] = [];
  brands: Brand[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private CartService: CartService
  ) {
    this.productsService.getAllProducts().then((productsList: Product[]) => {
      this.products = productsList;
    });
  }
  addCartItem(item: Product) {
    console.log(item);
    this.CartService.addtoCart(item);
  }
}
