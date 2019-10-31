import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [ ProductService ]
})
export class HomePage {
  public products: any;
  private offset: number = 0;

  constructor(private authService: AuthService, private productService: ProductService) {
  }

  ionViewWillEnter() {
    this.products = {};
    this.retrieveProducts();
  }

  onSearchChange(e) {
    let value = e.detail.value;
  
    if (value == '') {
      this.offset = 0;
      this.retrieveProducts();
      return;
    }
  
    this.productService.searchProduct(value)
      .then((productsData) => {
        this.products = productsData;
      })
      .catch((error) => {
        this.products = {};
      });
  }

  retrieveProducts() {
    this.productService.load()
      .then((productsData) => {
        this.products = productsData;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}