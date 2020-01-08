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

  /**
   * Login function
   * Executes when User taps Login button
   * Takes username and password and passes to AuthService.loginUser
   * If success
   *    Set session token in local storage and redirect to Home Page
   * Else
   *    Popup an error message
   */
  login() {
    this.auth.loginUser(this.username_st, this.password_st)
      .then((responseData) => {
        // set uid - session token in local storage
        this.storage.set('uid', responseData["uid"]);
        this.storage.set('isguest', false);
        this.navCtrl.navigateRoot("/home");
      })
      .catch((error) => {
        // display error message using SweetAlert plugin
        Swal.fire({
          title: "Error",
          text: error,
          type: "error",
          confirmButtonText: "Dismiss",
          confirmButtonColor: "#b1b1b1"
        });
      });
  }

  /**
   * Guest Login function
   * Executes when User chooses to login as Guest
   * Runs AuthService.loginGuest
   * If success
   *    Set Guest session token in local storage and redirect to Home Page
   * Else
   *    Popup an error message
   */
  guestLogin() {
    this.auth.loginGuest()
      .then((responseData) => {
        // set uid in local storage & isguest to true
        this.storage.set('uid', responseData["uid"]);
        this.storage.set('isguest', true);
        this.navCtrl.navigateRoot("/home");
      })
      .catch((error) => {
        // display error message using SweetAlert plugin
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