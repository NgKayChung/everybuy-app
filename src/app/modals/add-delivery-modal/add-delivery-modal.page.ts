import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, NavParams } from '@ionic/angular';

import { OrderService } from '../../services/order.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-delivery-modal',
  templateUrl: './add-delivery-modal.page.html',
  styleUrls: ['./add-delivery-modal.page.scss'],
})
export class AddDeliveryModalPage implements OnInit {
  public receiverName_st: string;
  public receiverPhone_st: string;
  public addressLine1_st: string;
  public addressLine2_st: string;
  public zipcode_st: string;
  public state_st: string;
  public country_st: string;
  public remarks_st: string;

  constructor(
    private modalCtrl: ModalController,
    private toastController: ToastController,
    private navParams: NavParams,
    private orderService: OrderService
  ) { }

  ngOnInit() {
  }

  alertError(message) {
    Swal.fire({
      title: "Error",
      text: message,
      type: "error"
    });
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      cssClass: "toast-style"
    });
    toast.present();
  }

  ionViewWillEnter() {
    this.receiverName_st = "";
    this.receiverPhone_st = "";
    this.addressLine1_st = "";
    this.addressLine2_st = "";
    this.zipcode_st = "";
    this.state_st = "";
    this.country_st = "";
    this.remarks_st = "";
  }

  submitDeliveryAddress() {
    let newDeliv_obj = {
      recName_st: this.receiverName_st.trim(),
      recPhone_st: this.receiverPhone_st.trim(),
      addr1_st: this.addressLine1_st.trim(),
      addr2_st: this.addressLine2_st.trim(),
      zipcode_st: this.zipcode_st.trim(),
      state_st: this.state_st.trim(),
      country_st: this.country_st.trim(),
      remarks_st: this.remarks_st.trim()
    };

    if(newDeliv_obj.recName_st == "") {
      this.alertError("Please enter Name");
      return;
    }

    if(newDeliv_obj.recPhone_st == "") {
      this.alertError("Please enter Phone Number");
      return;
    }

    if(newDeliv_obj.addr1_st == "") {
      this.alertError("Please enter Address 1");
      return;
    }

    if(newDeliv_obj.zipcode_st == "") {
      this.alertError("Please enter Zipcode");
      return;
    }

    if(newDeliv_obj.state_st == "") {
      this.alertError("Please enter State");
      return;
    }

    if(newDeliv_obj.country_st == "") {
      this.alertError("Please enter Country");
      return;
    }

    this.orderService.addDeliveryAddress(newDeliv_obj)
      .then((response) => {
        this.presentToast("Delivery Address Successfully Added");
        this.dismissModal();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  dismissModal() {
    this.modalCtrl.dismiss(true);
  }
}