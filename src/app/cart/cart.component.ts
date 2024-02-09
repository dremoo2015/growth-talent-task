import { Component } from '@angular/core';
import { ProductsService } from '../services/products/products.service';
import { Product } from '../shared/models/Product';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/Cart/cart.service';
import CartItem from '../shared/models/CartItem';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  productId: any;
  product: any;
  products: Product[] = [];
  Cart!: Cart;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private CartServices: CartService,
    private router: Router
  ) {
    this.productsService.getAllProducts().then((productsList: Product[]) => {
      this.products = productsList;
    });
    this.productsService
      .getProductById(this.productId)
      .then((product: Product) => {
        this.product = product;
      });
    this.setCart();
  }
  removeItem(item: Product) {
    this.CartServices.removeItem(item);
  }
  setCart() {
    this.Cart = this.CartServices.getCart();
  }
  increaseQuantity(item: CartItem): void {
    this.CartServices.increaseItemQuantity(item);
  }

  decreaseQuantity(item: CartItem): void {
    this.CartServices.decreaseItemQuantity(item);
  }
  getTotalPrice(): number {
    return this.CartServices.getTotalPrice();
  }
  getItemTotalPrice(item: CartItem): number {
    return this.CartServices.getItemTotalPrice(item);
  }
  navigateToCheckout(): void {
    this.router.navigate(['/checkout']);
  }
}
