import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppConfig } from '../app.config';
import { AuthService } from './auth.service';

export interface API_PRODUCT_RESPONSE {
  code: number;
  message: string;
  data: Object;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private PRODUCT_BASE_API_URL = AppConfig.API_HOST_URL + "/api/products";
  private PRODUCT_DETAILS_API_URL = this.PRODUCT_BASE_API_URL + "/details";
  private PRODUCT_GET_CATEGORY_API_URL = this.PRODUCT_BASE_API_URL + "/category";
  private PRODUCT_FILTER_API_URL = this.PRODUCT_BASE_API_URL + "/filter";

  constructor(private httpClient: HttpClient, private auth: AuthService) { }

  load() {
    return new Promise((resolve, reject) => {
      this.auth.getUID()
        .then((uid_st) => {
          this.httpClient.post(this.PRODUCT_BASE_API_URL, "", { headers: new HttpHeaders(`Authorization: Bearer ${ uid_st }`) })
            .subscribe((response: API_PRODUCT_RESPONSE) => {
              if(response.code == 20) {
                resolve(response.data);
              }
              else {
                reject(response.message);
              }
            }, error => {
              reject("Error in getting products");
            });
        })
        .catch((error) => {
          reject("Unable to load profile");
        });
    });
  }
  
  getProductCategories() {
    return new Promise((resolve, reject) => {
      this.auth.getUID()
        .then((uid_st) => {
          this.httpClient.post(`${ this.PRODUCT_GET_CATEGORY_API_URL }`, "", { headers: new HttpHeaders(`Authorization: Bearer ${ uid_st }`) })
          .subscribe((response: API_PRODUCT_RESPONSE) => {
            if(response.code == 20) {
              resolve(response.data);
            }
            else {
              reject(response.message);
            }
          }, error => {
            reject("Error in getting product categories");
          });
        })
        .catch((error) => {
          reject("Unable to load profile");
        });
    });
  }

  getProductsFilter(sortType, category, minPriceRange, maxPriceRange) {
    return new Promise((resolve, reject) => {
      this.auth.getUID()
        .then((uid_st) => {
          let body = {
            sort_type: sortType,
            category: category,
            min_price: minPriceRange,
            max_price: maxPriceRange
          };

          this.httpClient.post(`${ this.PRODUCT_FILTER_API_URL }`, body, { headers: new HttpHeaders(`Authorization: Bearer ${ uid_st }`) })
          .subscribe((response: API_PRODUCT_RESPONSE) => {
            if(response.code == 20) {
              resolve(response.data);
            }
            else {
              reject(response.message);
            }
          }, error => {
            reject("Error in getting product");
          });
        })
        .catch((error) => {
          reject("Unable to load profile");
        });
    });
  }

  searchProduct(searchValue) {
    return new Promise((resolve, reject) => {
      this.auth.getUID()
        .then((uid_st) => {
          this.httpClient.post(`${ this.PRODUCT_BASE_API_URL }/search/${ searchValue }`, "", { headers: new HttpHeaders(`Authorization: Bearer ${ uid_st }`) })
          .subscribe((response: API_PRODUCT_RESPONSE) => {
            if(response.code == 20) {
              resolve(response.data);
            }
            else {
              reject(response.message);
            }
          }, error => {
            reject("Error in getting products");
          });
        })
        .catch((error) => {
          reject("Unable to load profile");
        });
    });
  }

  getProductDetails(product_id) {
    return new Promise((resolve, reject) => {
      this.auth.getUID()
        .then((uid_st) => {
          let body = {};
          if(product_id)
            body = { id: product_id };
          this.httpClient.post(`${ this.PRODUCT_DETAILS_API_URL }`, body, { headers: new HttpHeaders(`Authorization: Bearer ${ uid_st }`) })
          .subscribe((response: API_PRODUCT_RESPONSE) => {
            if(response.code == 20) {
              resolve(response.data);
            }
            else {
              reject(response.message);
            }
          }, error => {
            reject("Error in getting products");
          });
        })
        .catch((error) => {
          reject("Unable to load profile");
        });
    });
  }
}