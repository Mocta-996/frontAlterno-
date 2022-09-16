(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+nPA":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\PC_CASA\Documents\guidetour\src\main.ts */"zUnb");


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var firebase_service_1 = __webpack_require__(/*! ../../services/firebase.service */ "sXhV");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fireservice) {
        this.fireservice = fireservice;
        this.Username = "";
        this.FirstName = "";
        this.LastName = "";
        this.EMail = "example@gmail.com";
        this.Adress = "city of world";
        this.Age = "0";
        this.Description = "Nothing special";
        this.Title = "";
        this.Body = "";
        this.User = "1";
        this.Datetoday = "";
        this.rol = "1";
        this.estado = "0";
    }
    RegisterComponent.prototype.Register = function () {
        var data = {
            Username: this.Username,
            FirstName: this.FirstName,
            LastName: this.LastName,
            EMail: this.EMail,
            Adress: this.Adress,
            Age: this.Age,
            Description: this.Description
        };
        this.fireservice.createUser(data);
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: firebase_service_1.FirebaseService }
    ]; };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "OOnH").default,
            styles: [__webpack_require__(/*! ./register.component.css */ "+nPA").default]
        }),
        __metadata("design:paramtypes", [firebase_service_1.FirebaseService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "47Jg":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarComponent = exports.ROUTES = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
exports.ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'pe-7s-graph', class: '' },
    { path: '/create', title: 'Crear tema', icon: 'pe-7s-user', class: '' },
    { path: '/user', title: 'Editar usuario', icon: 'pe-7s-user', class: '' },
    { path: '/Register', title: 'Register', icon: 'pe-7s-door-lock', class: '' },
    { path: '/table', title: 'Ranking Bancario', icon: 'pe-7s-note2', class: '' },
    { path: '/promedio', title: 'Promedios grafico', icon: 'pe-7s-news-paper', class: '' },
    { path: '/login', title: 'login', icon: 'pe-7s-news-paper', class: '' },
    // { path: '/icons', title: 'Montos periodo',  icon:'pe-7s-science', class: '' },
    // { path: '/maps', title: 'Promedios',  icon:'pe-7s-map-marker', class: '' },
    { path: '/notifications', title: 'Notifications', icon: 'pe-7s-bell', class: '' },
    { path: '/upgrade', title: 'Crud Banca', icon: 'pe-7s-diskette', class: 'active-pro' },
];
// { path: '/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = exports.ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent.ctorParameters = function () { return []; };
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "zvoc").default
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;


/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AK6u":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"wrapper\">\n  <div class=\"sidebar\" data-color=\"red\" data-image=\"\">\n      <app-sidebar></app-sidebar>\n      <div class=\"sidebar-background\" style=\"background-image: url(assets/img/sidebar-5.jpg)\"></div>\n  </div>\n\n  <div class=\"main-panel\">\n      <navbar-cmp></navbar-cmp>\n      <router-outlet></router-outlet>\n      <div *ngIf=\"isMap('maps')\">\n          <footer-cmp></footer-cmp>\n      </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
exports.environment = {
    production: false
};


/***/ }),

/***/ "CpO+":
/*!************************************************!*\
  !*** ./src/app/shared/navbar/navbar.module.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavbarModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var navbar_component_1 = __webpack_require__(/*! ./navbar.component */ "EtQq");
var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule.prototype.logout = function () {
        localStorage.clear();
        console.log('se salio correctamente');
    };
    NavbarModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule, common_1.CommonModule],
            declarations: [navbar_component_1.NavbarComponent],
            exports: [navbar_component_1.NavbarComponent]
        })
    ], NavbarModule);
    return NavbarModule;
}());
exports.NavbarModule = NavbarModule;


/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavbarComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var sidebar_component_1 = __webpack_require__(/*! ../../sidebar/sidebar.component */ "47Jg");
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element) {
        this.element = element;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = sidebar_component_1.ROUTES.filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: common_1.Location },
        { type: core_1.ElementRef }
    ]; };
    NavbarComponent = __decorate([
        core_1.Component({
            // moduleId: module.id,
            selector: 'navbar-cmp',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "zRkE").default
        }),
        __metadata("design:paramtypes", [common_1.Location, core_1.ElementRef])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "Khja":
/*!********************************************!*\
  !*** ./src/app/create/create.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var firebase_service_1 = __webpack_require__(/*! ../../services/firebase.service */ "sXhV");
var CreateComponent = /** @class */ (function () {
    function CreateComponent(fireservice) {
        this.fireservice = fireservice;
        this.Title = "";
        this.Body = "";
        this.User = "1";
        this.Datetoday = "";
        this.rol = "1";
        this.estado = "0";
        this.fecharegistro = "";
    }
    CreateComponent.prototype.create = function () {
        this.Datetoday = new Date().toISOString();
        // let data = {    
        //   Title: this.Title,
        //   Body: this.Body,
        //   Date: this.Datetoday
        // }
        //  this.fireservice.createTask(data)
        // console.log('la respuesta->',data);
        var data = {
            Username: "luis",
            FirstName: "cahabon semuc",
            LastName: "rivera",
            EMail: "estructuras52@gmail.com",
            Adress: "df",
            Age: "55",
            Description: "nothin mather",
        };
        var myFirstPromise = this.fireservice.createTask(data);
        console.log("myFirstPromise! " + myFirstPromise);
        console.log("ddf! " + JSON.stringify(myFirstPromise));
        console.log("Ya! ");
        myFirstPromise.then(function (successMessage) {
            // successMessage is whatever we passed in the resolve(...) function above.
            // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
            console.log("Yay! " + successMessage);
        });
    };
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.ctorParameters = function () { return [
        { type: firebase_service_1.FirebaseService }
    ]; };
    CreateComponent = __decorate([
        core_1.Component({
            selector: 'app-create',
            template: __webpack_require__(/*! raw-loader!./create.component.html */ "xX/H").default,
            styles: [__webpack_require__(/*! ./create.component.css */ "qe0N").default]
        }),
        __metadata("design:paramtypes", [firebase_service_1.FirebaseService])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;


/***/ }),

/***/ "OOnH":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\" >\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Create Avatar</h4>\n                    </div>\n                    <div class=\"content\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                    <div class=\"form-group\">\n                                        <label>Username</label>\n                                        <input type=\"text\" class=\"form-control\" name=\"Username\"  [(ngModel)]=\"Username\" value={{Username}} placeholder=\"Username\" >\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                    <div class=\"form-group\">\n                                        <label>FirstName</label>\n                                        <input type=\"text\" class=\"form-control\" name=\"FirstName\"  [(ngModel)]=\"FirstName\" value={{FirstName}}  placeholder=\"FirstName\" >\n                                    </div>\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <div class=\"form-group\">\n                                        <label>LastName</label>\n                                        <input type=\"text\" class=\"form-control\"  name=\"LastName\" [(ngModel)]=\"LastName\" value={{LastName}}  placeholder=\"LastName\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                    <div class=\"form-group\">\n                                        <label>Age</label>\n                                        <input type=\"text\" class=\"form-control\" name=\"Age\"  [(ngModel)]=\"Age\" value={{Age}}  placeholder=\"Age\" >\n                                    </div>\n                                </div>\n\n                                <div class=\"col-md-5\">\n                                    <div class=\"form-group\">\n                                        <label>EMail</label>\n                                        <input type=\"text\" class=\"form-control\" name=\"EMail\"  [(ngModel)]=\"EMail\" value={{EMail}}  placeholder=\"EMail\" >\n                                    </div>\n                                </div>\n\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                    <div class=\"form-group\">\n                                        <label>Adress</label>\n                                        <input type=\"text\" class=\"form-control\" name=\"Adress\"  [(ngModel)]=\"Adress\" value={{Adress}}  placeholder=\"Adress\" >\n                                    </div>\n                                </div>\n                  \n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                    <div class=\"form-group\">\n                                        <label>Description</label>\n                                        <!-- <input type=\"text\" class=\"form-control\" name=\"Description\"  [(ngModel)]=\"Description\" placeholder=\"Tell us something about yourself(hobbies, etc)\" > -->\n                                        <!-- ​<textarea class=\"form-control\" name=\"Description\"  [(ngModel)]=\"Description\" value={{Description}}  placeholder=\"Tell us something about yourself(hobbies, etc)\" rows=\"10\" cols=\"70\"></textarea> -->\n                                        <input type=\"text\" class=\"form-control\" name=\"Description\"  [(ngModel)]=\"Description\" value={{Description}}  placeholder=\"Description\" >\n\n                                    </div>\n                                </div>\n                  \n                            </div>\n\n\n\n\n                         \n                            <button (click)=\"Register()\"  class=\"btn btn-info btn-fill pull-right\">Register</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "P6kD":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminLayoutComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
__webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var perfect_scrollbar_1 = __webpack_require__(/*! perfect-scrollbar */ "t/UT");
var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.router);
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof router_1.NavigationEnd) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof router_1.NavigationEnd; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar_1.default(elemMainPanel);
            ps = new perfect_scrollbar_1.default(elemSidebar);
        }
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMap = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar_1.default(elemMainPanel);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: common_1.Location },
        { type: router_1.Router }
    ]; };
    AdminLayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-layout',
            template: __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "AK6u").default,
            styles: [__webpack_require__(/*! ./admin-layout.component.scss */ "vtrx").default]
        }),
        __metadata("design:paramtypes", [common_1.Location, router_1.Router])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());
exports.AdminLayoutComponent = AdminLayoutComponent;


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var AppComponent = /** @class */ (function () {
    function AppComponent(location) {
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.isMap = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: common_1.Location }
    ]; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu").default,
            styles: [__webpack_require__(/*! ./app.component.css */ "A3xY").default]
        }),
        __metadata("design:paramtypes", [common_1.Location])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "WqEj":
/*!**********************************************!*\
  !*** ./src/promedios/promedios.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromediosComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var PromediosComponent = /** @class */ (function () {
    function PromediosComponent() {
    }
    PromediosComponent.prototype.ngOnInit = function () {
    };
    PromediosComponent.ctorParameters = function () { return []; };
    PromediosComponent = __decorate([
        core_1.Component({
            selector: 'app-promedios',
            template: __webpack_require__(/*! raw-loader!./promedios.component.html */ "wCkB").default,
            styles: [__webpack_require__(/*! ./promedios.component.css */ "kCHX").default]
        }),
        __metadata("design:paramtypes", [])
    ], PromediosComponent);
    return PromediosComponent;
}());
exports.PromediosComponent = PromediosComponent;


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var http_1 = __webpack_require__(/*! @angular/common/http */ "tk/3");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var app_routing_1 = __webpack_require__(/*! ./app.routing */ "beVS");
var navbar_module_1 = __webpack_require__(/*! ./shared/navbar/navbar.module */ "CpO+");
var footer_module_1 = __webpack_require__(/*! ./shared/footer/footer.module */ "cNqA");
var sidebar_module_1 = __webpack_require__(/*! ./sidebar/sidebar.module */ "wCP4");
var material_module_1 = __webpack_require__(/*! ./material.module */ "vvyD");
var app_component_1 = __webpack_require__(/*! ./app.component */ "Sy1n");
var admin_layout_component_1 = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
var button_1 = __webpack_require__(/*! @angular/material/button */ "bTqV");
var icon_1 = __webpack_require__(/*! @angular/material/icon */ "NFeN");
var input_1 = __webpack_require__(/*! @angular/material/input */ "qFsG");
var form_field_1 = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
var card_1 = __webpack_require__(/*! @angular/material/card */ "Wp6s");
var promedios_component_1 = __webpack_require__(/*! ../promedios/promedios.component */ "WqEj");
var core_2 = __webpack_require__(/*! @angular/core */ "fXoL");
var create_component_1 = __webpack_require__(/*! ./create/create.component */ "Khja");
// import { AngularFireModule } from 'angularfire2';
var environment_1 = __webpack_require__(/*! ../environment/environment */ "pMmW");
var firebase_service_1 = __webpack_require__(/*! ../services/firebase.service */ "sXhV");
// import { AngularFireStorageModule } from 'angularfire2/storage';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireAuthModule } from 'angularfire2/auth';
var register_component_1 = __webpack_require__(/*! ./register/register.component */ "1W4x");
var fire_1 = __webpack_require__(/*! @angular/fire */ "spgP");
var firestore_1 = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
var storage_1 = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
var auth_1 = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                http_1.HttpClientModule,
                navbar_module_1.NavbarModule,
                footer_module_1.FooterModule,
                sidebar_module_1.SidebarModule,
                app_routing_1.AppRoutingModule,
                platform_browser_1.BrowserModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                material_module_1.MaterialModule,
                input_1.MatInputModule,
                form_field_1.MatFormFieldModule,
                card_1.MatCardModule,
                fire_1.AngularFireModule.initializeApp(environment_1.environment.firebase),
                firestore_1.AngularFirestoreModule,
                auth_1.AngularFireAuthModule,
                storage_1.AngularFireStorageModule // storage
                // AngularFireStorageModule,
                // AngularFireModule.initializeApp(environment.firebase),
                // AngularFirestoreModule,
                // AngularFireAuthModule
                // Md5
            ],
            schemas: [core_2.CUSTOM_ELEMENTS_SCHEMA],
            declarations: [
                app_component_1.AppComponent,
                admin_layout_component_1.AdminLayoutComponent,
                promedios_component_1.PromediosComponent,
                create_component_1.CreateComponent,
                register_component_1.RegisterComponent
            ],
            providers: [
                firebase_service_1.FirebaseService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var admin_layout_component_1 = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
var login_component_1 = __webpack_require__(/*! ../app/login/login.component */ "vtpD");
var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }, {
        path: '',
        component: admin_layout_component_1.AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'LoginComponent'
    },
    { path: 'login', component: login_component_1.LoginComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "cNqA":
/*!************************************************!*\
  !*** ./src/app/shared/footer/footer.module.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var footer_component_1 = __webpack_require__(/*! ./footer.component */ "jQpT");
var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule, common_1.CommonModule],
            declarations: [footer_component_1.FooterComponent],
            exports: [footer_component_1.FooterComponent]
        })
    ], FooterModule);
    return FooterModule;
}());
exports.FooterModule = FooterModule;


/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"IqXj",
		"layouts-admin-layout-admin-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "crnd";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "in5m":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n\n\n\n\n\n    <div class=\"main-content\" >\n      <div class=\"container-fluid\">\n          <div class=\"row\">\n              <div class=\"col-md-8\">\n                  <div class=\"card\">\n                      <div class=\"header\">\n                          <h4 class=\"title\">Login</h4>\n                      </div>\n                      <div class=\"content\">\n                          <form>\n\n                              <div class=\"row\">\n                                  <div class=\"col-md-6\">\n                                      <div class=\"form-group\">\n                                          <label>User</label>\n                                          <input type=\"text\"  [(ngModel)]=\"Email\"  name=\"Email\" class=\"form-control\" placeholder=\"Username\">\n                                      </div>\n                                  </div>\n                              \n                              </div>\n  \n                              <div class=\"row\">\n                                  <div class=\"col-md-6\">\n                                      <div class=\"form-group\">\n                                          <label>Password</label>\n                                          <input type=\"password\"  [(ngModel)]=\"Password\"  name=\"Password\" class=\"form-control\" placeholder=\"Password\" >\n                                      </div>\n                                  </div>\n                              </div>\n\n           \n                              <button  (click)=\"Loguearse()\" type=\"submit\" class=\"btn btn-info btn-fill pull-right\">Login</button>\n                              <button  (click)=\"obtgner()\" type=\"submit\" class=\"btn btn-info btn-fill pull-right\">obtgner</button>\n                              <button  (click)=\"ver()\" type=\"submit\" class=\"btn btn-info btn-fill pull-right\">ver</button>\n\n\n                              <div class=\"clearfix\"></div>\n                          </form>\n                      </div>\n                  </div>\n              </div>\n\n          </div>\n      </div>\n  </div>\n  ");

/***/ }),

/***/ "jGP6":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"#\">\n                        Home\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Company\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Portfolio\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Blog\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <p class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}} <a href=\"http://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n        </p>\n    </div>\n</footer>\n");

/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'footer-cmp',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "jGP6").default
        })
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "kCHX":
/*!***********************************************!*\
  !*** ./src/promedios/promedios.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9tZWRpb3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "n7sk":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "pMmW":
/*!****************************************!*\
  !*** ./src/environment/environment.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
exports.environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDgDQk59kzUMi_dKYpMROrAnVQqW179HzY",
        authDomain: "celphone-97250.firebaseapp.com",
        databaseURL: "https://celphone-97250.firebaseio.com",
        projectId: "celphone-97250",
        storageBucket: "celphone-97250.appspot.com",
        messagingSenderId: "624229457384",
        appId: "1:624229457384:web:19768ee2bc88f674d9585d"
    }
};


/***/ }),

/***/ "qe0N":
/*!*********************************************!*\
  !*** ./src/app/create/create.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "sXhV":
/*!******************************************!*\
  !*** ./src/services/firebase.service.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseService = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
// import { AngularFirestore } from 'angularfire2/firestore';
var firestore_1 = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
var FirebaseService = /** @class */ (function () {
    function FirebaseService(afs) {
        this.afs = afs;
        this.Datetoday = "";
    }
    FirebaseService.prototype.createTask = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // let currentUser = firebase.auth().currentUser;
            console.log('la value.Date->', value.Date);
            _this.Datetoday = new Date().toISOString();
            _this.afs.collection('data').doc('2').collection('posts').add({
                Title: value.Title,
                Body: value.Body,
                Datepost: _this.Datetoday,
            })
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    FirebaseService.prototype.createUser = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // let currentUser = firebase.auth().currentUser;
            // console.log('la value.Date->',value.Date);
            _this.Datetoday = new Date().toISOString();
            _this.afs.collection('users').add({
                // this.afs.collection('data').doc('899').collection('posts').add({
                FirstName: value.FirstName,
                LastName: value.LastName,
                Username: value.Username,
                Age: value.Age,
                Adress: value.Adress,
                Description: value.Description,
                EMail: value.EMail,
                Datepost: _this.Datetoday,
            })
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    FirebaseService.ctorParameters = function () { return [
        { type: firestore_1.AngularFirestore }
    ]; };
    FirebaseService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [firestore_1.AngularFirestore])
    ], FirebaseService);
    return FirebaseService;
}());
exports.FirebaseService = FirebaseService;


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var services_service_1 = __webpack_require__(/*! ../../services/services.service */ "zxOk");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(
    // private MD5: Md5,
    router, formBuilder, servicio) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.servicio = servicio;
        this.Email = "";
        this.Password = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        // cuerpopregunta: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(2000)]]
        this.myForm = new forms_1.FormGroup({
            'name': new forms_1.FormControl(null),
            'email': new forms_1.FormControl(null, forms_1.Validators.email)
        });
    };
    LoginComponent.prototype.obtgner = function () {
        this.servicio.getDataget(this.Email).subscribe(function (data) {
            console.log('answer es >' + JSON.stringify(data));
        });
    };
    LoginComponent.prototype.ver = function () {
        this.servicio.getDataget8().subscribe(function (data) {
            console.log('answer es >' + JSON.stringify(data));
        });
    };
    LoginComponent.prototype.Loguearse = function () {
        var _this = this;
        var newpass = "202cb962ac59075b964b07152d234b70";
        //  newpass=''+md5.appendStr(this.Password).end();
        newpass = this.Password;
        console.log('Email>' + this.Email);
        console.log('Password>' + newpass);
        // console.log('la newpasshashStr->',hash);
        newpass = this.servicio.tomd5(newpass);
        // // this.router.navigate(['/listado']);
        // const jsonData={codigo:this.Email,password:this.Password}
        // this.servicio.postLogin(jsonData)
        // console.log('this.Email>999999'+this.Email+'999999')
        // console.log('this.newpass>999999'+newpass+'999999')
        var formData = new FormData();
        formData.append('titulo', 'fast and furios');
        formData.append('alternativo', 'alternativo');
        formData.append('anio', '2009');
        formData.append('genero', 'rock9');
        formData.append('protagonistas', 'paul walker vin diesel');
        formData.append('creador', 'Warner');
        formData.append('temporadas', '20');
        formData.append('duracion', '29.5');
        formData.append('averagerating', '9.9');
        formData.append('numvotes', '4');
        formData.append('idtitleimdb', '3');
        formData.append('replicado', '45');
        //  formData.append('codigo', 'bases2');
        //  formData.append('password', 'abc');
        this.servicio.postForm(formData, 'preguntas').subscribe(function (msg) {
            console.log('la respuesta->', msg);
            // try {
            //   var a:any=msg
            //   var message=a.resultado
            //   console.log('message '+message+'999999')
            //   if(message=="exito"){
            //     this.Loguearseyredirigir()
            //     // this.servicio.message('Logueado correctamente','success')
            //   }else   this.servicio.message('credenciales incorrectas','error')
            // } catch (error) {
            // }
            // this.servicio.setearparametros(msg)
            // this.message('Bienvenido!','success')
            // this.router.navigate(['/listado']);
            //     formData.append('password', 'abc');
        }, function (err) {
            _this.servicio.message('hubo un error contactando al server', 'error');
        });
    };
    LoginComponent.prototype.Loguearseyredirigir = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('codigo', this.Email);
        this.servicio.postForm(formData, 'obtener_usuario').subscribe(function (msg) {
            console.log('la respuestaLoguearseyredirigir->', msg);
            var a = msg;
            console.log('la codigo->', a.codigo);
            console.log('la estado->', a.estado);
            console.log('la codigo->', a.fecharegistro);
            console.log('la codigo->', a.codigo);
            localStorage.setItem('codigo', a.codigo);
            localStorage.setItem('estado', a.estado);
            localStorage.setItem('fecharegistro', a.fecharegistro);
            localStorage.setItem('nombreusuario', a.nombreusuario);
            localStorage.setItem('password', a.password);
            localStorage.setItem('rol', a.rol);
            localStorage.setItem('user', _this.Email);
        }, function (err) {
            console.log('hubo un error contactando al serverobtener_usuario');
        });
        // this.servicio.getDataget("datos") .subscribe(data=>{
        // });
        // localStorage.setItem('user', this.Email);
        this.servicio.navegarwithparamas2('dashboard', this.Email, "1");
    };
    LoginComponent.prototype.login = function () {
        this.servicio.navegar('dashboard');
    };
    LoginComponent.prototype.salir = function () {
        // this.servicio.cerrarsesion()
    };
    LoginComponent.prototype.Logearse = function (Fcorreo, Fpass) {
        // this.router.navigate(['/listado']);
        // const jsonData={correo:Fcorreo,password:Fpass}
        // this.servicio.postLogin(jsonData).subscribe(msg=>{
        //   console.log('la respuesta->',msg);
        //   // this.servicio.setearparametros(msg)
        //   // this.message('Bienvenido!','success')
        //   // this.router.navigate(['/listado']);
        // },err=>{
        //   this.servicio.message('credenciales incorrectas','error')
        // }) 
    };
    LoginComponent.ctorParameters = function () { return [
        { type: router_1.Router },
        { type: forms_1.FormBuilder },
        { type: services_service_1.ServicesService }
    ]; };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "in5m").default,
            styles: [__webpack_require__(/*! ./login.component.css */ "n7sk").default]
        }),
        __metadata("design:paramtypes", [router_1.Router, forms_1.FormBuilder, services_service_1.ServicesService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "vtrx":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "vvyD":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var slider_1 = __webpack_require__(/*! @angular/material/slider */ "5RNC");
var card_1 = __webpack_require__(/*! @angular/material/card */ "Wp6s");
var button_1 = __webpack_require__(/*! @angular/material/button */ "bTqV");
var form_field_1 = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
var input_1 = __webpack_require__(/*! @angular/material/input */ "qFsG");
var forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
var icon_1 = __webpack_require__(/*! @angular/material/icon */ "NFeN");
var autocomplete_1 = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
var list_1 = __webpack_require__(/*! @angular/material/list */ "MutI");
var divider_1 = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [],
            exports: [
                slider_1.MatSliderModule,
                card_1.MatCardModule,
                button_1.MatButtonModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                icon_1.MatIconModule,
                autocomplete_1.MatAutocompleteModule,
                list_1.MatListModule,
                divider_1.MatDividerModule
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;


/***/ }),

/***/ "wCP4":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.module.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var sidebar_component_1 = __webpack_require__(/*! ./sidebar.component */ "47Jg");
var services_service_1 = __webpack_require__(/*! ../../services/services.service */ "zxOk");
var SidebarModule = /** @class */ (function () {
    function SidebarModule(servicio) {
        this.servicio = servicio;
    }
    SidebarModule.prototype.Loguearse = function () {
        this.servicio.navegar('login');
        /*
            const jsonData={correo:Fcorreo,password:Fpass}
            this.servicio.postLogin(jsonData).subscribe(msg=>{
              console.log('la respuesta->',msg);
              this.servicio.setearparametros(msg)
              this.message('Bienvenido!','success')
              this.router.navigate(['/listado']);
        
            },err=>{
              this.message('credenciales incorrectas','error')
            }) */
    };
    SidebarModule.ctorParameters = function () { return [
        { type: services_service_1.ServicesService }
    ]; };
    SidebarModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule, common_1.CommonModule],
            declarations: [sidebar_component_1.SidebarComponent],
            exports: [sidebar_component_1.SidebarComponent]
        }),
        __metadata("design:paramtypes", [services_service_1.ServicesService])
    ], SidebarModule);
    return SidebarModule;
}());
exports.SidebarModule = SidebarModule;


/***/ }),

/***/ "wCkB":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/promedios/promedios.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>promedios works!</p>\n");

/***/ }),

/***/ "xX/H":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create/create.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\" >\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Create Article</h4>\n                    </div>\n                    <div class=\"content\">\n                        <form>\n                            <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                    <div class=\"form-group\">\n                                        <label>Title</label>\n                                        <input type=\"text\" class=\"form-control\" name=\"Title\"  [(ngModel)]=\"Title\" placeholder=\"Title\" value={{Title}}>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <div class=\"form-group\">\n                                        <label>Body</label>\n                                        <input type=\"text\" class=\"form-control\"  name=\"Body\" [(ngModel)]=\"Body\" placeholder=\"Body\" value={{Body}}>\n                                    </div>\n                                </div>\n                              \n                            </div>\n\n                         \n                          \n\n                            \n                       \n\n                         \n                            <button (click)=\"create()\"  class=\"btn btn-info btn-fill pull-right\">Create Post</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card card-user\">\n                    <div class=\"image\">\n                        <img src=\"https://image.shutterstock.com/image-vector/blank-avatar-photo-icon-design-260nw-1682415103.jpg\" alt=\"...\"/>\n                    </div>\n                    <div class=\"content\">\n                        <div class=\"author\">\n                            <a href=\"#\">\n                                <img class=\"avatar border-gray\" src=\"assets/img/faces/descarga.png\" alt=\"...\"/>\n\n                                <h4 class=\"title\">{{nombre}}<br />\n                                    <small>{{username}}</small>\n                                    <button (click)=\"baja()\"  class=\"btn btn-danger btn-fill pull-right\">Dar de baja</button>\n\n                                </h4>\n                            </a>\n                        </div>\n                        <p class=\"description text-center\"> \"Usuario del portal\"\n                        </p>\n\n                    </div>\n                    <hr>\n                    <div class=\"text-center\">\n                        <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-facebook-square\"></i></button>\n                        <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-twitter\"></i></button>\n                        <button href=\"#\" class=\"btn btn-simple\"><i class=\"fa fa-google-plus-square\"></i></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "zRkE":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\" >{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n           \n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"#\">\n                        Account\n                    </a>\n                </li>\n               \n                <li>\n                    <a [routerLink]=\"['/dashboard',{id:4}]\">>\n                        Log out\n                    </a>\n                </li>\n                <li class=\"separator hidden-lg hidden-md\"></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*!

 =========================================================
 * Light Bootstrap Dashboard Angular - v1.7.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-angular2
 * Copyright 2020 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "ZAI4");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "AytR");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ "zvoc":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"sidebar-wrapper\">\n    <div class=\"logo\">\n        <a href=\"http://www.creative-tim.com\" class=\"simple-text\">\n            <div class=\"logo-img\">\n                <img src=\"/assets/img/angular2-logo-white.png\"/>\n            </div>\n            DRIVE & FUN\n        </a>\n    </div>\n    <ul class=\"nav responsive-nav\">\n        <li *ngIf=\"isMobileMenu()\">\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"fa fa-dashboard\"></i>\n\t\t\t\t<p class=\"hidden-lg hidden-md\">Dashboard</p>\n            </a>\n        </li>\n        <li class=\"dropdown\" *ngIf=\"isMobileMenu()\">\n              <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                    <i class=\"fa fa-globe\"></i>\n                    <b class=\"caret hidden-sm hidden-xs\"></b>\n                    <span class=\"notification hidden-sm hidden-xs\">5</span>\n\t\t\t\t\t<p class=\"hidden-lg hidden-md\">\n\t\t\t\t\t\t5 Notifications\n\t\t\t\t\t\t<b class=\"caret\"></b>\n\t\t\t\t\t</p>\n              </a>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Notification 1</a></li>\n                <li><a href=\"#\">Notification 2</a></li>\n                <li><a href=\"#\">Notification 3</a></li>\n                <li><a href=\"#\">Notification 4</a></li>\n                <li><a href=\"#\">Another notification</a></li>\n              </ul>\n        </li>\n        <li *ngIf=\"isMobileMenu()\">\n           <a>\n                <i class=\"fa fa-search\"></i>\n\t\t\t\t<p class=\"hidden-lg hidden-md\">Search</p>\n            </a>\n        </li>\n        <li *ngIf=\"isMobileMenu()\">\n           <a href=\"\">\n               <p>Account</p>\n            </a>\n        </li>\n        <li class=\"dropdown\" *ngIf=\"isMobileMenu()\">\n              <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                    <p>\n    \t\t\t\t\tDropdown\n    \t\t\t\t\t<b class=\"caret\"></b>\n    \t\t\t\t</p>\n\n              </a>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Action</a></li>\n                <li><a href=\"#\">Another action</a></li>\n                <li><a href=\"#\">Something</a></li>\n                <li><a href=\"#\">Another action</a></li>\n                <li><a href=\"#\">Something</a></li>\n                <li class=\"divider\"></li>\n                <li><a href=\"#\">Separated link</a></li>\n              </ul>\n        </li>\n        <li *ngIf=\"isMobileMenu()\">\n            <a>\n                <p>Log out</p>\n            </a>\n        </li>\n        <li class=\"separator hidden-lg hidden-md\" *ngIf=\"isMobileMenu()\"></li>\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}}\">\n            <a  [routerLink]=\"[menuItem.path]\">\n                <i class=\"{{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n");

/***/ }),

/***/ "zxOk":
/*!******************************************!*\
  !*** ./src/services/services.service.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesService = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var http_1 = __webpack_require__(/*! @angular/common/http */ "tk/3");
var router_1 = __webpack_require__(/*! @angular/router */ "tyNb");
var sweetalert2_1 = __webpack_require__(/*! sweetalert2 */ "PSD3");
var md5_1 = __webpack_require__(/*! ts-md5/dist/md5 */ "kScs");
var ServicesService = /** @class */ (function () {
    function ServicesService(router, http) {
        // override the route reuse strategy
        this.router = router;
        this.http = http;
    }
    ServicesService.prototype.tomd5 = function (newpass) {
        var md5 = new md5_1.Md5();
        var hash = md5_1.Md5.hashStr(newpass);
        // return this.http.get(this.get_domain()+'/preguntas/'+id)
        return hash;
    };
    ServicesService.prototype.navegar = function (id) {
        // return this.http.get(this.get_domain()+'/preguntas/'+id)
        // this.router.navigate(id);
        this.router.navigate(['/' + id]);
    };
    ServicesService.prototype.salir = function () {
        localStorage.clear();
    };
    ServicesService.prototype.message = function (a, type) {
        sweetalert2_1.default.fire({
            title: 'Mensaje!',
            text: a,
            icon: type,
            confirmButtonText: 'Cool'
        });
    };
    ServicesService.prototype.navegarwithparamas = function (id, param) {
        console.log('navegarwithparamase s->');
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/' + id], { state: { example: param } });
        // this.router.navigate(['/'+id]);
    };
    ServicesService.prototype.navegarwithparamas2 = function (id, param, param2) {
        console.log('navegarwithparamase s->');
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/' + id], { state: { example: param, example2: param2 } });
        // this.router.navigate(['/'+id]);
    };
    ServicesService.prototype.getDataget8 = function () {
        // return this.http.get(this.get_domain()+'/preguntas/'+id)
        return this.http.get(this.get_domain() + '/preguntas');
    };
    ServicesService.prototype.getDataget = function (id) {
        // return this.http.get(this.get_domain()+'/preguntas/'+id)
        return this.http.get(this.get_domain() + '/preguntas/' + id);
    };
    ServicesService.prototype.postForm = function (data, value) {
        // const httpOptions = {
        //   headers: new HttpHeaders({ 
        //     'Access-Control-Allow-Origin':'*',
        //     'Authorization':'authkey',
        //     'userid':'1'
        //   })
        // }
        return this.http.post(this.get_domain() + '/' + value, data);
    };
    ServicesService.prototype.postLogin8 = function (data) {
        // return this.http.post(this.get_domain()+'/login',data);
        //   this.http.post<any>(this.get_domain()+'/login', { codigo: 'bases2' ,password:'abc'}).subscribe(data => {
        //     console.log('la datapost es ->',JSON.stringify(data));
        // })
        //  const formData = new FormData();
        //     formData.append('codigo', 'bases2');
        //     formData.append('password', 'abc');
        //     this.http.post<any>(this.get_domain()+'/login', formData).subscribe(
        //       (res) => console.log(res),
        //       (err) => console.log(err)
        //     );
    };
    ServicesService.prototype.get_domain = function () {
        //return "https://learn-287403.uc.r.appspot.com"
        return "http://localhost:3000";
    };
    ServicesService.ctorParameters = function () { return [
        { type: router_1.Router },
        { type: http_1.HttpClient }
    ]; };
    ServicesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [router_1.Router, http_1.HttpClient])
    ], ServicesService);
    return ServicesService;
}());
exports.ServicesService = ServicesService;


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map