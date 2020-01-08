import { Component, OnInit } from '@angular/core';
import { NavController, IonDatetime } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import * as moment from 'moment';

import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-payment-complete',
  templateUrl: './payment-complete.page.html',
  styleUrls: ['./payment-complete.page.scss'],
})
export class PaymentCompletePage implements OnInit {
  public receiptURL_st: string;
  public orderID: string;
  public orderTime_st: string;
  public totalAmount_nm: number;
  public cardNo_st: string;

  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private iab: InAppBrowser,
    private orderService: OrderService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.orderID = params["order_id"];
      this.orderService.getOrderDetails(this.orderID)
        .then((data) => {
          this.orderTime_st = (data["payment_time"] == null ? "-" : moment(new Date(data["payment_time"])).format("DD/MM/YYYY hh:mma"));
          this.totalAmount_nm = data["total_amount_nm"];
          this.cardNo_st = (data["last4_card_no_st"] == null ? "-" : "xxxxxxxxxxxx" + data["last4_card_no_st"]);
          this.receiptURL_st = data["receipt_url_st"];
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  viewReceipt() {
    if(this.receiptURL_st && this.receiptURL_st != null) {
      this.iab.create(this.receiptURL_st);
    }
  }

  doneBackToHome() {
    this.navCtrl.navigateRoot("/home");
  }
}