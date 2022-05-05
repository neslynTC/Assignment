import { Injectable } from '@angular/core';
import { Product } from '../shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: {[id: number]: Product} = {
    1: new Product(4, "https://assets.tendercuts.in/product/C/H/ea6fd0d8-8b05-4d97-9770-81522de0e43e.webp", "Minced Chicken", "Whole chicken deboned minced", "480 - 500 Gms", 239, 2)
  };
  constructor() { }
  addItemToCart = (product: Product) => {
    this.cartItems[product.id] = product
    return this.cartItems[product.id]
  }
  removeItemFromCart = (product: Product) => {
    if (product.count == 0) {
      delete this.cartItems[product.id]
    } else {
      this.cartItems[product.id] = product
    }
  }
}
