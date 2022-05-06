import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartEmpty: boolean
  cartList: Product[] = []
  total: number
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.updateCart()
  }

  updateCart = () => {
    let keys = Object.keys(this.cartService.cartItems)
    this.cartList = []
    this.total = 0
    keys.forEach((key)=>{
      let item = this.cartService.cartItems[key]
      this.cartList.push(item)
      this.total += item.price * item.count
    })
    this.cartEmpty = this.cartList.length > 0 ? false : true
  }
}
