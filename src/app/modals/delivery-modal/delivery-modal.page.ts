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

  /**
   * Get selected (delivery ID) from page parameters
   * Set the selected delivery address to the respective ID
   */
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

  /**
   * Executes when user ticks a delivery address selection
   * Set tick icon to the selected delivery address
   */
  selectDeliveryAddress(selected_id) {
    this.selectedDeliveryId = selected_id;
    let thisSelected_elem = $(`ion-item[data-id="${ selected_id }"]`);
    if(thisSelected_elem.hasClass("selected") == false) {
      $("ion-item").removeClass("selected");
      thisSelected_elem.addClass("selected");
    }
  }

  /**
   * Displays add delivery address modal
   * Allows user to add new delivery address
   */
  async presentAddDeliveryModal() {
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

  /**
   * Close modal and returns the selected delivery address ID
   */
  dismissModal() {
    this.modalCtrl.dismiss({ selectedDelivery: this.selectedDeliveryId });
  }
}