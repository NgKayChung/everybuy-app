import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage {
  constructor(private auth: AuthService) {}

  /*
  Stripe payment
  import { Stripe } from '@ionic-native/stripe/ngx';

  constructor(private stripe: Stripe) { }

  ...

  this.stripe.setPublishableKey('my_publishable_key');

  let card = {
  number: '4242424242424242',
  expMonth: 12,
  expYear: 2020,
  cvc: '220'
  }

  this.stripe.createCardToken(card)
    .then(token => console.log(token.id))
    .catch(error => console.error(error));
  */

  ionViewWillEnter() {
    this.auth.isGuest()
      .then((isGuest_bl) => {
        if(isGuest_bl == true) {
          document.getElementById("username-title").innerHTML = "Guest";
        }
        else {
          this.auth.getUsername()
            .then((username_st) => {
              document.getElementById("username-title").innerHTML = username_st;
            })
            .catch((error) => {
              document.getElementById("username-title").innerHTML = error;
            });
        }
      })
      .catch((error) => {
        document.getElementById("username-title").innerHTML = error;
      });
  }

  logout() {
    this.auth.logoutUser();
  }
}