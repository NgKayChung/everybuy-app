import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

import { OrderService } from '../../services/order.service';

import { AddDeliveryModalPage } from '../add-delivery-modal/add-delivery-modal.page';

import $ from 'jquery';

@Component({
  selector: 'app-delivery-modal',
  templateUrl: './delivery-modal.page.html',
  styleUrls: ['./delivery-modal.page.scss'],
})
export class DeliveryModalPage implements OnInit {
  public selectedDeliveryId: number;
  public deliveryAddresses: any;

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private orderService: OrderService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.selectedDeliveryId = this.navParams.get("selected");
    this.orderService.getDeliveryAddresses()
      .then((deliveryAddress_data) => {
        this.deliveryAddresses = deliveryAddress_data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  selectDeliveryAddress(selected_id) {
    this.selectedDeliveryId = selected_id;
    let thisSelected_elem = $(`ion-item[data-id="${ selected_id }"]`);
    if(thisSelected_elem.hasClass("selected") == false) {
      $("ion-item").removeClass("selected");
      thisSelected_elem.addClass("selected");
    }
  }

  async presentAddDeliveryModal(deliveryId) {
    const modal = await this.modalCtrl.create({
      component: AddDeliveryModalPage
    });

    modal.onDidDismiss()
      .then(() => {
        this.orderService.getDeliveryAddresses()
          .then((deliveryAddress_data) => {
            this.deliveryAddresses = deliveryAddress_data;
          })
          .catch((error) => {
            console.log(error);
          });
      });
    return await modal.present();
  }

  dismissModal() {
    this.modalCtrl.dismiss({ selectedDelivery: this.selectedDeliveryId });
  }
}