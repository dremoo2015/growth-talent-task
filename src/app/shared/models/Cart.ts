import cartItem from "./CartItem";
export class Cart {
  items: cartItem[] = [];
  get totalPrice(): number {
    let totalPrice = 0;
    this.items.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  }
}
