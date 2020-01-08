import { Injectable } from '@angular/core';
import { NFC } from '@ionic-native/nfc/ngx';

import { Subscription } from 'rxjs';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class NfcService {
  private NFCSubscription: Subscription;

  constructor(private nfc: NFC) { }

  /**
   * isEnabled function
   * To check if NFC is enabled on the device
   */
  isEnabled() {
    return new Promise((resolve, reject) => {
      this.nfc.enabled()
        .then(() => {
          resolve(true);
        })
        .catch(() => {
          reject(false);
        });
    });
  }

  /**
   * Function called to read card details using NFC
   */
  read() {
    return new Promise((resolve, reject) => {
      // detect for NFC tag (card chip)
      this.NFCSubscription = this.nfc.addTagDiscoveredListener().subscribe(() => {
        // connect to NFC tag (card chip)
        this.nfc.connect()
          .finally(() => {
            // set read request for reading Application ID of the card
            var readRequest = "00A404000E325041592E5359532E444446303100";

            // send the read request
            this.nfc.transceive(readRequest)
              .then((responseData) => {
                // get the AID string from the response
                let aid_st = String(responseData).substring(String(responseData).lastIndexOf("4f07") + 4, String(responseData).lastIndexOf("4f07") + 18);
                var readRequest = "00A4040007" + aid_st + "00";

                // send request to SELECT the AID to process
                this.nfc.transceive(readRequest)
                  .then((responseData) => {
                    let readDataArr = [];
                    
                    // read first block in chip
                    var readRequest = "00B2011400";
                    this.nfc.transceive(readRequest)
                      .then((responseData) => {
                        readDataArr.push(responseData);

                        // read second block in chip
                        var readRequest = "00B2021400";
                        this.nfc.transceive(readRequest)
                          .then((responseData) => {
                            readDataArr.push(responseData);
                            
                            // read third block in chip
                            var readRequest = "00B2031400";
                            this.nfc.transceive(readRequest)
                              .then((responseData) => {
                                readDataArr.push(responseData);

                                let card_number_st = "";
                                let exp_month_st = "";
                                let exp_year_st = "";

                                // loops the array of response strings
                                readDataArr.forEach((bytesString: string, index) => {
                                  // string starts with 70 as template
                                  if(bytesString.startsWith("70")) {
                                    // if 5a08 exists in the string - get card number
                                    if(bytesString.indexOf("5a08") != -1) {
                                      card_number_st = bytesString.substring(bytesString.indexOf("5a08") + 4, bytesString.indexOf("5a08") + 20);
                                    }
                                    else if(bytesString.indexOf("5713") != -1) { // if 5713 exists in the string - get card number
                                      card_number_st = bytesString.substring(bytesString.indexOf("5713") + 4, bytesString.indexOf("5713") + 20);
                                    }

                                    // if 5f2403 exists in the string - get expiration date and month
                                    if(bytesString.indexOf("5f2403") != -1) {
                                      exp_year_st = bytesString.substring(bytesString.indexOf("5f2403") + 6, bytesString.indexOf("5f2403") + 8);
                                      exp_month_st = bytesString.substring(bytesString.indexOf("5f2403") + 8, bytesString.indexOf("5f2403") + 10);
                                    }
                                  }
                                });

                                if(card_number_st == "" || exp_month_st == "" || exp_year_st == "") {
                                  this.nfc.close()
                                  .finally(() => {
                                    reject("Could not read card");
                                  });
                                }
                                else {
                                  // close NFC connection
                                  this.nfc.close()
                                    .finally(() => {
                                      let cardDetails = {
                                        "cardNumber":  card_number_st,
                                        "expMonth": exp_month_st,
                                        "expYear": exp_year_st
                                      };
                                      resolve(cardDetails);
                                    });
                                }
                              });
                          });
                      });
                  });
              })
              .catch((error) => {
                this.nfc.close()
                  .finally(() => {
                    reject(error);
                  });
              });
          });
        });
    });
  }

  close() {
    // unsubscribe read tag event
    if(this.NFCSubscription) {
      this.NFCSubscription.unsubscribe();
    }
  }
}