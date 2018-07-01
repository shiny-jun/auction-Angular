import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product[];
  private imgurl = 'https://cloud-minapp-15787.cloud.ifanrusercontent.com/1fPkbbvdWHCKDppO.jpeg';

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}


