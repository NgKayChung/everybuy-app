import { Component, OnInit } from '@angular/core';
import { NFC } from '@ionic-native/nfc/ngx';
import { Storage } from '@ionic/storage';
// Using Ionic Native NFC for enabling NFC feature in the Ionic platform
// To use the NFC feature in Android, 3rd party Cordova plugin is used
// Plugin used: phonegap-nfc-isodep
//    by: as-eldlc (GitHub)
// As Ionic Native NFC by Ionic Team (Official) does not include feature to request data from NFC tag
// which only detecting NFC tag and retrieve tag ID at the latest update
// Has added some custom lines in .\node_modules\@ionic-native\nfc\ngx\index.d.ts & index.js
// To enable some functions such as connect(), transceive(), and close() which are not available
// but callable in Cordova plugin for executing Android native functions

@Component({
  selector: 'app-nfc',
  templateUrl: 'nfc.page.html',
  styleUrls: ['nfc.page.scss']
})
export class NFCPage implements OnInit {
  public nfcWorking: boolean;
  public nfcVal: any;

  constructor(private nfc: NFC, private storage: Storage) {
    storage.get('uid').then((val) => {
    });
    // nfc.enabled()
    //   .then(() => {
    //     this.nfcWorking = true;
    //     nfc.addTagDiscoveredListener().subscribe(data => {
    //       let tagId = nfc.bytesToHexString(data.tag.id);
    //       document.getElementById('nfc-tagId').innerText = tagId;
    //       document.getElementById('nfc-result').innerText = JSON.stringify(data);
          
    //       nfc.connect()
    //         .then(() => {
    //         })
    //         .catch((response) => {
    //           var readRequest = "00A404000E325041592E5359532E444446303100";
    //           nfc.transceive(readRequest)
    //             .then((responseData) => {
    //               document.getElementById('nfc-card-hex').innerHTML += '<br/>' + responseData;
    //               document.getElementById('nfc-card-ascii').innerHTML += '<br/>' + this.hex_to_ascii(responseData);
                  
    //               var aid = String(responseData).substring(String(responseData).lastIndexOf("4f07") + 4, String(responseData).lastIndexOf("4f07") + 18).toUpperCase();
    //               var readRequest = "00A4040007" + aid + "00";
    //               nfc.transceive(readRequest)
    //                 .then((responseData) => {
    //                   document.getElementById('nfc-card-hex').innerHTML += '<br/>' + responseData;
    //                   document.getElementById('nfc-card-ascii').innerHTML += '<br/>' + this.hex_to_ascii(responseData);

    //                   var readRequest = "00B2010C00";
    //                   nfc.transceive(readRequest)
    //                     .then((responseData) => {
    //                       document.getElementById('nfc-card-hex').innerHTML += '<br/>' + responseData;
    //                       document.getElementById('nfc-card-ascii').innerHTML += '<br/>' + this.hex_to_ascii(responseData);
                          
    //                       var readRequest = "00B2020C00";
    //                       nfc.transceive(readRequest)
    //                         .then((responseData) => {
    //                           document.getElementById('nfc-card-hex').innerHTML += '<br/>' + responseData;
    //                           document.getElementById('nfc-card-ascii').innerHTML += '<br/>' + this.hex_to_ascii(responseData);
                              
    //                           var readRequest = "00B2011400";
    //                           nfc.transceive(readRequest)
    //                             .then((responseData) => {
    //                               document.getElementById('nfc-card-hex').innerHTML += '<br/>' + responseData;
    //                               document.getElementById('nfc-card-ascii').innerHTML += '<br/>' + this.hex_to_ascii(responseData);
                                  
    //                               var readRequest = "00B2021400";
    //                               nfc.transceive(readRequest)
    //                                 .then((responseData) => {
    //                                   document.getElementById('nfc-card-hex').innerHTML += '<br/>' + responseData;
    //                                   document.getElementById('nfc-card-ascii').innerHTML += '<br/>' + this.hex_to_ascii(responseData);
    //                                   nfc.close();
    //                                 });
    //                             });
    //                         });
    //                     });
    //                 });
    //             });
    //         });
    //     });
    //   })
    //   .catch(err => {
    //     this.nfcWorking = false;
    //     document.getElementById('nfc-result').innerText = "NFC is not supported on this device";
    //   });
  }

  private hex_to_ascii(str) {
    var hexStr  = str.toString();
    var asciiStr = '';
    for (var n = 0; n < hexStr.length; n += 2) {
      asciiStr += String.fromCharCode(parseInt(hexStr.substr(n, 2), 16));
    }
    return asciiStr;
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
