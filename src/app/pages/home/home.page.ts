import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';

import { FilterProductModalPage } from '../../modals/filter-product-modal/filter-product-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [ ProductService ]
})
export class HomePage {
  public products: any;

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private productService: ProductService
  ) {}

  ionViewWillEnter() {
    this.products = {};
    this.retrieveProducts();
  }

  onSearchChange(e) {
    let value = e.detail.value;
  
    if (value == '') {
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

  async filterProduct() {
    const modal = await this.modalController.create({
      component: FilterProductModalPage,
    });

    modal.onDidDismiss()
      .then((products_data) => {
        if(products_data.data.filteredProducts) {
          this.products = products_data.data.filteredProducts;
        }
      });
    return await modal.present();
  }
}