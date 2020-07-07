(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cmdb-cmdb-module"],{

/***/ "./src/app/cmdb/cmdb-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/cmdb/cmdb-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CmdbRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmdbRoutingModule", function() { return CmdbRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cmdb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cmdb.component */ "./src/app/cmdb/cmdb.component.ts");





const routes = [{ path: '', component: _cmdb_component__WEBPACK_IMPORTED_MODULE_2__["CmdbComponent"] }];
class CmdbRoutingModule {
}
CmdbRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CmdbRoutingModule });
CmdbRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CmdbRoutingModule_Factory(t) { return new (t || CmdbRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CmdbRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CmdbRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cmdb/cmdb.component.ts":
/*!****************************************!*\
  !*** ./src/app/cmdb/cmdb.component.ts ***!
  \****************************************/
/*! exports provided: CmdbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmdbComponent", function() { return CmdbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CmdbComponent {
    constructor() { }
    ngOnInit() {
    }
}
CmdbComponent.ɵfac = function CmdbComponent_Factory(t) { return new (t || CmdbComponent)(); };
CmdbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CmdbComponent, selectors: [["app-cmdb"]], decls: 2, vars: 0, template: function CmdbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cmdb works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NtZGIvY21kYi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CmdbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cmdb',
                templateUrl: './cmdb.component.html',
                styleUrls: ['./cmdb.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/cmdb/cmdb.module.ts":
/*!*************************************!*\
  !*** ./src/app/cmdb/cmdb.module.ts ***!
  \*************************************/
/*! exports provided: CmdbModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmdbModule", function() { return CmdbModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _cmdb_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cmdb-routing.module */ "./src/app/cmdb/cmdb-routing.module.ts");
/* harmony import */ var _cmdb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cmdb.component */ "./src/app/cmdb/cmdb.component.ts");





class CmdbModule {
}
CmdbModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CmdbModule });
CmdbModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CmdbModule_Factory(t) { return new (t || CmdbModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _cmdb_routing_module__WEBPACK_IMPORTED_MODULE_2__["CmdbRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CmdbModule, { declarations: [_cmdb_component__WEBPACK_IMPORTED_MODULE_3__["CmdbComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _cmdb_routing_module__WEBPACK_IMPORTED_MODULE_2__["CmdbRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CmdbModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_cmdb_component__WEBPACK_IMPORTED_MODULE_3__["CmdbComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _cmdb_routing_module__WEBPACK_IMPORTED_MODULE_2__["CmdbRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=cmdb-cmdb-module-es2015.js.map