import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public newUsername_st: string;
  public newFirstname_st: string;
  public newLastname_st: string;
  public newEmail_st: string;
  public newPhoneNumber_st: string;
  public newPassword_st: string;
  public confirmPassword_st: string;
  public tncChecked_bl: boolean;

  constructor(
    private navCtrl: NavController,
    private storage: Storage,
    private toastController: ToastController,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
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

  /**
   * Register function
   * Executes when User taps Register button
   * Validates all input fields, creates a User object which consists
   * of all input data
   * Sends the User object to AuthService.registerUser
   * If success
   *    Automatic login for user and display registration successful message
   * Else
   *    Popup an error message
   */
  register() {
    let newUser_obj = {
      username_st: this.newUsername_st,
      firstname_st: this.newFirstname_st,
      lastname_st: this.newLastname_st,
      email_st: this.newEmail_st,
      phoneNumber_st: this.newPhoneNumber_st,
      password_st: this.newPassword_st
    };

    // if username_st is empty
    if(newUser_obj.username_st == undefined) {
      this.alertError("Please enter username");
      return;
    }
    else {
      // removes whitespace from the beginning and end of the username_st string
      newUser_obj.username_st = newUser_obj.username_st.trim();

      // check username_st is less than 6 characters
      if(newUser_obj.username_st.length < 6) {
        this.alertError("Please enter username with at least 6 characters");
        return;
      }
    }

    // if firstname_st is empty
    if(newUser_obj.firstname_st == undefined) {
      this.alertError("Please enter surname");
      return;
    }
    else {
      // removes whitespace from the beginning and end of the firstname_st string
      newUser_obj.firstname_st = newUser_obj.firstname_st.trim();

      // check firstname_st is less than 1 characters
      if(newUser_obj.firstname_st.length < 1) {
        this.alertError("Please enter surname");
        return;
      }
    }

    // if lastname_st is empty
    if(newUser_obj.lastname_st == undefined) {
      this.alertError("Please enter given name");
      return;
    }
    else {
      // removes whitespace from the beginning and end of the lastname_st string
      newUser_obj.lastname_st = newUser_obj.lastname_st.trim();

      // check lastname_st is less than 1 characters
      if(newUser_obj.lastname_st.length < 1) {
        this.alertError("Please enter given name");
        return;
      }
    }
    
    // if email_st is empty
    if(newUser_obj.email_st == undefined) {
      this.alertError("Please enter email address");
      return;
    }
    else {
      // removes whitespace from the beginning and end of the email_st string
      newUser_obj.email_st = newUser_obj.email_st.trim();

      // check email_st is less than 1 characters
      if(newUser_obj.email_st.length < 1) {
        this.alertError("Please enter email address");
        return;
      }
    }

    // if phoneNumber_st is empty
    if(newUser_obj.phoneNumber_st == undefined) {
      this.alertError("Please enter phone number");
      return;
    }
    else {
      // removes whitespace from the beginning and end of the phoneNumber_st string
      newUser_obj.phoneNumber_st = newUser_obj.phoneNumber_st.trim();

      // check phoneNumber_st is less than 1 characters
      if(newUser_obj.phoneNumber_st.length < 1) {
        this.alertError("Please enter phone number");
        return;
      }
    }

    // if password_st is empty
    if(newUser_obj.password_st == undefined) {
      this.alertError("Please enter password");
      return;
    }
    else {
      // check password_st is less than 8 characters
      if(newUser_obj.password_st.length < 8) {
        this.alertError("Passwords must be at least 8 characters in length");
        return;
      }
    }
    
    // if confirmPassword_st is empty
    if(this.confirmPassword_st == undefined) {
      this.alertError("Please enter confirmation password");
      return;
    }
    else {
      // if passwords not match
      if(this.confirmPassword_st != newUser_obj.password_st) {
        this.alertError("Confirmation password does not match");
        return;
      }
    }
    
    // if T&C checkbox is not checked
    if(!this.tncChecked_bl) {
      this.alertError("Please tick/agree to our Terms & Conditions");
      return;
    }
    
    // executes AuthService.registerUser for registration
    this.authService.registerUser(newUser_obj)
      .then((response) => {
        this.authService.loginUser(newUser_obj.username_st, newUser_obj.password_st)
          .then((responseData) => {
            if(responseData["code"] == 20) {
              this.storage.set('uid', responseData["uid"]);
              this.storage.set('isguest', false);
              this.presentToast("Registration was successful!");
              this.navCtrl.navigateRoot("/home");
            }
            else {
              this.presentToast("Kindly proceed to login");
              this.navCtrl.navigateRoot("/login");
            }
          })
          .catch((error) => {
            this.alertError(error);
            return;
          });
      })
      .catch((error) => {
        this.alertError(error);
        return;
      })
  }
}