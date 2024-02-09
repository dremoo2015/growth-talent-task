import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../services/products/products.service';
import { Product } from '../shared/models/Product';
import { CartService } from '../services/Cart/cart.service';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css',
})
export class SingleProductComponent {
  products: Product[] = [];
  product: any;
  productId: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private CartService: CartService
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.productId = params.get('id');
    });
    this.productsService.getAllProducts().then((productsList: Product[]) => {
      this.products = productsList;
    });
    this.productsService
      .getProductById(this.productId)
      .then((product: Product) => {
        this.product = product;
      });
    }
    addCartItem(item: Product) {
      this.CartService.addtoCart(item);
    }
}
