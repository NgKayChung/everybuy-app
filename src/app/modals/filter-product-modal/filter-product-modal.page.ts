import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ProductService } from '../../services/product.service';

import $ from 'jquery';

@Component({
  selector: 'app-filter-product-modal',
  templateUrl: './filter-product-modal.page.html',
  styleUrls: ['./filter-product-modal.page.scss'],
})
export class FilterProductModalPage implements OnInit {
  public productCategories: any;
  public minPrice_nm: number;
  public maxPrice_nm: number;

  constructor(
    private modalCtrl: ModalController,
    private productService: ProductService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.minPrice_nm = 0.00;
    this.maxPrice_nm = 0.00;
    this.productService.getProductCategories()
      .then((categories_data) => {
        this.productCategories = categories_data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  selectSorting(selected_index) {
    let thisSelected_elem = $(`#sort > ion-col > ion-button[data-id="${ selected_index }"]`);

    if(thisSelected_elem.hasClass("selected") == false) {
      $("#sort > ion-col > ion-button").removeClass("selected");
      $("#sort > ion-col > ion-button").attr("color", "light");
      thisSelected_elem.addClass("selected");
      thisSelected_elem.attr("color", "secondary");
    }
    else {
      $("#sort > ion-col > ion-button").removeClass("selected");
      $("#sort > ion-col > ion-button").attr("color", "light");
    }
  }

  selectCategory(selected_index) {
    let thisSelected_elem = $(`#category > ion-col > ion-button[data-id="${ selected_index }"]`);
    
    if(thisSelected_elem.hasClass("selected") == false) {
      $("#category > ion-col > ion-button").removeClass("selected");
      $("#category > ion-col > ion-button").attr("color", "light");
      thisSelected_elem.addClass("selected");
      thisSelected_elem.attr("color", "secondary");
    }
    else {
      $("#category > ion-col > ion-button").removeClass("selected");
      $("#category > ion-col > ion-button").attr("color", "light");
    }
  }

  applyFilter() {
    let sortVal_st = $("#sort > ion-col > ion-button.selected").attr("data-value");
    let catVal_st = $("#category > ion-col > ion-button.selected").attr("data-value");

    this.productService.getProductsFilter(sortVal_st, catVal_st, this.minPrice_nm, this.maxPrice_nm)
      .then((products_data) => {
        this.dismissModal(products_data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  clearFilter() {
    $("#sort > ion-col > ion-button").removeClass("selected");
    $("#sort > ion-col > ion-button").attr("color", "light");
    $("#category > ion-col > ion-button").removeClass("selected");
    $("#category > ion-col > ion-button").attr("color", "light");
    this.minPrice_nm = 0.00;
    this.maxPrice_nm = 0.00;
  }

  dismissModal(products?) {
    this.modalCtrl.dismiss({ filteredProducts: products });
  }
}