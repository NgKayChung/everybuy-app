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

  constructor(private navCtrl: NavController, private storage: Storage, private toastController: ToastController, private authService: AuthService) { }

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

  register() {
    let newUser_obj = {
      username_st: this.newUsername_st,
      firstname_st: this.newFirstname_st,
      lastname_st: this.newLastname_st,
      email_st: this.newEmail_st,
      phoneNumber_st: this.newPhoneNumber_st,
      password_st: this.newPassword_st
    };

    if(newUser_obj.username_st == undefined) {
      this.alertError("Please enter username");
      return;
    }
    else {
      newUser_obj.username_st = newUser_obj.username_st.trim();
      if(newUser_obj.username_st.length < 6) {
        this.alertError("Please enter username with at least 6 characters");
        return;
      }
    }

    if(newUser_obj.firstname_st == undefined) {
      this.alertError("Please enter surname");
      return;
    }
    else {
      newUser_obj.firstname_st = newUser_obj.firstname_st.trim();
      if(newUser_obj.firstname_st.length < 1) {
        this.alertError("Please enter surname");
        return;
      }
    }

    if(newUser_obj.lastname_st == undefined) {
      this.alertError("Please enter given name");
      return;
    }
    else {
      newUser_obj.lastname_st = newUser_obj.lastname_st.trim();
      if(newUser_obj.lastname_st.length < 1) {
        this.alertError("Please enter given name");
        return;
      }
    }

    if(newUser_obj.email_st == undefined) {
      this.alertError("Please enter email address");
      return;
    }
    else {
      newUser_obj.email_st = newUser_obj.email_st.trim();
      if(newUser_obj.email_st.length < 1) {
        this.alertError("Please enter email address");
        return;
      }
    }

    if(newUser_obj.phoneNumber_st == undefined) {
      this.alertError("Please enter phone number");
      return;
    }
    else {
      newUser_obj.phoneNumber_st = newUser_obj.phoneNumber_st.trim();
      if(newUser_obj.phoneNumber_st.length < 1) {
        this.alertError("Please enter phone number");
        return;
      }
    }

    if(newUser_obj.password_st == undefined) {
      this.alertError("Please enter password");
      return;
    }
    else {
      if(newUser_obj.password_st.length < 8) {
        this.alertError("Passwords must be at least 8 characters in length");
        return;
      }
    }

    if(this.confirmPassword_st == undefined) {
      this.alertError("Please enter confirmation password");
      return;
    }
    else {
      if(this.confirmPassword_st != newUser_obj.password_st) {
        this.alertError("Confirmation password does not match");
        return;
      }
    }

    if(!this.tncChecked_bl) {
      this.alertError("Please tick/agree to our Terms & Conditions");
      return;
    }
    
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