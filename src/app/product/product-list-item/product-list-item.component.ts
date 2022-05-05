import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
  count: number
  id: number
  img: string
  title: string
  description: string
  weight: string
  price: number
  @Input() product: Product
  constructor(private cartService: CartService) { 
  }

  ngOnInit() {
    this.id = this.product.id
    this.img = this.product.img
    this.title = this.product.title
    this.description = this.product.description
    this.weight = this.product.weight
    this.price = this.product.price
    this.count = this.product.count
  }

  onAddItem = () => {
    this.count += 1
    this.product.count = this.count
    this.cartService.addItemToCart(this.product)
    return this.count
  }

  onRemoveItem = () => {
    if (this.count > 0)
      this.count -= 1
    else
      this.count = 0
    this.product.count = this.count
    this.cartService.removeItemFromCart(this.product)
    return this.count
  }

}
