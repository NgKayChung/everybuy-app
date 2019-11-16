(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n    </ion-buttons>\n    <ion-title>Home</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-toolbar>\n    <ion-searchbar placeholder=\"Search by Product Name\" style=\"width: 90%; margin: auto;\" slot=\"start\" (ionChange)=\"onSearchChange($event)\"></ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\">\n        <ion-icon name=\"funnel\"></ion-icon>\n        <label>Filter</label>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ng-template [ngIf]=\"products && products.length > 0\" [ngIfElse]=\"noProduct\">\n    <!-- <ion-list>\n      <ion-item class=\"item-thumbnail-left\" *ngFor=\"let product of products\"  [routerLink]=\"['/product-details']\">\n        <ion-img class=\"image\" src=\"product.image_urls_st.split(',')[0]\"></ion-img>\n        <div class=\"item-info\">\n          <p class=\"prod-name\">\n            {{product.product_name_st}}\n          </p>\n          <p class=\"price\">\n            RM {{product.product_price_nm.toFixed(2)}}\n          </p>\n        </div>\n      </ion-item>\n    </ion-list> -->\n    <ion-virtual-scroll [items]=\"products\" approxItemHeight=\"320px\">\n      <ion-item class=\"item-thumbnail-left\" *virtualItem=\"let product;\" [routerLink]=\"['/product-details/' + product.product_id]\">\n        <ion-img class=\"image\" [src]=\"product.thumbnail_image_st\"></ion-img>\n        <div class=\"item-info\">\n          <p class=\"prod-name\">\n            {{product.product_name_st}}\n          </p>\n          <p class=\"price\">\n            RM {{product.product_price_nm.toFixed(2)}}\n          </p>\n        </div>\n      </ion-item>\n    </ion-virtual-scroll>\n  </ng-template>\n  <ng-template #noProduct>\n    <p style=\"padding: 0px 10px;\">No available product</p>\n  </ng-template>\n  <!-- <ion-buttons>\n    <ion-button [routerLink]=\"['/list']\">\n      <ion-label>List</ion-label>\n      <ion-icon name=\"information-circle\"></ion-icon>\n    </ion-button>\n  </ion-buttons> -->\n</ion-content>\n<app-tabs></app-tabs>"

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _components_tabs_tabs_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/tabs/tabs.component.module */ "./src/app/components/tabs/tabs.component.module.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ]),
            _components_tabs_tabs_component_module__WEBPACK_IMPORTED_MODULE_7__["TabsModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Product */\n.price {\n  font-size: 16px;\n  font-weight: 500;\n  color: #025296;\n}\n.prod-name {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.image {\n  width: 30%;\n  height: auto;\n  margin-right: 0.5rem;\n  padding: 0.5rem;\n}\n.item-info {\n  width: 70%;\n}\n/* Product Image Zoom View */\n.imageZoom {\n  width: 100%;\n  margin: 30% auto;\n}\n.image-modal {\n  width: 100% !important;\n  height: 100%;\n  top: 0 !important;\n  left: 0 !important;\n}\n.transparent {\n  background: rgba(255, 255, 255, 0.9);\n}\n.slider {\n  width: 100%;\n  height: 100%;\n}\n/* Search */\n.highlighted {\n  color: #1717A7;\n}\n.search-reset-button {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  color: #bbb;\n}\n.bar-subsubfooter {\n  bottom: 88px;\n}\n/* Form Validation */\n.has-errors {\n  border-bottom: 3px solid #B83E2C;\n}\n.no-errors {\n  border-bottom: 3px solid green;\n}\n/* Shopping Cart */\n.alert-empty-cart {\n  text-align: center;\n  font-size: 40px;\n  padding-top: 20%;\n  opacity: 0.1;\n}\nion-searchbar {\n  --placeholder-opacity: .7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXGxcXERvY3VtZW50c1xcTW9iaWxlIFRlY2hub2xvZ3kgUHJvamVjdFxcRXZlcnlCdXkvc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFBO0FBQ0E7RUFDQyxlQUFBO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0FDQ0Y7QURFQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUNDRjtBREVBO0VBQ0MsVUFBQTtFQUNDLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNDRjtBREVBO0VBQ0UsVUFBQTtBQ0NGO0FERUEsNEJBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0NGO0FEQ0E7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRUo7QURBQTtFQUNFLG9DQUFBO0FDR0Y7QUREQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSUY7QUREQSxXQUFBO0FBQ0E7RUFDSSxjQUFBO0FDSUo7QURIQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDTUY7QURMRTtFQUNDLFlBQUE7QUNRSDtBRExBLG9CQUFBO0FBQ0E7RUFDRSxnQ0FBQTtBQ1FGO0FETEE7RUFDRSw4QkFBQTtBQ1FGO0FETEEsa0JBQUE7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ1FKO0FETEE7RUFDRSx5QkFBQTtBQ1FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFByb2R1Y3QgKi9cbi5wcmljZXtcblx0Zm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAyNTI5Njtcbn1cblxuLnByb2QtbmFtZSB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4uaW1hZ2Uge1xuXHR3aWR0aDogMzAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5pdGVtLWluZm8ge1xuICB3aWR0aDogNzAlO1xufVxuXG4vKiBQcm9kdWN0IEltYWdlIFpvb20gVmlldyAqL1xuLmltYWdlWm9vbXtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMzAlIGF1dG87XG59XG4uaW1hZ2UtbW9kYWwge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRvcDogMCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcbn1cbi50cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC45KTtcbn1cbi5zbGlkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBTZWFyY2ggKi9cbi5oaWdobGlnaHRlZCB7ICAgICBcbiAgICBjb2xvcjogIzE3MTdBNzsgfVxuLnNlYXJjaC1yZXNldC1idXR0b257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgY29sb3I6ICNiYmI7fVxuICAuYmFyLXN1YnN1YmZvb3RlcntcbiAgXHRib3R0b206IDg4cHg7XG4gIH1cblxuLyogRm9ybSBWYWxpZGF0aW9uICovXG4uaGFzLWVycm9ycyB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjQjgzRTJDO1xufVxuIFxuLm5vLWVycm9ycyB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBncmVlbjtcbn1cblxuLyogU2hvcHBpbmcgQ2FydCAqL1xuLmFsZXJ0LWVtcHR5LWNhcnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwJTtcbiAgICBvcGFjaXR5OiAwLjE7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IC43O1xufSIsIi8qIFByb2R1Y3QgKi9cbi5wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMjUyOTY7XG59XG5cbi5wcm9kLW5hbWUge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLmltYWdlIHtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4uaXRlbS1pbmZvIHtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLyogUHJvZHVjdCBJbWFnZSBab29tIFZpZXcgKi9cbi5pbWFnZVpvb20ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAzMCUgYXV0bztcbn1cblxuLmltYWdlLW1vZGFsIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDAgIWltcG9ydGFudDtcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4udHJhbnNwYXJlbnQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG59XG5cbi5zbGlkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBTZWFyY2ggKi9cbi5oaWdobGlnaHRlZCB7XG4gIGNvbG9yOiAjMTcxN0E3O1xufVxuXG4uc2VhcmNoLXJlc2V0LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgY29sb3I6ICNiYmI7XG59XG5cbi5iYXItc3Vic3ViZm9vdGVyIHtcbiAgYm90dG9tOiA4OHB4O1xufVxuXG4vKiBGb3JtIFZhbGlkYXRpb24gKi9cbi5oYXMtZXJyb3JzIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNCODNFMkM7XG59XG5cbi5uby1lcnJvcnMge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgZ3JlZW47XG59XG5cbi8qIFNob3BwaW5nIENhcnQgKi9cbi5hbGVydC1lbXB0eS1jYXJ0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG4gIHBhZGRpbmctdG9wOiAyMCU7XG4gIG9wYWNpdHk6IDAuMTtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogLjc7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");




let HomePage = class HomePage {
    constructor(authService, productService) {
        this.authService = authService;
        this.productService = productService;
        this.offset = 0;
    }
    ionViewWillEnter() {
        this.products = {};
        this.retrieveProducts();
    }
    onSearchChange(e) {
        let value = e.detail.value;
        if (value == '') {
            this.offset = 0;
            this.retrieveProducts();
            return;
        }
        this.productService.searchProduct(value)
            .then((productsData) => {
            this.products = productsData;
        })
            .catch((error) => {
            this.products = {};
        });
    }
    retrieveProducts() {
        this.productService.load()
            .then((productsData) => {
            this.products = productsData;
        })
            .catch((error) => {
            console.log(error);
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
        providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]],
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map