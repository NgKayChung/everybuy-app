import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { AppConfig } from '../app.config';
import { resolve } from 'url';

export interface API_AUTH_RESPONSE {
  code: number;
  message: string;
}

export interface API_LOGIN_AUTH_RESPONSE extends API_AUTH_RESPONSE {
  uid: string;
}

export interface API_ENQUIRY_RESPONSE extends API_AUTH_RESPONSE {
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private USER_LOGIN_API_URL = AppConfig.API_HOST_URL + "/api/users/login";
  private USER_GUEST_LOGIN_API_URL = AppConfig.API_HOST_URL + "/api/users/login/guest";
  private USER_CHECK_USERNAME_API_URL = AppConfig.API_HOST_URL + "/api/users/check";
  private USER_ENQUIRY_API_URL = AppConfig.API_HOST_URL + "/api/users/enquiry";
  private USER_CREATE_API_URL = AppConfig.API_HOST_URL + "/api/users/create";
  
  public isLoggedIn: boolean;
  
  constructor(
    private storage: Storage,
    private navCtrl: NavController,
    private httpClient: HttpClient) {
  }

  loginUser(username_st, password_st) {
    return new Promise((resolve, reject) => {
      let loginData = {
        username: username_st,
        password: password_st
      };

      this.httpClient.post(this.USER_LOGIN_API_URL, loginData)
        .subscribe((response: API_LOGIN_AUTH_RESPONSE) => {
          if(response.code == 20) {
            resolve(response);
          }
          else {
            reject(response.message);
          }
        }, error => {
          reject("Unable to login");
        });
    });
  }

  loginGuest() {
    return new Promise((resolve, reject) => {
      let loginData = {
        username: "Guest",
        password: "guestpassword"
      };
  
      this.httpClient.post(this.USER_GUEST_LOGIN_API_URL, loginData)
        .subscribe((response: API_LOGIN_AUTH_RESPONSE) => {
          if(response.code == 20) {
            resolve(response);
          }
          else {
            reject(response.message);
          }
        }, error => {
          reject("Unable to login");
        });
    });
  }

  registerUser(userData) {
    return new Promise((resolve, reject) => {
      this.httpClient.post(`${ this.USER_CREATE_API_URL }`, userData)
        .subscribe((response: API_LOGIN_AUTH_RESPONSE) => {
          if(response.code == 20) {
            resolve(response);
          }
          else {
            reject(response.message);
          }
        }, error => {
          reject("Unable to register");
        });
    });
  }

  getUsername() : Promise<string> {
    return new Promise((resolve, reject) => {
      this.getUID()
        .then((uid_st) => {
          this.httpClient.post(this.USER_ENQUIRY_API_URL, "", { headers: new HttpHeaders(`Authorization: Bearer ${uid_st}`) })
            .subscribe((response: API_ENQUIRY_RESPONSE) => {
              resolve(response.data.username_st);
            }, error => {
              reject("Unable to load profile");
            });
        })
        .catch((error) => {
          reject("Unable to load profile");
        });
    });
  }

  getUID() {
    return new Promise((resolve, reject) => {
      this.storage.get('uid')
        .then((uid_st) => {
          resolve(uid_st);
        })
        .catch((error) => {
          resolve(error);
        });
    });
  }

  checkLoggedIn() {
    this.storage.get('uid').then((userId) => {
      if(userId != null) {
        // console.log('Logged in', userId);
        this.isLoggedIn = true;
        this.navCtrl.navigateRoot("/home");
      }
      else {
        // console.log('Not logged in');
        this.isLoggedIn = false;
        this.navCtrl.navigateRoot("/login");
      }
    })
    .catch((error) => {
      this.isLoggedIn = false;
      this.navCtrl.navigateRoot("/login");
    });
  }

  isGuest() {
    return new Promise((resolve, reject) => {
      this.storage.get('isguest')
        .then((isGuest_bl) => {
          resolve(isGuest_bl);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  logoutUser() {
    this.storage.remove('uid').then(() => {
      this.isLoggedIn = false;
      this.storage.remove('isguest');
      this.navCtrl.navigateRoot("/login");
    });
  }
}