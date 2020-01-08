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

  /**
   * Executes when the modal is opened
   * Retrieves categories available for selection from server
   * Calls ProductService.getProductCategories
   */
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

  /**
   * Select sorting function
   * Executes when user chooses sorting option
   */
  selectSorting(selected_index) {
    // get chose selection element
    let thisSelected_elem = $(`#sort > ion-col > ion-button[data-id="${ selected_index }"]`);

    // if not selected previously
    if(thisSelected_elem.hasClass("selected") == false) {
      // deselect all, change style of the selected element
      $("#sort > ion-col > ion-button").removeClass("selected");
      $("#sort > ion-col > ion-button").attr("color", "light");
      thisSelected_elem.addClass("selected");
      thisSelected_elem.attr("color", "secondary");
    }
    else {
      // deselect all
      $("#sort > ion-col > ion-button").removeClass("selected");
      $("#sort > ion-col > ion-button").attr("color", "light");
    }
  }

  /**
   * Select category function
   * Executes when user chooses category option
   */
  selectCategory(selected_index) {
    // get chose selection element
    let thisSelected_elem = $(`#category > ion-col > ion-button[data-id="${ selected_index }"]`);
    
    // if not selected previously
    if(thisSelected_elem.hasClass("selected") == false) {
      // deselect all, change style of the selected element
      $("#category > ion-col > ion-button").removeClass("selected");
      $("#category > ion-col > ion-button").attr("color", "light");
      thisSelected_elem.addClass("selected");
      thisSelected_elem.attr("color", "secondary");
    }
    else {
      // deselect all
      $("#category > ion-col > ion-button").removeClass("selected");
      $("#category > ion-col > ion-button").attr("color", "light");
    }
  }

  /**
   * Apply filter function
   * Gets all the selection values (sort by, category, minimum price and maximum price)
   * Passes filter values to ProductService.getProductsFilter
   */
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

  /**
   * Clear filter function
   * Deselect all selections and set prices range back to 0.00
   */
  clearFilter() {
    $("#sort > ion-col > ion-button").removeClass("selected");
    $("#sort > ion-col > ion-button").attr("color", "light");
    $("#category > ion-col > ion-button").removeClass("selected");
    $("#category > ion-col > ion-button").attr("color", "light");
    this.minPrice_nm = 0.00;
    this.maxPrice_nm = 0.00;
  }

  /**
   * Dismiss modal function
   * Dismiss modal and send filtered products back to Home page to display
   */
  dismissModal(products?) {
    this.modalCtrl.dismiss({ filteredProducts: products });
  }
}