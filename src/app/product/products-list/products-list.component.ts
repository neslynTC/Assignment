import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from '../product.service';
import { Products } from '../product.state';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  
  products$: Observable<Product[]>;

  constructor(private productService: ProductService, private store: Store<Products>) { }

  ngOnInit() {
    this.products$ = this.store.select(store=>store.products);
  }

}
