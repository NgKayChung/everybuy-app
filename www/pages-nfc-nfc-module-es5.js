(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-nfc-nfc-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/nfc/nfc.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/nfc/nfc.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      \n    </ion-buttons>\n    <ion-title>\n      NFC Testing Page\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1 class=\"ion-margin\">\n    NFC supported: {{nfcWorking}}\n  </h1>\n  <h4 id=\"nfc-tagId\" class=\"ion-margin\"></h4>\n  <p id=\"nfc-result\" class=\"ion-margin\"></p>\n  <p id=\"nfc-card-hex\" class=\"ion-margin\"></p>\n  <p id=\"nfc-card-ascii\" class=\"ion-margin\"></p>\n</ion-content>\n<app-tabs></app-tabs>"

/***/ }),

/***/ "./src/app/pages/nfc/nfc.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/nfc/nfc.module.ts ***!
  \*****************************************/
/*! exports provided: NFCPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NFCPageModule", function() { return NFCPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nfc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nfc.page */ "./src/app/pages/nfc/nfc.page.ts");
/* harmony import */ var _components_tabs_tabs_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/tabs/tabs.component.module */ "./src/app/components/tabs/tabs.component.module.ts");








var NFCPageModule = /** @class */ (function () {
    function NFCPageModule() {
    }
    NFCPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _nfc_page__WEBPACK_IMPORTED_MODULE_6__["NFCPage"]
                    }
                ]),
                _components_tabs_tabs_component_module__WEBPACK_IMPORTED_MODULE_7__["TabsModule"]
            ],
            declarations: [_nfc_page__WEBPACK_IMPORTED_MODULE_6__["NFCPage"]]
        })
    ], NFCPageModule);
    return NFCPageModule;
}());



/***/ }),

/***/ "./src/app/pages/nfc/nfc.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/nfc/nfc.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25mYy9uZmMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/nfc/nfc.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/nfc/nfc.page.ts ***!
  \***************************************/
/*! exports provided: NFCPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NFCPage", function() { return NFCPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/nfc/ngx */ "./node_modules/@ionic-native/nfc/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");




// Using Ionic Native NFC for enabling NFC feature in the Ionic platform
// To use the NFC feature in Android, 3rd party Cordova plugin is used
// Plugin used: phonegap-nfc-isodep
//    by: as-eldlc (GitHub)
// As Ionic Native NFC by Ionic Team (Official) does not include feature to request data from NFC tag
// which only detecting NFC tag and retrieve tag ID at the latest update
// Has added some custom lines in .\node_modules\@ionic-native\nfc\ngx\index.d.ts & index.js
// To enable some functions such as connect(), transceive(), and close() which are not available
// but callable in Cordova plugin for executing Android native functions
var NFCPage = /** @class */ (function () {
    function NFCPage(nfc, storage) {
        this.nfc = nfc;
        this.storage = storage;
        storage.get('uid').then(function (val) {
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
    NFCPage.prototype.hex_to_ascii = function (str) {
        var hexStr = str.toString();
        var asciiStr = '';
        for (var n = 0; n < hexStr.length; n += 2) {
            asciiStr += String.fromCharCode(parseInt(hexStr.substr(n, 2), 16));
        }
        return asciiStr;
    };
    NFCPage.prototype.ngOnInit = function () {
    };
    NFCPage.ctorParameters = function () { return [
        { type: _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_2__["NFC"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
    ]; };
    NFCPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nfc',
            template: __webpack_require__(/*! raw-loader!./nfc.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/nfc/nfc.page.html"),
            styles: [__webpack_require__(/*! ./nfc.page.scss */ "./src/app/pages/nfc/nfc.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_2__["NFC"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], NFCPage);
    return NFCPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-nfc-nfc-module-es5.js.map