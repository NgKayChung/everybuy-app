import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from './auth.service';

import { AppConfig } from '../app.config';

export interface API_PROFILE_RESPONSE {
  code: number;
  message: string;
}

export interface API_PROFILE_ENQ_RESPONSE extends API_PROFILE_RESPONSE {
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private PROFILE_ENQUIRY_API_URL = AppConfig.API_HOST_URL + "/api/profile/enquiry";
  private PROFILE_EDIT_API_URL = AppConfig.API_HOST_URL + "/api/profile/edit";

  constructor(private auth: AuthService, private httpClient: HttpClient) { }

  // function used to get user profile data
  getUserProfile() {
    return new Promise((resolve, reject) => {
      this.auth.getUID()
        .then((uid_st) => {
          this.httpClient.post(this.PROFILE_ENQUIRY_API_URL, "", { headers: new HttpHeaders(`Authorization: Bearer ${uid_st}`) })
            .subscribe((response: API_PROFILE_ENQ_RESPONSE) => {
              resolve(response.data);
            }, error => {
              reject("Unable to load profile");
            });
        })
        .catch((error) => {
          reject("Unable to load profile");
        });
    });
  }

  // used for updating both profile and password
  updateUserDetails(update_obj) {
    return new Promise((resolve, reject) => {
      this.auth.getUID()
        .then((uid_st) => {
          this.httpClient.post(this.PROFILE_EDIT_API_URL, update_obj, { headers: new HttpHeaders(`Authorization: Bearer ${uid_st}`) })
            .subscribe((response: API_PROFILE_RESPONSE) => {
              if(response.code == 20) {
                resolve(response);
              }
              else {
                reject(response.message);
              }
            }, error => {
              reject("Unable to load profile");
            });
        })
        .catch((error) => {
          reject("Unable to load profile");
        });
    });
  }
}