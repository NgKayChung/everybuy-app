(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-details-product-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/product-details/product-details.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/product-details/product-details.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\" (ionScroll)=\"scrollScreen($event)\">\n  <ion-header class=\"atTop scrolledTop\" #myHeader>\n    <ion-toolbar color=\"secondary\">\n      <ion-buttons>\n        <ion-back-button defaultHref=\"/home\"></ion-back-button>\n        <ng-template [ngIf]=\"productInfo\">\n          <ion-title>\n            {{productInfo.product_name_st}}\n          </ion-title>\n        </ng-template>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ng-template [ngIf]=\"productInfo\" [ngIfElse]=\"noDetails\">\n    <ion-slides pager=\"true\" [options]=\"slideOpts\">\n      <ion-slide *ngFor=\"let productImage of getImages()\">\n        <img style=\"width: 100%;\" src=\"{{productImage}}\">\n      </ion-slide>\n    </ion-slides>\n    <ion-card>\n      <ion-item lines=\"none\">\n        <h3 id=\"prod-name\">\n          {{productInfo.product_name_st}}\n        </h3>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <h4 id=\"price\" style=\"color: #025296;\">\n          RM {{productInfo.product_price_nm.toFixed(2)}}\n        </h4>\n      </ion-item>\n      <!-- <p class=\"category\">\n        Category: {{productInfo.product_cat_st}}\n      </p>\n      <p class=\"sub-category\">\n        Sub-Category: {{productInfo.product_subcat_st}}\n      </p> -->\n    </ion-card>\n    <ion-card>\n      <ion-item-group>\n        <ion-item lines=\"full\">\n          <ion-label style=\"font-weight: bold;\">\n            Product Details\n            <ion-icon name=\"information-circle-outline\"></ion-icon>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <ion-label>Stock</ion-label>\n          <ion-label>{{productInfo.product_stock_nm}}</ion-label>\n        </ion-item>\n        <ion-item lines=\"full\">\n          <p style=\"color: #5A5A5A;\" [innerHTML]=\"productInfo.product_desc_st\" class=\"description\"></p>\n        </ion-item>\n      </ion-item-group>\n    </ion-card>\n  </ng-template>\n  <ng-template #noDetails>\n      <p style=\"padding: 0px 10px;\">Loading</p>\n  </ng-template>\n</ion-content>\n<ion-footer>\n  <ion-button expand=\"full\" color=\"primary\" (click)=\"purchase()\">\n    <ion-label>Purchase Now</ion-label>\n    <ion-icon name=\"cart\"></ion-icon>\n    <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n  </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/product-details/product-details.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/product-details/product-details.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProductDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function() { return ProductDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-details.page */ "./src/app/pages/product-details/product-details.page.ts");







var routes = [
    {
        path: '',
        component: _product_details_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsPage"]
    }
];
var ProductDetailsPageModule = /** @class */ (function () {
    function ProductDetailsPageModule() {
    }
    ProductDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_product_details_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsPage"]]
        })
    ], ProductDetailsPageModule);
    return ProductDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/product-details/product-details.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/product-details/product-details.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #F1F1F1;\n}\n\n/** scroll event styles start **/\n\nion-header.atTop {\n  position: relative;\n}\n\nion-header.scrolledTop {\n  top: -56px;\n  -webkit-transform: translate(0px, 56px);\n          transform: translate(0px, 56px);\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\nion-header.scrolled > ion-toolbar {\n  --ion-color-base: #ffffff30 !important;\n  color: black;\n}\n\nion-header.scrolled {\n  position: fixed;\n}\n\n/** scroll event styles end **/\n\nion-title {\n  overflow: hidden;\n}\n\nion-card:first-of-type {\n  margin: 0px;\n  padding: 10px 0px;\n  background-color: white;\n  color: black;\n}\n\nion-card {\n  margin: 10px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1kZXRhaWxzL0M6XFxVc2Vyc1xcbFxcRG9jdW1lbnRzXFxNb2JpbGUgVGVjaG5vbG9neSBQcm9qZWN0XFxFdmVyeUJ1eS9zcmNcXGFwcFxccGFnZXNcXHByb2R1Y3QtZGV0YWlsc1xccHJvZHVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBLGdDQUFBOztBQUNBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksc0NBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FEQ0EsOEJBQUE7O0FBRUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGMUYxRjE7XHJcbn1cclxuXHJcbi8qKiBzY3JvbGwgZXZlbnQgc3R5bGVzIHN0YXJ0ICoqL1xyXG5pb24taGVhZGVyLmF0VG9wIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuaW9uLWhlYWRlci5zY3JvbGxlZFRvcCB7XHJcbiAgICB0b3A6IC01NnB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCA1NnB4KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG59XHJcblxyXG5pb24taGVhZGVyLnNjcm9sbGVkID4gaW9uLXRvb2xiYXIge1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogI2ZmZmZmZjMwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIuc2Nyb2xsZWQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcbi8qKiBzY3JvbGwgZXZlbnQgc3R5bGVzIGVuZCAqKi9cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5pb24tY2FyZDpmaXJzdC1vZi10eXBlIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRjFGMUYxO1xufVxuXG4vKiogc2Nyb2xsIGV2ZW50IHN0eWxlcyBzdGFydCAqKi9cbmlvbi1oZWFkZXIuYXRUb3Age1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi1oZWFkZXIuc2Nyb2xsZWRUb3Age1xuICB0b3A6IC01NnB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDU2cHgpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuaW9uLWhlYWRlci5zY3JvbGxlZCA+IGlvbi10b29sYmFyIHtcbiAgLS1pb24tY29sb3ItYmFzZTogI2ZmZmZmZjMwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWhlYWRlci5zY3JvbGxlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLyoqIHNjcm9sbCBldmVudCBzdHlsZXMgZW5kICoqL1xuaW9uLXRpdGxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLWNhcmQ6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW46IDEwcHggMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/product-details/product-details.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/product-details/product-details.page.ts ***!
  \***************************************************************/
/*! exports provided: ProductDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPage", function() { return ProductDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








var ProductDetailsPage = /** @class */ (function () {
    function ProductDetailsPage(navCtrl, loadingController, activatedRoute, router, auth, productService, orderService) {
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.auth = auth;
        this.productService = productService;
        this.orderService = orderService;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
    }
    ProductDetailsPage.prototype.ngOnInit = function () {
    };
    ProductDetailsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            var product_id = params.get('id');
            _this.productService.getProductDetails(product_id)
                .then(function (product_details) {
                _this.productInfo = product_details;
            })
                .catch(function (error) {
                console.log(error);
            });
        });
    };
    ProductDetailsPage.prototype.getImages = function () {
        return (this.productInfo.image_urls_st ? this.productInfo.image_urls_st.split(',') : ["http://my-test-11.slatic.net/p/132ce03862f288b8d1eec9e3d8b972aa.jpg_340x340q80.jpg"]);
    };
    ProductDetailsPage.prototype.getProductPrice = function () {
        return "Price: RM " + this.productInfo.product_price_nm.toFixed(2);
    };
    ProductDetailsPage.prototype.purchase = function () {
        var _this = this;
        this.auth.isGuest()
            .then(function (userIsGuest_bl) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var product_id;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (userIsGuest_bl == true) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                        title: "Guest",
                        html: "To purchase the item<br/>Kindly login to an account first",
                        type: "info",
                        showCancelButton: true,
                        confirmButtonText: "Ok, Login Now",
                        cancelButtonText: "Return"
                    }).then(function (result) {
                        if (result.value) {
                            _this.auth.logoutUser();
                        }
                        else {
                            console.log("User cancels purchase and login");
                        }
                    });
                }
                else {
                    this.orderService.removeAnyExistingOrder();
                    product_id = this.activatedRoute.snapshot.paramMap.get('id');
                    this.navCtrl.navigateRoot("/checkout/" + product_id);
                }
                return [2 /*return*/];
            });
        }); })
            .catch(function (error) {
            console.log(error);
        });
    };
    ProductDetailsPage.prototype.scrollScreen = function (e) {
        if (e.detail.scrollTop > 0) {
            this.myHeader["el"].classList.remove("atTop");
            this.myHeader["el"].classList.replace("scrolledTop", "scrolled");
        }
        else {
            this.myHeader["el"].classList.replace("scrolled", "scrolledTop");
            this.myHeader["el"].classList.add("atTop");
        }
    };
    ProductDetailsPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Hellooo',
                            duration: 2000
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductDetailsPage.prototype.presentLoadingWithOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: null,
                            duration: 5000,
                            message: 'Please wait...',
                            translucent: true,
                            cssClass: 'custom-class custom-loading'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductDetailsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
        { type: _services_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"])
    ], ProductDetailsPage.prototype, "myHeader", void 0);
    ProductDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! raw-loader!./product-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/product-details/product-details.page.html"),
            styles: [__webpack_require__(/*! ./product-details.page.scss */ "./src/app/pages/product-details/product-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"]])
    ], ProductDetailsPage);
    return ProductDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-product-details-product-details-module-es5.js.map