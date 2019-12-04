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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment.page */ "./src/app/pages/payment/payment.page.ts");







var routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]
    }
];
var PaymentPageModule = /** @class */ (function () {
    function PaymentPageModule() {
    }
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
    return PaymentPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _services_nfc_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/nfc.service */ "./src/app/services/nfc.service.ts");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/payment.service */ "./src/app/services/payment.service.ts");








var PaymentPage = /** @class */ (function () {
    function PaymentPage(loadingCtrl, toastCtrl, navCtrl, route, orderService, nfcService, paymentService) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.route = route;
        this.orderService = orderService;
        this.nfcService = nfcService;
        this.paymentService = paymentService;
    }
    PaymentPage.prototype.ngOnInit = function () {
    };
    PaymentPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Processing Payment'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: 3000,
                            cssClass: "toast-style"
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // initialize input fields
        this.cardNumber_st = "";
        this.expMonth_st = "";
        this.expYear_st = "";
        this.cvc_st = "";
        this.route.queryParams.subscribe(function (params) {
            _this.orderId = params["order_id"];
            _this.orderService.getOrderDetails(_this.orderId)
                .then(function (data) {
                _this.checkoutProductId = data['product_id'];
                _this.amountPayable_nm = data['total_amount_nm'];
            })
                .catch(function (error) {
                _this.presentToast(error);
            });
        });
        this.nfcService.isEnabled()
            .then(function (enabled) {
            _this.nfcAccepted_bool = enabled;
        });
    };
    PaymentPage.prototype.NFCScan = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.nfc-overlay').removeClass('hidden');
        this.nfcService.read()
            .then(function (card_obj) {
            _this.closeNFC();
            // assign card details
            _this.cardNumber_st = card_obj["cardNumber"];
            _this.expMonth_st = card_obj["expMonth"];
            _this.expYear_st = card_obj["expYear"];
            // prompt for CVC
            _this.cvc_st = prompt("Please fill in the card CVC");
        })
            .catch(function (error) {
            _this.presentToast(error);
        });
    };
    PaymentPage.prototype.closeNFC = function () {
        // hide overlay
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.nfc-overlay').addClass('hidden');
        this.nfcService.close();
    };
    PaymentPage.prototype.processPayment = function () {
        var _this = this;
        this.presentLoading();
        var card_obj = {
            number: this.cardNumber_st,
            expMonth: parseInt(this.expMonth_st),
            expYear: parseInt(this.expYear_st),
            cvc: this.cvc_st
        };
        this.paymentService.makePayment(this.orderId, card_obj)
            .then(function () {
            _this.loadingCtrl.dismiss();
            _this.presentToast("Payment Successful!");
            var navigationExtras = {
                queryParams: {
                    order_id: _this.orderId
                }
            };
            _this.navCtrl.navigateForward('/payment/payment-complete', navigationExtras);
        })
            .catch(function (error) {
            setTimeout(function () {
                _this.loadingCtrl.dismiss();
            }, 2000);
            _this.presentToast(error);
        });
    };
    PaymentPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] },
        { type: _services_nfc_service__WEBPACK_IMPORTED_MODULE_6__["NfcService"] },
        { type: _services_payment_service__WEBPACK_IMPORTED_MODULE_7__["PaymentService"] }
    ]; };
    PaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! raw-loader!./payment.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/payment/payment.page.html"),
            styles: [__webpack_require__(/*! ./payment.page.scss */ "./src/app/pages/payment/payment.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"],
            _services_nfc_service__WEBPACK_IMPORTED_MODULE_6__["NfcService"],
            _services_payment_service__WEBPACK_IMPORTED_MODULE_7__["PaymentService"]])
    ], PaymentPage);
    return PaymentPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/nfc/ngx */ "./node_modules/@ionic-native/nfc/ngx/index.js");



var NfcService = /** @class */ (function () {
    function NfcService(nfc) {
        this.nfc = nfc;
    }
    NfcService.prototype.isEnabled = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.nfc.enabled()
                .then(function () {
                resolve(true);
            })
                .catch(function () {
                reject(false);
            });
        });
    };
    NfcService.prototype.read = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.NFCSubscription = _this.nfc.addTagDiscoveredListener().subscribe(function () {
                _this.nfc.connect()
                    .finally(function () {
                    var readRequest = "00A404000E325041592E5359532E444446303100";
                    _this.nfc.transceive(readRequest)
                        .then(function (responseData) {
                        var aid_st = String(responseData).substring(String(responseData).lastIndexOf("4f07") + 4, String(responseData).lastIndexOf("4f07") + 18);
                        var readRequest = "00A4040007" + aid_st + "00";
                        _this.nfc.transceive(readRequest)
                            .then(function (responseData) {
                            console.log("aid read", responseData);
                            var readDataArr = [];
                            var readRequest = "00B2011400";
                            _this.nfc.transceive(readRequest)
                                .then(function (responseData) {
                                readDataArr.push(responseData);
                                var readRequest = "00B2021400";
                                _this.nfc.transceive(readRequest)
                                    .then(function (responseData) {
                                    readDataArr.push(responseData);
                                    var readRequest = "00B2031400";
                                    _this.nfc.transceive(readRequest)
                                        .then(function (responseData) {
                                        readDataArr.push(responseData);
                                        var card_number_st = "";
                                        var exp_month_st = "";
                                        var exp_year_st = "";
                                        readDataArr.forEach(function (bytesString, index) {
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
                                            _this.nfc.close()
                                                .finally(function () {
                                                reject("Could not read card");
                                            });
                                        }
                                        else {
                                            _this.nfc.close()
                                                .finally(function () {
                                                var cardDetails = {
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
                        .catch(function (error) {
                        _this.nfc.close()
                            .finally(function () {
                            reject(error);
                        });
                    });
                });
            });
        });
    };
    NfcService.prototype.close = function () {
        // unsubscribe read tag event
        if (this.NFCSubscription) {
            this.NFCSubscription.unsubscribe();
            console.log("unsubscribe");
        }
    };
    NfcService.ctorParameters = function () { return [
        { type: _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_2__["NFC"] }
    ]; };
    NfcService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_2__["NFC"]])
    ], NfcService);
    return NfcService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/stripe/ngx */ "./node_modules/@ionic-native/stripe/ngx/index.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");






var PaymentService = /** @class */ (function () {
    function PaymentService(httpClient, stripe, auth) {
        this.httpClient = httpClient;
        this.stripe = stripe;
        this.auth = auth;
        this.BASE_PAYMENT_API_URL = _app_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"].API_HOST_URL + "/api/payment";
    }
    PaymentService.prototype.makePayment = function (orderId, userCard_obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.auth.getUID()
                .then(function (uid_st) {
                _this.stripe.setPublishableKey('pk_test_HKC3vn1hzDGig9R73CBFs36A00eAwQClZm');
                var card_obj = {
                    number: '4242424242424242',
                    expMonth: 12,
                    expYear: 2020,
                    cvc: '220'
                };
                _this.stripe.createCardToken(card_obj)
                    .then(function (token) {
                    var body = {
                        "orderId": orderId,
                        "tokenId": token.id
                    };
                    _this.httpClient.post(_this.BASE_PAYMENT_API_URL, body, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]("Authorization: Bearer " + uid_st) })
                        .subscribe(function (response) {
                        if (response.code == 20) {
                            resolve();
                        }
                        else {
                            reject(response.message);
                        }
                    }, function (error) {
                        reject(error);
                    });
                })
                    .catch(function (error) {
                    reject("Payment method not supported");
                });
            })
                .catch(function (error) {
                reject("Unable to get data");
            });
        });
    };
    PaymentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_3__["Stripe"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    PaymentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_3__["Stripe"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], PaymentService);
    return PaymentService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-payment-payment-module-es5.js.map