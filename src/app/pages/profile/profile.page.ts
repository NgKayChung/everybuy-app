import { Component } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../../services/profile.service';

import * as moment from 'moment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage {
  public firstName_st: string;
  public lastName_st: string;
  public username_st: string;
  public emailAddress_st: string;
  public phoneNumber_st: string;
  public gender_st: string;
  public birthdate_st: string;

  public oldPassword_st: string;
  public newPassword_st: string;
  public confirmPassword_st: string;

  constructor(private loadingController: LoadingController, private toastCtrl: ToastController, private auth: AuthService, private profileService: ProfileService) {}

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading'
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

  alertError(message) {
    Swal.fire({
      title: "Error",
      text: message,
      type: "error"
    });
  }

  initProfile() {
    this.profileService.getUserProfile()
      .then((user_data) => {
        this.firstName_st = user_data["firstname_st"];
        this.lastName_st = user_data["lastname_st"];
        this.username_st = user_data["username_st"];
        this.emailAddress_st = user_data["email_st"];
        this.phoneNumber_st = user_data["phone_number_st"];
        this.gender_st = user_data["gender_st"] || "N";
        this.birthdate_st =  user_data["birthdate_st"];
      })
      .catch((error) => {
        this.presentToast(error);
      });
  }

  initPassword() {
    this.oldPassword_st = "";
    this.newPassword_st = "";
    this.confirmPassword_st = "";
  }

  ionViewWillEnter() {
    this.initProfile();
    this.initPassword();
  }

  updateProfile() {
    let editUser_obj = {
      username_st: this.username_st,
      firstname_st: this.firstName_st,
      lastname_st: this.lastName_st,
      email_st: this.emailAddress_st,
      phoneNumber_st: this.phoneNumber_st,
      gender_st: this.gender_st,
      birthdate_st: this.birthdate_st,
      action: "profile"
    };

    if(editUser_obj.firstname_st == "") {
      this.alertError("Please enter firstname");
      return;
    }
    else {
      editUser_obj.firstname_st = editUser_obj.firstname_st.trim();
      if(editUser_obj.firstname_st.length < 1) {
        this.alertError("Please enter firstname");
        return;
      }
    }

    if(editUser_obj.lastname_st == "") {
      this.alertError("Please enter lastname");
      return;
    }
    else {
      editUser_obj.lastname_st = editUser_obj.lastname_st.trim();
      if(editUser_obj.lastname_st.length < 1) {
        this.alertError("Please enter lastname");
        return;
      }
    }

    if(editUser_obj.email_st == undefined) {
      this.alertError("Please enter email address");
      return;
    }
    else {
      editUser_obj.email_st = editUser_obj.email_st.trim();
      if(editUser_obj.email_st.length < 1) {
        this.alertError("Please enter email address");
        return;
      }
    }

    if(editUser_obj.phoneNumber_st == undefined) {
      this.alertError("Please enter phone number");
      return;
    }
    else {
      editUser_obj.phoneNumber_st = editUser_obj.phoneNumber_st.trim();
      if(editUser_obj.phoneNumber_st.length < 1) {
        this.alertError("Please enter phone number");
        return;
      }
    }

    if(editUser_obj.birthdate_st !== null) {
      editUser_obj.birthdate_st = moment(new Date(editUser_obj.birthdate_st)).format('YYYY-MM-DD');
    }

    this.presentLoading();

    setTimeout(() => {
      this.profileService.updateUserDetails(editUser_obj)
        .then((result) => {
          this.loadingController.dismiss();
          this.initProfile();
          this.presentToast("Profile is updated");
        })
        .catch((error) => {
          this.loadingController.dismiss();
          this.alertError(error);
        });
    }, 1000);

  }

  updatePassword() {
    if(this.oldPassword_st == "") {
      this.alertError("Please enter old password");
      return;
    }

    if(this.newPassword_st == "") {
      this.alertError("Please enter new password");
      return;
    }

    if(this.newPassword_st != this.confirmPassword_st) {
      this.alertError("Confirm password does not match with new password");
      return;
    }

    this.presentLoading();

    let userPassword_obj = {
      username_st: this.username_st,
      oldPassword_st: this.oldPassword_st,
      newPassword_st: this.newPassword_st,
      action: "password"
    };

    setTimeout(() => {
      this.profileService.updateUserDetails(userPassword_obj)
        .then((result) => {
          this.loadingController.dismiss();
          this.initPassword();
          this.presentToast("Password is updated");
        })
        .catch((error) => {
          this.loadingController.dismiss();
          this.alertError(error);
        });
    }, 1000);
  }
}