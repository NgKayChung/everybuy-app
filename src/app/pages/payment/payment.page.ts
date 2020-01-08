import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras } from "@angular/router";

import $ from 'jquery';

import { OrderService } from '../../services/order.service';
import { NfcService } from '../../services/nfc.service';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  public orderId: string;
  public checkoutProductId: string;
  public amountPayable_nm: number;
  public cardNumber_st: string;
  public expMonth_st: string;
  public expYear_st: string;
  public cvc_st: string;
  public nfcAccepted_bool: boolean;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private nfcService: NfcService,
    private paymentService: PaymentService
  ) { }

  ngOnInit() {
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Processing Payment'
    });
    await loading.present();
  }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      cssClass: "toast-style"
    });
    toast.present();
  }

  ionViewWillEnter() {
    // initialize input fields
    this.cardNumber_st = "";
    this.expMonth_st = "";
    this.expYear_st = "";
    this.cvc_st = "";

    this.route.queryParams.subscribe(params => {
      this.orderId = params["order_id"];
      this.orderService.getOrderDetails(this.orderId)
        .then((data) => {
          this.checkoutProductId = data['product_id'];
          this.amountPayable_nm = data['total_amount_nm'];
        })
        .catch((error) => {
          this.presentToast(error);
        });
    });

    this.nfcService.isEnabled()
      .then((enabled: boolean) => {
        this.nfcAccepted_bool = enabled;
      });
  }

  NFCScan() {
    $('.nfc-overlay').removeClass('hidden');
    this.nfcService.read()
      .then((card_obj) => {
        this.closeNFC();

        // assign card details
        this.cardNumber_st = card_obj["cardNumber"];
        this.expMonth_st = card_obj["expMonth"];
        this.expYear_st = (2000 + parseInt(card_obj["expYear"])).toString();
        
        // prompt for CVC
        this.cvc_st = prompt("Please fill in the card CVC");        
      })
      .catch((error) => {
        this.presentToast(error);
      });
  }

  closeNFC() {
    // hide overlay
    $('.nfc-overlay').addClass('hidden');
    this.nfcService.close();
  }

  /**
   * Executes when user submits payment
   * A card object is created to pass to PaymentService
   * Calls PaymentService.makePayment to process payment through
   * Stripe payment gateway
   */
  processPayment() {
    this.presentLoading();
    
    let card_obj = {
      number: this.cardNumber_st,
      expMonth: parseInt(this.expMonth_st),
      expYear: parseInt(this.expYear_st),
      cvc: this.cvc_st
    };

    this.paymentService.makePayment(this.orderId, card_obj)
      .then(() => {
        this.loadingCtrl.dismiss();
        this.presentToast("Payment Successful!");
        let navigationExtras: NavigationExtras = {
          queryParams: {
              order_id: this.orderId
          }
        };
        this.navCtrl.navigateForward('/payment/payment-complete', navigationExtras);
      })
      .catch((error) => {
        setTimeout(() => {
          this.loadingCtrl.dismiss();
        }, 2000);
        this.presentToast(error);
      });
  }
}