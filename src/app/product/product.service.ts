import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../shared/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];
  constructor(private http: HttpClient) { }

  getProducts = () => {
    this.http.get("https://api.tendercuts.in/catalog/product/?store_id=11").subscribe(response => {
      if (Object.keys(response).length > 1){
        if(response[1]['products']){
          let list = response[1]['products'];
          if (list.length >= 1){
            console.log(list)
            Object.keys(list).forEach(key=>{
              let listItem = list[key]
              this.products.push(new Product(Number(key), listItem['thumb'], listItem['name'], listItem['pieces'] ? listItem['pieces'] + " Pieces" : "", `${listItem["weight_from"]} ${listItem['weight_to'] != listItem['weight_from'] ? ' - ' + listItem['weight_to'] : ""} ${listItem['weight_label'] ? listItem['weight_label'] : ""} `,  Number(listItem['price']), 0))
            })
          }
        }
      }
      return this.products
    })
  }

}
