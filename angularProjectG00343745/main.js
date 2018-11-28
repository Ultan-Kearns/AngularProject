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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animals/animals.component.css":
/*!***********************************************!*\
  !*** ./src/app/animals/animals.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/animals/animals.component.html":
/*!************************************************!*\
  !*** ./src/app/animals/animals.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to the animal forum - Post about your pets here!</h1>\n<!-- modify this for project*******-->\n<mat-accordion multi=\"true\" *ngIf=\"posts.length > 0\">\n  <div *ngFor=\"let post of posts\">\n    <div *ngIf=\"post.category == 'Animals'\">\n      <mat-expansion-panel [expanded]=\"true\">\n        <mat-expansion-panel-header>\n          {{ post.title }}\n        </mat-expansion-panel-header>\n        <p>{{ post.content }}</p>\n        <mat-action-row>\n          <button mat-button [routerLink]=\"['/edit',post._id]\" color=\"primary\">EDIT</button>\n          <button mat-button (click)=\"onDelete(post._id)\" color=\"warn\">DELETE</button>\n        </mat-action-row>\n      </mat-expansion-panel>\n    </div>\n  </div>\n</mat-accordion>\n<p class=\"info-text mat-body-1\" *ngIf=\"posts.length <= 0\">No posts added yet!</p>\n<button mat-raised-button color=\"accent\" (click)=\"showPost()\" id=\"postButton\">{{postText}}</button>\n<form (submit)=\"onAddPost(postForm)\" #postForm=\"ngForm\" id=\"postArea\" *ngIf=\"hideElement\">\n  <h3>Enter posts here:</h3>\n  <mat-form-field id=\"postTitle\">\n    <textarea matInput placeholder=\"Enter post title: \" name=\"title\" id=\"title\" ngModel required #title=\"ngModel\" rows=\"4\"\n      minlength=\"5\" maxlength=\"50\"></textarea>\n    <mat-error *ngIf=\"content.invalid\">Please enter a post title > 5 characters</mat-error>\n  </mat-form-field>\n  <mat-form-field>\n    <textarea matInput placeholder=\"Enter post content: \" name=\"content\" ngModel required #content=\"ngModel\" rows=\"4\"\n      minlength=\"5\" maxlength=\"50\"></textarea>\n    <mat-error *ngIf=\"content.invalid\">Please enter a post content > 5 characters</mat-error>\n  </mat-form-field>\n  <button mat-raised-button color=\"accent\" type=\"submit\">Submit Post</button>\n</form>"

/***/ }),

/***/ "./src/app/animals/animals.component.ts":
/*!**********************************************!*\
  !*** ./src/app/animals/animals.component.ts ***!
  \**********************************************/
/*! exports provided: AnimalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalsComponent", function() { return AnimalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnimalsComponent = /** @class */ (function () {
    function AnimalsComponent(ps, ts) {
        this.ps = ps;
        this.ts = ts;
        this.posts = [];
        this.postText = "Make Post";
        this.category = "Animals";
        var forumTitle = "Welcome to the animals forum - Talk with fellow animal love!";
    }
    AnimalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get posts on intialization
        this.ps.getPostsData().subscribe(function (data) {
            _this.posts = data;
        });
        this.ts.setTitle(this.category);
        this.ts.getTitle();
    };
    AnimalsComponent.prototype.showPost = function () {
        //show post area to user
        if (this.hideElement) {
            this.hideElement = false;
            this.postText = "Make Post";
        }
        else {
            this.hideElement = true;
            this.postText = "Hide post area";
        }
    };
    AnimalsComponent.prototype.onAddPost = function (form) {
        console.log(form.value);
        //check if forum valid
        if (form.valid) {
            this.ps.addPost(form.value.title, form.value.content, this.category).subscribe();
            form.reset();
            alert("post added");
            this.ngOnInit();
        }
        else {
            alert("FORM INVALID MIN LENGTH OF TITLE AND CONTENT MUST BE 5 CHARACTERS OR OVER");
        }
    };
    AnimalsComponent.prototype.onDelete = function (id) {
        console.log("Delete called " + id);
        this.ps.deletePost(id).subscribe(function () {
        });
        alert("deleted post: " + id);
        //refresh view
        this.ngOnInit();
    };
    AnimalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-animals',
            template: __webpack_require__(/*! ./animals.component.html */ "./src/app/animals/animals.component.html"),
            styles: [__webpack_require__(/*! ./animals.component.css */ "./src/app/animals/animals.component.css")]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], AnimalsComponent);
    return AnimalsComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./books/books.component */ "./src/app/books/books.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history/history.component */ "./src/app/history/history.component.ts");
/* harmony import */ var _animals_animals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animals/animals.component */ "./src/app/animals/animals.component.ts");
/* harmony import */ var _general_discussions_general_discussions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./general-discussions/general-discussions.component */ "./src/app/general-discussions/general-discussions.component.ts");
/* harmony import */ var _forum_history_forum_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forum-history/forum-history.component */ "./src/app/forum-history/forum-history.component.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var _app_edit_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/edit/edit.component */ "./src/app/edit/edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: 'movies', component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_4__["MoviesComponent"]
    },
    {
        path: 'books', component: _books_books_component__WEBPACK_IMPORTED_MODULE_3__["BooksComponent"]
    },
    {
        path: 'history', component: _history_history_component__WEBPACK_IMPORTED_MODULE_5__["HistoryComponent"]
    },
    {
        path: 'animals', component: _animals_animals_component__WEBPACK_IMPORTED_MODULE_6__["AnimalsComponent"]
    },
    {
        path: 'generalDiscussions', component: _general_discussions_general_discussions_component__WEBPACK_IMPORTED_MODULE_7__["GeneralDiscussionsComponent"]
    },
    {
        path: 'forumHistory', component: _forum_history_forum_history_component__WEBPACK_IMPORTED_MODULE_8__["ForumHistoryComponent"]
    },
    {
        path: 'support', component: _support_support_component__WEBPACK_IMPORTED_MODULE_9__["SupportComponent"], data: { title: "Support" }
    },
    {
        path: 'edit/:id',
        component: _app_edit_edit_component__WEBPACK_IMPORTED_MODULE_10__["EditComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\n    margin-right:5%;\n}\nh1{\n    font-style:italic;\n    font-family:\"arial\";\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title>Forum World! Home</title>\n<!--Code for material icons-->\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n<mat-toolbar color=\"primary\" id=\"toolBar\">\n  <span id=\"intro\"><i>Forum World!</i></span>\n  <button id=\"mat-menu\" mat-raised-button [matMenuTriggerFor]=\"appmenu\" matTooltip=\"List all forums on our site\">Forums</button>\n  <mat-menu #appmenu=\"matMenu\">\n    <button mat-menu-item matTooltip=\"Talk with the best minds on our forum\" matTooltipPosition=\"right\" [routerLink]=\"['/generalDiscussions']\">\n      <mat-icon>forum</mat-icon>\n      <span>General Discussions</span>\n    </button>\n    <button mat-menu-item matTooltip=\"Chat with other bookworms\" matTooltipPosition=\"right\" [routerLink]=\"['/books']\">\n      <mat-icon>book</mat-icon>\n      <span>Books</span>\n    </button>\n    <button mat-menu-item matTooltip=\"Chat about films with movie experts\" matTooltipPosition=\"right\" [routerLink]=\"['/movies']\">\n      <mat-icon>movie</mat-icon>\n      <span>Movies</span>\n    </button>\n    <button mat-menu-item matTooltip=\"Those who don't know history are destined to repeat it\" matTooltipPosition=\"right\"\n      [routerLink]=\"['/history']\">\n      <mat-icon>hourglass_empty</mat-icon>\n      <span>History</span>\n    </button>\n    <button mat-menu-item matTooltip=\"Talk with fellow animal lovers\" matTooltipPosition=\"right\" [routerLink]=\"['/animals']\">\n      <mat-icon>pets</mat-icon>\n      <span>Animals</span>\n    </button>\n  </mat-menu>\n  <button mat-raised-button color=\"accent\" matTooltip=\"History of Forum World!\" [routerLink]=\"['/forumHistory']\">Forum\n    History</button>\n  <button mat-raised-button color=\"warn\" matTooltip=\"Page to learn about how to use forum\" [routerLink]=\"['/support']\">Support</button>\n</mat-toolbar>\n<div id=\"content\">\n    <mat-card>\n        <h2>{{forumTitle}}</h2>\n        <mat-card-content>\n          <img mat-card-image src=\"../../Images/banner.jpg\" alt=\"a picture of our banner\" height=\"400px\" width=\"300px\">\n        </mat-card-content>\n      </mat-card>\n    </div>\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(ts) {
        this.ts = ts;
    }
    AppComponent.prototype.ngOnInit = function () {
        //set title + get 
        this.ts.setTitle("Forum World Home");
        this.ts.getTitle();
        this.forumTitle = this.ts.getTitle();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./books/books.component */ "./src/app/books/books.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history/history.component */ "./src/app/history/history.component.ts");
/* harmony import */ var _animals_animals_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animals/animals.component */ "./src/app/animals/animals.component.ts");
/* harmony import */ var _general_discussions_general_discussions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./general-discussions/general-discussions.component */ "./src/app/general-discussions/general-discussions.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
/* harmony import */ var _forum_history_forum_history_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forum-history/forum-history.component */ "./src/app/forum-history/forum-history.component.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _books_books_component__WEBPACK_IMPORTED_MODULE_4__["BooksComponent"],
                _movies_movies_component__WEBPACK_IMPORTED_MODULE_5__["MoviesComponent"],
                _history_history_component__WEBPACK_IMPORTED_MODULE_6__["HistoryComponent"],
                _animals_animals_component__WEBPACK_IMPORTED_MODULE_7__["AnimalsComponent"],
                _general_discussions_general_discussions_component__WEBPACK_IMPORTED_MODULE_8__["GeneralDiscussionsComponent"],
                _support_support_component__WEBPACK_IMPORTED_MODULE_11__["SupportComponent"],
                _forum_history_forum_history_component__WEBPACK_IMPORTED_MODULE_12__["ForumHistoryComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_16__["EditComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
            ],
            providers: [_services_post_service__WEBPACK_IMPORTED_MODULE_13__["PostService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/books/books.component.css":
/*!*******************************************!*\
  !*** ./src/app/books/books.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/books/books.component.html":
/*!********************************************!*\
  !*** ./src/app/books/books.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>Welcome to the book forum - Grab a cup of coffee and talk about your favourite books!</h1>\n  <mat-accordion multi=\"true\" *ngIf=\"posts.length > 0\">\n    <div *ngFor=\"let post of posts\">\n      <div *ngIf=\"post.category == 'Books'\">\n        <mat-expansion-panel [expanded]=\"true\">\n          <mat-expansion-panel-header>\n            {{ post.title }}\n          </mat-expansion-panel-header>\n          <p>{{ post.content }}</p>\n          <mat-action-row>\n            <button mat-button [routerLink]=\"['/edit', post._id]\" color=\"primary\">EDIT</button>\n            <button mat-button (click)=\"onDelete(post._id)\" color=\"warn\">DELETE</button>\n          </mat-action-row>\n        </mat-expansion-panel>\n      </div>\n    </div>\n  </mat-accordion>\n  <p class=\"info-text mat-body-1\" *ngIf=\"posts.length <= 0\">No posts added yet!</p>\n  <button mat-raised-button color=\"accent\" (click)=\"showPost()\" id=\"postButton\">{{postText}}</button>\n  <form (submit)=\"onAddPost(postForm)\" #postForm=\"ngForm\" id=\"postArea\" *ngIf=\"hideElement\">\n    <h3>Enter posts here:</h3>\n    <mat-form-field id=\"postTitle\">\n      <textarea matInput placeholder=\"Enter post title: \" name=\"title\" id=\"title\" ngModel required #title=\"ngModel\"\n        rows=\"4\" minlength=\"5\" maxlength=\"20\"></textarea>\n      <mat-error *ngIf=\"content.invalid\">Please enter a post title > 5 characters</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <textarea matInput placeholder=\"Enter post content: \" name=\"content\" ngModel required #content=\"ngModel\" rows=\"4\"\n        minlength=\"5\" maxlength=\"50\"></textarea>\n      <mat-error *ngIf=\"content.invalid\">Please enter a post content > 5 characters</mat-error>\n    </mat-form-field>\n\n    <button mat-raised-button color=\"accent\" type=\"submit\" value=\"Check\">Submit Post</button>\n  </form>"

/***/ }),

/***/ "./src/app/books/books.component.ts":
/*!******************************************!*\
  !*** ./src/app/books/books.component.ts ***!
  \******************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BooksComponent = /** @class */ (function () {
    function BooksComponent(ps, ts) {
        this.ps = ps;
        this.ts = ts;
        this.posts = [];
        this.postText = "Make Post";
        this.category = "Books";
    }
    BooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get posts on intialization
        this.ps.getPostsData().subscribe(function (data) {
            _this.posts = data;
        });
        this.ts.setTitle(this.category);
        this.ts.getTitle();
    };
    BooksComponent.prototype.showPost = function () {
        //show post area to user
        if (this.hideElement) {
            this.hideElement = false;
            this.postText = "Make Post";
        }
        else {
            this.hideElement = true;
            this.postText = "Hide post area";
        }
    };
    BooksComponent.prototype.onAddPost = function (form) {
        console.log(form.value);
        if (form.valid) {
            this.ps.addPost(form.value.title, form.value.content, this.category).subscribe();
            form.reset();
            alert("post added");
            this.ngOnInit();
        }
        else {
            alert("FORM INVALID MIN LENGTH OF TITLE AND CONTENT MUST BE 5 CHARACTERS OR OVER");
        }
    };
    BooksComponent.prototype.onDelete = function (id) {
        console.log("Delete called " + id);
        this.ps.deletePost(id).subscribe(function () {
        });
        alert("deleted post: " + id);
        this.ngOnInit();
    };
    BooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-books',
            template: __webpack_require__(/*! ./books.component.html */ "./src/app/books/books.component.html"),
            styles: [__webpack_require__(/*! ./books.component.css */ "./src/app/books/books.component.css")]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"editPosts(postForm)\" #postForm=\"ngForm\">\n  <mat-form-field>\n    <input matInput type=\"text\" name=\"title\" ngModel={{post.title}} required #title=\"ngModel\" placeholder=\"Enter post title: \" maxlength=\"20\" minlength=\"5\">\n    <mat-error *ngIf=\"content.invalid\">Please enter a post title > 5 characters</mat-error>\n  </mat-form-field>\n  <mat-form-field>\n    <textarea matInput rows=\"4\" name=\"content\" ngModel={{post.content}} required #content=\"ngModel\" placeholder=\"Enter post content: \" maxlength=\"50\" minlength=\"5\">\n      </textarea>\n      <mat-error *ngIf=\"content.invalid\">Please enter post content > 5 characters.</mat-error>\n  </mat-form-field>\n  <button mat-raised-button color=\"accent\" type=\"submit\">Update Post</button>\n</form>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Router } from '@angular/router/src/router';




var EditComponent = /** @class */ (function () {
    function EditComponent(router, route, ps, ts) {
        this.router = router;
        this.route = route;
        this.ps = ps;
        this.ts = ts;
        this.post = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("this is the ID " + this.route.snapshot.params['id']);
        //set the id = to the route id
        this.post.id = this.route.snapshot.params['id'];
        this.ps.getPost(this.route.snapshot.params['id']).subscribe(function (data) {
            _this.post = data;
            _this.myTitle = _this.post.title;
        });
        this.ps.getPost(this.post.id).subscribe(function (data) {
            _this.category = data;
            console.log(data);
        });
        console.log("Data");
        this.ts.setTitle("Edit");
        this.ts.getTitle();
    };
    //need function to edit post on click
    EditComponent.prototype.editPosts = function (form) {
        if (form.valid) {
            console.log("IN EDIT + PID " + this.post.id + " " + this.post.category);
            this.ps.editPost(this.post.id, form.value.title, form.value.content, this.category).subscribe(function () {
            });
            this.router.navigateByUrl('/');
        }
        else {
            alert("Post invalid content and title must be 5 character minimum");
            //need this as an error occurs where posts disappear or appear unedited
            this.router.navigateByUrl('/edit');
        }
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/forum-history/forum-history.component.css":
/*!***********************************************************!*\
  !*** ./src/app/forum-history/forum-history.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card-header{\n  font-size: 1em;\n  font-weight: bold;\n  font-family: sans-serif;\n}\nmat-card-subtitle{\n    font-size: 1.4em;\n    font-weight: bold;\n    font-family: sans-serif;\n}\nmat-card-content{\n  font-size: 1em;\n  font-weight: bold;\n  font-family: sans-serif;\n}\nmat-card{\n    border: 10px solid black;\n    margin-bottom: 30%;\n    height: 700px;\n    width: 500px;\n}\n#tier1{\n  float: left;\n  width:50%;\n  margin-right: 50%;\n}\n/*\n*Tier 1 and tier2 for mat card layout\n*/\n#tier2{\n  width:50%;\n  position:absolute;\n  margin-left:50%;\n}\nimg{\n  height: 200px;\n  width: 500px;\n  /*\n  *center the images\n  *for aesthetics\n  */\n  margin-left: auto;\n  margin-right: auto;\n}\n"

/***/ }),

/***/ "./src/app/forum-history/forum-history.component.html":
/*!************************************************************!*\
  !*** ./src/app/forum-history/forum-history.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"tier1\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>The Beginning</mat-card-title>\n      <mat-card-subtitle>It had to start somewhere...</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      Forum world started as a place for people to connect with each other based on\n      their interests. We decided to expand on our forums with a variety of different\n      message boards to cater for different personalities.\n    </mat-card-content>\n    <img mat-card-image src=\"http://www.dailyhawker.com/wp-content/uploads/2018/08/Happy-Hobbies-15-Leisure-Activities-to-Make-You-Smile-MainPhoto.jpg\" alt=\"a picture of hobbies\">\n  </mat-card>\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>The Middle</mat-card-title>\n      <mat-card-subtitle>We remain committed</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      We remain committed to development of Forum World and on expanding it's influence.\n      We have clear goals on where we want the website to go in the future and we have\n      ideas for new features and extensions. Forum World appreciates it's supporters\n      as well as it's critics thank you so much for your continued support.\n    </mat-card-content>\n    <img mat-card-image src=\"http://blog.thebalanceofhealth.com/wp-content/uploads/2015/09/middle-of-road.jpg\" alt=\"a picture of middle of road\">\n  </mat-card>\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>The end</mat-card-title>\n      <mat-card-subtitle>Not anytime soon(hopefully!)</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      Forum World has no time of stopping our service anytime soon! We will continue\n      to bring you our great posts from users like you. We hope you enjoy this site\n      and will continue visiting us in the future! We also hope you will share\n      this website with your friends and help grow our userbase :).\n    </mat-card-content>\n    <img mat-card-image src=\"https://blog.recruitloop.com/wp-content/uploads/2014/05/The-end-of-the-line.jpg\" alt=\"End of train track\">\n  </mat-card>\n</div>\n<div id=\"tier2\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>The beggining is only the start</mat-card-title>\n      <mat-card-subtitle>Constant improvement</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      We are still in our infancy who knows what the future will hold. We might\n      even make a profit!\n    </mat-card-content>\n    <img mat-card-image src=\"https://www.trademarksandbrandsonline.com/media/image/dovapi.jpg\" alt=\"Sunrise\">\n  </mat-card>\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>The journey(NOT THE BAND!) is more important than the end or the start</mat-card-title>\n      <mat-card-subtitle>We need you</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      We need you to continue to frequent our forums to ensure that we maintain\n      longevity :).\n    </mat-card-content>\n    <img mat-card-image src=\"https://thedistinctdot.files.wordpress.com/2018/04/journey.jpg\" alt=\"Journey\">\n  </mat-card>\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>The end can be a new beginning</mat-card-title>\n      <mat-card-subtitle>Although we won't stop anytime soon</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      Sometimes the end may mean more features and services we can provide to you,\n      the user.\n    </mat-card-content>\n    <img mat-card-image src=\"https://mythicscribes.com/wp-content/uploads/2015/02/Phoenix.jpg\" alt=\"Phoenix\">\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/forum-history/forum-history.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/forum-history/forum-history.component.ts ***!
  \**********************************************************/
/*! exports provided: ForumHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumHistoryComponent", function() { return ForumHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForumHistoryComponent = /** @class */ (function () {
    function ForumHistoryComponent(ts) {
        this.ts = ts;
    }
    ForumHistoryComponent.prototype.ngOnInit = function () {
        this.ts.setTitle("Forum History");
        this.ts.getTitle();
    };
    ForumHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forum-history',
            template: __webpack_require__(/*! ./forum-history.component.html */ "./src/app/forum-history/forum-history.component.html"),
            styles: [__webpack_require__(/*! ./forum-history.component.css */ "./src/app/forum-history/forum-history.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], ForumHistoryComponent);
    return ForumHistoryComponent;
}());



/***/ }),

/***/ "./src/app/general-discussions/general-discussions.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/general-discussions/general-discussions.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n"

/***/ }),

/***/ "./src/app/general-discussions/general-discussions.component.html":
/*!************************************************************************!*\
  !*** ./src/app/general-discussions/general-discussions.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>General Discussions forum - For a good relaxing chat :)</h1>\n\n<h2>Right into the conversation!</h2>\n<!-- modify this for project*******-->\n<mat-accordion multi=\"true\" *ngIf=\"posts.length > 0\">\n  <div *ngFor=\"let post of posts\">\n    <div *ngIf=\"post.category == 'General'\">\n      <mat-expansion-panel [expanded]=\"true\">\n        <mat-expansion-panel-header>\n          {{ post.title }}\n        </mat-expansion-panel-header>\n        <p>{{ post.content }}</p>\n        <mat-action-row>\n          <button mat-button [routerLink]=\"['/edit', post._id]\" color=\"primary\">EDIT</button>\n          <button mat-button (click)=\"onDelete(post._id)\" color=\"warn\">DELETE</button>\n        </mat-action-row>\n      </mat-expansion-panel>\n    </div>\n  </div>\n</mat-accordion>\n<p class=\"info-text mat-body-1\" *ngIf=\"posts.length <= 0\">No posts added yet!</p>\n<button mat-raised-button color=\"accent\" (click)=\"showPost()\" id=\"postButton\">{{postText}}</button>\n<form (submit)=\"onAddPost(postForm)\" #postForm=\"ngForm\" id=\"postArea\" *ngIf=\"hideElement\">\n  <h3>Enter posts here:</h3>\n  <mat-form-field id=\"postTitle\">\n    <textarea matInput placeholder=\"Enter post title: \" name=\"title\" id=\"title\" ngModel required #title=\"ngModel\" rows=\"4\"\n      minlength=\"5\" maxlength=\"20\"></textarea>\n      <mat-error *ngIf=\"content.invalid\">Please enter a post title > 5 characters</mat-error>\n  </mat-form-field>\n  <mat-form-field>\n    <textarea matInput placeholder=\"Enter post content: \" name=\"content\" ngModel required #content=\"ngModel\" rows=\"4\"\n      minlength=\"5\" maxlength=\"50\"></textarea>\n      <mat-error *ngIf=\"content.invalid\">Please enter a post content > 5 characters</mat-error>\n  </mat-form-field>\n  <button mat-raised-button color=\"accent\" type=\"submit\">Submit Post</button>\n</form>"

/***/ }),

/***/ "./src/app/general-discussions/general-discussions.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/general-discussions/general-discussions.component.ts ***!
  \**********************************************************************/
/*! exports provided: GeneralDiscussionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralDiscussionsComponent", function() { return GeneralDiscussionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneralDiscussionsComponent = /** @class */ (function () {
    function GeneralDiscussionsComponent(ps, ts) {
        this.ps = ps;
        this.ts = ts;
        this.posts = [];
        this.postText = "Make Post";
        this.category = "General";
        var forumTitle = "Welcome to the General Discussions forum - A place to relax and chit chat";
    }
    GeneralDiscussionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get posts on intialization
        this.ps.getPostsData().subscribe(function (data) {
            _this.posts = data;
        });
        this.ts.setTitle(this.category);
        this.ts.getTitle();
    };
    GeneralDiscussionsComponent.prototype.showPost = function () {
        //show post area to user
        if (this.hideElement) {
            this.hideElement = false;
            this.postText = "Make Post";
        }
        else {
            this.hideElement = true;
            this.postText = "Hide post area";
        }
    };
    GeneralDiscussionsComponent.prototype.onAddPost = function (form) {
        console.log(form.value);
        if (form.valid) {
            this.ps.addPost(form.value.title, form.value.content, this.category).subscribe();
            form.reset();
            alert("post added");
            this.ngOnInit();
        }
        else {
            alert("FORM INVALID MIN LENGTH OF TITLE AND CONTENT MUST BE 5 CHARACTERS OR OVER");
        }
    };
    GeneralDiscussionsComponent.prototype.onDelete = function (id) {
        console.log("Delete called " + id);
        this.ps.deletePost(id).subscribe(function () {
        });
        alert("deleted post: " + id);
        this.ngOnInit();
    };
    GeneralDiscussionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-general-discussions',
            template: __webpack_require__(/*! ./general-discussions.component.html */ "./src/app/general-discussions/general-discussions.component.html"),
            styles: [__webpack_require__(/*! ./general-discussions.component.css */ "./src/app/general-discussions/general-discussions.component.css")]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], GeneralDiscussionsComponent);
    return GeneralDiscussionsComponent;
}());



/***/ }),

/***/ "./src/app/history/history.component.css":
/*!***********************************************!*\
  !*** ./src/app/history/history.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/history/history.component.html":
/*!************************************************!*\
  !*** ./src/app/history/history.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>History forum - Tell us all about your favourite historical period!</h1>\n  <mat-accordion multi=\"true\" *ngIf=\"posts.length > 0\">\n      <div *ngFor=\"let post of posts\">\n        <div *ngIf=\"post.category == 'History'\">\n          <mat-expansion-panel [expanded]=\"true\">\n            <mat-expansion-panel-header>\n              {{ post.title }}\n            </mat-expansion-panel-header>\n            <p>{{ post.content }}</p>\n            <mat-action-row>\n              <button mat-button [routerLink]=\"['/edit', post._id]\" color=\"primary\">EDIT</button>\n              <button mat-button (click)=\"onDelete(post._id)\" color=\"warn\">DELETE</button>\n            </mat-action-row>\n          </mat-expansion-panel>\n        </div>\n      </div>\n    </mat-accordion>\n    <p class=\"info-text mat-body-1\" *ngIf=\"posts.length <= 0\">No posts added yet!</p>\n    <button mat-raised-button color=\"accent\" (click)=\"showPost()\" id=\"postButton\">{{postText}}</button>\n    <form (submit)=\"onAddPost(postForm)\" #postForm=\"ngForm\" id=\"postArea\" *ngIf=\"hideElement\">\n      <h3>Enter posts here:</h3>\n      <mat-form-field id=\"postTitle\">\n        <textarea matInput placeholder=\"Enter post title: \" name=\"title\" id=\"title\" ngModel required #title=\"ngModel\" rows=\"4\"\n          minlength=\"5\" maxlength=\"20\"></textarea>\n          <mat-error *ngIf=\"content.invalid\">Please enter a post title > 5 characters</mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <textarea matInput placeholder=\"Enter post content: \" name=\"content\" ngModel required #content=\"ngModel\" rows=\"4\"\n          minlength=\"5\" maxlength=\"50\"></textarea>\n          <mat-error *ngIf=\"content.invalid\">Please enter a post content > 5 characters</mat-error>\n      </mat-form-field>\n      <button mat-raised-button color=\"accent\" type=\"submit\">Submit Post</button>\n    </form>"

/***/ }),

/***/ "./src/app/history/history.component.ts":
/*!**********************************************!*\
  !*** ./src/app/history/history.component.ts ***!
  \**********************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(ps, ts) {
        this.ps = ps;
        this.ts = ts;
        this.posts = [];
        this.postText = "Make Post";
        this.category = "History";
        var forumTitle = "Welcome to the history forum - History repeats itself";
    }
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get posts on intialization
        this.ps.getPostsData().subscribe(function (data) {
            _this.posts = data;
        });
        this.ts.setTitle(this.category);
        this.ts.getTitle();
    };
    HistoryComponent.prototype.showPost = function () {
        //show post area to user
        if (this.hideElement) {
            this.hideElement = false;
            this.postText = "Make Post";
        }
        else {
            this.hideElement = true;
            this.postText = "Hide post area";
        }
    };
    HistoryComponent.prototype.onAddPost = function (form) {
        console.log(form.value);
        if (form.valid) {
            this.ps.addPost(form.value.title, form.value.content, this.category).subscribe();
            form.reset();
            alert("post added");
            this.ngOnInit();
        }
        else {
            alert("FORM INVALID MIN LENGTH OF TITLE AND CONTENT MUST BE 5 CHARACTERS OR OVER");
        }
    };
    HistoryComponent.prototype.onDelete = function (id) {
        console.log("Delete called " + id);
        this.ps.deletePost(id).subscribe(function () {
        });
        alert("deleted post: " + id);
        this.ngOnInit();
    };
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.css */ "./src/app/history/history.component.css")]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/movies/movies.component.css":
/*!*********************************************!*\
  !*** ./src/app/movies/movies.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/movies/movies.component.html":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>Movie Forum - Bust out the popcorn!</h1>\n  <mat-accordion multi=\"true\" *ngIf=\"posts.length > 0\">\n    <div *ngFor=\"let post of posts\">\n      <div *ngIf=\"post.category == 'Movies'\">\n        <mat-expansion-panel [expanded]=\"true\">\n          <mat-expansion-panel-header>\n            {{ post.title }}\n          </mat-expansion-panel-header>\n          <p>{{ post.content }}</p>\n          <mat-action-row>\n            <button mat-button [routerLink]=\"['/edit', post._id]\" color=\"primary\">EDIT</button>\n            <button mat-button (click)=\"onDelete(post._id)\" color=\"warn\">DELETE</button>\n          </mat-action-row>\n        </mat-expansion-panel>\n      </div>\n    </div>\n  </mat-accordion>\n  <p class=\"info-text mat-body-1\" *ngIf=\"posts.length <= 0\">No posts added yet!</p>\n  <button mat-raised-button color=\"accent\" (click)=\"showPost()\" id=\"postButton\">{{postText}}</button>\n  <form (submit)=\"onAddPost(postForm)\" #postForm=\"ngForm\" id=\"postArea\" *ngIf=\"hideElement\">\n    <h3>Enter posts here:</h3>\n    <mat-form-field id=\"postTitle\">\n      <textarea matInput placeholder=\"Enter post title: \" name=\"title\" id=\"title\" ngModel #title=\"ngModel\" rows=\"4\"\n        required minlength=\"5\" maxlength=\"20\"></textarea>\n      <mat-error *ngIf=\"content.invalid\">Please enter a post title > 5 characters</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <textarea matInput placeholder=\"Enter post content: \" name=\"content\" ngModel #content=\"ngModel\" rows=\"4\" required\n        minlength=\"5\" maxlength=\"50\"></textarea>\n      <mat-error *ngIf=\"content.invalid\">Please enter a post content > 5 characters</mat-error>\n    </mat-form-field>\n    <button mat-raised-button color=\"accent\" type=\"submit\">Submit Post</button>\n  </form>"

/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Router } from '@angular/router/src/router';



var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(ps, route, ts) {
        this.ps = ps;
        this.route = route;
        this.ts = ts;
        this.posts = [];
        this.category = "Movies";
        this.postText = "Make Post";
        var forumTitle = "Welcome to the movie forum - BRING OUT THE POPCORN!";
    }
    MoviesComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get posts on intialization
        this.ps.getPostsData().subscribe(function (data) {
            _this.posts = data;
        });
        this.ts.setTitle(this.category);
        this.ts.getTitle();
    };
    MoviesComponent.prototype.showPost = function () {
        //add hide button to forums for each post
        //show post area to user
        if (this.hideElement) {
            this.hideElement = false;
            this.postText = "Make Post";
        }
        else {
            this.hideElement = true;
            this.postText = "Hide post area";
        }
    };
    MoviesComponent.prototype.onAddPost = function (form) {
        console.log(form.value);
        if (form.valid) {
            this.ps.addPost(form.value.title, form.value.content, this.category).subscribe();
            form.reset();
            alert("post added");
            this.ngOnInit();
        }
        else {
            alert("FORM INVALID MIN LENGTH OF TITLE AND CONTENT MUST BE 5 CHARACTERS OR OVER");
        }
    };
    MoviesComponent.prototype.onDelete = function (id) {
        console.log("Delete called " + id);
        this.ps.deletePost(id).subscribe(function () {
        });
        alert("deleted post: " + id);
        this.ngOnInit();
    };
    MoviesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies.component.html */ "./src/app/movies/movies.component.html"),
            styles: [__webpack_require__(/*! ./movies.component.css */ "./src/app/movies/movies.component.css")]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.getPostsData = function () {
        return this.http.get("http://localhost:8081/api/posts");
    };
    PostService.prototype.addPost = function (title, content, category) {
        var post = { title: title, content: content, category: category };
        return this.http.post("http://localhost:8081/api/posts/", post);
    };
    PostService.prototype.deletePost = function (id) {
        console.log("Deleting post " + id);
        return this.http.delete("http://localhost:8081/api/posts/" + id);
    };
    PostService.prototype.getPost = function (id) {
        return this.http.get("http://localhost:8081/api/posts/" + id);
    };
    PostService.prototype.editPost = function (id, title, content, category) {
        //id is undefined
        var post = { title: title, content: content, category: category };
        console.log("EDITING POST IN POST SERVICE " + post.title + " " + id + " " + post.content);
        return this.http.put("http://localhost:8081/api/posts/" + id, post);
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/support/support.component.css":
/*!***********************************************!*\
  !*** ./src/app/support/support.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card{\n  margin-bottom: 2%;\n  border: 3px solid black;\n}\ntextarea{\n  resize: none;\n  height: 200px;\n  width: 50%;\n  margin-bottom: 2%;\n}\n"

/***/ }),

/***/ "./src/app/support/support.component.html":
/*!************************************************!*\
  !*** ./src/app/support/support.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>Support</mat-card-title>\n    <mat-card-subtitle>We're here for you</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    Here at Forum World we take our users very seriously when they address us\n    with a problem and we try to offer the best solutions available.\n\n    Below we have listed some common problems, or you can send your own in\n    the box provided below.\n  </mat-card-content>\n</mat-card>\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>Bad posts</mat-card-title>\n    <mat-card-subtitle>What do I do about bad posts?</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    Forum World is a 100% free speech zone and if you don't like a post you can\n    hide it.\n  </mat-card-content>\n</mat-card>\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>How can I suggest new features?</mat-card-title>\n    <mat-card-subtitle>We really need them!</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    We read posts from time to time, so you can suggest them on any forum.\n  </mat-card-content>\n</mat-card>\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>Which forum is the best?</mat-card-title>\n    <mat-card-subtitle>Completely biased and shouldn't be here</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    Obviously the history forum DUH!!\n  </mat-card-content>\n</mat-card>\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>What's the best way to contact you?</mat-card-title>\n    <mat-card-subtitle>Contact details</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    Input your querys/suggestions in the box below and that will send us an email.\n  </mat-card-content>\n</mat-card>\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>Who runs the forums?</mat-card-title>\n    <mat-card-subtitle>Who owns the forum</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    Forums are maintained by independent owners and sustained by users like you.\n  </mat-card-content>\n</mat-card>\n<form (submit)=\"onAddPost(postForm)\" #postForm=\"ngForm\" id=\"postArea\">\n  <h3>Title of complaint:</h3>\n  <mat-form-field id=\"postTitle\">\n    <textarea matInput placeholder=\"Enter subject of complaint: \" name=\"title\" id=\"title\" ngModel required #title=\"ngModel\"\n      rows=\"4\" minlength=\"5\" maxlength=\"20\"></textarea>\n    <mat-error *ngIf=\"content.invalid\">Please enter a post title > 5 characters</mat-error>\n  </mat-form-field>\n  <mat-form-field>\n    <textarea matInput placeholder=\"Enter details of complaint: \" name=\"content\" ngModel required #content=\"ngModel\"\n      rows=\"4\" minlength=\"5\" maxlength=\"50\"></textarea>\n    <mat-error *ngIf=\"content.invalid\">Please enter a post content > 5 characters</mat-error>\n  </mat-form-field>\n  <br>\n  <button mat-raised-button color=\"accent\" matTooltip=\"Submit to dev team\">Submit</button>\n</form>\n<button id=\"showBugs\" (click)=\"showBugs()\">{{buttonText}}</button>\n<h3>Error list to fix developers</h3>\n<div *ngIf=\"hideElement\">\n  <div *ngFor=\"let post of posts\">\n    <div *ngIf=\"post.category == 'Support'\">\n      <mat-card>\n        <mat-card-title>\n          {{ post.title }}\n        </mat-card-title>\n        <mat-card-content>\n          <p>{{ post.content }}</p>\n        </mat-card-content>\n        <mat-action-row>\n          <button mat-button [routerLink]=\"['/edit', post._id]\" color=\"primary\">EDIT</button>\n          <button mat-button (click)=\"onDelete(post._id)\" color=\"warn\">DELETE</button>\n        </mat-action-row>\n      </mat-card>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/support/support.component.ts":
/*!**********************************************!*\
  !*** ./src/app/support/support.component.ts ***!
  \**********************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SupportComponent = /** @class */ (function () {
    function SupportComponent(ps, ts) {
        this.ps = ps;
        this.ts = ts;
        this.posts = [];
        this.category = "Support";
        this.buttonText = "Show bugs to be fixed";
        this.password = "Developer";
    }
    SupportComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get posts on intialization
        this.ps.getPostsData().subscribe(function (data) {
            _this.posts = data;
        });
        this.ts.setTitle(this.category);
        this.ts.getTitle();
    };
    SupportComponent.prototype.onAddPost = function (form) {
        console.log(form.value);
        if (form.valid) {
            this.ps.addPost(form.value.title, form.value.content, this.category).subscribe();
            form.reset();
            alert("post added");
            this.ngOnInit();
        }
        else {
            alert("FORM INVALID MIN LENGTH OF TITLE AND CONTENT MUST BE 5 CHARACTERS OR OVER");
        }
    };
    SupportComponent.prototype.onDelete = function (id) {
        console.log("Delete called " + id);
        this.ps.deletePost(id).subscribe(function () {
        });
        alert("deleted post: " + id);
        this.ngOnInit();
    };
    SupportComponent.prototype.showBugs = function () {
        //add hide button to forums for each post
        //show bugs if user enters password 'Developer'
        if (this.hideElement != true) {
            this.userPass = prompt("Please enter password: ");
        }
        if (this.hideElement && this.userPass == this.password) {
            this.hideElement = false;
            this.buttonText = "Show Bugs to be fixed";
        }
        else {
            this.hideElement = true;
            this.buttonText = "Hide Bugs";
        }
        if (this.userPass != this.password) {
            alert("Wrong password entered");
            this.hideElement = false;
            this.buttonText = "Show Bugs";
        }
    };
    SupportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-support',
            template: __webpack_require__(/*! ./support.component.html */ "./src/app/support/support.component.html"),
            styles: [__webpack_require__(/*! ./support.component.css */ "./src/app/support/support.component.css")]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], SupportComponent);
    return SupportComponent;
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

module.exports = __webpack_require__(/*! /home/ultan/Documents/github/AngularProject/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map