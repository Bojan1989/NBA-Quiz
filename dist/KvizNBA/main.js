(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var loginRoutes = [
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(loginRoutes)
            ],
            declarations: [],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
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

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/admin-panel/admin-panel.component */ "./src/app/dashboard/admin-panel/admin-panel.component.ts");
/* harmony import */ var _dashboard_scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/scoreboard/scoreboard.component */ "./src/app/dashboard/scoreboard/scoreboard.component.ts");
/* harmony import */ var _dashboard_game_game_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/game/game.component */ "./src/app/dashboard/game/game.component.ts");
/* harmony import */ var _dashboard_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/user-profile/user-profile.component */ "./src/app/dashboard/user-profile/user-profile.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_routing_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard-routing/dashboard-routing.module */ "./src/app/dashboard/dashboard-routing/dashboard-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_score_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/score.service */ "./src/app/services/score.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_interceptor_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/interceptor.service */ "./src/app/services/interceptor.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _dashboard_admin_panel_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/admin-panel/add-question/add-question.component */ "./src/app/dashboard/admin-panel/add-question/add-question.component.ts");
/* harmony import */ var _dashboard_admin_panel_remove_question_remove_question_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/admin-panel/remove-question/remove-question.component */ "./src/app/dashboard/admin-panel/remove-question/remove-question.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _dashboard_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_6__["AdminPanelComponent"],
                _dashboard_scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_7__["ScoreboardComponent"],
                _dashboard_game_game_component__WEBPACK_IMPORTED_MODULE_8__["GameComponent"],
                _dashboard_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["UserProfileComponent"],
                _dashboard_admin_panel_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_18__["AddQuestionComponent"],
                _dashboard_admin_panel_remove_question_remove_question_component__WEBPACK_IMPORTED_MODULE_19__["RemoveQuestionComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_22__["NavigationComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _dashboard_dashboard_routing_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_11__["DashboardRoutingModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
            ],
            providers: [
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_21__["JwtHelperService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"],
                _services_score_service__WEBPACK_IMPORTED_MODULE_14__["ScoreService"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"],
                _services_interceptor_service__WEBPACK_IMPORTED_MODULE_16__["InterceptorService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"], useClass: _services_interceptor_service__WEBPACK_IMPORTED_MODULE_16__["InterceptorService"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/admin-panel/add-question/add-question.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/admin-panel/add-question/add-question.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Add new Question</h3>\r\n<form #addQuestionFrom=\"ngForm\" novalidate>\r\n  <br>\r\n  <h5>Question text</h5>\r\n  <div>\r\n    <input name=\"question\" type=\"text\" placeholder=\"Question text\" [(ngModel)]=\"question.question\" required>\r\n  </div>\r\n  <br><br>\r\n  <h5>Correct Answer</h5>\r\n  <div>\r\n    <input name=\"answer\" type=\"text\" placeholder=\"Correct Answer\" [(ngModel)]=\"question.answer\" [(ngModel)]=\"question.options.option4\" required>\r\n  </div>\r\n  <br><br>\r\n  <h5>Add Options</h5>\r\n  <div>\r\n    <input name=\"option1\" type=\"text\" placeholder=\"Option\" [(ngModel)]=\"question.options.option1\" required>\r\n  </div>\r\n  <div>\r\n    <input name=\"option2\" type=\"text\" placeholder=\"Option\" [(ngModel)]=\"question.options.option2\" required>\r\n  </div>\r\n  <div>\r\n    <input name=\"option3\" type=\"text\" placeholder=\"Option\" [(ngModel)]=\"question.options.option3\" required>\r\n  </div>\r\n  <div>\r\n    <br>\r\n    <button type=\"submit\" (click)=\"saveQuestion();addQuestionFrom.reset()\" [disabled]=\"addQuestionFrom.form.invalid\">Add Question</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/dashboard/admin-panel/add-question/add-question.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/admin-panel/add-question/add-question.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  box-sizing: border-box;\n  border: 1px solid gray;\n  padding: 2px; }\n\ndiv {\n  padding: 5px; }\n"

/***/ }),

/***/ "./src/app/dashboard/admin-panel/add-question/add-question.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/admin-panel/add-question/add-question.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuestionComponent", function() { return AddQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/question.service */ "./src/app/services/question.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddQuestionComponent = /** @class */ (function () {
    function AddQuestionComponent(questionService) {
        this.questionService = questionService;
        this.question = {
            "question": "",
            "answer": "",
            "options": {
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": ""
            }
        };
    }
    AddQuestionComponent.prototype.ngOnInit = function () {
    };
    AddQuestionComponent.prototype.saveQuestion = function () {
        this.questionService.addQuestion(this.question).subscribe(function (res) {
            alert("New Question added");
        });
    };
    AddQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-question',
            template: __webpack_require__(/*! ./add-question.component.html */ "./src/app/dashboard/admin-panel/add-question/add-question.component.html"),
            styles: [__webpack_require__(/*! ./add-question.component.scss */ "./src/app/dashboard/admin-panel/add-question/add-question.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"]])
    ], AddQuestionComponent);
    return AddQuestionComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/admin-panel/admin-panel.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/admin-panel/admin-panel.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"admin-wraper\">\r\n  <div class=\"add-q\">\r\n    <app-add-question></app-add-question>\r\n  </div>\r\n\r\n\r\n  <div class=\"remove-q\">\r\n    <app-remove-question></app-remove-question>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/admin-panel/admin-panel.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/admin-panel/admin-panel.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".admin-wraper {\n  padding: 5px;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: auto 1fr;\n      grid-template-rows: auto 1fr;\n  grid-row-gap: 5px;\n  background-color: #000;\n  color: #fff; }\n"

/***/ }),

/***/ "./src/app/dashboard/admin-panel/admin-panel.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/admin-panel/admin-panel.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelComponent", function() { return AdminPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminPanelComponent = /** @class */ (function () {
    function AdminPanelComponent() {
    }
    AdminPanelComponent.prototype.ngOnInit = function () {
    };
    AdminPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-panel',
            template: __webpack_require__(/*! ./admin-panel.component.html */ "./src/app/dashboard/admin-panel/admin-panel.component.html"),
            styles: [__webpack_require__(/*! ./admin-panel.component.scss */ "./src/app/dashboard/admin-panel/admin-panel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminPanelComponent);
    return AdminPanelComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/admin-panel/remove-question/remove-question.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/admin-panel/remove-question/remove-question.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"remove-q-wrapper\">\r\n  <h2>Remove Question</h2>\r\n  <br>\r\n  <button type=\"button\" name=\"refresh\" (click)=\"refreshList()\">Refresh List</button>\r\n  <br>\r\n  <br>\r\n  <div class=\"\" *ngIf=\"questions\">\r\n    <ngb-accordion #acc=\"ngbAccordion\" *ngFor=\"let q of questions.questions\">\r\n      <ngb-panel title={{q.question}}>\r\n        <ng-template ngbPanelContent>\r\n          <ul>\r\n            <li><b>{{q.answer}}</b></li>\r\n            <li>{{q.options.option3}}</li>\r\n            <li>{{q.options.option2}}</li>\r\n            <li>{{q.options.option1}}</li>\r\n          </ul>\r\n          <br>\r\n          <button type=\"button\" name=\"button\" (click)=\"deleteQuestion(q._id)\">Delete this Question</button>\r\n        </ng-template>\r\n      </ngb-panel>\r\n    </ngb-accordion>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/admin-panel/remove-question/remove-question.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/admin-panel/remove-question/remove-question.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".remove-q-wrapper {\n  padding: 15px;\n  width: 100vw; }\n"

/***/ }),

/***/ "./src/app/dashboard/admin-panel/remove-question/remove-question.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/admin-panel/remove-question/remove-question.component.ts ***!
  \************************************************************************************/
/*! exports provided: RemoveQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveQuestionComponent", function() { return RemoveQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/question.service */ "./src/app/services/question.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoveQuestionComponent = /** @class */ (function () {
    function RemoveQuestionComponent(questionService) {
        this.questionService = questionService;
    }
    RemoveQuestionComponent.prototype.ngOnInit = function () {
        this.getQuestions();
    };
    RemoveQuestionComponent.prototype.getQuestions = function () {
        var _this = this;
        this.questionService.getAllQuestions().subscribe(function (res) {
            _this.questions = res;
        });
    };
    RemoveQuestionComponent.prototype.deleteQuestion = function (id) {
        var _this = this;
        this.questionService.removeQuestion(id).subscribe(function (emp) {
            _this.getQuestions();
        });
    };
    RemoveQuestionComponent.prototype.refreshList = function () {
        this.getQuestions();
    };
    RemoveQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-remove-question',
            template: __webpack_require__(/*! ./remove-question.component.html */ "./src/app/dashboard/admin-panel/remove-question/remove-question.component.html"),
            styles: [__webpack_require__(/*! ./remove-question.component.scss */ "./src/app/dashboard/admin-panel/remove-question/remove-question.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"]])
    ], RemoveQuestionComponent);
    return RemoveQuestionComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing/dashboard-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing/dashboard-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin-panel/admin-panel.component */ "./src/app/dashboard/admin-panel/admin-panel.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game/game.component */ "./src/app/dashboard/game/game.component.ts");
/* harmony import */ var _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scoreboard/scoreboard.component */ "./src/app/dashboard/scoreboard/scoreboard.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "./src/app/dashboard/user-profile/user-profile.component.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _guards_route_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../guards/route.guard */ "./src/app/guards/route.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var dashboardRoutes = [
    {
        path: 'dashboard', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
        children: [
            { path: 'admin-panel', canActivate: [_guards_route_guard__WEBPACK_IMPORTED_MODULE_8__["RouteGuard"]], component: _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_3__["AdminPanelComponent"] },
            { path: 'nba-quiz', canActivate: [_guards_route_guard__WEBPACK_IMPORTED_MODULE_8__["RouteGuard"]], component: _game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"] },
            { path: 'scoreboard', canActivate: [_guards_route_guard__WEBPACK_IMPORTED_MODULE_8__["RouteGuard"]], component: _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_5__["ScoreboardComponent"] },
            { path: 'profile', canActivate: [_guards_route_guard__WEBPACK_IMPORTED_MODULE_8__["RouteGuard"]], component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"] },
            { path: '', redirectTo: 'profile', pathMatch: 'full' }
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(dashboardRoutes)
            ],
            declarations: []
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\">\r\n  <div class=\"dashboard-navigation\">\r\n    <app-navigation></app-navigation>\r\n  </div>\r\n  <div class=\"dashboard-content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <div class=\"dashboard-footer\">\r\n    U procesu izrade!\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard {\n  height: 100%;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: auto 1fr auto;\n      grid-template-rows: auto 1fr auto;\n  grid-row-gap: 10px;\n  background-image: url('dark-bg.jpg');\n  background-repeat: no-repeat;\n  background-size: contain; }\n  .dashboard .dashboard-navigation {\n    -ms-grid-row-align: stretch;\n        align-self: stretch;\n    margin: 5px; }\n  .dashboard .dashboard-content {\n    -ms-grid-row-align: stretch;\n        align-self: stretch;\n    width: 100%; }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/game/game.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/game/game.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"quiz\">\r\n\r\n  <div class=\"quiz-heading\">\r\n    <h3>NBA</h3>\r\n  </div>\r\n\r\n  <div class=\"quiz-content\">\r\n\r\n    <div class=\"gameStart\" *ngIf=\"!gameStarted\">\r\n      <button type=\"button\" name=\"start\" (click)=\"startGame()\">Pocnite Igru</button>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"!gameOver\">\r\n      <ng-container *ngIf=\"gameStarted\">\r\n        <div class=\"gamePlay\" *ngIf=\"activeQuestion\">\r\n          <div class=\"gamePlay-question\">\r\n            <h5><span>{{qNum}}.</span>{{activeQuestion.question}}</h5>\r\n          </div>\r\n          <div class=\"gamePlay-options\">\r\n            <button type=\"button\" name=\"option1\" (click)=\"countScore(activeQuestion.answer, randomOptions[0])\">{{randomOptions[0]}}</button>\r\n            <button type=\"button\" name=\"option2\" (click)=\"countScore(activeQuestion.answer, randomOptions[1])\">{{randomOptions[1]}}</button>\r\n            <button type=\"button\" name=\"option3\" (click)=\"countScore(activeQuestion.answer, randomOptions[2])\">{{randomOptions[2]}}</button>\r\n            <button type=\"button\" name=\"option4\" (click)=\"countScore(activeQuestion.answer, randomOptions[3])\">{{randomOptions[3]}}</button>\r\n          </div>\r\n          <div class=\"gamePlay-score\">\r\n            <p>Rezultat: {{score.score}}</p>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <div class=\"gameScore\" *ngIf=\"gameOver\">\r\n      <button type=\"button\" name=\"button\" (click)=\"saveScore()\">Sacuvaj rezultat</button>\r\n      <br>\r\n      <button type=\"button\" name=\"finish\" (click)=\"startGame()\">Igraj ponovo</button>\r\n      <br>\r\n      <br>\r\n      <h3>{{score.username}} Tvoj rezultat je {{score.score}}</h3>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<!--                 -->\r\n"

/***/ }),

/***/ "./src/app/dashboard/game/game.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/game/game.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quiz {\n  width: 100%;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: auto 5fr;\n      grid-template-rows: auto 5fr;\n  grid-row-gap: 20px; }\n\n.quiz-heading {\n  width: 100%;\n  text-align: center;\n  text-transform: uppercase; }\n\n.quiz-heading h3 {\n    width: 40%;\n    border-bottom: 1px solid #fff;\n    margin: 0 auto;\n    color: #fff; }\n\n.quiz-content {\n  width: 100%;\n  align-content: center; }\n\n.quiz-content .gameStart {\n    width: 100%;\n    text-align: center; }\n\n.quiz-content .gameStart button {\n      text-transform: uppercase;\n      margin: 10px;\n      padding: 10px 15px;\n      border-radius: 10px;\n      border: none;\n      background-color: #hhh; }\n\n.quiz-content .gameStart button:hover {\n        background-color: white;\n        color: #999; }\n\n.quiz-content .gamePlay {\n    display: -ms-grid;\n    display: grid;\n    text-align: center;\n    grid-auto-rows: 1fr auto; }\n\n.quiz-content .gamePlay .gamePlay-question {\n      text-align: center;\n      color: #fff; }\n\n.quiz-content .gamePlay .gamePlay-question span {\n        font-size: 1.2em;\n        padding: 3px;\n        border-radius: 2px;\n        margin-right: 5px; }\n\n.quiz-content .gamePlay .gamePlay-options {\n      max-width: 800px;\n      margin-left: auto;\n      margin-right: auto;\n      display: -ms-grid;\n      display: grid;\n      grid-row-gap: 15px;\n          grid-template-areas: \"option1\" \"option2\" \"option3\" \"option4\"; }\n\n.quiz-content .gamePlay .gamePlay-options button {\n        place-self: center;\n        font-weight: 600;\n        width: 200px;\n        height: 50px;\n        border-radius: 10px;\n        border: none;\n        color: #000;\n        background-color: #hhh; }\n\n.quiz-content .gamePlay .gamePlay-options button:active {\n        background-color: #e58a30;\n        color: #fff; }\n\n.quiz-content .gamePlay .gamePlay-score {\n      font-style: italic;\n      color: #fff; }\n\n.gameScore button {\n  text-transform: uppercase;\n  margin: 10px;\n  padding: 10px 15px;\n  border-radius: 10px;\n  border: none;\n  color: #e58a30;\n  background-color: #hhh; }\n\nbutton:focus {\n  outline: 0;\n  outline-style: none; }\n\nbutton:active {\n  background-color: #e58a30;\n  color: #fff; }\n"

/***/ }),

/***/ "./src/app/dashboard/game/game.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/game/game.component.ts ***!
  \**************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_score_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/score.service */ "./src/app/services/score.service.ts");
/* harmony import */ var _services_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/question.service */ "./src/app/services/question.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameComponent = /** @class */ (function () {
    function GameComponent(scoreService, questionService) {
        this.scoreService = scoreService;
        this.questionService = questionService;
        this.score = {
            username: localStorage.getItem('username'),
            score: 0
        };
        this.gameStarted = false;
        this.gameOver = false;
        this.qNum = 0; // used for selecting activeQuestion from question array
        this.options = []; // storing options from activeQuestion wich is Object type
        this.randomOptions = []; // options array that is shuffled to get random order od options in array
    }
    GameComponent.prototype.ngOnInit = function () {
        this.getQuestions();
    };
    GameComponent.prototype.getQuestions = function () {
        var _this = this;
        this.questionService.getAllQuestions().subscribe(function (res) {
            _this.response = res;
            _this.questions = _this.shuffle(_this.response.questions);
            _this.setActiveQuestion();
        });
    };
    GameComponent.prototype.setActiveQuestion = function () {
        var _this = this;
        if (this.qNum <= 14) {
            this.qNum++;
            this.activeQuestion = this.questions[this.qNum];
            this.options = [];
            Object.keys(this.activeQuestion.options).map(function (key) { return _this.options.push(_this.activeQuestion.options[key]); });
            this.randomOptions = this.shuffle(this.options);
        }
        else {
            this.qNum = 0;
            this.gameOver = true;
        }
    };
    GameComponent.prototype.countScore = function (correct, answer) {
        var _this = this;
        if (correct == answer) {
            this.score.score = this.score.score + 10;
        }
        setTimeout(function () {
            _this.setActiveQuestion();
        }, 300);
    };
    GameComponent.prototype.startGame = function () {
        var _this = this;
        this.qNum = 0;
        this.getQuestions();
        setTimeout(function () {
            _this.score.score = 0;
            _this.gameStarted = true;
            _this.gameOver = false;
        }, 200);
    };
    GameComponent.prototype.saveScore = function () {
        this.scoreService.saveScore(this.score).subscribe(function (res) {
            alert("Rezultat uspesno sacuvan");
        });
    };
    GameComponent.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/dashboard/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.scss */ "./src/app/dashboard/game/game.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_score_service__WEBPACK_IMPORTED_MODULE_1__["ScoreService"], _services_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/scoreboard/scoreboard.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/scoreboard/scoreboard.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"scoreboard-wraper\" *ngIf=\"response\">\r\n  <h5>TABELA</h5>\r\n  <ul>\r\n    <li *ngFor=\"let item of response; let i = index\"><span>{{i + 1}}.</span> {{item.username}}:   {{item.score}}</li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/scoreboard/scoreboard.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/scoreboard/scoreboard.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scoreboard-wraper {\n  text-align: center;\n  width: 100%; }\n  .scoreboard-wraper h5 {\n    text-align: center;\n    color: #fff; }\n  .scoreboard-wraper ul {\n    list-style: none;\n    width: 50%;\n    margin: 0 auto; }\n  .scoreboard-wraper ul li {\n      padding: 5px;\n      color: #fff; }\n  .scoreboard-wraper ul li span {\n        font-weight: 500;\n        padding-right: 20px; }\n"

/***/ }),

/***/ "./src/app/dashboard/scoreboard/scoreboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/scoreboard/scoreboard.component.ts ***!
  \**************************************************************/
/*! exports provided: ScoreboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreboardComponent", function() { return ScoreboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_score_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/score.service */ "./src/app/services/score.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScoreboardComponent = /** @class */ (function () {
    function ScoreboardComponent(scoreService) {
        this.scoreService = scoreService;
        //  scores;
        this.params = {
            page: 1,
            pageSize: 10
        };
    }
    ScoreboardComponent.prototype.ngOnInit = function () {
        this.getScores();
    };
    ScoreboardComponent.prototype.getScores = function () {
        var _this = this;
        this.scoreService.getAllScores(this.params).subscribe(function (res) {
            _this.response = res;
            console.log(_this.response);
        });
    };
    ScoreboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scoreboard',
            template: __webpack_require__(/*! ./scoreboard.component.html */ "./src/app/dashboard/scoreboard/scoreboard.component.html"),
            styles: [__webpack_require__(/*! ./scoreboard.component.scss */ "./src/app/dashboard/scoreboard/scoreboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_score_service__WEBPACK_IMPORTED_MODULE_1__["ScoreService"]])
    ], ScoreboardComponent);
    return ScoreboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/user-profile/user-profile.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/user-profile/user-profile.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile\">\r\n\r\n  <div class=\"profile-heading\">\r\n    <h2>Welcome <span>{{username}}</span></h2>\r\n  </div>\r\n\r\n  <div class=\"profile-content\" *ngIf=\"userScores\">\r\n    <p>Tvoji najbolji rezultati:</p>\r\n    <ul>\r\n      <li *ngFor=\"let item of userScores; let i = index\"><span>{{i + 1}}.</span> {{item.username}}:   {{item.score}}</li>\r\n    </ul>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/user-profile/user-profile.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/user-profile/user-profile.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: auto 1fr;\n      grid-template-rows: auto 1fr;\n  grid-row-gap: 10px;\n  padding: 10px; }\n\n.profile-heading {\n  place-self: center; }\n\n.profile-heading h2 {\n    text-transform: uppercase;\n    color: #fff; }\n\n.profile-content {\n  padding: 5px;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: auto 1fr;\n      grid-template-rows: auto 1fr;\n  grid-row-gap: 20px; }\n\n.profile-content p {\n    font-size: 1.3em;\n    font-weight: 600;\n    color: #fff; }\n\n.profile-content ul {\n    place-self: center;\n    list-style: none;\n    color: #fff; }\n\n.profile-content ul li {\n      padding: 5px; }\n\n.profile-content ul li span {\n        font-weight: 500;\n        margin-right: 20px; }\n"

/***/ }),

/***/ "./src/app/dashboard/user-profile/user-profile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/user-profile/user-profile.component.ts ***!
  \******************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_score_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/score.service */ "./src/app/services/score.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(scoreService) {
        this.scoreService = scoreService;
        this.username = localStorage.getItem('username');
        this.params = {
            page: 1,
            pageSize: 10
        };
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.getUserScores();
    };
    UserProfileComponent.prototype.getUserScores = function () {
        var _this = this;
        this.scoreService.getUserScores(this.params).subscribe(function (res) {
            _this.userScores = res;
        });
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/dashboard/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/dashboard/user-profile/user-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_score_service__WEBPACK_IMPORTED_MODULE_1__["ScoreService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/guards/route.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/route.guard.ts ***!
  \***************************************/
/*! exports provided: RouteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuard", function() { return RouteGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouteGuard = /** @class */ (function () {
    function RouteGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RouteGuard.prototype.canActivate = function () {
        if (!this.authService.getUserLoggedIn()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    RouteGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RouteGuard);
    return RouteGuard;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"formWraper\">\r\n    <form class=\"loginForm\" #loginUserForm=\"ngForm\" novalidate>\r\n      <h1>LogIN</h1>\r\n      <div>\r\n        <input name=\"username\" type=\"text\" placeholder=\"Username...\" [(ngModel)]=\"user.username\" autocomplete=\"off\">\r\n      </div>\r\n      <div>\r\n        <input name=\"password\" type=\"password\" placeholder=\"Password...\" [(ngModel)]=\"user.password\" autocomplete=\"off\">\r\n      </div>\r\n      <div class=\"buttons\">\r\n        <button type=\"submit\" (click)=\"login()\">Login</button>\r\n        <br>\r\n        <button routerLink=\"/signup\" routerLinkActive =\"active\">SignUp</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".formWraper {\n  background-image: url('basketball.jpg');\n  padding: 10px;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 1fr;\n      grid-template-rows: 1fr;\n  height: 100vh; }\n  .formWraper .loginForm {\n    -ms-grid-column-align: center;\n        justify-self: center;\n    -ms-grid-row-align: center;\n        align-self: center; }\n  .formWraper .loginForm h1 {\n      color: rgba(255, 255, 255, 0.9);\n      text-transform: uppercase;\n      text-align: center;\n      background-image: linear-gradient(to right, rgba(255, 0, 0, 0), #e58a30, rgba(255, 0, 0, 0)); }\n  .formWraper .loginForm input {\n      width: 250px;\n      padding: 7px 10px;\n      margin: 10px;\n      border-radius: 10px;\n      border: 2px solid #E26E3C;\n      box-shadow: none;\n      outline-style: none;\n      background-color: rgba(255, 255, 255, 0.9); }\n  .formWraper .loginForm input:focus {\n      outline-style: none; }\n  .formWraper .loginForm ::-webkit-input-placeholder {\n      color: #e58a30; }\n  .formWraper .loginForm :-ms-input-placeholder {\n      color: #e58a30; }\n  .formWraper .loginForm ::-ms-input-placeholder {\n      color: #e58a30; }\n  .formWraper .loginForm ::placeholder {\n      color: #e58a30; }\n  .formWraper .loginForm .buttons {\n      text-align: center; }\n  .formWraper .loginForm .buttons button {\n        text-transform: uppercase;\n        margin: 10px;\n        padding: 7px 10px;\n        width: 120px;\n        border-radius: 10px;\n        border: 1px solid white;\n        background-color: rgba(229, 138, 48, 0.9);\n        color: #fff; }\n  .formWraper .loginForm .buttons button:focus {\n        outline: 0;\n        outline-style: none; }\n  .formWraper .loginForm .buttons button:active {\n        outline: 0;\n        border: none; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router, authService) {
        this.userService = userService;
        this.router = router;
        this.authService = authService;
        this.user = {
            "username": "",
            "password": ""
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.defStorage();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.userLogin(this.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            _this.userData = res;
            localStorage.setItem('token', _this.userData.token);
            localStorage.setItem('username', _this.userData.username);
            localStorage.setItem('role', _this.userData.role);
        })).subscribe(function (res) {
            if (localStorage.getItem('token') != "") {
                _this.authService.setUserLoggedIn();
                _this.router.navigate(['/dashboard']);
            }
            return res;
        });
    };
    LoginComponent.prototype.defStorage = function () {
        localStorage.setItem('token', "none");
        localStorage.setItem('role', "player");
        localStorage.setItem('username', "none");
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/model/question.ts":
/*!***********************************!*\
  !*** ./src/app/model/question.ts ***!
  \***********************************/
/*! exports provided: Question, Options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });
var Question = /** @class */ (function () {
    function Question(obj) {
        this.question = obj && obj.question || "";
        this.answer = obj && obj.answer || "";
        this.options = obj && obj.options || {};
    }
    return Question;
}());

var Options = /** @class */ (function () {
    function Options(obj) {
        this.option1 = obj && obj.option1 || "";
        this.option2 = obj && obj.option2 || "";
        this.option3 = obj && obj.option3 || "";
        this.option4 = obj && obj.option4 || "";
    }
    return Options;
}());



/***/ }),

/***/ "./src/app/model/score.ts":
/*!********************************!*\
  !*** ./src/app/model/score.ts ***!
  \********************************/
/*! exports provided: Score */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Score", function() { return Score; });
var Score = /** @class */ (function () {
    function Score(obj) {
        this.username = obj && obj.username || "";
        this.score = obj && obj.score || null;
    }
    return Score;
}());



/***/ }),

/***/ "./src/app/model/user.ts":
/*!*******************************!*\
  !*** ./src/app/model/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(obj) {
        this.username = obj && obj.username || "";
        this.password = obj && obj.password || "";
        this.role = obj && obj.role || "";
    }
    return User;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation\">\r\n  <ul class=\"navigation-list\">\r\n    <li><a href=\"#\" routerLink=\"nba-quiz\" routerLinkActive =\"active\">Play</a></li>\r\n    <li><a href=\"#\" routerLink=\"profile\" routerLinkActive =\"active\">Profile</a></li>\r\n    <li><a href=\"#\" routerLink=\"scoreboard\" routerLinkActive =\"active\">Scoreboard</a></li>\r\n    <li *ngIf=\"role == 'admin'\"><a href=\"#\" routerLink=\"admin-panel\" routerLinkActive =\"active\">Admin Panel</a></li>\r\n    <li><a href=\"\" routerLink=\"/login\" routerLinkActive =\"active\" (click)=\"logout()\">Logout</a></li>\r\n  </ul>\r\n  <hr>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.scss":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation {\n  width: 95%;\n  margin-right: auto;\n  margin-left: auto;\n  padding: 10px 0; }\n  .navigation hr {\n    border-color: #fff; }\n  .navigation .navigation-list {\n    width: 100%;\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-rows: 1fr 1fr 1fr 1fr 1fr;\n        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\n    grid-row-gap: 10px;\n    margin: 0; }\n  .navigation li {\n    list-style: none;\n    text-align: center;\n    -ms-grid-row-align: center;\n        align-self: center; }\n  .navigation li a {\n      font-weight: bolder;\n      color: #fff;\n      text-transform: uppercase;\n      text-decoration: none;\n      background-image: linear-gradient(to right, rgba(255, 0, 0, 0), #e58a30, rgba(255, 0, 0, 0));\n      border-radius: 10px;\n      padding: 2px 50px; }\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.role = localStorage.getItem('role');
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.logout = function () {
        this.authService.setUserLoggedOut();
        this.defStorage;
        //  this.router.navigate(['/login']);
    };
    NavigationComponent.prototype.defStorage = function () {
        localStorage.setItem('token', "nema");
        localStorage.setItem('role', "player");
        localStorage.setItem('username', "none");
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService() {
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]();
        this.isUserLoggedIn = false;
    }
    //not working
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService.prototype.setUserLoggedIn = function () {
        this.isUserLoggedIn = this.isAuthenticated();
    };
    AuthService.prototype.setUserLoggedOut = function () {
        this.isUserLoggedIn = false;
    };
    AuthService.prototype.getUserLoggedIn = function () {
        return this.isUserLoggedIn;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/interceptor.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/interceptor.service.ts ***!
  \*************************************************/
/*! exports provided: InterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorService", function() { return InterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InterceptorService = /** @class */ (function () {
    function InterceptorService() {
    }
    // intercept request and add token
    InterceptorService.prototype.intercept = function (request, next) {
        // modify request
        request = request.clone({
            setHeaders: {
                User: localStorage.getItem('username'),
                Authorization: localStorage.getItem('token'),
                Role: localStorage.getItem('role')
            }
        });
        console.log("----request----");
        console.log(request);
        console.log("--- end of request---");
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                console.log(" all looks good");
                // http response status code
                console.log(event.status);
            }
        }, function (error) {
            // http response status code
            console.log("----response----");
            console.error("status code:");
            console.error(error.status);
            console.error(error.message);
            console.log("--- end of response---");
        }));
    };
    ;
    InterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])() //{providedIn: 'root'}
        ,
        __metadata("design:paramtypes", [])
    ], InterceptorService);
    return InterceptorService;
}());



/***/ }),

/***/ "./src/app/services/question.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/question.service.ts ***!
  \**********************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _model_question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/question */ "./src/app/model/question.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var questionUrl = "https://nba-quiz-api-ns.herokuapp.com/question";
var QuestionService = /** @class */ (function () {
    function QuestionService(http) {
        this.http = http;
    }
    QuestionService.prototype.addQuestion = function (question) {
        return this.http.post(questionUrl, question).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return new _model_question__WEBPACK_IMPORTED_MODULE_3__["Question"](res);
        }));
    };
    QuestionService.prototype.getAllQuestions = function () {
        return this.http.get(questionUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    QuestionService.prototype.removeQuestion = function (id) {
        return this.http.delete(questionUrl + "/" + id);
    };
    QuestionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "./src/app/services/score.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/score.service.ts ***!
  \*******************************************/
/*! exports provided: ScoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreService", function() { return ScoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _model_score__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/score */ "./src/app/model/score.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var scoreUrl = "https://nba-quiz-api-ns.herokuapp.com/score";
var userScoreUrl = "https://nba-quiz-api-ns.herokuapp.com/score/user";
// http://localhost:3000/
var ScoreService = /** @class */ (function () {
    function ScoreService(http) {
        this.http = http;
    }
    ScoreService.prototype.saveScore = function (score) {
        return this.http.post(scoreUrl, score).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return new _model_score__WEBPACK_IMPORTED_MODULE_3__["Score"](res);
        }));
    };
    ScoreService.prototype.getAllScores = function (params) {
        var queryParams = {};
        if (params) {
            queryParams = {
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                    .set('page', params.page && params.page.toString() || '1')
                    .set('pageSize', params.pageSize && params.pageSize.toString() || '5')
            };
        }
        return this.http.get(scoreUrl, queryParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    ScoreService.prototype.getUserScores = function (params) {
        var queryParams = {};
        if (params) {
            queryParams = {
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                    .set('page', params.page && params.page.toString() || '1')
                    .set('pageSize', params.pageSize && params.pageSize.toString() || '5')
            };
        }
        return this.http.get(userScoreUrl, queryParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    ScoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ScoreService);
    return ScoreService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/user */ "./src/app/model/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var signupUrl = "https://nba-quiz-api-ns.herokuapp.com/user/signup";
var loginUrl = "https://nba-quiz-api-ns.herokuapp.com/user/login";
// http://localhost:3000/
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.userLogin = function (user) {
        return this.http.post(loginUrl, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    UserService.prototype.addUser = function (user) {
        return this.http.post(signupUrl, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return new _model_user__WEBPACK_IMPORTED_MODULE_3__["User"](res);
        }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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

module.exports = "<div class=\"formWraper\">\r\n  <form class=\"loginForm\" #addUserForm=\"ngForm\" novalidate>\r\n    <h2>Registracija</h2>\r\n    <div>\r\n      <input name=\"username\" type=\"text\" placeholder=\"Username\" [(ngModel)]=\"user.username\" autocomplete=\"off\">\r\n    </div>\r\n    <div>\r\n      <input name=\"password\" type=\"password\" placeholder=\"Password\" [(ngModel)]=\"user.password\" autocomplete=\"off\">\r\n    </div>\r\n    <div class=\"buttons\">\r\n      <br>\r\n      <button (click)=\"saveUser()\">Kreiraj profil</button>\r\n      <br>\r\n      <button routerLink=\"/login\" routerLinkActive =\"active\">Go to Login</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".formWraper {\n  background-image: url('basketball.jpg');\n  padding: 10px;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 1fr;\n      grid-template-rows: 1fr;\n  height: 100vh; }\n  .formWraper .loginForm {\n    -ms-grid-column-align: center;\n        justify-self: center;\n    -ms-grid-row-align: center;\n        align-self: center; }\n  .formWraper .loginForm h2 {\n      color: rgba(255, 255, 255, 0.9);\n      text-transform: uppercase;\n      text-align: center;\n      background-image: linear-gradient(to right, rgba(255, 0, 0, 0), #e58a30, rgba(255, 0, 0, 0)); }\n  .formWraper .loginForm input {\n      width: 250px;\n      padding: 7px 10px;\n      margin: 10px;\n      border-radius: 10px;\n      border: 2px solid #E26E3C;\n      box-shadow: none;\n      outline-style: none;\n      background-color: rgba(255, 255, 255, 0.9); }\n  .formWraper .loginForm input:focus {\n      outline-style: none; }\n  .formWraper .loginForm ::-webkit-input-placeholder {\n      color: #e58a30; }\n  .formWraper .loginForm :-ms-input-placeholder {\n      color: #e58a30; }\n  .formWraper .loginForm ::-ms-input-placeholder {\n      color: #e58a30; }\n  .formWraper .loginForm ::placeholder {\n      color: #e58a30; }\n  .formWraper .loginForm .buttons {\n      text-align: center; }\n  .formWraper .loginForm .buttons button {\n        text-transform: uppercase;\n        margin: 10px;\n        padding: 7px 10px;\n        width: 150px;\n        border-radius: 10px;\n        border: 1px solid white;\n        background-color: rgba(229, 138, 48, 0.9);\n        color: #fff; }\n  .formWraper .loginForm .buttons button:focus {\n        outline: 0;\n        outline-style: none; }\n  .formWraper .loginForm .buttons button:active {\n        outline: 0;\n        border: none; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent(userService) {
        this.userService = userService;
        this.user = {
            "username": "",
            "password": "",
            "role": "player"
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.saveUser = function () {
        this.userService.addUser(this.user).subscribe(function (res) {
            alert("Unos uspesan");
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], SignupComponent);
    return SignupComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Desktop\KvizNBA\NBA-Quiz\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map