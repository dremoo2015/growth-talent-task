import { Injectable } from '@angular/core';

import { Product } from '../../shared/models/Product';
import CartItem from '../../shared/models/CartItem';
import { Cart } from '../../shared/models/Cart';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private Cart: Cart = new Cart();

  constructor() {}
  addtoCart(product: Product): void {
    this.Cart.items.push(new CartItem(product));
    console.log(this.Cart);
  }
  removeItem(product: Product): void {
    this.Cart.items.splice(
      this.Cart.items.findIndex((item) => item.product.id === product.id),
      1
    );
  }
  getCart(): Cart {
    return this.Cart;
  }
  getTotalPrice(): number {
    return this.Cart.totalPrice;
  }
  increaseItemQuantity(item: CartItem): void {
    item.increaseQuantity();
  }

  decreaseItemQuantity(item: CartItem): void {
    item.decreaseQuantity();
  }
  getItemTotalPrice(item: CartItem): number {
    return item.price;
  }
  getTotalCartItems(): number {
    return this.Cart.items.length;
  }
}
