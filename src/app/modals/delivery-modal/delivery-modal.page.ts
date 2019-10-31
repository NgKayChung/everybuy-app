import { Component, OnInit, Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

import $ from 'jquery';

@Component({
  selector: 'app-delivery-modal',
  templateUrl: './delivery-modal.page.html',
  styleUrls: ['./delivery-modal.page.scss'],
})
export class DeliveryModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  selectDeliveryAddress(selected_id) {
    let thisIcon_elem = $(`ion-item[data-id="${ selected_id }"]`).children("ion-icon");
    if(thisIcon_elem.hasClass("checked")) {
      thisIcon_elem.removeClass("checked");
    }
    else {
      $("ion-item").children("ion-icon").removeClass("checked");
      thisIcon_elem.addClass("checked");
    }
    // var selectedItem = document.querySelectorAll(`ion-item[data-id="${ selected_id }"]`);
    // console.log(selectedItem[0].lastElementChild.classList.toggle("checked"));
  }

  addDeliveryAddress() {
    console.log("add delivery address");
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}