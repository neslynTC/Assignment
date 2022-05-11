import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Product } from '../shared/product.model';
import { Store } from '@ngrx/store';
import { Products } from './product.state';
import { ActionSetProducts } from './product.action';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products$: Observable<Product[]>;
  products: Product[] = [];
  product: Product;
  constructor(private http: HttpClient,  private store: Store<Products>) { }

  getProduct = (id) => {
    return this.products.find(product => product.id == Number(id))
  }

  async getProducts() {
    if (this.products.length){
      return this.products
    }
    var response = await this.http.get("https://api.tendercuts.in/catalog/product/?store_id=11").toPromise();
    if (Object.keys(response).length > 1) {
      if (response[1]['products']) {
        let list = response[1]['products'];
        if (list.length >= 1) {
          Object.keys(list).forEach(key => {
            let listItem = list[key]
            this.products.push(new Product(Number(key), listItem['thumb'], listItem['name'], listItem['pieces'] ? listItem['pieces'] + " Pieces" : "", `${listItem["weight_from"]} ${listItem['weight_to'] != listItem['weight_from'] ? ' - ' + listItem['weight_to'] : ""} ${listItem['weight_label'] ? listItem['weight_label'] : ""} `, Number(listItem['price']), 0, listItem['short_description']))
          })
        }
      }
    }
    this.store.dispatch(new ActionSetProducts(this.products))
    return this.products
  }
}
