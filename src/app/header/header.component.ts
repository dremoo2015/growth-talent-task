import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { CartService } from '../services/Cart/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private CartServices: CartService) {}
  getTotalPrice(): number {
    return this.CartServices.getTotalPrice();
  }
  getTotalCartItems(): number {
    return this.CartServices.getTotalCartItems();
  }
}
