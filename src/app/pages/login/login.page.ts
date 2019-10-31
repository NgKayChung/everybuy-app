import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public username_st: string;
  public password_st: string;

  constructor(
    private navCtrl: NavController,
    private storage: Storage,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.username_st = "";
    this.password_st = "";
  }

  login() {
    this.auth.loginUser(this.username_st, this.password_st)
      .then((responseData) => {
        this.storage.set('uid', responseData["uid"]);
        this.storage.set('isguest', false);
        this.navCtrl.navigateRoot("/home");
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: error,
          type: "error",
          confirmButtonText: "Dismiss",
          confirmButtonColor: "#b1b1b1"
        });
      });
  }

  guestLogin() {
    this.auth.loginGuest()
      .then((responseData) => {
        this.storage.set('uid', responseData["uid"]);
        this.storage.set('isguest', true);
        this.navCtrl.navigateRoot("/home");
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: error,
          type: "error",
          confirmButtonText: "Dismiss",
          confirmButtonColor: "#b1b1b1"
        });
      });
  }
}