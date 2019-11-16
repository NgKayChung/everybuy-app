import { Component, OnInit, Injectable } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

import { OrderService } from '../../services/order.service';

import $ from 'jquery';

@Component({
  selector: 'app-shipping-modal',
  templateUrl: './shipping-modal.page.html',
  styleUrls: ['./shipping-modal.page.scss'],
})
export class ShippingModalPage implements OnInit {
  public selectedShippingId: number;
  public shippingOptions: any;

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private orderService: OrderService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.selectedShippingId = this.navParams.get("selected");
    this.orderService.getShippingOptions()
      .then((shippingOpts_data) => {
        this.shippingOptions = shippingOpts_data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  selectShippingOption(selected_id) {
    this.selectedShippingId = selected_id;
    let thisSelected_elem = $(`ion-item[data-id="${ selected_id }"]`);
    if(thisSelected_elem.hasClass("selected") == false) {
      $("ion-item").removeClass("selected");
      thisSelected_elem.addClass("selected");
    }
  }

  dismissModal() {
    this.modalCtrl.dismiss({ selectedShipping: this.selectedShippingId });
  }
}