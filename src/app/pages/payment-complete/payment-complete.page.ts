import { Component, OnInit } from '@angular/core';

import { NavController, IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-payment-complete',
  templateUrl: './payment-complete.page.html',
  styleUrls: ['./payment-complete.page.scss'],
})
export class PaymentCompletePage implements OnInit {
  public receiptURL: string;
  public orderID: string;
  public orderTime: string;
  public totalAmount_nm: number;
  public cardNo_st: string;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.receiptURL = "https://pay.stripe.com/receipts/acct_1FO1uAKKU5hK9fS0/ch_1FfMQjKKU5hK9fS0Ftt4oNIo/rcpt_GBju5OA7YtrgBdVeJaaVHclvtcQyzbG";
    this.orderID = "T20191101-000001";
    this.orderTime = "01/11/2019 10:51pm";
    this.totalAmount_nm = 15.90;
    this.cardNo_st = "4242";
  }

  viewReceipt() {
    console.log("view receipt in browser/in-app");
  }

  doneBackToHome() {
    this.navCtrl.navigateRoot("/home");
  }
}