import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productsApiurl = 'http://localhost:3000/products';
  constructor() {}

  // CRUD: Create - Read - Update - Delete
  //Get All Products (Read)
  async getAllProducts(): Promise<Product[]> {
    const data = await fetch(this.productsApiurl);
    return (await data.json()) ?? [];
  }

  async getProductById(id: number): Promise<Product> {
    const data = await fetch(`${this.productsApiurl}`);
    const products = await data.json();
    const product = await products.find((p:any) => p.id == id);
    return product ?? {};
  }
}
