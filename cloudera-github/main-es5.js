(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-container\">\n    <div id=\"title\">Search a Github.com repository</div>\n    <input type=\"text\" placeholder=\"Search..\" name=\"search\" (keyup)=\"onKey($event)\" (keyup.enter)=\"getGithubRepos()\">\n    <button type=\"submit\" (click)=\"getGithubRepos()\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n</div>\n\n<div class=\"repos-container\">\n    <div id=\"repos-nav\" class=\"nav\">\n\n    </div>\n    <app-result class=\"repo\" *ngFor=\"let repo of database; let i = index\" [repo]=\"repo\" (click)=\"showIssues(i)\">\n    </app-result>\n</div>\n\n<div class=\"issues-container\">\n    <div id=\"repos-nav\" class=\"nav\">\n\n    </div>\n    <app-issues class=\"issue\" *ngFor=\"let issue of issues; let i = index\" [issue]=\"issue\">\n    </app-issues>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/issues/issues.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/issues/issues.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"issue-container\">\n        <div id=\"issue-number\">{{ formatNumber(issue.number) }}</div>\n        <div id=\"issue-title\">{{ issue.title }}</div>\n        <a id=\"issue-url\" [href]=\"issue.url\" >{{ issue.url }}</a>\n        <div id=\"issue-time\">{{ formatDate(issue.updated_at) }}</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/result/result.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/result/result.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"repo-container\">\n    <div id=\"repo-header\">\n        <div id=\"repo-name\">{{ repo.name }}</div>\n        <a id=\"repo-url\" [href]=\"repo.html_url\" >{{ repo.html_url }}</a>\n    </div>\n    <div id=\"repo-desc\">\n        <p>{{ repo.description }}</p>\n    </div>\n    <div id=\"repo-stats\">\n        <div class=\"stat-container\">\n            <i id=\"star-icon\" class=\"fas fa-star\"></i>\n            <span id=\"star-text\" class=\"text\">Stars</span>\n            <span id=\"star-count\">{{ repo.stargazers_count }}</span>\n        </div>\n        <div class=\"stat-container\">\n            <i id=\"fork-icon\" class=\"fas fa-code-branch\"></i>\n            <span id=\"fork-text\" class=\"text\">Forks</span>\n            <span id=\"fork-count\">{{ repo.forks_count }}</span>\n        </div>\n        <div class=\"stat-container\">\n            <i id=\"issue-icon\" class=\"fas fa-exclamation-circle\"></i>\n            <span id=\"issue-text\" class=\"text\">Issues</span>\n            <span id=\"issue-count\">{{ repo.open_issues_count }}</span>\n        </div>\n    </div>\n</div>\n"

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



var routes = [];
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

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-container {\n  grid-area: s;\n  background-color: #292d2e;\n  color: white;\n}\n.search-container #title {\n  font-size: 36px;\n  margin: 20px 200px 0px 120px;\n  width: 600px;\n  float: left;\n}\n.search-container input {\n  font-size: 32px;\n  margin-top: 16px;\n}\n.search-container button {\n  font-size: 32px;\n  margin-top: 16px;\n}\n.repos-container {\n  grid-area: r;\n}\n.issues-container {\n  grid-area: i;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9na2V2aW5iL1dvcmtzcGFjZS9jbG91ZGVyYS1naXRodWIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7RUFFQSx5QkFBQTtFQUNBLFlBQUE7QUNESjtBREdJO0VBQ0ksZUFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNEUjtBREdJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDRFI7QURHSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0RSO0FESUE7RUFDSSxZQUFBO0FDREo7QURHQTtFQUNJLFlBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnNlYXJjaC1jb250YWluZXJ7XG4gICAgZ3JpZC1hcmVhOiBzO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0NSwgNDYpO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICN0aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICBtYXJnaW46IDIwcHggMjAwcHggMHB4IDEyMHB4O1xuICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbiAgICBpbnB1dHtcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cbiAgICBidXR0b257XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG59XG4ucmVwb3MtY29udGFpbmVye1xuICAgIGdyaWQtYXJlYTogcjtcbn1cbi5pc3N1ZXMtY29udGFpbmVye1xuICAgIGdyaWQtYXJlYTogaTtcbn1cblxuIiwiLnNlYXJjaC1jb250YWluZXIge1xuICBncmlkLWFyZWE6IHM7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTJkMmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zZWFyY2gtY29udGFpbmVyICN0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbWFyZ2luOiAyMHB4IDIwMHB4IDBweCAxMjBweDtcbiAgd2lkdGg6IDYwMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi5zZWFyY2gtY29udGFpbmVyIGlucHV0IHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLnNlYXJjaC1jb250YWluZXIgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4ucmVwb3MtY29udGFpbmVyIHtcbiAgZ3JpZC1hcmVhOiByO1xufVxuXG4uaXNzdWVzLWNvbnRhaW5lciB7XG4gIGdyaWQtYXJlYTogaTtcbn0iXX0= */"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(httpClient) {
        this.httpClient = httpClient;
        this.searchValue = '';
        this.database = [];
        this.issues = [];
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.onKey = function (event) {
        this.searchValue = event.target.value;
    };
    AppComponent.prototype.getGithubRepos = function () {
        var _this = this;
        if (this.searchValue != '') {
            this.httpClient.get('https://api.github.com/search/repositories?q=' + this.searchValue).subscribe(function (res) {
                console.log(res);
                _this.database = [];
                for (var i = 0; i < res['items'].length; i++) {
                    var json_data = {};
                    json_data['name'] = res['items'][i].name;
                    json_data['full_name'] = res['items'][i].full_name;
                    json_data['html_url'] = res['items'][i].html_url;
                    json_data['description'] = res['items'][i].description;
                    json_data['forks_count'] = res['items'][i].forks_count;
                    json_data['stargazers_count'] = res['items'][i].stargazers_count;
                    json_data['open_issues_count'] = res['items'][i].open_issues_count;
                    _this.database.push(json_data);
                }
            });
        }
        else {
            this.database = [];
        }
    };
    AppComponent.prototype.showIssues = function (i) {
        var _this = this;
        this.issues = [];
        console.log("Displaying " + i.toString() + " repo issue");
        this.httpClient.get('https://api.github.com/search/issues?q=repo:' + this.database[i].full_name + '+state:open').subscribe(function (res) {
            for (var i_1 = 0; i_1 < res['items'].length; i_1++) {
                var json_data = {};
                console.log(res['items'][i_1]);
                json_data['number'] = res['items'][i_1].number;
                json_data['title'] = res['items'][i_1].title;
                json_data['updated_at'] = res['items'][i_1].updated_at;
                json_data['state'] = res['items'][i_1].state;
                json_data['url'] = res['items'][i_1].html_url;
                _this.issues.push(json_data);
            }
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./result/result.component */ "./src/app/result/result.component.ts");
/* harmony import */ var _issues_issues_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./issues/issues.component */ "./src/app/issues/issues.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _result_result_component__WEBPACK_IMPORTED_MODULE_5__["ResultComponent"],
                _issues_issues_component__WEBPACK_IMPORTED_MODULE_6__["IssuesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/issues/issues.component.scss":
/*!**********************************************!*\
  !*** ./src/app/issues/issues.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".issue-container {\n  background-color: #ebebeb;\n  border: 2px solid gray;\n  margin-bottom: 10px;\n  display: grid;\n  grid-template-columns: auto repeat(5, 1fr);\n  grid-template-rows: 1fr auto 40px;\n  grid-template-areas: \"n t t t t t\" \"l l l l l l\" \". . . . u u\";\n}\n.issue-container #issue-number {\n  grid-area: n;\n  font-size: 24px;\n  padding: 10px;\n}\n.issue-container #issue-title {\n  grid-area: t;\n  font-size: 24px;\n  padding: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.issue-container #issue-url {\n  grid-area: l;\n  font-size: 18px;\n  padding: 10px;\n}\n.issue-container #issue-time {\n  grid-area: u;\n  font-size: 18px;\n  padding: 10px;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9na2V2aW5iL1dvcmtzcGFjZS9jbG91ZGVyYS1naXRodWIvc3JjL2FwcC9pc3N1ZXMvaXNzdWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pc3N1ZXMvaXNzdWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJBSE87RUFJUCxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUVBLDBDQUFBO0VBQ0EsaUNBQUE7RUFDQSw4REFBQTtBQ0ZKO0FETUk7RUFDSSxZQUFBO0VBRUEsZUFBQTtFQUNBLGFBQUE7QUNMUjtBRE9JO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0xSO0FET0k7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNMUjtBRE9JO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNMUiIsImZpbGUiOiJzcmMvYXBwL2lzc3Vlcy9pc3N1ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmctY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcblxuLmlzc3VlLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG5cbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gcmVwZWF0KDUsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0byA0MHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibiB0IHQgdCB0IHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFwibCBsIGwgbCBsIGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFwiLiAuIC4gLiB1IHVcIjtcblxuICAgICNpc3N1ZS1udW1iZXJ7XG4gICAgICAgIGdyaWQtYXJlYTogbjtcbiAgICAgICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuICAgICNpc3N1ZS10aXRsZXtcbiAgICAgICAgZ3JpZC1hcmVhOiB0O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcbiAgICB9XG4gICAgI2lzc3VlLXVybHtcbiAgICAgICAgZ3JpZC1hcmVhOiBsO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuICAgICNpc3N1ZS10aW1le1xuICAgICAgICBncmlkLWFyZWE6IHU7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxufVxuXG4iLCIuaXNzdWUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIHJlcGVhdCg1LCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvIDQwcHg7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibiB0IHQgdCB0IHRcIiBcImwgbCBsIGwgbCBsXCIgXCIuIC4gLiAuIHUgdVwiO1xufVxuLmlzc3VlLWNvbnRhaW5lciAjaXNzdWUtbnVtYmVyIHtcbiAgZ3JpZC1hcmVhOiBuO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uaXNzdWUtY29udGFpbmVyICNpc3N1ZS10aXRsZSB7XG4gIGdyaWQtYXJlYTogdDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5pc3N1ZS1jb250YWluZXIgI2lzc3VlLXVybCB7XG4gIGdyaWQtYXJlYTogbDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmlzc3VlLWNvbnRhaW5lciAjaXNzdWUtdGltZSB7XG4gIGdyaWQtYXJlYTogdTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/issues/issues.component.ts":
/*!********************************************!*\
  !*** ./src/app/issues/issues.component.ts ***!
  \********************************************/
/*! exports provided: IssuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesComponent", function() { return IssuesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IssuesComponent = /** @class */ (function () {
    function IssuesComponent() {
    }
    IssuesComponent.prototype.ngOnInit = function () {
    };
    IssuesComponent.prototype.formatNumber = function (issueNumber) {
        return '#' + issueNumber;
    };
    IssuesComponent.prototype.formatDate = function (dateString) {
        var timeStamp = new Date(dateString);
        return timeStamp.toDateString();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], IssuesComponent.prototype, "issue", void 0);
    IssuesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-issues',
            template: __webpack_require__(/*! raw-loader!./issues.component.html */ "./node_modules/raw-loader/index.js!./src/app/issues/issues.component.html"),
            styles: [__webpack_require__(/*! ./issues.component.scss */ "./src/app/issues/issues.component.scss")]
        })
    ], IssuesComponent);
    return IssuesComponent;
}());



/***/ }),

/***/ "./src/app/result/result.component.scss":
/*!**********************************************!*\
  !*** ./src/app/result/result.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".repo-container {\n  background-color: #ebebeb;\n  border: 2px solid gray;\n  margin-bottom: 10px;\n}\n\n#repo-header {\n  margin: 10px 10px 20px 10px;\n  padding-bottom: 10px;\n  border-bottom: 4px solid gray;\n}\n\n#repo-header #repo-name {\n  font-size: 32px;\n  margin-bottom: 10px;\n}\n\n#repo-header #repo-url {\n  font-size: 18px;\n}\n\n#repo-desc {\n  margin: 10px;\n  font-size: 18px;\n}\n\n#repo-stats {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.stat-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 2fr;\n  background-color: #d4d4d4;\n  margin: 10px;\n  padding: 5px;\n  border: 3px outset #969696;\n  border-radius: 5px;\n  font-size: 18px;\n}\n\n.stat-container i {\n  text-align: center;\n}\n\n.stat-container span {\n  text-align: center;\n}\n\n#star-icon {\n  color: #ffdb3c;\n}\n\n#fork-icon {\n  color: #2cbcff;\n}\n\n#issue-icon {\n  color: #31ff5d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9na2V2aW5iL1dvcmtzcGFjZS9jbG91ZGVyYS1naXRodWIvc3JjL2FwcC9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJBSE87RUFJUCxzQkFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFDSSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7QUNESjs7QURJSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ0ZSOztBRElJO0VBQ0ksZUFBQTtBQ0ZSOztBREtBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNGSjs7QURNQTtFQUNJLGFBQUE7RUFDQSxxQ0FBQTtBQ0hKOztBRE1BO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0VBRUEseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDSko7O0FETUk7RUFDSSxrQkFBQTtBQ0pSOztBRE1JO0VBQ0ksa0JBQUE7QUNKUjs7QURRQTtFQUNJLGNBQUE7QUNMSjs7QURRQTtFQUNJLGNBQUE7QUNMSjs7QURRQTtFQUNJLGNBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmctY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcblxuLnJlcG8tY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbiNyZXBvLWhlYWRlcntcbiAgICBtYXJnaW46IDEwcHggMTBweCAyMHB4IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIGdyYXk7XG5cblxuICAgICNyZXBvLW5hbWV7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgI3JlcG8tdXJse1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxufVxuI3JlcG8tZGVzY3tcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5cbiNyZXBvLXN0YXRze1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbn1cblxuLnN0YXQtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDJmcjtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDIxMiwgMjEyKTtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlcjogM3B4IG91dHNldCByZ2IoMTUwLCAxNTAsIDE1MCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcblxuICAgIGl7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgc3BhbntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuI3N0YXItaWNvbntcbiAgICBjb2xvcjogcmdiKDI1NSwgMjE5LCA2MCk7XG4gICAgLy8gdGV4dC1zaGFkb3c6IC0xcHggMCBibGFjaywgMCAxcHggYmxhY2ssIDFweCAwIGJsYWNrLCAwIC0xcHggYmxhY2s7XG59XG4jZm9yay1pY29ue1xuICAgIGNvbG9yOiByZ2IoNDQsIDE4OCwgMjU1KTtcbiAgICAvLyB0ZXh0LXNoYWRvdzogLTFweCAwIGJsYWNrLCAwIDFweCBibGFjaywgMXB4IDAgYmxhY2ssIDAgLTFweCBibGFjaztcbn1cbiNpc3N1ZS1pY29ue1xuICAgIGNvbG9yOiByZ2IoNDksIDI1NSwgOTMpO1xuICAgIC8vIHRleHQtc2hhZG93OiAtMXB4IDAgYmxhY2ssIDAgMXB4IGJsYWNrLCAxcHggMCBibGFjaywgMCAtMXB4IGJsYWNrO1xufSIsIi5yZXBvLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbiNyZXBvLWhlYWRlciB7XG4gIG1hcmdpbjogMTBweCAxMHB4IDIwcHggMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCBncmF5O1xufVxuI3JlcG8taGVhZGVyICNyZXBvLW5hbWUge1xuICBmb250LXNpemU6IDMycHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4jcmVwby1oZWFkZXIgI3JlcG8tdXJsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4jcmVwby1kZXNjIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbiNyZXBvLXN0YXRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbn1cblxuLnN0YXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDJmcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkNDtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogM3B4IG91dHNldCAjOTY5Njk2O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5zdGF0LWNvbnRhaW5lciBpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnN0YXQtY29udGFpbmVyIHNwYW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNzdGFyLWljb24ge1xuICBjb2xvcjogI2ZmZGIzYztcbn1cblxuI2ZvcmstaWNvbiB7XG4gIGNvbG9yOiAjMmNiY2ZmO1xufVxuXG4jaXNzdWUtaWNvbiB7XG4gIGNvbG9yOiAjMzFmZjVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/result/result.component.ts":
/*!********************************************!*\
  !*** ./src/app/result/result.component.ts ***!
  \********************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResultComponent = /** @class */ (function () {
    function ResultComponent() {
    }
    ResultComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ResultComponent.prototype, "repo", void 0);
    ResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(/*! raw-loader!./result.component.html */ "./node_modules/raw-loader/index.js!./src/app/result/result.component.html"),
            styles: [__webpack_require__(/*! ./result.component.scss */ "./src/app/result/result.component.scss")]
        })
    ], ResultComponent);
    return ResultComponent;
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

module.exports = __webpack_require__(/*! /Users/gkevinb/Workspace/cloudera-github/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map