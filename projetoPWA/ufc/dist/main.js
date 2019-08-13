(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./access-denied/access-denied.module": [
		"./src/app/access-denied/access-denied.module.ts",
		"access-denied-access-denied-module"
	],
	"./not-found/not-found.module": [
		"./src/app/not-found/not-found.module.ts",
		"not-found-not-found-module"
	],
	"./server-error/server-error.module": [
		"./src/app/server-error/server-error.module.ts",
		"server-error-server-error-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _verifica_categoria_verifica_categoria_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./verifica-categoria/verifica-categoria.component */ "./src/app/verifica-categoria/verifica-categoria.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _lutadores_lutadores_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lutadores/lutadores.component */ "./src/app/lutadores/lutadores.component.ts");
/* harmony import */ var _lutador_novo_lutador_novo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lutador-novo/lutador-novo.component */ "./src/app/lutador-novo/lutador-novo.component.ts");
/* harmony import */ var _lutador_detalhe_lutador_detalhe_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lutador-detalhe/lutador-detalhe.component */ "./src/app/lutador-detalhe/lutador-detalhe.component.ts");
/* harmony import */ var _lutador_editar_lutador_editar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lutador-editar/lutador-editar.component */ "./src/app/lutador-editar/lutador-editar.component.ts");
/* harmony import */ var _pesquisa_aleatoria_pesquisa_aleatoria_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pesquisa-aleatoria/pesquisa-aleatoria.component */ "./src/app/pesquisa-aleatoria/pesquisa-aleatoria.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _historia_ufc_historia_ufc_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./historia-ufc/historia-ufc.component */ "./src/app/historia-ufc/historia-ufc.component.ts");
/* harmony import */ var _desenvolvedores_desenvolvedores_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./desenvolvedores/desenvolvedores.component */ "./src/app/desenvolvedores/desenvolvedores.component.ts");















var routes = [
    // canActivate: [AuthGuard]
    { path: '', redirectTo: 'home', pathMatch: 'prefix' },
    // { path: 'layout', loadChildren: './layout/layout.module#LayoutModule', },
    // { path: 'login', loadChildren: './login/login.module#LoginModule' },
    // { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    // { path: '**', redirectTo: 'not-found' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"] },
    { path: 'lutadores', component: _lutadores_lutadores_component__WEBPACK_IMPORTED_MODULE_7__["LutadoresComponent"], canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'lutador-novo', component: _lutador_novo_lutador_novo_component__WEBPACK_IMPORTED_MODULE_8__["LutadorNovoComponent"], canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'lutador-detalhe/:id', component: _lutador_detalhe_lutador_detalhe_component__WEBPACK_IMPORTED_MODULE_9__["LutadorDetalheComponent"], canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'lutador-editar/:id', component: _lutador_editar_lutador_editar_component__WEBPACK_IMPORTED_MODULE_10__["LutadorEditarComponent"], canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'pesquisa-aleatoria', component: _pesquisa_aleatoria_pesquisa_aleatoria_component__WEBPACK_IMPORTED_MODULE_11__["PesquisaAleatoriaComponent"], canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'verifica-categoria', component: _verifica_categoria_verifica_categoria_component__WEBPACK_IMPORTED_MODULE_4__["VerificaCategoriaComponent"] },
    { path: 'historia-ufc', component: _historia_ufc_historia_ufc_component__WEBPACK_IMPORTED_MODULE_13__["HistoriaUfcComponent"] },
    { path: 'desenvolvedores', component: _desenvolvedores_desenvolvedores_component__WEBPACK_IMPORTED_MODULE_14__["DesenvolvedoresComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"screenPicker\">\r\n<app-login *ngSwitchCase=\"'login'\"></app-login>\r\n\r\n<app-signup *ngSwitchCase=\"'signup'\"></app-signup>\r\n\r\n<div *ngSwitchDefault>\r\n    <app-header></app-header>\r\n    <app-sidebar (collapsedEvent)=\"receiveCollapsed($event)\"></app-sidebar>\r\n    <section class=\"main-container\" [ngClass]=\"{collapsed: collapedSideBar}\">\r\n        <router-outlet></router-outlet>\r\n    </section>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  transition: margin-left 0.2s ease-in-out; }\n\n.main-container {\n  margin-top: 56px;\n  margin-left: 250px;\n  padding: 20px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n.collapsed {\n  margin-left: 100px; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n\n@media print {\n  .main-container {\n    margin-top: 0px !important;\n    margin-left: 0px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFx2aWZhblxcT25lRHJpdmVcXERvY3VtZW50b3NcXGZhbnRpbmF0dG9Qcm9qZWN0c1xccHJhdGljYXMtUHJvZ3JhbWFjYW8tV2ViLUFEU1xccHJvamV0b1BXQVxcdWZjL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFLSSx3Q0FBd0MsRUFBQTs7QUFFNUM7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0k7SUFDSSwyQkFBMkIsRUFBQSxFQUM5Qjs7QUFFTDtFQUNJO0lBQ0ksMEJBQTBCO0lBQzFCLDJCQUEyQixFQUFBLEVBQzlCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIC1tcy1vdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5jb2xsYXBzZWQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAubWFpbi1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgcHJpbnQge1xyXG4gICAgLm1haW4tY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngAfterContentChecked = function () {
        var _this = this;
        // Called after every check of the component's or directive's content.
        // Add 'implements AfterContentChecked' to the class.
        this.authService.screenPicker.subscribe(function (tela) { return _this.screenPicker = tela; });
    };
    AppComponent.prototype.receiveCollapsed = function ($event) {
        this.collapedSideBar = $event;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/modules/page-header/page-header.module */ "./src/app/shared/modules/page-header/page-header.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _verifica_categoria_verifica_categoria_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./verifica-categoria/verifica-categoria.component */ "./src/app/verifica-categoria/verifica-categoria.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _desenvolvedores_desenvolvedores_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./desenvolvedores/desenvolvedores.component */ "./src/app/desenvolvedores/desenvolvedores.component.ts");
/* harmony import */ var _historia_ufc_historia_ufc_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./historia-ufc/historia-ufc.component */ "./src/app/historia-ufc/historia-ufc.component.ts");
/* harmony import */ var _lutador_detalhe_lutador_detalhe_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lutador-detalhe/lutador-detalhe.component */ "./src/app/lutador-detalhe/lutador-detalhe.component.ts");
/* harmony import */ var _lutador_editar_lutador_editar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lutador-editar/lutador-editar.component */ "./src/app/lutador-editar/lutador-editar.component.ts");
/* harmony import */ var _lutador_novo_lutador_novo_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./lutador-novo/lutador-novo.component */ "./src/app/lutador-novo/lutador-novo.component.ts");
/* harmony import */ var _lutadores_lutadores_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./lutadores/lutadores.component */ "./src/app/lutadores/lutadores.component.ts");
/* harmony import */ var _pesquisa_aleatoria_pesquisa_aleatoria_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pesquisa-aleatoria/pesquisa-aleatoria.component */ "./src/app/pesquisa-aleatoria/pesquisa-aleatoria.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");




























function tokenGetter() {
    return localStorage.getItem('access_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _shared_modules_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_11__["PageHeaderModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter
                    }
                }),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production })
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__["SidebarComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _verifica_categoria_verifica_categoria_component__WEBPACK_IMPORTED_MODULE_17__["VerificaCategoriaComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _desenvolvedores_desenvolvedores_component__WEBPACK_IMPORTED_MODULE_20__["DesenvolvedoresComponent"],
                _historia_ufc_historia_ufc_component__WEBPACK_IMPORTED_MODULE_21__["HistoriaUfcComponent"],
                _lutador_detalhe_lutador_detalhe_component__WEBPACK_IMPORTED_MODULE_22__["LutadorDetalheComponent"],
                _lutador_editar_lutador_editar_component__WEBPACK_IMPORTED_MODULE_23__["LutadorEditarComponent"],
                _lutador_novo_lutador_novo_component__WEBPACK_IMPORTED_MODULE_24__["LutadorNovoComponent"],
                _lutadores_lutadores_component__WEBPACK_IMPORTED_MODULE_25__["LutadoresComponent"],
                _pesquisa_aleatoria_pesquisa_aleatoria_component__WEBPACK_IMPORTED_MODULE_26__["PesquisaAleatoriaComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_27__["SignupComponent"]
            ],
            providers: [_shared__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top\">\r\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleSidebar()\">\r\n    <i class=\"fa fa-bars text-muted\" aria-hidden=\"true\"></i>\r\n  </button>\r\n  <a class=\"navbar-brand mr-auto\" routerLink=\"/home\"> <em class=\"fa fa-first-order fa-2x\" style=\"color: white\"></em>&nbsp;UFC </a>\r\n\r\n  <!-- Dropdown para quando existir um usuário logado -->\r\n  <ul *ngIf=\"user; else loggedOut\" class=\"navbar-nav ml-auto\">\r\n    <li class=\"nav-item dropdown\" ngbDropdown>\r\n      <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\r\n        <em class=\"fa fa-user\"></em> {{ user.name }} <strong class=\"caret\"></strong>\r\n      </a>\r\n      <div class=\"dropdown-menu-right\" ngbDropdownMenu>\r\n        <a class=\"dropdown-item\" href=\"javascript:void(0)\"> <em class=\"fa fa-fw fa-user\"></em> Profile </a>\r\n        <a class=\"dropdown-item\" [routerLink]=\"['/home']\" (click)=\"onLoggedout()\"> <em class=\"fa fa-fw fa-power-off\"></em> Log Out </a>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n\r\n  <!-- Droopdown quando não existir usuário logado -->\r\n  <ng-template class=\"ml-auto\" #loggedOut>\r\n    <button\r\n      type=\"button\"\r\n      routerLink=\"/login\"\r\n      [routerLinkActive]=\"['router-link-active']\"\r\n      class=\"btn btn-sm btn-outline-secondary\"\r\n      style=\"width: 103px;\"\r\n    >\r\n      Login\r\n    </button>\r\n    &nbsp;\r\n    <button\r\n      type=\"button\"\r\n      routerLink=\"/signup\"\r\n      [routerLinkActive]=\"['router-link-active']\"\r\n      class=\"btn btn-sm btn-danger\"\r\n      style=\"width: 103px;\"\r\n    >\r\n      Registrar\r\n    </button>\r\n  </ng-template>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .navbar {\n  background-color: #1a1a1a; }\n  :host .navbar .navbar-brand {\n    color: #fff; }\n  :host .navbar .nav-item > a {\n    color: #999; }\n  :host .navbar .nav-item > a:hover {\n      color: #fff; }\n  :host .navbar .dropdown-menu-right {\n    right: 0;\n    left: auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFx2aWZhblxcT25lRHJpdmVcXERvY3VtZW50b3NcXGZhbnRpbmF0dG9Qcm9qZWN0c1xccHJhdGljYXMtUHJvZ3JhbWFjYW8tV2ViLUFEU1xccHJvamV0b1BXQVxcdWZjL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVRLHlCQUh5QixFQUFBO0VBQ2pDO0lBSVksV0FBVyxFQUFBO0VBSnZCO0lBT1ksV0FBVyxFQUFBO0VBUHZCO01BU2dCLFdBQVcsRUFBQTtFQVQzQjtJQWFZLFFBQVE7SUFDUixxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcclxuOmhvc3Qge1xyXG4gICAgLm5hdmJhciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIC5uYXZiYXItYnJhbmQge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdi1pdGVtID4gYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kcm9wZG93bi1tZW51LXJpZ2h0IHtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDsgLy8gUmVzZXQgdGhlIGRlZmF1bHQgZnJvbSBgLmRyb3Bkb3duLW1lbnVgXHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, authService) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pushRightClass = 'push-right';
        this.authService.currentUser.subscribe(function (user) { return _this.user = user; });
    };
    HeaderComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    HeaderComponent.prototype.onLoggedout = function () {
        this.authService.logout();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive, collapsed: collapsed}\">\r\n    <div class=\"list-group\">\r\n        <a *ngIf=\"user\" routerLink=\"/lutadores\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-hand-rock-o\"></i>&nbsp;\r\n            <span>{{ 'Lutadores' }}</span>\r\n        </a>\r\n        <a *ngIf=\"user\" routerLink=\"/pesquisa-aleatoria\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-random\"></i>&nbsp;\r\n            <span>{{ 'Pesquisa Aleatória' }}</span>\r\n        </a>\r\n        <a routerLink=\"/verifica-categoria\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;\r\n            <span>{{ 'Verifique sua Categoria' }}</span>\r\n        </a>\r\n        <a routerLink=\"/historia-ufc\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa fa-book\"></i>&nbsp;\r\n            <span>{{ 'História do UFC' }}</span>\r\n        </a>\r\n\r\n        <a routerLink=\"/desenvolvedores\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa fa-code\"></i>&nbsp;\r\n            <span>{{ 'Desenvolvedores' }}</span>\r\n        </a>\r\n\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 56px;\n  left: 250px;\n  width: 250px;\n  margin-left: -250px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  white-space: nowrap;\n  transition: all 0.2s ease-in-out; }\n  .sidebar .list-group a.list-group-item {\n    background: #222;\n    border: 0;\n    border-radius: 0;\n    color: #999;\n    text-decoration: none; }\n  .sidebar .list-group a.list-group-item .fa {\n      margin-right: 10px; }\n  .sidebar .list-group a:hover {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group a.router-link-active {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group .header-fields {\n    padding-top: 10px; }\n  .sidebar .list-group .header-fields > .list-group-item:first-child {\n      border-top: 1px solid rgba(255, 255, 255, 0.2); }\n  .sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n  .sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: #222; }\n  .sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: 0.75rem 1.5rem;\n        padding-top: 1rem; }\n  .sidebar .sidebar-dropdown .panel-title a:hover,\n    .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n  .sidebar .sidebar-dropdown .panel-title:hover {\n    background: #151515; }\n  .sidebar .sidebar-dropdown .panel-collapse {\n    border-radious: 0;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #222;\n      border: 0 solid transparent; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #999; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #fff; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #151515; }\n  .nested-menu .list-group-item {\n  cursor: pointer; }\n  .nested-menu .nested {\n  list-style-type: none; }\n  .nested-menu ul.submenu {\n  display: none;\n  height: 0; }\n  .nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto; }\n  .nested-menu .expand ul.submenu li a {\n    color: #fff;\n    padding: 10px;\n    display: block; }\n  @media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px; } }\n  @media print {\n  .sidebar {\n    display: none !important; } }\n  @media (min-width: 992px) {\n  .header-fields {\n    display: none; } }\n  ::-webkit-scrollbar {\n  width: 8px; }\n  ::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0px white;\n  border-radius: 3px; }\n  ::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 3px white; }\n  .toggle-button {\n  position: fixed;\n  width: 250px;\n  cursor: pointer;\n  padding: 12px;\n  bottom: 0;\n  color: #999;\n  background: #212529;\n  border-top: 1px solid #999;\n  transition: all 0.2s ease-in-out; }\n  .toggle-button i {\n    font-size: 23px; }\n  .toggle-button:hover {\n    background: #151515;\n    color: #fff; }\n  .collapsed {\n  width: 65px; }\n  .collapsed span {\n    display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL0M6XFxVc2Vyc1xcdmlmYW5cXE9uZURyaXZlXFxEb2N1bWVudG9zXFxmYW50aW5hdHRvUHJvamVjdHNcXHByYXRpY2FzLVByb2dyYW1hY2FvLVdlYi1BRFNcXHByb2pldG9QV0FcXHVmYy9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2lkZWJhclxcc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFaMEI7RUFhMUIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBS25CLGdDQUFnQyxFQUFBO0VBcEJwQztJQXdCWSxnQkF6QmtCO0lBMEJsQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxxQkFBcUIsRUFBQTtFQTVCakM7TUE4QmdCLGtCQUFrQixFQUFBO0VBOUJsQztJQWtDWSxtQkFBZ0Q7SUFDaEQsV0FBVyxFQUFBO0VBbkN2QjtJQXNDWSxtQkFBZ0Q7SUFDaEQsV0FBVyxFQUFBO0VBdkN2QjtJQTBDWSxpQkFBaUIsRUFBQTtFQTFDN0I7TUE2Q2dCLDhDQUE4QyxFQUFBO0VBN0M5RDtJQW1EWSxtQkFBbUI7SUFDbkIsWUFBWSxFQUFBO0VBcER4QjtJQXVEWSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQixFQUFBO0VBekQ1QjtNQTJEZ0IsV0FBVztNQUNYLHFCQUFxQjtNQUNyQixnQkFBZ0I7TUFDaEIsZ0JBL0RjLEVBQUE7RUFDOUI7UUFnRW9CLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsdUJBQXVCO1FBQ3ZCLGlCQUFpQixFQUFBO0VBbkVyQzs7TUF3RWdCLFdBQVc7TUFDWCxhQUFhO01BQ2Isb0JBQW9CLEVBQUE7RUExRXBDO0lBOEVZLG1CQUFnRCxFQUFBO0VBOUU1RDtJQWlGWSxpQkFBaUI7SUFDakIsWUFBWSxFQUFBO0VBbEZ4QjtNQXFGb0IsZ0JBQWdCO01BQ2hCLHNCQXZGVTtNQXdGViwyQkFBMkIsRUFBQTtFQXZGL0M7UUF5RndCLFdBQVcsRUFBQTtFQXpGbkM7UUE0RndCLFdBQVcsRUFBQTtFQTVGbkM7TUFnR29CLG1CQUFnRCxFQUFBO0VBT3BFO0VBRVEsZUFBZSxFQUFBO0VBRnZCO0VBS1EscUJBQXFCLEVBQUE7RUFMN0I7RUFRUSxhQUFhO0VBQ2IsU0FBUyxFQUFBO0VBVGpCO0VBYVksY0FBYztFQUNkLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7RUFmeEI7SUFrQm9CLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYyxFQUFBO0VBTWxDO0VBQ0k7SUFDSSxTQUFTO0lBQ1QsU0FBUyxFQUFBLEVBQ1o7RUFFTDtFQUNJO0lBQ0ksd0JBQXdCLEVBQUEsRUFDM0I7RUFFTDtFQUNJO0lBQ0ksYUFBYSxFQUFBLEVBQ2hCO0VBR0w7RUFDSSxVQUFVLEVBQUE7RUFHZDtFQUNJLHVDQUF3RDtFQUN4RCxrQkFBa0IsRUFBQTtFQUd0QjtFQUNJLGtCQUFrQjtFQUNsQix1Q0FBd0QsRUFBQTtFQUc1RDtFQUNJLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixTQUFTO0VBQ1QsV0FBVztFQUNYLG1CQUFtQjtFQVFuQiwwQkFBMEI7RUFLMUIsZ0NBQWdDLEVBQUE7RUFwQnBDO0lBU1EsZUFBZSxFQUFBO0VBVHZCO0lBWVEsbUJBQWdEO0lBQ2hELFdBQVcsRUFBQTtFQVVuQjtFQUNJLFdBQVcsRUFBQTtFQURmO0lBR1EsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdG9wbmF2LWJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbi5zaWRlYmFyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgdG9wOiA1NnB4O1xyXG4gICAgbGVmdDogMjUwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI1MHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xyXG4gICAgLmxpc3QtZ3JvdXAge1xyXG4gICAgICAgIGEubGlzdC1ncm91cC1pdGVtIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIC5mYSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdG9wbmF2LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEucm91dGVyLWxpbmstYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWRlci1maWVsZHMge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgPiAubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2lkZWJhci1kcm9wZG93biB7XHJcbiAgICAgICAgKjpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhbmVsLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGE6aG92ZXIsXHJcbiAgICAgICAgICAgIGE6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhbmVsLXRpdGxlOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGFuZWwtY29sbGFwc2Uge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaW91czogMDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAucGFuZWwtYm9keSB7XHJcbiAgICAgICAgICAgICAgICAubGlzdC1ncm91cC1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubmVzdGVkLW1lbnUge1xyXG4gICAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLm5lc3RlZCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgfVxyXG4gICAgdWwuc3VibWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAmIC5leHBhbmQge1xyXG4gICAgICAgIHVsLnN1Ym1lbnUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5zaWRlYmFyIHtcclxuICAgICAgICB0b3A6IDU0cHg7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBwcmludCB7XHJcbiAgICAuc2lkZWJhciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmhlYWRlci1maWVsZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDhweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxufVxyXG5cclxuLnRvZ2dsZS1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgYmFja2dyb3VuZDogIzIxMjUyOTtcclxuICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdG9wbmF2LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOTk5O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uY29sbGFwc2VkIHtcclxuICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, authService) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.collapsedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
        this.authService.currentUser.subscribe(function (user) { return _this.user = user; });
    };
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent.prototype.toggleCollapsed = function () {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    };
    SidebarComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    SidebarComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    SidebarComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    SidebarComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('currentUser');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidebarComponent.prototype, "collapsedEvent", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/components/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/desenvolvedores/desenvolvedores.component.html":
/*!****************************************************************!*\
  !*** ./src/app/desenvolvedores/desenvolvedores.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Desenvolvedores'\" [icon]=\"'fa fa-code'\"></app-page-header>\r\n  \r\n  <div class=\"row\">\r\n    \r\n    <div class=\"col-sm-4\">\r\n      <div class=\"card text-white bg-dark mb-3\">\r\n        <div class=\"card-header\">RA 162150568</div>\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">Thiago Henrique Vital</h4>\r\n          <p class=\"card-text\"><i class=\"fa fa-at\"></i> thiagodraken@hotmail.com</p>\r\n          <p class=\"card-text\"><i class=\"fa fa-github\"></i><a href=\"https://github.com/thiagodraken\"> GitHub</a></p>\r\n          <p>&nbsp;</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"col-sm-4\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">RA 171151581</div>\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\"><a href=\"https://fantinatto.com\">Vinicius Fantinatto</a></h4>\r\n          <p class=\"card-text\"><i class=\"fa fa-at\"></i> vinicius@fantinatto.com</p>\r\n          <p class=\"card-text\"><i class=\"fa fa-github\"></i><a href=\"https://github.com/vifanti\"> GitHub</a></p>\r\n          <p class=\"card-text\"><i class=\"fa fa-linkedin-square\"></i><a href=\"www.linkedin.com/in/vinicius-fantinatto\"> LinkedIn</a></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"col-sm-4\">\r\n      <div class=\"card text-white bg-primary mb-3\">\r\n        <div class=\"card-header\">RA 171151938</div>\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">Vitor Hugo Dias Paes</h4>\r\n          <p>&nbsp;</p>\r\n          <p>&nbsp;</p>\r\n          <p>&nbsp;</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n  </div>\r\n  \r\n  <div class=\"row\">\r\n    <div class=\"col-sm-2\">\r\n      &nbsp;\r\n    </div>\r\n    \r\n    <div class=\"col-sm-4\">\r\n      <div class=\"card text-white bg-secondary mb-3\">\r\n        <div class=\"card-header\">RA 171150991</div>\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">Jhonny Silva Oliveira</h4>\r\n          <p>&nbsp;</p>\r\n          <p>&nbsp;</p>\r\n          <p>&nbsp;</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"card text-white bg-danger mb-3\">\r\n        <div class=\"card-header\">RA 171151247</div>\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">João Matheus de Assis</h4>\r\n          <p>&nbsp;</p>\r\n          <p>&nbsp;</p>\r\n          <p>&nbsp;</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"col-sm-2\">\r\n      &nbsp;\r\n    </div>\r\n    \r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/desenvolvedores/desenvolvedores.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/desenvolvedores/desenvolvedores.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin-bottom: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzZW52b2x2ZWRvcmVzL0M6XFxVc2Vyc1xcdmlmYW5cXE9uZURyaXZlXFxEb2N1bWVudG9zXFxmYW50aW5hdHRvUHJvamVjdHNcXHByYXRpY2FzLVByb2dyYW1hY2FvLVdlYi1BRFNcXHByb2pldG9QV0FcXHVmYy9zcmNcXGFwcFxcZGVzZW52b2x2ZWRvcmVzXFxkZXNlbnZvbHZlZG9yZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rlc2Vudm9sdmVkb3Jlcy9kZXNlbnZvbHZlZG9yZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/desenvolvedores/desenvolvedores.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/desenvolvedores/desenvolvedores.component.ts ***!
  \**************************************************************/
/*! exports provided: DesenvolvedoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesenvolvedoresComponent", function() { return DesenvolvedoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");



var DesenvolvedoresComponent = /** @class */ (function () {
    function DesenvolvedoresComponent() {
    }
    DesenvolvedoresComponent.prototype.ngOnInit = function () {
    };
    DesenvolvedoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-desenvolvedores',
            template: __webpack_require__(/*! ./desenvolvedores.component.html */ "./src/app/desenvolvedores/desenvolvedores.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./desenvolvedores.component.scss */ "./src/app/desenvolvedores/desenvolvedores.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DesenvolvedoresComponent);
    return DesenvolvedoresComponent;
}());



/***/ }),

/***/ "./src/app/historia-ufc/historia-ufc.component.html":
/*!**********************************************************!*\
  !*** ./src/app/historia-ufc/historia-ufc.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'História do UFC'\" [icon]=\"'fa fa-book'\"></app-page-header>\r\n  <div class=\"jumbotron\">\r\n    <p>Criado em 1993 como uma organização profissional de artes marciais mistas (MMA), o UFC® revolucionou a indústria da luta e hoje se destaca tanto como uma marca global premium de esporte quanto como uma empresa de produção de conteúdo e o maior  provedor de eventos Pay-Per-View (PPV) do mundo.</p>\r\n    \r\n    <p>O UFC segue uma história e uma tradição ricas de MMA competitivo que remonta ao Pancrácio, uma luta introduzida nos Jogos Olímpicos gregos no ano de 648 a.C. Há cerca de 80 anos, uma forma brasileira de MMA conhecida como Vale-Tudo despertou o interesse local pelo esporte. O UFC então introduziu o MMA organizado e sancionado nos Estados Unidos.</p>\r\n    \r\n    <p>O objetivo era encontrar o \"campeão supremo de luta\" (Ultimate Fighting Champion) organizando um torneio de uma noite com os melhores atletas das diversas modalidades de artes marciais, Incluindo caratê, jiu-jítsu, boxe, kickboxing, grappling, wrestling, sumô e outros esportes de combate. O vencedor do torneio seria coroado o campeão.</p>\r\n    \r\n    <p>Em janeiro de 2001, sob o novo comando da Zuffa, LLC e guiada pela liderança dos prorpiestários Frank Fertitta III, Lorenzo Fertitta e Dana White, a marca UFC reestruturou o MMA, trasformando-o em um esporte de combate altamente organizado, sancionado e controlado. Com sede em Las Vegas e uma rede de funcionários espalhada pelo mundo, o UFC produz anualmente mais de 40 eventos ao vivo, que constantemente lotam algumas das mais prestigiadas arenas do planeta.</p>\r\n    \r\n    <p>A programação do UFC é transmitida para mais de 165 países e territórios, via mais de 60 parceiros globais, para mais de 1,1 bilhão de residências em 40 línguas diferentes. O UFC tem a maior concentração de millennials (com idades entre 18 e 34 anos) em sua base de fãs, com 40% em comparação com as principais propriedades esportivas.</p>\r\n    \r\n    <p>Em dezembro de 2013,o UFC lançou o UFC FIGHT PASS®, um serviço de assinatura digital de transmissão de eventos ao vivo, milhares de lutas on-demand e conteúdo exclusivo para fãs de todo o mundo, posicionando a extraordinária rede digital como o principal destino para fãs de luta.</p>\r\n    \r\n    <p>Ao longo dos anos, o UFC vem buscando constantamente os mais altos níveis de segurança e qualidade em todos os aspectos do esporte. A organização tem procurado desfazer os estereótipos de gênero e estabelecer novos padrões para a saúde e o bem-estar dos lutadores, e foi a primeira organização de esporte de combate a fornecer a seus atletas cobertura de seguro contra acidentes relacionados a treinamento.</p>\r\n    \r\n    <p>Em um compromisso ainda maior com a saúde a segurança de seus atletas, o UFC firmou uma parceria com a USADA (Agência Antidoping dos Estados Unidos) para lançar um programa antidoping histórico e abrangente em julho de 2015. Um dos primeiros do tipo em esportes de combate, o programa do UFC permite à USADA administrar, de forma independente, testes aleatórios dentro e fora de competição em seus atletas o ano todo.</p>\r\n    \r\n    <p>Em julho de 2015, o UFC apresentou a primeira Política de Equipamento do Atleta e o KIT de Luta do UFC. O vestuário criado em parceria com a Reebok, fornecedora exclusiva do UFC no mundo, foi criado para melhorar ainda mais a aparência da marca e oferecer aos atletas equipamentos de alta qualidade desenvolvidos especificamente para lutadores de MMA.</p>\r\n    \r\n    <p>Em dezembro do mesmo ano, o UFC deu início às obras de seu novo campus corporativo global em Las Vegas, que inclui o Instituto de Performance do UFC (UFC Performance Institute), focado no fornecimento das melhores instalações de treinamento de MMA, para apoiar o desenvolvimento científico de atletas e treinadores, prevenir lesões e dar suporte à recuperação, ao tratamento e à reabilitação de lutadores profissionais.</p>\r\n    \r\n    <p>Em fevereiro de 2016, o UFC anunciou o prolongamento por mais cinco anos de sua parceria com a Cleveland Clinic, além de uma contribuição de um milhão de dólares, para continuar apoiando o Professional Fighters Brain Health Study (Estudo da Saúde do Cérebro de Lutadores Profissionais). O estudo tem como foco o desenvolvimento de métodos para detectar os sinais mais precoces e sutis de lesão cerebral em atletas expostos a traumas cranianos, assim como detectar quais indivíduos estão mais sujeitos a desenvolver distúrbios neurológicos crônicos.</p>\r\n    \r\n    <p>Em agosto de 2016, o UFC foi comprado pela Endeavor, líder global de esportes, entretenimento e moda, junto com os parceiros estratégicos Silver Lake Partners e KKR, no que virou a maior aquisição financeira da história de uma propriedade esportiva.\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/historia-ufc/historia-ufc.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/historia-ufc/historia-ufc.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcmlhLXVmYy9oaXN0b3JpYS11ZmMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/historia-ufc/historia-ufc.component.ts":
/*!********************************************************!*\
  !*** ./src/app/historia-ufc/historia-ufc.component.ts ***!
  \********************************************************/
/*! exports provided: HistoriaUfcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriaUfcComponent", function() { return HistoriaUfcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");



var HistoriaUfcComponent = /** @class */ (function () {
    function HistoriaUfcComponent() {
    }
    HistoriaUfcComponent.prototype.ngOnInit = function () {
    };
    HistoriaUfcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-historia-ufc',
            template: __webpack_require__(/*! ./historia-ufc.component.html */ "./src/app/historia-ufc/historia-ufc.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./historia-ufc.component.scss */ "./src/app/historia-ufc/historia-ufc.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HistoriaUfcComponent);
    return HistoriaUfcComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <div class=\"corpo\">\r\n    <div class=\"row justify-content-md-center\">\r\n      <img src=\"assets/images/ufc-logo-home.jpg\"/>\r\n      <div class=\"col-lg-7\">\r\n        <h2><p>Seja bem vindo ao sistema de controle de lutadores</p></h2>\r\n        <h4><p>Use o menu lateral para navegar</p></h4>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <footer class=\"footer\">\r\n    V2.0\r\n  </footer>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width: 460px) {\n  img {\n    width: 90% !important;\n    height: 90% !important; } }\n\n@media screen and (min-width: 720px) {\n  img {\n    width: 50% !important;\n    height: 50% !important; } }\n\nimg {\n  width: 100%;\n  height: 100%;\n  margin-top: 2%; }\n\np {\n  text-align: center;\n  margin-top: 5%; }\n\n.corpo {\n  min-height: 83vh; }\n\n.footer {\n  height: 10px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXHZpZmFuXFxPbmVEcml2ZVxcRG9jdW1lbnRvc1xcZmFudGluYXR0b1Byb2plY3RzXFxwcmF0aWNhcy1Qcm9ncmFtYWNhby1XZWItQURTXFxwcm9qZXRvUFdBXFx1ZmMvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0IsRUFBQSxFQUN6Qjs7QUFHTDtFQUNJO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQixFQUFBLEVBQ3pCOztBQUVMO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQ0osRUFBQTs7QUFDQTtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFlBQVk7RUFDWixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ2MHB4KSB7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA1MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG5we1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNSVcclxufVxyXG4uY29ycG8ge1xyXG4gICAgbWluLWhlaWdodDogODN2aDtcclxufVxyXG4uZm9vdGVyIHtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\" [@routerTransition]>\r\n    <div class=\"row justify-content-md-center\">\r\n        <div class=\"col-md-5\">\r\n            <a [routerLink]=\"['/home']\">\r\n                <img src=\"assets/images/logo.png\" width=\"150px\" class=\"user-avatar\" />\r\n            </a>\r\n            <h1>Controle de Lutadores</h1>\r\n            \r\n            <div>\r\n                <ngb-alert [type]=\"'danger'\" *ngIf=\"!closed\" (close)=\"closed=true\"><p><strong>Login: </strong>teste@teste.com</p><strong>Senha: </strong>teste</ngb-alert>\r\n            </div>\r\n            \r\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n                \r\n                <div class=\"form-content\">\r\n                    \r\n                    <div class=\"form-group\">\r\n                        <input type=\"email\" formControlName=\"email\" class=\"form-control input-underline input-lg\" placeholder=\"Email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\r\n                        <div *ngIf=\"submitted && !!f.email.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"!!f.email.errors.required\">Informe o email</div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"form-group\">\r\n                        <input type=\"password\" formControlName=\"password\" class=\"form-control input-underline input-lg\" placeholder=\"Password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\r\n                        <div *ngIf=\"submitted && !!f.password.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"!!f.password.errors.required\">Informe a senha</div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    \r\n                </div>\r\n                \r\n                \r\n                <button class=\"btn rounded-btn\" [disabled]=\"loading\">Log in</button>\r\n                &nbsp;\r\n                <a class=\"btn rounded-btn\" [routerLink]=\"['/signup']\">Register</a>\r\n                <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n.login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #222;\n  text-align: center;\n  color: #fff;\n  padding: 3em; }\n\n.login-page .col-lg-4 {\n    padding: 0; }\n\n.login-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0; }\n\n.login-page .input-underline {\n    background: 0 0;\n    border: none;\n    box-shadow: none;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n    color: #fff;\n    border-radius: 0; }\n\n.login-page .input-underline:focus {\n    border-bottom: 2px solid #fff;\n    box-shadow: none; }\n\n.login-page .rounded-btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #222;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px; }\n\n.login-page .rounded-btn:hover,\n  .login-page .rounded-btn:focus,\n  .login-page .rounded-btn:active,\n  .login-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n\n.login-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 36px; }\n\n.login-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n\n.login-page .form-group {\n    padding: 8px 0; }\n\n.login-page .form-group input::-webkit-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input:-ms-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-content {\n    padding: 40px 0; }\n\n.login-page .user-avatar {\n    border-radius: 50%;\n    border: 2px solid #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFx2aWZhblxcT25lRHJpdmVcXERvY3VtZW50b3NcXGZhbnRpbmF0dG9Qcm9qZWN0c1xccHJhdGljYXMtUHJvZ3JhbWFjYW8tV2ViLUFEU1xccHJvamV0b1BXQVxcdWZjL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxjQUFjO0VBQ2QsZ0JBWDBCO0VBWTFCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQVZoQjtJQVlRLFVBQVUsRUFBQTs7QUFabEI7SUFlUSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZ0JBQWdCLEVBQUE7O0FBbkJ4QjtJQXNCUSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpREFBaUQ7SUFDakQsV0FBVztJQUNYLGdCQUFnQixFQUFBOztBQTNCeEI7SUE4QlEsNkJBQTZCO0lBQzdCLGdCQUFnQixFQUFBOztBQS9CeEI7SUFtQ1EsbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQixnQkF6Q3NCO0lBMEN0QiwwQ0FBMEM7SUFDMUMsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7O0FBekN2Qjs7OztJQStDUSxZQUE2QjtJQUM3Qix1QkFBd0M7SUFDeEMsYUFBYSxFQUFBOztBQWpEckI7SUFxRFEsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZSxFQUFBOztBQXhEdkI7TUEwRFksK0JBQStCLEVBQUE7O0FBMUQzQztJQStEUSxjQUFjLEVBQUE7O0FBL0R0QjtNQWlFWSwwQ0FBMEMsRUFBQTs7QUFqRXREO01BcUVZLGdCQUFBO01BQ0EsMENBQTBDLEVBQUE7O0FBdEV0RDtNQTBFWSxnQkFBQTtNQUNBLDBDQUEwQyxFQUFBOztBQTNFdEQ7TUErRVksMENBQTBDLEVBQUE7O0FBL0V0RDtJQW1GUSxlQUFlLEVBQUE7O0FBbkZ2QjtJQXVGUSxrQkFBa0I7SUFDbEIsc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmxvZ2luLXBhZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDNlbTtcclxuICAgIC5jb2wtbGctNCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5pbnB1dC1sZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzMztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG4gICAgLmlucHV0LXVuZGVybGluZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogMCAwO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuICAgIC5pbnB1dC11bmRlcmxpbmU6Zm9jdXMge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAucm91bmRlZC1idG4ge1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAyNXB4O1xyXG4gICAgfVxyXG4gICAgLnJvdW5kZWQtYnRuOmhvdmVyLFxyXG4gICAgLnJvdW5kZWQtYnRuOmZvY3VzLFxyXG4gICAgLnJvdW5kZWQtYnRuOmFjdGl2ZSxcclxuICAgIC5yb3VuZGVkLWJ0bjp2aXNpdGVkIHtcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgICAgICBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAvKiBGaXJlZm94IDE4LSAqL1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIC8qIEZpcmVmb3ggMTkrICovXHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZm9ybS1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiA0MHB4IDA7XHJcbiAgICB9XHJcbiAgICAudXNlci1hdmF0YXIge1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        // Quando sair da tela de login e ir para qualquer endereço
        this.routeSub = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.authenticationService.hideLogin();
            }
        });
    };
    // Exibe tela de login quando carrega o component
    LoginComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.authenticationService.showLogin(); });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.email.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(function (data) {
            _this.authenticationService.hideLogin();
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.error = error;
            _this.loading = false;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_3__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/lutador-detalhe/lutador-detalhe.component.html":
/*!****************************************************************!*\
  !*** ./src/app/lutador-detalhe/lutador-detalhe.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Detalhes lutador ' + lutador.nome\" [icon]=\"'fa-hand-rock-o'\"></app-page-header>\r\n  \r\n  <div class=\"row\">\r\n    \r\n    <div class=\"col-lg-6\">\r\n      \r\n      <form role=\"form\">\r\n        \r\n        <fieldset disabled=\"\">\r\n          \r\n          <fieldset class=\"form-group\">\r\n            <div class=\"row\">\r\n              <label class=\"col-lg-4 col-form-label\">Nome: </label>\r\n              <div class=\"col-lg-8\">\r\n                <input class=\"form-control\" name=\"nome\" value=\"{{lutador.nome}}\">\r\n              </div>\r\n            </div>\r\n          </fieldset>\r\n          \r\n          <fieldset class=\"form-group\">\r\n            <div class=\"row\">\r\n              <label class=\"col-lg-4 col-form-label\">Sexo: </label>\r\n              <div [ngSwitch]=\"lutador.sexo\" class=\"col-lg-8\">\r\n                <input *ngSwitchCase=\"'M'\" class=\"form-control\" name=\"sexo\" value=\"Masculino\">\r\n                <input *ngSwitchCase=\"'F'\" class=\"form-control\" name=\"sexo\" value=\"Feminino\">\r\n              </div>\r\n            </div>\r\n          </fieldset>\r\n          \r\n          <fieldset class=\"form-group\">\r\n            <div class=\"row\">\r\n              <label class=\"col-lg-4 col-form-label\">Peso: </label>\r\n              <div class=\"col-lg-8\">\r\n                <input class=\"form-control\" name=\"peso\" value=\"{{lutador.peso}}\">\r\n              </div>\r\n            </div>\r\n          </fieldset>\r\n          \r\n        </fieldset>\r\n        \r\n      </form>\r\n      \r\n    </div>\r\n    \r\n    <div class=\"col-lg-6\">\r\n      \r\n      <form role=\"form\">\r\n        \r\n        <fieldset disabled=\"\">\r\n          \r\n          <fieldset class=\"form-group\">\r\n            <div class=\"row\">\r\n              <label class=\"col-lg-4 col-form-label\">Idade: </label>\r\n              <div class=\"col-lg-8\">\r\n                <input class=\"form-control\" name=\"idade\" value=\"{{lutador.idade}}\">\r\n              </div>\r\n            </div>\r\n          </fieldset>\r\n          \r\n          <fieldset class=\"form-group\">\r\n            <div class=\"row\">\r\n              <label class=\"col-lg-4 col-form-label\">País de Origem: </label>\r\n              <div class=\"col-lg-8\">\r\n                <input class=\"form-control\" name=\"paisOrigem\" value=\"{{lutador.paisOrigem}}\">\r\n              </div>\r\n            </div>\r\n          </fieldset>\r\n          \r\n          <fieldset class=\"form-group\">\r\n            <div class=\"row\">\r\n              <label class=\"col-lg-4 col-form-label\">Categoria de Peso: </label>\r\n              <div class=\"col-lg-8\">\r\n                <input class=\"form-control\" name=\"categoriaPeso\" value=\"{{lutador.categoriaPeso}}\">\r\n              </div>\r\n            </div>\r\n          </fieldset>\r\n          \r\n        </fieldset>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  \r\n  \r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4\">\r\n          <button type=\"button\" class=\"btn btn-lg btn-default col-lg-12\" routerLink=\"/lutadores\" [routerLinkActive]=\"['router-link-active']\">Voltar</button>\r\n        </div>\r\n        \r\n        <div class=\"col-lg-4\">\r\n          <button type=\"button\" class=\"btn btn-lg btn-danger col-lg-12\" routerLink=\"/lutador-editar/{{lutador._id}}\" [routerLinkActive]=\"['router-link-active']\">Editar</button>\r\n        </div>\r\n        \r\n        <div class=\"col-lg-4\">\r\n          <button type=\"button\" class=\"btn btn-lg btn-secondary col-lg-12\" (click)=\"deleteLutador(lutador._id)\">Deletar</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/lutador-detalhe/lutador-detalhe.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/lutador-detalhe/lutador-detalhe.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2x1dGFkb3ItZGV0YWxoZS9sdXRhZG9yLWRldGFsaGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/lutador-detalhe/lutador-detalhe.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/lutador-detalhe/lutador-detalhe.component.ts ***!
  \**************************************************************/
/*! exports provided: LutadorDetalheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LutadorDetalheComponent", function() { return LutadorDetalheComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_lutador_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/lutador.service */ "./src/app/shared/services/lutador.service.ts");
/* harmony import */ var _shared_services_calculo_categoria_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/calculo-categoria.service */ "./src/app/shared/services/calculo-categoria.service.ts");






var LutadorDetalheComponent = /** @class */ (function () {
    function LutadorDetalheComponent(router, route, api, calcula) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.calcula = calcula;
        this.lutador = { _id: '', nome: '', idade: null, sexo: '', peso: null, paisOrigem: '', dataAtualizacao: null, categoriaPeso: null };
        this.isLoadingResults = true;
    }
    LutadorDetalheComponent.prototype.ngOnInit = function () {
        this.getLutador(this.route.snapshot.params['id']);
    };
    LutadorDetalheComponent.prototype.getLutador = function (id) {
        var _this = this;
        this.api.getLutador(id)
            .subscribe(function (data) {
            _this.lutador = data;
            _this.lutador.categoriaPeso = _this.calcula.verificaCategoria(_this.lutador.peso, _this.lutador.sexo);
            _this.isLoadingResults = false;
        });
    };
    LutadorDetalheComponent.prototype.deleteLutador = function (id) {
        var _this = this;
        this.isLoadingResults = true;
        this.api.deleteLutador(id)
            .subscribe(function (res) {
            _this.isLoadingResults = false;
            _this.router.navigate(['/lutadores']);
        }, function (err) {
            console.log(err);
            _this.isLoadingResults = false;
        });
    };
    LutadorDetalheComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lutador-detalhe',
            template: __webpack_require__(/*! ./lutador-detalhe.component.html */ "./src/app/lutador-detalhe/lutador-detalhe.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./lutador-detalhe.component.scss */ "./src/app/lutador-detalhe/lutador-detalhe.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_services_lutador_service__WEBPACK_IMPORTED_MODULE_4__["LutadorService"],
            _shared_services_calculo_categoria_service__WEBPACK_IMPORTED_MODULE_5__["CalculoCategoriaService"]])
    ], LutadorDetalheComponent);
    return LutadorDetalheComponent;
}());



/***/ }),

/***/ "./src/app/lutador-editar/lutador-editar.component.html":
/*!**************************************************************!*\
  !*** ./src/app/lutador-editar/lutador-editar.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Editando lutador ' + nomeLutador\" [icon]=\"'fa-hand-rock-o'\"></app-page-header>\r\n  \r\n  <form role=\"form\" [formGroup]=\"formLutador\" (ngSubmit)=\"updateLutador(formLutador.value)\">\r\n    \r\n    <div class=\"row\">\r\n      \r\n      <div class=\"col-lg-6\">\r\n        \r\n        <fieldset class=\"form-group\">\r\n          <div class=\"row\">\r\n            <label class=\"col-lg-4 col-form-label\">Nome: </label>\r\n            <div class=\"col-lg-8\">\r\n              <input class=\"form-control\" name=\"nome\" formControlName=\"nome\">\r\n            </div>\r\n          </div>\r\n        </fieldset>\r\n        \r\n        <fieldset class=\"form-group\">\r\n          <div class=\"row\">\r\n            <label class=\"col-lg-4 col-form-label\">Sexo: </label>\r\n            <div class=\"col-lg-8\">\r\n              <select class=\"form-control\" name=\"sexo\" formControlName=\"sexo\">\r\n                  <option value=\"\" [hidden]=\"true\" [selected]=\"true\"></option>\r\n                  <option value ='M'>Masculino</option>\r\n                  <option value ='F'>Feminino</option>\r\n                </select>\r\n            </div>\r\n          </div>\r\n        </fieldset>\r\n        \r\n        <fieldset class=\"form-group\">\r\n          <div class=\"row\">\r\n            <label class=\"col-lg-4 col-form-label\">Peso: </label>\r\n            <div class=\"col-lg-8\">\r\n              <input class=\"form-control\" name=\"peso\" placeholder=\"Peso\" formControlName=\"peso\">\r\n            </div>\r\n          </div>\r\n        </fieldset>\r\n        \r\n      </div>\r\n      \r\n      <div class=\"col-lg-6\">\r\n        \r\n        <fieldset class=\"form-group\">\r\n          <div class=\"row\">\r\n            <label class=\"col-lg-4 col-form-label\">Idade: </label>\r\n            <div class=\"col-lg-8\">\r\n              <input class=\"form-control\" name=\"idade\" placeholder=\"Idade\" formControlName=\"idade\">\r\n            </div>\r\n          </div>\r\n        </fieldset>\r\n        \r\n        <fieldset class=\"form-group\">\r\n          <div class=\"row\">\r\n            <label class=\"col-lg-4 col-form-label\">País de Origem: </label>\r\n            <div class=\"col-lg-8\">\r\n              <input class=\"form-control\" name=\"paisOrigem\" placeholder=\"País de Origem\" formControlName=\"paisOrigem\">\r\n            </div>\r\n          </div>\r\n        </fieldset>\r\n        \r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4\">\r\n            <button type=\"button\" class=\"btn btn-lg btn-default col-lg-12\" routerLink=\"/lutador-detalhe/{{id}}\" [routerLinkActive]=\"['router-link-active']\">Voltar</button>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <button type=\"submit\" [disabled]=\"!formLutador.valid\" class=\"btn btn-lg btn-danger col-lg-12\">Gravar</button>\r\n          </div>\r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/lutador-editar/lutador-editar.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/lutador-editar/lutador-editar.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2x1dGFkb3ItZWRpdGFyL2x1dGFkb3ItZWRpdGFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/lutador-editar/lutador-editar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/lutador-editar/lutador-editar.component.ts ***!
  \************************************************************/
/*! exports provided: LutadorEditarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LutadorEditarComponent", function() { return LutadorEditarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_lutador_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/lutador.service */ "./src/app/shared/services/lutador.service.ts");
/* harmony import */ var _shared_services_calculo_categoria_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/calculo-categoria.service */ "./src/app/shared/services/calculo-categoria.service.ts");







var LutadorEditarComponent = /** @class */ (function () {
    function LutadorEditarComponent(router, route, api, formBuilder, calcula) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.calcula = calcula;
        this.id = '';
        this.formLutador = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            nomeLutador: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            idadeLutador: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            sexoLutador: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            pesoLutador: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            paisOrigemLutador: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.isLoadingResults = false;
    }
    LutadorEditarComponent.prototype.ngOnInit = function () {
        this.getLutador(this.route.snapshot.params['id']);
        this.formLutador = this.formBuilder.group({
            'nome': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'idade': [null],
            'sexo': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'peso': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'paisOrigem': [null]
        });
    };
    LutadorEditarComponent.prototype.getLutador = function (id) {
        var _this = this;
        this.api.getLutador(id).subscribe(function (data) {
            _this.id = data._id;
            _this.nomeLutador = data.nome;
            _this.formLutador.setValue({
                nome: data.nome,
                idade: data.idade,
                sexo: data.sexo,
                peso: data.peso,
                paisOrigem: data.paisOrigem
            });
        });
    };
    LutadorEditarComponent.prototype.updateLutador = function (form) {
        var _this = this;
        this.isLoadingResults = true;
        this.api.updateLutador(this.id, form)
            .subscribe(function (res) {
            _this.isLoadingResults = false;
            _this.router.navigate(['/lutador-detalhe/' + _this.id]);
        }, function (err) {
            console.log(err);
            _this.isLoadingResults = false;
        });
    };
    LutadorEditarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lutador-editar',
            template: __webpack_require__(/*! ./lutador-editar.component.html */ "./src/app/lutador-editar/lutador-editar.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./lutador-editar.component.scss */ "./src/app/lutador-editar/lutador-editar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_services_lutador_service__WEBPACK_IMPORTED_MODULE_5__["LutadorService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _shared_services_calculo_categoria_service__WEBPACK_IMPORTED_MODULE_6__["CalculoCategoriaService"]])
    ], LutadorEditarComponent);
    return LutadorEditarComponent;
}());



/***/ }),

/***/ "./src/app/lutador-novo/lutador-novo.component.html":
/*!**********************************************************!*\
  !*** ./src/app/lutador-novo/lutador-novo.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Adicionar Novo Lutador'\" [icon]=\"'fa-hand-rock-o'\"></app-page-header>\r\n  \r\n  <form role=\"form\" [formGroup]=\"formLutador\" (ngSubmit)=\"addLutador(formLutador.value)\">\r\n    \r\n    <div class=\"row\">\r\n      \r\n      <div class=\"col-lg-6\">\r\n        \r\n        <fieldset class=\"form-group\">\r\n          <div class=\"row\">\r\n            <label class=\"col-lg-4 col-form-label\">Nome: </label>\r\n            <div class=\"col-lg-8\">\r\n              <input class=\"form-control\" name=\"nome\" formControlName=\"nome\">\r\n            </div>\r\n          </div>\r\n        </fieldset>\r\n        \r\n        <fieldset class=\"form-group\">\r\n          <div class=\"row\">\r\n            <label class=\"col-lg-4 col-form-label\">Sexo: </label>\r\n            <div class=\"col-lg-8\">\r\n              <select class=\"form-control\" name=\"sexo\" formControlName=\"sexo\">\r\n                <option value=\"\" [hidden]=\"true\" [selected]=\"true\"></option>\r\n                <option value ='M'>Masculino</option>\r\n                <option value ='F'>Feminino</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </fieldset>\r\n        \r\n        <fieldset class=\"form-group\">\r\n          <div class=\"row\">\r\n            <label class=\"col-lg-4 col-form-label\">Peso: </label>\r\n            <div class=\"col-lg-8\">\r\n              <input class=\"form-control\" name=\"peso\" formControlName=\"peso\">\r\n            </div>\r\n          </div>\r\n        </fieldset>\r\n        \r\n      </div>\r\n      \r\n      <div class=\"col-lg-6\">\r\n        \r\n        <fieldset class=\"form-group\">\r\n          <div class=\"row\">\r\n            <label class=\"col-lg-4 col-form-label\">Idade: </label>\r\n            <div class=\"col-lg-8\">\r\n              <input class=\"form-control\" name=\"idade\" formControlName=\"idade\">\r\n            </div>\r\n          </div>\r\n        </fieldset>\r\n        \r\n        <fieldset class=\"form-group\">\r\n          <div class=\"row\">\r\n            <label class=\"col-lg-4 col-form-label\">País de Origem: </label>\r\n            <div class=\"col-lg-8\">\r\n              <input class=\"form-control\" name=\"paisOrigem\" formControlName=\"paisOrigem\">\r\n            </div>\r\n          </div>\r\n        </fieldset>\r\n        \r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4\">\r\n            <button type=\"button\" class=\"btn btn-lg btn-default col-lg-12\" routerLink=\"/lutadores\" [routerLinkActive]=\"['router-link-active']\">Voltar</button>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <button type=\"submit\" [disabled]=\"!formLutador.valid\" class=\"btn btn-lg btn-danger col-lg-12\">Gravar</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/lutador-novo/lutador-novo.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/lutador-novo/lutador-novo.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2x1dGFkb3Itbm92by9sdXRhZG9yLW5vdm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/lutador-novo/lutador-novo.component.ts":
/*!********************************************************!*\
  !*** ./src/app/lutador-novo/lutador-novo.component.ts ***!
  \********************************************************/
/*! exports provided: LutadorNovoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LutadorNovoComponent", function() { return LutadorNovoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_lutador_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/lutador.service */ "./src/app/shared/services/lutador.service.ts");






var LutadorNovoComponent = /** @class */ (function () {
    function LutadorNovoComponent(router, api, formBuilder) {
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.formLutador = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            nomeLutador: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            idadeLutador: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            sexoLutador: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            pesoLutador: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            paisOrigemLutador: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.isLoadingResults = false;
    }
    LutadorNovoComponent.prototype.ngOnInit = function () {
        this.formLutador = this.formBuilder.group({
            'nome': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'idade': [null],
            'sexo': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'peso': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'paisOrigem': [null]
        });
    };
    LutadorNovoComponent.prototype.addLutador = function (form) {
        var _this = this;
        this.isLoadingResults = true;
        this.api.addLutador(form)
            .subscribe(function (res) {
            var id = res['id'];
            _this.isLoadingResults = false;
            _this.router.navigate(['/lutadores' + id]);
        }, function (err) {
            console.log(err);
            _this.isLoadingResults = false;
        });
    };
    LutadorNovoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lutador-novo',
            template: __webpack_require__(/*! ./lutador-novo.component.html */ "./src/app/lutador-novo/lutador-novo.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./lutador-novo.component.scss */ "./src/app/lutador-novo/lutador-novo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_services_lutador_service__WEBPACK_IMPORTED_MODULE_5__["LutadorService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], LutadorNovoComponent);
    return LutadorNovoComponent;
}());



/***/ }),

/***/ "./src/app/lutadores/lutadores.component.html":
/*!****************************************************!*\
  !*** ./src/app/lutadores/lutadores.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Lutadores'\" [icon]=\"'fa-hand-rock-o'\"></app-page-header>\r\n  \r\n  <div class=\"row\">\r\n    <div class=\"col col-xl-12 col-lg-12\"> \r\n      \r\n      <fieldset class=\"form-group\">\r\n        <button type=\"button\" routerLink=\"/lutador-novo\" [routerLinkActive]=\"['router-link-active']\" class=\"btn btn-lg btn-danger col-lg-4\">Cadastrar Lutador</button>\r\n      </fieldset>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <fieldset class=\"form-group\">\r\n            <label>Nome Lutador</label>\r\n            <input class=\"form-control\" #searchBox id=\"search-box\" (input)=\"pesquisaTermo(searchBox.value, searchPeso.value)\">\r\n          </fieldset>\r\n\r\n        </div>\r\n        \r\n        <div class=\"col-lg-6\">\r\n          <fieldset class=\"form-group\">\r\n            <label>Categoria de Peso</label>\r\n            <select class=\"form-control\" #searchPeso id=\"search-peso\" (change)=\"pesquisaTermo(searchBox.value, searchPeso.value)\">\r\n              <option></option>\r\n              <option value = 'peso_palha'>Peso Palha</option>\r\n              <option value = 'peso_mosca'>Peso Mosca</option>\r\n              <option value = 'peso_galo'>Peso Galo</option>\r\n              <option value = 'peso_pena'>Peso Pena</option>\r\n              <option value = 'peso_leve'>Peso Leve</option>\r\n              <option value = 'peso_meio-medio'>Peso Meio-Médio</option>\r\n              <option value = 'peso_medio'>Peso Médio</option>\r\n              <option value = 'peso_meio-pesado'>Peso Meio-Pesado</option>\r\n              <option value = 'peso_pesado'>Peso Pesado</option>\r\n            </select>\r\n          </fieldset>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card-body table-responsive\">\r\n        <table class=\"table table-hover table-striped\">\r\n          <thead>\r\n            <tr>\r\n              <th>Nome</th>\r\n              <th>Sexo</th>\r\n              <th>Peso</th>\r\n              <th>Categoria de Peso</th>\r\n              <th>País de Origem</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr [ngSwitch]=\"lutador.sexo\" routerLink=\"/lutador-detalhe/{{lutador._id}}\" [routerLinkActive]=\"['router-link-active']\" *ngFor=\"let lutador of dataSource\">\r\n              <th scope=\"row\">{{lutador.nome}}</th>\r\n              <td *ngSwitchCase=\"'M'\">Masculino</td>\r\n              <td *ngSwitchCase=\"'F'\">Feminino</td>\r\n              <td *ngSwitchDefault>-</td>\r\n              <td>{{lutador.peso}}</td>\r\n              <td>{{lutador.categoriaPeso}}</td>\r\n              <td>{{lutador.paisOrigem}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/lutadores/lutadores.component.scss":
/*!****************************************************!*\
  !*** ./src/app/lutadores/lutadores.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2x1dGFkb3Jlcy9sdXRhZG9yZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/lutadores/lutadores.component.ts":
/*!**************************************************!*\
  !*** ./src/app/lutadores/lutadores.component.ts ***!
  \**************************************************/
/*! exports provided: LutadoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LutadoresComponent", function() { return LutadoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_lutador_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/lutador.service */ "./src/app/shared/services/lutador.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_calculo_categoria_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/calculo-categoria.service */ "./src/app/shared/services/calculo-categoria.service.ts");







var LutadoresComponent = /** @class */ (function () {
    function LutadoresComponent(api, calcula) {
        this.api = api;
        this.calcula = calcula;
        this.displayedColumns = ['nome', 'idade', 'sexo', 'peso', 'categoriaPeso', 'paisOrigem'];
        this.isLoadingResults = true;
        this.pesquisaTermos = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    LutadoresComponent.prototype.pesquisaTermo = function (termo, filtroCategoria) {
        this.filtroCategoria = filtroCategoria;
        this.pesquisaTermos.next(termo);
    };
    LutadoresComponent.prototype.preencheCategoria = function () {
        for (var i = 0; i < this.dataSource.length; i++) {
            this.dataSource[i].categoriaPeso = this.calcula.verificaCategoria(this.dataSource[i].peso, this.dataSource[i].sexo);
        }
    };
    LutadoresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getLutadores()
            .subscribe(function (res) {
            _this.dataSource = res;
            _this.preencheCategoria();
            _this.isLoadingResults = false;
        }, function (err) {
            console.log(err);
            _this.isLoadingResults = false;
        });
        this.pesquisaTermos.pipe(
        // wait 300ms after each keystroke before considering the termo
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), 
        // ignore new termo if same as previous termo
        // distinctUntilChanged(),
        // switch to new pesquisa observable each time the termo changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (termo) {
            return _this.api.pesquisaLutadores(termo, _this.filtroCategoria);
        })).subscribe(function (res) {
            _this.dataSource = res;
            _this.preencheCategoria();
            _this.isLoadingResults = false;
        }, function (err) {
            console.log(err);
            _this.isLoadingResults = false;
        });
    };
    LutadoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lutadores',
            template: __webpack_require__(/*! ./lutadores.component.html */ "./src/app/lutadores/lutadores.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./lutadores.component.scss */ "./src/app/lutadores/lutadores.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_lutador_service__WEBPACK_IMPORTED_MODULE_3__["LutadorService"],
            _shared_services_calculo_categoria_service__WEBPACK_IMPORTED_MODULE_6__["CalculoCategoriaService"]])
    ], LutadoresComponent);
    return LutadoresComponent;
}());



/***/ }),

/***/ "./src/app/pesquisa-aleatoria/pesquisa-aleatoria.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pesquisa-aleatoria/pesquisa-aleatoria.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Pesquisa Aleatória'\" [icon]=\"'fa-random'\"></app-page-header>\r\n  \r\n  \r\n  <div class=\"jumbotron\">\r\n    \r\n    <h1>Organize uma luta!</h1>\r\n    <p>\r\n      Com base em seus lutadores cadastrados, pesquise dois lutadores aleatóriamente de mesmo sexo e mesma categoria de peso:\r\n    </p>\r\n    \r\n    <div class=\"row\">\r\n      \r\n      \r\n      <div class=\"col-lg-6\">\r\n        <fieldset class=\"form-group\">\r\n          <label>Categoria de Peso</label>\r\n          <select class=\"form-control\" #categoriaPeso id=\"categoriaPeso\">\r\n            <option></option>\r\n            <option value = 'peso_palha'>Peso Palha</option>\r\n            <option value = 'peso_mosca'>Peso Mosca</option>\r\n            <option value = 'peso_galo'>Peso Galo</option>\r\n            <option value = 'peso_pena'>Peso Pena</option>\r\n            <option value = 'peso_leve'>Peso Leve</option>\r\n            <option value = 'peso_meio-medio'>Peso Meio-Médio</option>\r\n            <option value = 'peso_medio'>Peso Médio</option>\r\n            <option value = 'peso_meio-pesado'>Peso Meio-Pesado</option>\r\n            <option value = 'peso_pesado'>Peso Pesado</option>\r\n          </select>\r\n        </fieldset>\r\n      </div>\r\n      \r\n      <div class=\"col-lg-3\">\r\n        <fieldset class=\"form-group\">\r\n          <label>Sexo</label>\r\n          <select class=\"form-control\" #sexo id=\"sexo\">\r\n            <option value = 'M'>Masculino</option>\r\n            <option value = 'F'>Feminino</option>\r\n          </select>\r\n        </fieldset>\r\n      </div>\r\n      \r\n      <div class = \"col-lg-3\" style=\"padding-top: 31px;\">\r\n        <fieldset class=\"form-group\">\r\n          <button type=\"button\" class=\"btn btn-danger col-lg-12\" (click)=\"getLutadoresAleatorios(categoriaPeso.value, sexo.value)\">Pesquisar</button>\r\n        </fieldset>\r\n      </div>\r\n      \r\n    </div>\r\n    \r\n    \r\n    <div *ngIf='dataSource' class=\"row\">\r\n      \r\n      <div class=\"col-lg-5\">\r\n        <div class=\"card text-white bg-danger mb-3\">\r\n          <div class=\"card-header\"><h5>{{dataSource[0].nome}}</h5></div>\r\n          <div class=\"card-body\">\r\n            <p class=\"card-text\">Idade: {{dataSource[0].idade}}<br>\r\n              Peso: {{dataSource[0].peso}} Kg<br>\r\n              Origem: {{dataSource[0].paisOrigem}}\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"col-lg-2\">\r\n        <h1 style=\"text-align: center;\">VS</h1>\r\n      </div>\r\n      \r\n      <div class=\"col-lg-5\">\r\n        <div class=\"card text-white bg-danger mb-3\">\r\n          <div class=\"card-header\"><h5>{{dataSource[1].nome}}</h5></div>\r\n          <div class=\"card-body\">\r\n            <p class=\"card-text\">Idade: {{dataSource[1].idade}}<br>\r\n              Peso: {{dataSource[1].peso}} Kg<br>\r\n              Origem: {{dataSource[1].paisOrigem}}\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n    \r\n    <div *ngIf='lutadoresInsuficientes' class=\"row\">\r\n      \r\n      <div class=\"col-lg-12\">\r\n        <div class=\"card text-white bg-danger mb-3\">\r\n          <div class=\"card-body\">\r\n            <p class=\"card-text\">Número de lutadores insuficientes para esta categoria e sexo</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pesquisa-aleatoria/pesquisa-aleatoria.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pesquisa-aleatoria/pesquisa-aleatoria.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Blc3F1aXNhLWFsZWF0b3JpYS9wZXNxdWlzYS1hbGVhdG9yaWEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pesquisa-aleatoria/pesquisa-aleatoria.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pesquisa-aleatoria/pesquisa-aleatoria.component.ts ***!
  \********************************************************************/
/*! exports provided: PesquisaAleatoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PesquisaAleatoriaComponent", function() { return PesquisaAleatoriaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_lutador_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/lutador.service */ "./src/app/shared/services/lutador.service.ts");




var PesquisaAleatoriaComponent = /** @class */ (function () {
    function PesquisaAleatoriaComponent(api) {
        this.api = api;
    }
    PesquisaAleatoriaComponent.prototype.ngOnInit = function () {
    };
    PesquisaAleatoriaComponent.prototype.getLutadoresAleatorios = function (categoriaPeso, sexo) {
        var _this = this;
        this.api.getLutadoresAleatorios(categoriaPeso, sexo)
            .subscribe(function (res) {
            if (res.length < 2) {
                _this.lutadoresInsuficientes = true;
                _this.dataSource = null;
            }
            else {
                _this.lutadoresInsuficientes = false;
                _this.dataSource = res;
                console.log(_this.dataSource);
            }
        }, function (err) {
            console.log(err);
        });
    };
    PesquisaAleatoriaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pesquisa-aleatoria',
            template: __webpack_require__(/*! ./pesquisa-aleatoria.component.html */ "./src/app/pesquisa-aleatoria/pesquisa-aleatoria.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./pesquisa-aleatoria.component.scss */ "./src/app/pesquisa-aleatoria/pesquisa-aleatoria.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_lutador_service__WEBPACK_IMPORTED_MODULE_3__["LutadorService"]])
    ], PesquisaAleatoriaComponent);
    return PesquisaAleatoriaComponent;
}());



/***/ }),

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: routerTransition, noTransition, slideToRight, slideToLeft, slideToBottom, slideToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noTransition", function() { return noTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToRight", function() { return slideToRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToLeft", function() { return slideToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToBottom", function() { return slideToBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToTop", function() { return slideToTop; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function routerTransition() {
    return noTransition();
}
function noTransition() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', []);
}
function slideToRight() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}


/***/ }),

/***/ "./src/app/shared/_helpers/must-match.validator.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/_helpers/must-match.validator.ts ***!
  \*********************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/shared/guard/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/guard/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/guard/index.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: PageHeaderModule, SharedPipesModule, StatModule, AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ "./src/app/shared/modules/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function() { return _modules__WEBPACK_IMPORTED_MODULE_0__["PageHeaderModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatModule", function() { return _modules__WEBPACK_IMPORTED_MODULE_0__["StatModule"]; });

/* harmony import */ var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/shared-pipes.module */ "./src/app/shared/pipes/shared-pipes.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedPipesModule", function() { return _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__["SharedPipesModule"]; });

/* harmony import */ var _guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guard */ "./src/app/shared/guard/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]; });






/***/ }),

/***/ "./src/app/shared/modules/index.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/modules/index.ts ***!
  \*****************************************/
/*! exports provided: PageHeaderModule, StatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-header/page-header.module */ "./src/app/shared/modules/page-header/page-header.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function() { return _page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__["PageHeaderModule"]; });

/* harmony import */ var _stat_stat_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stat/stat.module */ "./src/app/shared/modules/stat/stat.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatModule", function() { return _stat_stat_module__WEBPACK_IMPORTED_MODULE_1__["StatModule"]; });





/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xl-12\">\r\n        <h2 class=\"page-header\">\r\n            {{heading}}\r\n        </h2>\r\n        <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\">\r\n                <i class=\"fa fa-first-order\"></i> <a href=\"Javascript:void(0)\" [routerLink]=\"['/home']\"> Home UFC</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\"><i class=\"fa {{icon}}\"></i> {{heading}}</li>\r\n        </ol>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.component.ts ***!
  \*********************************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageHeaderComponent = /** @class */ (function () {
    function PageHeaderComponent() {
    }
    PageHeaderComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PageHeaderComponent.prototype, "heading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PageHeaderComponent.prototype, "nomeLutador", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PageHeaderComponent.prototype, "icon", void 0);
    PageHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-header',
            template: __webpack_require__(/*! ./page-header.component.html */ "./src/app/shared/modules/page-header/page-header.component.html"),
            styles: [__webpack_require__(/*! ./page-header.component.scss */ "./src/app/shared/modules/page-header/page-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.module.ts ***!
  \******************************************************************/
/*! exports provided: PageHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function() { return PageHeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-header.component */ "./src/app/shared/modules/page-header/page-header.component.ts");





var PageHeaderModule = /** @class */ (function () {
    function PageHeaderModule() {
    }
    PageHeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            declarations: [_page_header_component__WEBPACK_IMPORTED_MODULE_4__["PageHeaderComponent"]],
            exports: [_page_header_component__WEBPACK_IMPORTED_MODULE_4__["PageHeaderComponent"]]
        })
    ], PageHeaderModule);
    return PageHeaderModule;
}());



/***/ }),

/***/ "./src/app/shared/modules/stat/stat.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-white bg-{{bgClass}}\">\r\n    <div class=\"card-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col col-xs-3\">\r\n                <i class=\"fa {{icon}} fa-5x\"></i>\r\n            </div>\r\n            <div class=\"col col-xs-9 text-right\">\r\n                <div class=\"d-block huge\">{{count}}</div>\r\n                <div class=\"d-block\">{{label}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n        <span class=\"float-left\">View Details {{data}}</span>\r\n        <a href=\"javascript:void(0)\" class=\"float-right card-inverse\">\r\n            <span ><i class=\"fa fa-arrow-circle-right\"></i></span>\r\n        </a>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/modules/stat/stat.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3N0YXQvc3RhdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/modules/stat/stat.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.component.ts ***!
  \*******************************************************/
/*! exports provided: StatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatComponent", function() { return StatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatComponent = /** @class */ (function () {
    function StatComponent() {
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    StatComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StatComponent.prototype, "bgClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StatComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], StatComponent.prototype, "count", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StatComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], StatComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], StatComponent.prototype, "event", void 0);
    StatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stat',
            template: __webpack_require__(/*! ./stat.component.html */ "./src/app/shared/modules/stat/stat.component.html"),
            styles: [__webpack_require__(/*! ./stat.component.scss */ "./src/app/shared/modules/stat/stat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatComponent);
    return StatComponent;
}());



/***/ }),

/***/ "./src/app/shared/modules/stat/stat.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.module.ts ***!
  \****************************************************/
/*! exports provided: StatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatModule", function() { return StatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stat.component */ "./src/app/shared/modules/stat/stat.component.ts");




var StatModule = /** @class */ (function () {
    function StatModule() {
    }
    StatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: [_stat_component__WEBPACK_IMPORTED_MODULE_3__["StatComponent"]],
            exports: [_stat_component__WEBPACK_IMPORTED_MODULE_3__["StatComponent"]]
        })
    ], StatModule);
    return StatModule;
}());



/***/ }),

/***/ "./src/app/shared/pipes/shared-pipes.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/shared-pipes.module.ts ***!
  \*****************************************************/
/*! exports provided: SharedPipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedPipesModule", function() { return SharedPipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var SharedPipesModule = /** @class */ (function () {
    function SharedPipesModule() {
    }
    SharedPipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: []
        })
    ], SharedPipesModule);
    return SharedPipesModule;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var apiUrl = 'https://localhost:3000/';
var AuthService = /** @class */ (function () {
    function AuthService(jwtHelper, http) {
        this.jwtHelper = jwtHelper;
        this.http = http;
        this.screenPicker = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    AuthService.prototype.isAuthenticated = function () {
        var user = (JSON.parse(localStorage.getItem('currentUser')));
        // Check whether the token is expired and return true or false
        if (!user) {
            return false;
        }
        return !this.jwtHelper.isTokenExpired(user.token);
    };
    Object.defineProperty(AuthService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post(apiUrl + "users/authenticate", { email: email, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.currentUserSubject.next(user);
            }
            return user;
        }));
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthService.prototype.showLogin = function () {
        this.screenPicker.emit('login');
    };
    AuthService.prototype.hideLogin = function () {
        this.screenPicker.emit('');
    };
    AuthService.prototype.showSignup = function () {
        this.screenPicker.emit('signup');
    };
    AuthService.prototype.hideSignup = function () {
        this.screenPicker.emit('');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthService.prototype, "screenPicker", void 0);
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/calculo-categoria.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/calculo-categoria.service.ts ***!
  \**************************************************************/
/*! exports provided: CalculoCategoriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculoCategoriaService", function() { return CalculoCategoriaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CalculoCategoriaService = /** @class */ (function () {
    function CalculoCategoriaService() {
    }
    CalculoCategoriaService.prototype.pesoCategoriaAnterior = function (categoria, peso, sexo) {
        var dif;
        if (sexo === 'F') {
            switch (categoria) {
                case 'Peso Palha':
                    return 0;
                case 'Peso Mosca':
                    dif = peso - 52;
                    return dif.toFixed(2);
                case 'Peso Galo':
                    dif = peso - 52.2;
                    return dif.toFixed(2);
                case 'Peso Pena':
                    dif = peso - 61.1;
                    return dif.toFixed(2);
                default:
                    return null;
            }
        }
        else {
            switch (categoria) {
                case 'Peso Mosca':
                    return 0;
                case 'Peso Galo':
                    dif = peso - 56.7;
                    return dif.toFixed(2);
                case 'Peso Pena':
                    dif = peso - 61.2;
                    return dif.toFixed(2);
                case 'Peso Leve':
                    dif = peso - 65.7;
                    return dif.toFixed(2);
                case 'Peso Meio-Médio':
                    dif = peso - 70.3;
                    return dif.toFixed(2);
                case 'Peso Médio':
                    dif = peso - 77.1;
                    return dif.toFixed(2);
                case 'Peso Meio-Pesado':
                    dif = peso - 83.9;
                    return dif.toFixed(2);
                case 'Peso Pesado':
                    dif = peso - 92.9;
                    return dif.toFixed(2);
                default:
                    return null;
            }
        }
    };
    CalculoCategoriaService.prototype.pesoProximaCategoria = function (categoria, peso, sexo) {
        var dif;
        if (sexo === 'F') {
            switch (categoria) {
                case 'Peso Palha':
                    dif = 52.01 - peso;
                    return dif.toFixed(2);
                case 'Peso Mosca':
                    dif = 52.21 - peso;
                    return dif.toFixed(2);
                case 'Peso Galo':
                    dif = 61.11 - peso;
                    return dif.toFixed(2);
                case 'Peso Pena':
                    return 0;
                default:
                    return null;
            }
        }
        else {
            switch (categoria) {
                case 'Peso Mosca':
                    dif = 56.71 - peso;
                    return dif.toFixed(2);
                case 'Peso Galo':
                    dif = 61.21 - peso;
                    return dif.toFixed(2);
                case 'Peso Pena':
                    dif = 65.71 - peso;
                    return dif.toFixed(2);
                case 'Peso Leve':
                    dif = 70.31 - peso;
                    return dif.toFixed(2);
                case 'Peso Meio-Médio':
                    dif = 77.11 - peso;
                    return dif.toFixed(2);
                case 'Peso Médio':
                    dif = 83.91 - peso;
                    return dif.toFixed(2);
                case 'Peso Meio-Pesado':
                    dif = 92.91 - peso;
                    return dif.toFixed(2);
                case 'Peso Pesado':
                    return 0;
                default:
                    return null;
            }
        }
    };
    CalculoCategoriaService.prototype.verificaCategoria = function (peso, sexo) {
        if (sexo === 'F' && peso !== '') {
            if (peso <= 52) {
                return 'Peso Palha';
            }
            else if (peso > 52 && peso <= 52.2) {
                return 'Peso Mosca';
            }
            else if (peso > 52.2 && peso <= 61.1) {
                return 'Peso Galo';
            }
            else if (peso > 61.1 && peso <= 65.7) {
                return 'Peso Pena';
            }
            else {
                return null;
            }
        }
        else {
            if (peso <= 56.7 && peso !== '') {
                return 'Peso Mosca';
            }
            else if (peso > 56.7 && peso <= 61.2) {
                return 'Peso Galo';
            }
            else if (peso > 61.2 && peso <= 65.7) {
                return 'Peso Pena';
            }
            else if (peso > 65.7 && peso <= 70.3) {
                return 'Peso Leve';
            }
            else if (peso > 70.3 && peso <= 77.1) {
                return 'Peso Meio-Médio';
            }
            else if (peso > 77.1 && peso <= 83.9) {
                return 'Peso Médio';
            }
            else if (peso > 83.9 && peso <= 92.9) {
                return 'Peso Meio-Pesado';
            }
            else if (peso > 92.9 && peso <= 120.2) {
                return 'Peso Pesado';
            }
            else {
                return null;
            }
        }
    };
    CalculoCategoriaService.prototype.verificaPeso = function (categoriaPeso) {
        switch (categoriaPeso) {
            case 'peso_palha':
                // Dois primeiros intervalo de peso Feminino, depois intervalo de peso Masculino
                return [0, 52, 0, 0];
            case 'peso_mosca':
                return [52, 52.2, 52.2, 56.7];
            case 'peso_galo':
                return [52.2, 61.1, 56.7, 61.2];
            case 'peso_pena':
                return [61.1, 65.7, 61.2, 65.7];
            case 'peso_leve':
                return [65.7, 70.3, 65.7, 70.3];
            case 'peso_meio-medio':
                return [70.3, 77.1, 70.3, 77.1];
            case 'peso_medio':
                return [77.1, 83.9, 77.1, 83.9];
            case 'peso_meio-pesado':
                return [83.9, 92.9, 83.9, 92.9];
            case 'peso_pesado':
                return [92.9, 120.2, 92.9, 120.2];
            default:
                break;
        }
    };
    CalculoCategoriaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CalculoCategoriaService);
    return CalculoCategoriaService;
}());



/***/ }),

/***/ "./src/app/shared/services/lutador.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/lutador.service.ts ***!
  \****************************************************/
/*! exports provided: LutadorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LutadorService", function() { return LutadorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = 'https://localhost:3000/lutador';
// const apiUrl = 'https://54.207.110.201:3000/lutador';
var LutadorService = /** @class */ (function () {
    function LutadorService(http) {
        this.http = http;
    }
    LutadorService.prototype.getLutadores = function () {
        return this.http.get(apiUrl + '?key=4ccc9336b467b9cf58051ea123493ef114eae029').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (lutadores) { return console.log('leu os lutadores'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getLutadores', [])));
    };
    LutadorService.prototype.pesquisaLutadores = function (termo, categoria) {
        var query = '';
        // if (!termo.trim() && !categoria) {
        //   return of([]);
        // }
        if (termo.trim()) {
            query += '&nome=' + termo;
        }
        if (categoria.trim()) {
            query += '&categoriaPeso=' + categoria;
        }
        return this.http.get(apiUrl + '/pesquisa?key=4ccc9336b467b9cf58051ea123493ef114eae029' + query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("Encontrou lutador que come\u00E7a com: \"" + termo + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('pesquisaLutadores', [])));
    };
    LutadorService.prototype.getLutador = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("leu o lutador id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getLutador id=" + id)));
    };
    LutadorService.prototype.getLutadoresAleatorios = function (categoriaPeso, sexo) {
        var url = apiUrl + '/versus?sexo=' + sexo + '&categoriaPeso=' + categoriaPeso;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getLutadoresAleatorios', [])));
    };
    LutadorService.prototype.addLutador = function (lutador) {
        return this.http.post(apiUrl, lutador, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("adicionou o lutador com w/ id=" + lutador._id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addLutador')));
    };
    LutadorService.prototype.updateLutador = function (id, lutador) {
        var url = apiUrl + "/" + id;
        return this.http.put(url, lutador, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("atualiza o lutador com id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateLutador')));
    };
    LutadorService.prototype.deleteLutador = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("remove o lutador com id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteLutador')));
    };
    LutadorService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    LutadorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], LutadorService);
    return LutadorService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = 'https://localhost:3000/lutador';
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.addUser = function (user) {
        return this.http.post(apiUrl, user, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("adicionou o usuario com w/ id=" + user._id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addLutador')));
    };
    UserService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\" [@routerTransition]>\r\n    <div class=\"row justify-content-md-center\">\r\n        <div class=\"col-md-5\">\r\n            <a [routerLink]=\"['/home']\">\r\n                <img src=\"assets/images/logo.png\" width=\"150px\" class=\"user-avatar\" />\r\n            </a>\r\n            <h1>Controle de Lutadores</h1>\r\n            \r\n            <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\">\r\n                \r\n                \r\n                <div class=\"form-content\">\r\n                    \r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" formControlName=\"name\" class=\"form-control input-underline input-lg\" placeholder=\"Nome Completo\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" />\r\n                        <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"form-group\">\r\n                        <input type=\"email\" formControlName=\"email\" class=\"form-control input-underline input-lg\" placeholder=\"Email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\r\n                        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n                            <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"form-group\">\r\n                        <input type=\"password\" formControlName=\"password\" class=\"form-control input-underline input-lg\" placeholder=\"Password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n                        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control input-underline input-lg\" placeholder=\"Confirme a Senha\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" />\r\n                        <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\r\n                            <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                </div>\r\n                <button class=\"btn rounded-btn\" [disabled]=\"loading\">Registrar</button>\r\n                &nbsp;\r\n                <a class=\"btn rounded-btn\" [routerLink]=\"['/login']\">Login</a>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n.login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #222;\n  text-align: center;\n  color: #fff;\n  padding: 3em; }\n\n.login-page .col-lg-4 {\n    padding: 0; }\n\n.login-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0; }\n\n.login-page .input-underline {\n    background: 0 0;\n    border: none;\n    box-shadow: none;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n    color: #fff;\n    border-radius: 0; }\n\n.login-page .input-underline:focus {\n    border-bottom: 2px solid #fff;\n    box-shadow: none; }\n\n.login-page .rounded-btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #222;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px; }\n\n.login-page .rounded-btn:hover,\n  .login-page .rounded-btn:focus,\n  .login-page .rounded-btn:active,\n  .login-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n\n.login-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 36px; }\n\n.login-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n\n.login-page .form-group {\n    padding: 8px 0; }\n\n.login-page .form-group input::-webkit-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input:-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-group input:-ms-input-placeholder {\n      color: rgba(255, 255, 255, 0.6) !important; }\n\n.login-page .form-content {\n    padding: 40px 0; }\n\n.login-page .user-avatar {\n    border-radius: 50%;\n    border: 2px solid #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0M6XFxVc2Vyc1xcdmlmYW5cXE9uZURyaXZlXFxEb2N1bWVudG9zXFxmYW50aW5hdHRvUHJvamVjdHNcXHByYXRpY2FzLVByb2dyYW1hY2FvLVdlYi1BRFNcXHByb2pldG9QV0FcXHVmYy9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsY0FBYztFQUNkLGdCQVgwQjtFQVkxQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFWaEI7SUFZUSxVQUFVLEVBQUE7O0FBWmxCO0lBZVEsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGdCQUFnQixFQUFBOztBQW5CeEI7SUFzQlEsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaURBQWlEO0lBQ2pELFdBQVc7SUFDWCxnQkFBZ0IsRUFBQTs7QUEzQnhCO0lBOEJRLDZCQUE2QjtJQUM3QixnQkFBZ0IsRUFBQTs7QUEvQnhCO0lBbUNRLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0IsZ0JBekNzQjtJQTBDdEIsMENBQTBDO0lBQzFDLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZSxFQUFBOztBQXpDdkI7Ozs7SUErQ1EsWUFBNkI7SUFDN0IsdUJBQXdDO0lBQ3hDLGFBQWEsRUFBQTs7QUFqRHJCO0lBcURRLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWUsRUFBQTs7QUF4RHZCO01BMERZLCtCQUErQixFQUFBOztBQTFEM0M7SUErRFEsY0FBYyxFQUFBOztBQS9EdEI7TUFpRVksMENBQTBDLEVBQUE7O0FBakV0RDtNQXFFWSxnQkFBQTtNQUNBLDBDQUEwQyxFQUFBOztBQXRFdEQ7TUEwRVksZ0JBQUE7TUFDQSwwQ0FBMEMsRUFBQTs7QUEzRXREO01BK0VZLDBDQUEwQyxFQUFBOztBQS9FdEQ7SUFtRlEsZUFBZSxFQUFBOztBQW5GdkI7SUF1RlEsa0JBQWtCO0lBQ2xCLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmxvZ2luLXBhZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDNlbTtcclxuICAgIC5jb2wtbGctNCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5pbnB1dC1sZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzMztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG4gICAgLmlucHV0LXVuZGVybGluZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogMCAwO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuICAgIC5pbnB1dC11bmRlcmxpbmU6Zm9jdXMge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAucm91bmRlZC1idG4ge1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAyNXB4O1xyXG4gICAgfVxyXG4gICAgLnJvdW5kZWQtYnRuOmhvdmVyLFxyXG4gICAgLnJvdW5kZWQtYnRuOmZvY3VzLFxyXG4gICAgLnJvdW5kZWQtYnRuOmFjdGl2ZSxcclxuICAgIC5yb3VuZGVkLWJ0bjp2aXNpdGVkIHtcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgICAgICBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAvKiBGaXJlZm94IDE4LSAqL1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIC8qIEZpcmVmb3ggMTkrICovXHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZm9ybS1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiA0MHB4IDA7XHJcbiAgICB9XHJcbiAgICAudXNlci1hdmF0YXIge1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/_helpers/must-match.validator */ "./src/app/shared/_helpers/must-match.validator.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");








var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, authenticationService, formBuilder, api) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.formBuilder = formBuilder;
        this.api = api;
        this.error = '';
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.signupForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        }, {
            validator: Object(_shared_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_6__["MustMatch"])('password', 'confirmPassword')
        });
        // esconde o menu quando sair da tela de sugnup
        this.routeSub = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                _this.authenticationService.hideSignup();
            }
        });
    };
    SignupComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.authenticationService.showSignup(); });
    };
    Object.defineProperty(SignupComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.signupForm.controls; },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.onSubmit = function () {
        // stop here if form is invalid
        if (this.signupForm.invalid) {
            return;
        }
        console.log(this.signupForm.value);
        // this.api.addUser(this.signupForm)
        // .subscribe(res => {
        //     this.router.navigate(['/lutadores']);
        //   }, (err) => {
        //     console.log(err);
        //   });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/verifica-categoria/verifica-categoria.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/verifica-categoria/verifica-categoria.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Cálculo de categoria de peso'\" [icon]=\"'fa-dashboard'\"></app-page-header>\r\n  <div class=\"jumbotron\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4\">\r\n        <fieldset class=\"form-group\">\r\n          <label><h4>Informe o seu peso</h4></label>\r\n          <input class=\"form-control\" autocomplete=\"off\" #peso id=\"peso\" (input)=\"verificaCategoria(peso.value, sexo.value)\">\r\n        </fieldset>\r\n      </div>\r\n      \r\n      <div class=\"col-lg-2\">\r\n        <fieldset class=\"form-group\">\r\n          <label><h4>Sexo</h4></label>\r\n          <select class=\"form-control\" #sexo id=\"sexo\" (change)=\"verificaCategoria(peso.value, sexo.value)\">\r\n            <option value = 'M'>Masculino</option>\r\n            <option value = 'F'>Feminino</option>\r\n          </select>\r\n        </fieldset>\r\n      </div>\r\n      \r\n      <div class=\"col-lg-6\">\r\n        <div *ngIf=\"mostraBloco\" class=\"card text-white bg-danger mb-3\">\r\n          <div class=\"card-header\"><h5>Sua categoria de peso é <b>{{categoria}}</b></h5></div>\r\n          <div class=\"card-body\">\r\n            <p class=\"card-text\">Você precisa perder {{pesoCategoriaAnterior}}Kg para descer de categoria ou ganhar {{pesoProximaCategoria}}Kg para subir de categoria</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/verifica-categoria/verifica-categoria.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/verifica-categoria/verifica-categoria.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmaWNhLWNhdGVnb3JpYS92ZXJpZmljYS1jYXRlZ29yaWEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/verifica-categoria/verifica-categoria.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/verifica-categoria/verifica-categoria.component.ts ***!
  \********************************************************************/
/*! exports provided: VerificaCategoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificaCategoriaComponent", function() { return VerificaCategoriaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_calculo_categoria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/calculo-categoria.service */ "./src/app/shared/services/calculo-categoria.service.ts");




var VerificaCategoriaComponent = /** @class */ (function () {
    function VerificaCategoriaComponent(calcula) {
        this.calcula = calcula;
        this.categoria = null;
    }
    VerificaCategoriaComponent.prototype.ngOnInit = function () {
    };
    VerificaCategoriaComponent.prototype.verificaCategoria = function (peso, sexo) {
        this.categoria = this.calcula.verificaCategoria(peso, sexo);
        if (this.categoria != null) {
            this.mostraBloco = true;
            this.pesoCategoriaAnterior = this.calcula.pesoCategoriaAnterior(this.categoria, peso, sexo);
            this.pesoProximaCategoria = this.calcula.pesoProximaCategoria(this.categoria, peso, sexo);
        }
        else {
            this.mostraBloco = false;
        }
    };
    VerificaCategoriaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verifica-categoria',
            template: __webpack_require__(/*! ./verifica-categoria.component.html */ "./src/app/verifica-categoria/verifica-categoria.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./verifica-categoria.component.scss */ "./src/app/verifica-categoria/verifica-categoria.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_calculo_categoria_service__WEBPACK_IMPORTED_MODULE_3__["CalculoCategoriaService"]])
    ], VerificaCategoriaComponent);
    return VerificaCategoriaComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\vifan\OneDrive\Documentos\fantinattoProjects\praticas-Programacao-Web-ADS\projetoPWA\ufc\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map