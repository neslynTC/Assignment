import { Injectable } from '@angular/core';
import { Product } from '../shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: {[id: number]: Product} = {};
  
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
