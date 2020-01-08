(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-preference-preference-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/preference/preference.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/preference/preference.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>\n      Preferences\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\">\n    <img src=\"/assets/shapes.svg\" alt=\"\" />\n    <ion-card-header>\n      <ion-card-title id=\"username-title\">...</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n  <ion-list>\n    <ng-template [ngIf]=\"is_guest_bl != true\">\n      <ion-item [routerLink]=\"['/profile']\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"person\"></ion-icon>\n        <ion-label>Account Settings</ion-label>\n      </ion-item>\n    </ng-template>\n    <ion-item [routerLink]=\"['/about']\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"information-circle-outline\"></ion-icon>\n      <ion-label>About Us</ion-label>\n    </ion-item>\n    <ion-item (click)=\"logout()\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"log-out\"></ion-icon>\n      <ion-label>Logout</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<app-tabs></app-tabs>"

/***/ }),

/***/ "./src/app/pages/preference/preference.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/preference/preference.module.ts ***!
  \*******************************************************/
/*! exports provided: PreferencePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferencePageModule", function() { return PreferencePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _preference_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preference.page */ "./src/app/pages/preference/preference.page.ts");
/* harmony import */ var _components_tabs_tabs_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/tabs/tabs.component.module */ "./src/app/components/tabs/tabs.component.module.ts");








let PreferencePageModule = class PreferencePageModule {
};
PreferencePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _preference_page__WEBPACK_IMPORTED_MODULE_6__["PreferencePage"]
                }
            ]),
            _components_tabs_tabs_component_module__WEBPACK_IMPORTED_MODULE_7__["TabsModule"]
        ],
        declarations: [_preference_page__WEBPACK_IMPORTED_MODULE_6__["PreferencePage"]]
    })
], PreferencePageModule);



/***/ }),

/***/ "./src/app/pages/preference/preference.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/preference/preference.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJlZmVyZW5jZS9DOlxcVXNlcnNcXGxcXERvY3VtZW50c1xcTW9iaWxlIFRlY2hub2xvZ3kgUHJvamVjdFxcRXZlcnlCdXkvc3JjXFxhcHBcXHBhZ2VzXFxwcmVmZXJlbmNlXFxwcmVmZXJlbmNlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJlZmVyZW5jZS9wcmVmZXJlbmNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZWZlcmVuY2UvcHJlZmVyZW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/preference/preference.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/preference/preference.page.ts ***!
  \*****************************************************/
/*! exports provided: PreferencePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferencePage", function() { return PreferencePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/profile.service */ "./src/app/services/profile.service.ts");




let PreferencePage = class PreferencePage {
    constructor(auth, profileService) {
        this.auth = auth;
        this.profileService = profileService;
    }
    ionViewWillEnter() {
        this.auth.isGuest()
            .then((isGuest_bl) => {
            this.is_guest_bl = isGuest_bl;
            if (isGuest_bl == true) {
                document.getElementById("username-title").innerHTML = "Hi, Guest!";
            }
            else {
                this.profileService.getUserProfile()
                    .then((user_data) => {
                    document.getElementById("username-title").innerHTML = "Hi, " + user_data["username_st"] + "!";
                })
                    .catch((error) => {
                    console.log(error);
                    document.getElementById("username-title").innerHTML = "...";
                });
            }
        })
            .catch((error) => {
            console.log(error);
            document.getElementById("username-title").innerHTML = "...";
        });
    }
    logout() {
        this.auth.logoutUser();
    }
};
PreferencePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] }
];
PreferencePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-preference',
        template: __webpack_require__(/*! raw-loader!./preference.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/preference/preference.page.html"),
        styles: [__webpack_require__(/*! ./preference.page.scss */ "./src/app/pages/preference/preference.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]])
], PreferencePage);



/***/ })

}]);
//# sourceMappingURL=pages-preference-preference-module-es2015.js.map