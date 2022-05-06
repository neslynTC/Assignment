import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: number
  product: Product
  productFound: boolean
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit () {
    this.id = this.route.snapshot.params['id']
    this.product = this.productService.getProduct(this.id)
    if (this.product){
      this.productFound = true
    } else {
      this.productFound = false
      this.router.navigate(["/404/ProductNotFound"])
    }
  }

}
