(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-complete-payment-complete-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/payment-complete/payment-complete.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/payment-complete/payment-complete.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title class=\"ion-text-center\" style=\"font-size: x-large; font-weight: bold;\">Successful</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"ion-text-center\" style=\"margin: 1rem 0px;\">\n    <ion-icon name=\"checkmark\" size=\"large\" style=\"color: lawngreen\"></ion-icon>\n    <h3 style=\"margin-top: 0px; font-weight: bold;\">Successful</h3>\n  </div>\n  <ion-card class=\"receipt-container\">\n    <h3 class=\"ion-text-center\" style=\"color: black;\">Receipt</h3>\n    <div>\n      <p class=\"field-title\">Order ID</p>\n      <ng-template [ngIf]=\"orderID\">\n        <p class=\"field-value\">{{ orderID }}</p>\n      </ng-template>\n    </div>\n    <div>\n      <p class=\"field-title\">Order Time</p>\n      <ng-template [ngIf]=\"orderTime_st\">\n        <p class=\"field-value\">{{ orderTime_st }}</p>\n      </ng-template>\n    </div>\n    <div>\n      <p class=\"field-title\">Total Amount</p>\n      <ng-template [ngIf]=\"totalAmount_nm\">\n        <p class=\"field-value\">RM{{ totalAmount_nm.toFixed(2) }}</p>\n      </ng-template>\n    </div>\n    <div>\n      <p class=\"field-title\">Payment</p>\n      <p class=\"field-value\">Debit/Credit Card</p>\n    </div>\n    <div>\n      <p class=\"field-title\">Card No</p>\n      <ng-template [ngIf]=\"cardNo_st\">\n        <p class=\"field-value\">{{ cardNo_st }}</p>\n      </ng-template>\n    </div>\n  </ion-card>\n  <ng-template [ngIf]=\"receiptURL_st != null\">\n    <div class=\"ion-text-center\" style=\"margin: 0 2rem 1rem;\">\n      <p class=\"ion-text-center\" style=\"color: dimgrey; margin-bottom: 0.3rem;\">Tap to view your payment receipt</p>\n      <ion-button shape=\"round\" color=\"primary\" slot=\"icon-only\" (click)=\"viewReceipt()\">\n        <ion-icon name=\"paper\"></ion-icon>\n      </ion-button>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </div>\n  </ng-template>\n  <div class=\"ion-text-center\" style=\"margin-bottom: 2rem;\">\n    <ion-button shape=\"round\" color=\"success\" style=\"width: 75%;\" (click)=\"doneBackToHome()\">Done</ion-button>\n    <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/payment-complete/payment-complete.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/payment-complete/payment-complete.module.ts ***!
  \*******************************************************************/
/*! exports provided: PaymentCompletePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentCompletePageModule", function() { return PaymentCompletePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _payment_complete_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-complete.page */ "./src/app/pages/payment-complete/payment-complete.page.ts");







var routes = [
    {
        path: '',
        component: _payment_complete_page__WEBPACK_IMPORTED_MODULE_6__["PaymentCompletePage"]
    }
];
var PaymentCompletePageModule = /** @class */ (function () {
    function PaymentCompletePageModule() {
    }
    PaymentCompletePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_payment_complete_page__WEBPACK_IMPORTED_MODULE_6__["PaymentCompletePage"]]
        })
    ], PaymentCompletePageModule);
    return PaymentCompletePageModule;
}());



/***/ }),

/***/ "./src/app/pages/payment-complete/payment-complete.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/payment-complete/payment-complete.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".field-title {\n  width: 50%;\n  text-align: left;\n  float: left;\n}\n\n.field-value {\n  width: 50%;\n  text-align: right;\n  float: left;\n  color: black;\n}\n\n.receipt-container {\n  border-radius: 10px;\n  border: 1px solid black;\n  padding: 0px 1rem 1rem;\n  margin: 1rem 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC1jb21wbGV0ZS9DOlxcVXNlcnNcXGxcXERvY3VtZW50c1xcTW9iaWxlIFRlY2hub2xvZ3kgUHJvamVjdFxcRXZlcnlCdXkvc3JjXFxhcHBcXHBhZ2VzXFxwYXltZW50LWNvbXBsZXRlXFxwYXltZW50LWNvbXBsZXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGF5bWVudC1jb21wbGV0ZS9wYXltZW50LWNvbXBsZXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5bWVudC1jb21wbGV0ZS9wYXltZW50LWNvbXBsZXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWVsZC10aXRsZSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uZmllbGQtdmFsdWUge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5yZWNlaXB0LWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAwcHggMXJlbSAxcmVtO1xyXG4gICAgbWFyZ2luOiAxcmVtIDJyZW07XHJcbn0iLCIuZmllbGQtdGl0bGUge1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmZpZWxkLXZhbHVlIHtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5yZWNlaXB0LWNvbnRhaW5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAwcHggMXJlbSAxcmVtO1xuICBtYXJnaW46IDFyZW0gMnJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/payment-complete/payment-complete.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/payment-complete/payment-complete.page.ts ***!
  \*****************************************************************/
/*! exports provided: PaymentCompletePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentCompletePage", function() { return PaymentCompletePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");







var PaymentCompletePage = /** @class */ (function () {
    function PaymentCompletePage(navCtrl, activatedRoute, iab, orderService) {
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.iab = iab;
        this.orderService = orderService;
    }
    PaymentCompletePage.prototype.ngOnInit = function () {
    };
    PaymentCompletePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.orderID = params["order_id"];
            _this.orderService.getOrderDetails(_this.orderID)
                .then(function (data) {
                _this.orderTime_st = (data["payment_time"] == null ? "-" : moment__WEBPACK_IMPORTED_MODULE_5__(new Date(data["payment_time"])).format("DD/MM/YYYY hh:mma"));
                _this.totalAmount_nm = data["total_amount_nm"];
                _this.cardNo_st = (data["last4_card_no_st"] == null ? "-" : "xxxxxxxxxxxx" + data["last4_card_no_st"]);
                _this.receiptURL_st = data["receipt_url_st"];
            })
                .catch(function (error) {
                console.log(error);
            });
        });
    };
    PaymentCompletePage.prototype.viewReceipt = function () {
        if (this.receiptURL_st && this.receiptURL_st != null) {
            var browser = this.iab.create(this.receiptURL_st);
        }
    };
    PaymentCompletePage.prototype.doneBackToHome = function () {
        this.navCtrl.navigateRoot("/home");
    };
    PaymentCompletePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"] },
        { type: _services_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"] }
    ]; };
    PaymentCompletePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-complete',
            template: __webpack_require__(/*! raw-loader!./payment-complete.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/payment-complete/payment-complete.page.html"),
            styles: [__webpack_require__(/*! ./payment-complete.page.scss */ "./src/app/pages/payment-complete/payment-complete.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"]])
    ], PaymentCompletePage);
    return PaymentCompletePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-payment-complete-payment-complete-module-es5.js.map