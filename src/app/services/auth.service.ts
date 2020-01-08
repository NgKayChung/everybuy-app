import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { AppConfig } from '../app.config';

export interface API_AUTH_RESPONSE {
  code: number;
  message: string;
}

export interface API_AUTH_DATA_RESPONSE extends API_AUTH_RESPONSE {
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
  private USER_CREATE_API_URL = AppConfig.API_HOST_URL + "/api/users/create";
  
  public isLoggedIn: boolean;
  
  constructor(
    private storage: Storage,
    private navCtrl: NavController,
    private httpClient: HttpClient) {
  }

  /**
   * Login user function
   * Sends login parameters to server for login
   * @param username_st 
   * @param password_st
   */
  loginUser(username_st, password_st) {
    return new Promise((resolve, reject) => {
      let loginData = {
        username: username_st,
        password: password_st
      };

      this.httpClient.post(this.USER_LOGIN_API_URL, loginData)
        .subscribe((response: API_AUTH_DATA_RESPONSE) => {
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
        .subscribe((response: API_AUTH_DATA_RESPONSE) => {
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

  /**
   * Login user function
   * Sends login parameters to server for login
   * @param userData
   * userData includes all the registration details which
   * required for account creation
   */
  registerUser(userData) {
    return new Promise((resolve, reject) => {
      this.httpClient.post(`${ this.USER_CREATE_API_URL }`, userData)
        .subscribe((response: API_AUTH_DATA_RESPONSE) => {
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

  /**
   * Function to get User login token from local storage
   */
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

  /**
   * Function to check is User already logged in to system by retrieving
   * login token from local storage
   */
  checkLoggedIn() {
    this.storage.get('uid').then((userId) => {
      if(userId != null) {
        this.isLoggedIn = true;
        this.navCtrl.navigateRoot("/home");
      }
      else {
        this.isLoggedIn = false;
        this.navCtrl.navigateRoot("/login");
      }
    })
    .catch((error) => {
      this.isLoggedIn = false;
      this.navCtrl.navigateRoot("/login");
    });
  }

  /**
   * Check if User is logged in as Guest
   */
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

  /**
   * Logout User from system
   * Removes login session token and isguest for indicating User is Guest
   */
  logoutUser() {
    this.storage.remove('uid').then(() => {
      this.isLoggedIn = false;
      this.storage.remove('isguest');
      this.navCtrl.navigateRoot("/login");
    });
  }
}