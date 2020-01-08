import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppConfig } from '../app.config';
import { AuthService } from './auth.service';

import { Storage } from '@ionic/storage';

export interface API_ORDER_RESPONSE {
  code: number;
  message: string;
}

export interface API_ORDER_DATA_RESPONSE extends API_ORDER_RESPONSE {
  data: Object;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private BASE_DELIVERY_ADDRESS_API_URL = AppConfig.API_HOST_URL + "/api/delivery-address";
  private BASE_ORDER_API_URL = AppConfig.API_HOST_URL + "/api/orders";
  private GET_SHIPPING_OPTS_API_URL = AppConfig.API_HOST_URL + "/api/shipping-options";
  private DELIVERY_ADDRESS_CREATE_API_URL = this.BASE_DELIVERY_ADDRESS_API_URL + "/create";
  private ORDER_CREATE_API_URL = this.BASE_ORDER_API_URL + "/create";
  private ORDER_UPDATE_API_URL = this.BASE_ORDER_API_URL + "/update";
  private ORDER_REMOVE_API_URL = this.BASE_ORDER_API_URL + "/remove";

  constructor(private storage: Storage, private httpClient: HttpClient, private auth: AuthService) { }

  /**
   * Get all delivery addresses details or by optionally passing in
   * delivery address ID for specific delivery address details
   */
  getDeliveryAddresses(id? : string) {
    return new Promise((resolve, reject) => {
      this.auth.getUID()
        .then((uid_st) => {
          let body = {};
          if(id)
            body = { id: id };
          
          this.httpClient.post(this.BASE_DELIVERY_ADDRESS_API_URL, body, { headers: new HttpHeaders(`Authorization: Bearer ${ uid_st }`) })
            .subscribe((response: API_ORDER_DATA_RESPONSE) => {
              if(response['code'] == 20) {
                resolve(response.data);
              }
              else {
                reject(response.message);
              }
            }, error => {
              reject("Error in getting data");
            });
        })
        .catch((error) => {
          reject("Unable to get data");
        });
    });
  }
  
  /**
   * Add delivery address by passing the details to server
   * @param deliveryAddr_obj
   */
  addDeliveryAddress(deliveryAddr_obj) {
    return new Promise((resolve, reject) => {
      this.auth.getUID()
        .then((uid_st) => {
          this.httpClient.post(this.DELIVERY_ADDRESS_CREATE_API_URL, deliveryAddr_obj, { headers: new HttpHeaders(`Authorization: Bearer ${ uid_st }`) })
            .subscribe((response: API_ORDER_RESPONSE) => {
              if(response.code == 20) {
                resolve(response);
              }
              else {
                reject(response.message);
              }
            }, error => {
              reject("Error in getting data");
            });
        })
        .catch((error) => {
          reject("Unable to get data");
        });
    });
  }

  /**
   * Get all shipping options details or by optionally passing in
   * shipping ID for specific shipping details
   */
  getShippingOptions(id? : string) {
    return new Promise((resolve, reject) => {
      this.auth.getUID()
        .then((uid_st) => {
          let body = {};
          if(id)
            body = { id: id };
          this.httpClient.post(this.GET_SHIPPING_OPTS_API_URL, body, { headers: new HttpHeaders(`Authorization: Bearer ${ uid_st }`) })
            .subscribe((response: API_ORDER_DATA_RESPONSE) => {
              if(response.code == 20) {
                resolve(response.data);
              }
              else {
                reject(response.message);
              }
            }, error => {
              reject("Error in getting data");
            });
        })
        .catch((error) => {
          reject("Unable to get data");
        });
    });
  }

  /**
   * Creates/Updates order for the user
   * Sends POST request to host server
   */
  createOrder(productId: string, deliveryId: string, shippingId: string) {
    return new Promise((resolve, reject) => {
      this.auth.getUID()
        .then((uid_st) => {
          this.getExistingOrderId()
            .then((existingOrderId) => {
              // if there is existing order ID stored in local storage
              if(existingOrderId) {
                let body = {
                  order_id: existingOrderId,
                  product_id: productId,
                  delivery_id: deliveryId,
                  shipping_id: shippingId
                };

                // update details of the order
                this.httpClient.post(this.ORDER_UPDATE_API_URL, body, { headers: new HttpHeaders(`Authorization: Bearer ${ uid_st }`) })
                  .subscribe((response: API_ORDER_RESPONSE) => {
                    if(response.code == 20) {
                      resolve(existingOrderId);
                    }
                    else {
                      reject(response.message);
                    }
                  }, error => {
                    reject("Error in getting data");
                  });
              }
              else {
                let body = {
                  product_id: productId,
                  delivery_id: deliveryId,
                  shipping_id: shippingId
                };

                // create a new order
                this.httpClient.post(this.ORDER_CREATE_API_URL, body, { headers: new HttpHeaders(`Authorization: Bearer ${ uid_st }`) })
                  .subscribe((response: API_ORDER_DATA_RESPONSE) => {
                    if(response.code == 20) {
                      // stores order ID in local storage
                      this.storage.set('incompleteOrderId', response.data);
                      resolve(response.data);
                    }
                    else {
                      reject(response.message);
                    }
                  }, error => {
                    reject("Error in getting data");
                  });
              }
            })
            .catch((error) => {
              reject(error);
            });
        })
        .catch((error) => {
          reject("Unable to get data");
        });
    });
  }

  /**
   * Get existing order ID stored in local storage
   */
  getExistingOrderId() {
    return new Promise((resolve, reject) => {
      this.storage.get('incompleteOrderId')
        .then((orderId) => {
          resolve(orderId);
        })
        .catch((error) => {
          resolve(error);
        });
    });
  }

  /**
   * Function to get order details for the specific order ID
   * @param orderId
   */
  getOrderDetails(orderId) {
    return new Promise((resolve, reject) => {
      this.auth.getUID()
        .then((uid_st) => {
          let body = {};
          if(orderId)
            body = { id: orderId };
          this.httpClient.post(`${ this.BASE_ORDER_API_URL }`, body, { headers: new HttpHeaders(`Authorization: Bearer ${ uid_st }`) })
            .subscribe((response: API_ORDER_DATA_RESPONSE) => {
              if(response.code == 20) {
                resolve(response.data);
              }
              else {
                reject(response.message);
              }
            }, error => {
              reject("Error in getting data");
            });
        })
        .catch((error) => {
          reject("Unable to get data");
        });
    });
  }
  
  /**
   * Get remove existing order function
   * Retrieves existing order ID from local storage
   * If existed
   *    Remove the order from server (Set to Fail)
   * Else
   *    Return
   */
  removeAnyExistingOrder() {
    return new Promise((resolve, reject) => {
      this.getExistingOrderId()
        .then((existingOrderId) => {
          if(existingOrderId) { // order is existed
            this.storage.remove('incompleteOrderId');
            let body = {
              order_id: existingOrderId
            };
            this.auth.getUID()
              .then((uid_st) => {
                this.httpClient.post(this.ORDER_REMOVE_API_URL, body, { headers: new HttpHeaders(`Authorization: Bearer ${ uid_st }`) })
                  .subscribe((response: API_ORDER_DATA_RESPONSE) => {
                    if(response.code == 20) {
                      resolve(response.data);
                    }
                    else {
                      reject(response.message);
                    }
                  }, error => {
                    reject(error);
                  });
              })
              .catch((error) => {
                reject(error);
              });
          }
          else { // if no existing order
            resolve();
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}