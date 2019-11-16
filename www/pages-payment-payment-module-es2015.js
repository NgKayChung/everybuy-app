(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-payment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/payment/payment.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/payment/payment.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons>\n      <ng-template [ngIf]=\"checkoutProductId\">\n          <ion-back-button color=\"secondary\" [defaultHref]=\"'/checkout/' + checkoutProductId\"></ion-back-button>\n      </ng-template>\n      <ion-title>Payment</ion-title>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-template [ngIf]=\"orderId\">\n    <div class=\"ion-padding content-wrapper\">\n      <ion-card class=\"form-wrapper\">\n        <ng-template [ngIf]=\"nfcAccepted_bool == true\">\n          <div class=\"nfc-wrapper\">\n            <div class=\"nfc-btn\">\n              <ion-button size=\"small\" (click)=\"NFCScan()\">\n                <ion-icon name=\"wifi\"></ion-icon>\n                <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n              </ion-button>\n            </div>\n          </div>\n        </ng-template>\n        <h6 class=\"ion-text-center\">Total Payable</h6>\n        <ng-template [ngIf]=\"amountPayable_nm\">\n          <h4 class=\"ion-text-center\">RM {{ amountPayable_nm.toFixed(2) }}</h4>\n        </ng-template>\n        <p style=\"margin-bottom: 0px;\" class=\"ion-text-center\">Enter card details below{{ (nfcAccepted_bool == true ? \" | Read card using NFC\": \"\") }}</p>\n        <ion-list>\n          <ion-item>\n            <ion-label color=\"primary\" position=\"floating\">Card Number</ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"cardNumber_st\"></ion-input>\n            <!-- placeholder=\"Enter your 16 digit card number\"  -->\n          </ion-item>\n          <ion-item>\n            <ion-label color=\"primary\" position=\"floating\">Expiration Month</ion-label>\n            <ion-input type=\"number\" [(ngModel)]=\"expMonth_st\"></ion-input>\n            <!-- placeholder=\"Enter your card expiration month\" -->\n          </ion-item>\n          <ion-item>\n            <ion-label color=\"primary\" position=\"floating\">Expiration Year</ion-label>\n            <ion-input type=\"number\"\n            [(ngModel)]=\"expYear_st\"></ion-input>\n            <!-- placeholder=\"Enter your card expiration year\" -->\n          </ion-item>\n          <ion-item>\n            <ion-label color=\"primary\" position=\"floating\">CVV</ion-label>\n            <ion-input type=\"text\"\n            [(ngModel)]=\"cvc_st\"></ion-input>\n            <!-- placeholder=\"Enter your CVV\" -->\n          </ion-item>\n        </ion-list>\n        <ion-button expand=\"full\" (click)=\"processPayment()\">\n          Submit\n          <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n        </ion-button>\n      </ion-card>\n    </div>\n  </ng-template>\n</ion-content>\n<ng-template [ngIf]=\"nfcAccepted_bool == true\">\n  <div class=\"nfc-overlay hidden\">\n    <ion-icon name=\"close-circle\" size=\"small\" class=\"nfc-close\" (click)=\"closeNFC()\"></ion-icon>\n    <p class=\"nfc-caption\">Tap the card to your phone device</p>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/payment/payment.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.module.ts ***!
  \*************************************************/
/*! exports provided: PaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment.page */ "./src/app/pages/payment/payment.page.ts");







const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]
    }
];
let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]]
    })
], PaymentPageModule);



/***/ }),

/***/ "./src/app/pages/payment/payment.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-wrapper {\n  height: 100%;\n  background-color: var(--ion-color-secondary);\n}\n\n.nfc-wrapper {\n  position: absolute;\n  top: 15%;\n  right: 10%;\n}\n\n@-webkit-keyframes shake {\n  0% {\n    left: 0;\n  }\n  1% {\n    left: -2px;\n  }\n  2% {\n    left: 4px;\n  }\n  3% {\n    left: -6px;\n  }\n  4% {\n    left: 6px;\n  }\n  5% {\n    left: -4px;\n  }\n  6% {\n    left: 2px;\n  }\n  7% {\n    left: 0;\n  }\n}\n\n@keyframes shake {\n  0% {\n    left: 0;\n  }\n  1% {\n    left: -2px;\n  }\n  2% {\n    left: 4px;\n  }\n  3% {\n    left: -6px;\n  }\n  4% {\n    left: 6px;\n  }\n  5% {\n    left: -4px;\n  }\n  6% {\n    left: 2px;\n  }\n  7% {\n    left: 0;\n  }\n}\n\n.nfc-wrapper > .nfc-btn {\n  position: relative;\n  -webkit-animation-name: shake;\n          animation-name: shake;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in;\n          animation-timing-function: ease-in;\n}\n\n.form-wrapper {\n  padding: 10px;\n  background-color: white;\n}\n\n.nfc-overlay {\n  position: absolute;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  z-index: 10;\n}\n\n.nfc-close {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n}\n\n.nfc-caption {\n  text-align: center;\n  margin: 0px;\n  width: 100%;\n}\n\n.hidden {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC9DOlxcVXNlcnNcXGxcXERvY3VtZW50c1xcTW9iaWxlIFRlY2hub2xvZ3kgUHJvamVjdFxcRXZlcnlCdXkvc3JjXFxhcHBcXHBhZ2VzXFxwYXltZW50XFxwYXltZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSw0Q0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0k7SUFBSSxPQUFBO0VDRU47RURERTtJQUFJLFVBQUE7RUNJTjtFREhFO0lBQUksU0FBQTtFQ01OO0VETEU7SUFBSSxVQUFBO0VDUU47RURQRTtJQUFJLFNBQUE7RUNVTjtFRFRFO0lBQUksVUFBQTtFQ1lOO0VEWEU7SUFBSSxTQUFBO0VDY047RURiRTtJQUFJLE9BQUE7RUNnQk47QUFDRjs7QUR6QkE7RUFDSTtJQUFJLE9BQUE7RUNFTjtFRERFO0lBQUksVUFBQTtFQ0lOO0VESEU7SUFBSSxTQUFBO0VDTU47RURMRTtJQUFJLFVBQUE7RUNRTjtFRFBFO0lBQUksU0FBQTtFQ1VOO0VEVEU7SUFBSSxVQUFBO0VDWU47RURYRTtJQUFJLFNBQUE7RUNjTjtFRGJFO0lBQUksT0FBQTtFQ2dCTjtBQUNGOztBRGRBO0VBQ0ksa0JBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0FDZ0JKOztBRGJBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDZ0JKOztBRGJBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ2dCSjs7QURiQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNnQko7O0FEYkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDZ0JKOztBRGJBO0VBQ0ksYUFBQTtBQ2dCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQvcGF5bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC13cmFwcGVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG4ubmZjLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNSU7XHJcbiAgICByaWdodDogMTAlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcclxuICAgIDAlIHtsZWZ0OiAwfVxyXG4gICAgMSUge2xlZnQ6IC0ycHh9XHJcbiAgICAyJSB7bGVmdDogNHB4fVxyXG4gICAgMyUge2xlZnQ6IC02cHh9XHJcbiAgICA0JSB7bGVmdDogNnB4fVxyXG4gICAgNSUge2xlZnQ6IC00cHh9XHJcbiAgICA2JSB7bGVmdDogMnB4fVxyXG4gICAgNyUge2xlZnQ6IDB9XHJcbn1cclxuXHJcbi5uZmMtd3JhcHBlciA+IC5uZmMtYnRuIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBzaGFrZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbn1cclxuXHJcbi5mb3JtLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubmZjLW92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4ubmZjLWNsb3NlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMC41cmVtO1xyXG4gICAgcmlnaHQ6IDAuNXJlbTtcclxufVxyXG5cclxuLm5mYy1jYXB0aW9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufSIsIi5jb250ZW50LXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4ubmZjLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTUlO1xuICByaWdodDogMTAlO1xufVxuXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgMSUge1xuICAgIGxlZnQ6IC0ycHg7XG4gIH1cbiAgMiUge1xuICAgIGxlZnQ6IDRweDtcbiAgfVxuICAzJSB7XG4gICAgbGVmdDogLTZweDtcbiAgfVxuICA0JSB7XG4gICAgbGVmdDogNnB4O1xuICB9XG4gIDUlIHtcbiAgICBsZWZ0OiAtNHB4O1xuICB9XG4gIDYlIHtcbiAgICBsZWZ0OiAycHg7XG4gIH1cbiAgNyUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cbi5uZmMtd3JhcHBlciA+IC5uZmMtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbmltYXRpb24tbmFtZTogc2hha2U7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xufVxuXG4uZm9ybS13cmFwcGVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5uZmMtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5uZmMtY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMC41cmVtO1xuICByaWdodDogMC41cmVtO1xufVxuXG4ubmZjLWNhcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/payment/payment.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/payment/payment.page.ts ***!
  \***********************************************/
/*! exports provided: PaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPage", function() { return PaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _services_nfc_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/nfc.service */ "./src/app/services/nfc.service.ts");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/payment.service */ "./src/app/services/payment.service.ts");








let PaymentPage = class PaymentPage {
    constructor(toastCtrl, route, orderService, nfcService, paymentService) {
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.orderService = orderService;
        this.nfcService = nfcService;
        this.paymentService = paymentService;
    }
    ngOnInit() {
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                duration: 3000,
                cssClass: "toast-style"
            });
            toast.present();
        });
    }
    ionViewWillEnter() {
        this.route.queryParams.subscribe(params => {
            this.orderId = params["order_id"];
            this.orderService.getOrderDetails(this.orderId)
                .then((data) => {
                this.checkoutProductId = data['product_id'];
                this.amountPayable_nm = data['total_amount_nm'];
            })
                .catch((error) => {
                console.log(error);
            });
        });
        this.nfcService.isEnabled()
            .then((enabled) => {
            this.nfcAccepted_bool = enabled;
        });
    }
    NFCScan() {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.nfc-overlay').removeClass('hidden');
        this.nfcService.read()
            .then((card_obj) => {
            this.closeNFC();
            // assign card details
            this.cardNumber_st = card_obj["cardNumber"];
            this.expMonth_st = card_obj["expMonth"];
            this.expYear_st = card_obj["expYear"];
            // prompt for CVC
            this.cvc_st = prompt("Please fill in the card CVC");
        })
            .catch((error) => {
            console.log(error);
            this.presentToast(error);
        });
    }
    closeNFC() {
        // hide overlay
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.nfc-overlay').addClass('hidden');
        this.nfcService.close();
    }
    processPayment() {
        let card_obj = {
            number: this.cardNumber_st,
            expMonth: parseInt(this.expMonth_st),
            expYear: parseInt(this.expYear_st),
            cvc: this.cvc_st
        };
        console.log("user card", card_obj);
        this.paymentService.makePayment(this.orderId, card_obj)
            .then((data) => {
            console.log(data);
            this.presentToast("Payment Successful!");
        })
            .catch((error) => {
            console.log(error);
            this.presentToast(error);
        });
    }
};
PaymentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] },
    { type: _services_nfc_service__WEBPACK_IMPORTED_MODULE_6__["NfcService"] },
    { type: _services_payment_service__WEBPACK_IMPORTED_MODULE_7__["PaymentService"] }
];
PaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment',
        template: __webpack_require__(/*! raw-loader!./payment.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/payment/payment.page.html"),
        styles: [__webpack_require__(/*! ./payment.page.scss */ "./src/app/pages/payment/payment.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"], _services_nfc_service__WEBPACK_IMPORTED_MODULE_6__["NfcService"], _services_payment_service__WEBPACK_IMPORTED_MODULE_7__["PaymentService"]])
], PaymentPage);



/***/ }),

/***/ "./src/app/services/nfc.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/nfc.service.ts ***!
  \*****************************************/
/*! exports provided: NfcService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NfcService", function() { return NfcService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/nfc/ngx */ "./node_modules/@ionic-native/nfc/ngx/index.js");



let NfcService = class NfcService {
    constructor(nfc) {
        this.nfc = nfc;
    }
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
    read() {
        return new Promise((resolve, reject) => {
            this.NFCSubscription = this.nfc.addTagDiscoveredListener().subscribe(() => {
                this.nfc.connect()
                    .finally(() => {
                    var readRequest = "00A404000E325041592E5359532E444446303100";
                    this.nfc.transceive(readRequest)
                        .then((responseData) => {
                        let aid_st = String(responseData).substring(String(responseData).lastIndexOf("4f07") + 4, String(responseData).lastIndexOf("4f07") + 18);
                        var readRequest = "00A4040007" + aid_st + "00";
                        this.nfc.transceive(readRequest)
                            .then((responseData) => {
                            console.log("aid read", responseData);
                            let readDataArr = [];
                            var readRequest = "00B2011400";
                            this.nfc.transceive(readRequest)
                                .then((responseData) => {
                                readDataArr.push(responseData);
                                var readRequest = "00B2021400";
                                this.nfc.transceive(readRequest)
                                    .then((responseData) => {
                                    readDataArr.push(responseData);
                                    var readRequest = "00B2031400";
                                    this.nfc.transceive(readRequest)
                                        .then((responseData) => {
                                        readDataArr.push(responseData);
                                        let card_number_st = "";
                                        let exp_month_st = "";
                                        let exp_year_st = "";
                                        readDataArr.forEach((bytesString, index) => {
                                            console.log(index, bytesString);
                                            if (bytesString.startsWith("70")) {
                                                if (bytesString.indexOf("5a08") != -1) {
                                                    card_number_st = bytesString.substring(bytesString.indexOf("5a08") + 4, bytesString.indexOf("5a08") + 20);
                                                }
                                                else if (bytesString.indexOf("5713") != -1) {
                                                    card_number_st = bytesString.substring(bytesString.indexOf("5713") + 4, bytesString.indexOf("5713") + 20);
                                                }
                                                if (bytesString.indexOf("5f2403") != -1) {
                                                    exp_year_st = bytesString.substring(bytesString.indexOf("5f2403") + 6, bytesString.indexOf("5f2403") + 8);
                                                    exp_month_st = bytesString.substring(bytesString.indexOf("5f2403") + 8, bytesString.indexOf("5f2403") + 10);
                                                }
                                            }
                                        });
                                        if (card_number_st == "" || exp_month_st == "" || exp_year_st == "") {
                                            this.nfc.close()
                                                .finally(() => {
                                                reject("Could not read card");
                                            });
                                        }
                                        else {
                                            this.nfc.close()
                                                .finally(() => {
                                                let cardDetails = {
                                                    "cardNumber": card_number_st,
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
        if (this.NFCSubscription) {
            this.NFCSubscription.unsubscribe();
            console.log("unsubscribe");
        }
    }
};
NfcService.ctorParameters = () => [
    { type: _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_2__["NFC"] }
];
NfcService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_2__["NFC"]])
], NfcService);



/***/ }),

/***/ "./src/app/services/payment.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/payment.service.ts ***!
  \*********************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/stripe/ngx */ "./node_modules/@ionic-native/stripe/ngx/index.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");






let PaymentService = class PaymentService {
    constructor(httpClient, stripe, auth) {
        this.httpClient = httpClient;
        this.stripe = stripe;
        this.auth = auth;
        this.BASE_PAYMENT_API_URL = _app_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"].API_HOST_URL + "/api/payment";
    }
    makePayment(orderId, userCard_obj) {
        return new Promise((resolve, reject) => {
            this.auth.getUID()
                .then((uid_st) => {
                this.stripe.setPublishableKey('pk_test_HKC3vn1hzDGig9R73CBFs36A00eAwQClZm');
                let card_obj = {
                    number: '4242424242424242',
                    expMonth: 12,
                    expYear: 2020,
                    cvc: '220'
                };
                this.stripe.createCardToken(card_obj)
                    .then((token) => {
                    console.log(token.id);
                    let body = {
                        "orderId": orderId,
                        "tokenId": token.id
                    };
                    this.httpClient.post(this.BASE_PAYMENT_API_URL, body, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](`Authorization: Bearer ${uid_st}`) })
                        .subscribe((response) => {
                        if (response.code == 20) {
                            resolve(response.data);
                        }
                        else {
                            reject(response.message);
                        }
                    }, (error) => {
                        reject(error);
                    });
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
};
PaymentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_3__["Stripe"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
PaymentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_3__["Stripe"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], PaymentService);



/***/ })

}]);
//# sourceMappingURL=pages-payment-payment-module-es2015.js.map