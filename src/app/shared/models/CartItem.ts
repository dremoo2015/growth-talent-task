import { Product } from './Product';

export default class CartItem {
  id!: number;
  product!: Product;
  quantity: number = 1;

  constructor(product: Product) {
    this.product = product;
    this.price;
  }
  get price(): number {
    return this.product.price * this.quantity;
  }
  increaseQuantity(): void {
    this.quantity++;
    console.log(
      `Quantity increased for ${this.product.title}. New quantity: ${this.quantity}`
    );
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
      console.log(
        `Quantity decreased for ${this.product.title}. New quantity: ${this.quantity}`
      );
    } else {
      console.log(`Quantity cannot be less than 1 for ${this.product.title}`);
    }
  }
}
