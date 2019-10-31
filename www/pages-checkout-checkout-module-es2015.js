(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkout-checkout-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/checkout/checkout.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/checkout/checkout.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"light\">\n    <ng-template [ngIf]=\"productInfo\">\n      <ion-buttons>\n        <ion-back-button color=\"secondary\" [defaultHref]=\"'/product-details/' + productInfo.product_id\"></ion-back-button>\n        <ion-title>Checkout</ion-title>\n      </ion-buttons>\n    </ng-template>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ng-template [ngIf]=\"productInfo\">\n    <ion-card>\n      <ion-item class=\"item-thumbnail-left\" lines=\"none\">\n        <ion-img class=\"image\" [src]=\"productInfo.image_urls_st.split(',')[0]\"></ion-img>\n        <div class=\"item-info\">\n          <p class=\"prod-name\">\n            {{productInfo.product_name_st}}\n          </p>\n          <p class=\"price\">\n            RM {{productInfo.product_price_nm.toFixed(2)}}\n          </p>\n        </div>\n      </ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item-group>\n        <ion-item lines=\"full\">\n          <label style=\"font-weight: bold; color: #4E4E4E; font-family: sans-serif; margin-right: 3px;\">Delivery Address</label>\n          <ion-icon name=\"pin\" color=\"secondary\"></ion-icon>\n        </ion-item>\n        <ion-item lines=\"full\" detail=true>\n          <!-- <ion-label>Choose your delivery address</ion-label> -->\n          <ion-label class=\"ion-text-wrap\" style=\"font-weight: bold; color: #4E4E4E; font-family: sans-serif;\">\n            <ion-text>Ng Kay Chung</ion-text>\n            <br/>\n            <label>011-1645 9971</label>\n            <br/>\n            <ion-text>\n              <label>9-2-2 Lorong 6/125 Desa Petaling, 57100 Kuala Lumpur</label>\n            </ion-text>\n          </ion-label>\n        </ion-item>\n      </ion-item-group>\n    </ion-card>\n    <ion-card>\n      <ion-item-group>\n        <ion-item lines=\"full\">\n          <label style=\"font-weight: bold; color: #4E4E4E; font-family: sans-serif; margin-right: 3px;\">Shipping Option</label>\n          <ion-icon src=\"/assets/shipping-icon.svg\" color=\"secondary\"></ion-icon>\n        </ion-item>\n        <ion-item lines=\"full\" detail=true style=\"font-weight: bold; color: #4E4E4E; font-family: sans-serif;\">\n          <ion-label>Pos Laju</ion-label>\n          <ion-label>RM 3.59</ion-label>\n        </ion-item>\n      </ion-item-group>\n    </ion-card>\n    <ion-card>\n      <ion-item-group>\n        <ion-item lines=\"full\">\n          <label style=\"font-weight: bold; color: #4E4E4E; font-family: sans-serif; margin-right: 3px;\">Payment Option</label>\n          <ion-icon name=\"card\" color=\"secondary\"></ion-icon>\n        </ion-item>\n        <ion-item lines=\"full\" detail=true style=\"font-weight: bold; color: #4E4E4E; font-family: sans-serif;\">\n          <ion-label>Credit/Debit Card</ion-label>\n        </ion-item>\n      </ion-item-group>\n    </ion-card>\n  </ng-template>\n</ion-content>\n<ion-footer>\n  <ion-button expand=\"full\" color=\"primary\" style=\"margin: 0px;\">\n    <ion-label>Place Order</ion-label>\n    <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n  </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/checkout/checkout.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/checkout/checkout.module.ts ***!
  \***************************************************/
/*! exports provided: CheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.page */ "./src/app/pages/checkout/checkout.page.ts");







const routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]
    }
];
let CheckoutPageModule = class CheckoutPageModule {
};
CheckoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
    })
], CheckoutPageModule);



/***/ }),

/***/ "./src/app/pages/checkout/checkout.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/checkout/checkout.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card:first-of-type {\n  margin: 0px;\n  padding: 10px 0px;\n  background-color: white;\n  color: black;\n}\n\nion-card {\n  margin: 10px 0px;\n}\n\n.image {\n  width: 30%;\n  height: auto;\n  margin-right: 0.5rem;\n  padding: 0.5rem;\n}\n\n.item-info {\n  width: 70%;\n}\n\n.prod-name {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.price {\n  font-size: 16px;\n  font-weight: 500;\n  color: #025296;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hlY2tvdXQvQzpcXFVzZXJzXFxsXFxEb2N1bWVudHNcXE1vYmlsZSBUZWNobm9sb2d5IFByb2plY3RcXEV2ZXJ5QnV5L3NyY1xcYXBwXFxwYWdlc1xcY2hlY2tvdXRcXGNoZWNrb3V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0MsVUFBQTtFQUNHLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURFQTtFQUNDLGVBQUE7RUFDRyxnQkFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZWNrb3V0L2NoZWNrb3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG5cdHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG5cclxuLml0ZW0taW5mbyB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4ucHJvZC1uYW1lIHtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxufVxyXG5cclxuLnByaWNle1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzAyNTI5NjtcclxufSIsImlvbi1jYXJkOmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cblxuLmltYWdlIHtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4uaXRlbS1pbmZvIHtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLnByb2QtbmFtZSB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4ucHJpY2Uge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDI1Mjk2O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/checkout/checkout.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/checkout/checkout.page.ts ***!
  \*************************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");





let CheckoutPage = class CheckoutPage {
    constructor(activatedRoute, navCtrl, productService) {
        this.activatedRoute = activatedRoute;
        this.navCtrl = navCtrl;
        this.productService = productService;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        let product_id = this.activatedRoute.snapshot.paramMap.get('id');
        this.productService.getProductDetails(product_id)
            .then((product_details) => {
            this.productInfo = product_details;
        })
            .catch((error) => {
            console.log(error);
        });
    }
};
CheckoutPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
];
CheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: __webpack_require__(/*! raw-loader!./checkout.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/checkout/checkout.page.html"),
        styles: [__webpack_require__(/*! ./checkout.page.scss */ "./src/app/pages/checkout/checkout.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
], CheckoutPage);



/***/ })

}]);
//# sourceMappingURL=pages-checkout-checkout-module-es2015.js.map