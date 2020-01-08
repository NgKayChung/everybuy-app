import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';

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
    private productService: ProductService
  ) {}

  ionViewWillEnter() {
    this.products = {};
    this.retrieveProducts();
  }

  /**
   * Search change function
   * This function executes once user makes changes on the text in search bar
   * Calls ProductService.searchProduct for searching products with the search value
   */
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

  /**
   * Retrieve products function
   * Calls ProductService.load to retrieve products from server
   */
  retrieveProducts() {
    this.productService.load()
      .then((productsData) => {
        this.products = productsData;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**
   * Filter product function
   * Open Filter product modal
   */
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