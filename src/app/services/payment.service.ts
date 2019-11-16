import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Stripe } from '@ionic-native/stripe/ngx';

import { AppConfig } from '../app.config';
import { AuthService } from './auth.service';

export interface API_PAYMENT_DATA_RESPONSE {
  code: number;
  message: string;
  data: Object;
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private BASE_PAYMENT_API_URL = AppConfig.API_HOST_URL + "/api/payment";

  constructor(private httpClient: HttpClient, private stripe: Stripe, private auth: AuthService) { }

  makePayment(orderId, userCard_obj) {
    return new Promise((resolve, reject) => {
      this.auth.getUID()
        .then((uid_st) => {
          this.stripe.setPublishableKey('pk_test_HKC3vn1hzDGig9R73CBFs36A00eAwQClZm');

          let card_obj = {
            number: '4242424242424242',
            expMonth: 12,
            expYear: 2020,
            cvc: '220'
          };

          this.stripe.createCardToken(card_obj)
            .then((token) => {
              console.log(token.id);
              let body = {
                "orderId": orderId,
                "tokenId": token.id
              };
              this.httpClient.post(this.BASE_PAYMENT_API_URL, body, { headers: new HttpHeaders(`Authorization: Bearer ${ uid_st }`) })
                .subscribe((response: API_PAYMENT_DATA_RESPONSE) => {
                  if(response.code == 20) {
                    resolve();
                  }
                  else {
                    reject(response.message);
                  }
                }, (error) => {
                  reject(error);
                });
            })
            .catch((error) => {
              reject(error);
            });
        })
        .catch((error) => {
          reject("Unable to get data");
        });
    });
  }
}