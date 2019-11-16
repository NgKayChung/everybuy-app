(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-complete-payment-complete-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/payment-complete/payment-complete.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/payment-complete/payment-complete.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Payment Success</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  \n</ion-content>"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQtY29tcGxldGUvcGF5bWVudC1jb21wbGV0ZS5wYWdlLnNjc3MifQ== */"

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


var PaymentCompletePage = /** @class */ (function () {
    function PaymentCompletePage() {
    }
    PaymentCompletePage.prototype.ngOnInit = function () {
    };
    PaymentCompletePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-complete',
            template: __webpack_require__(/*! raw-loader!./payment-complete.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/payment-complete/payment-complete.page.html"),
            styles: [__webpack_require__(/*! ./payment-complete.page.scss */ "./src/app/pages/payment-complete/payment-complete.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaymentCompletePage);
    return PaymentCompletePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-payment-complete-payment-complete-module-es5.js.map