function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ticket-ticket-module"], {
  /***/
  "./src/app/ticket/ticket-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/ticket/ticket-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: TicketRoutingModule */

  /***/
  function srcAppTicketTicketRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketRoutingModule", function () {
      return TicketRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ticket_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ticket.component */
    "./src/app/ticket/ticket.component.ts");

    var routes = [{
      path: '',
      component: _ticket_component__WEBPACK_IMPORTED_MODULE_2__["TicketComponent"]
    }];

    var TicketRoutingModule = function TicketRoutingModule() {
      _classCallCheck(this, TicketRoutingModule);
    };

    TicketRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TicketRoutingModule
    });
    TicketRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TicketRoutingModule_Factory(t) {
        return new (t || TicketRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TicketRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ticket/ticket.component.ts":
  /*!********************************************!*\
    !*** ./src/app/ticket/ticket.component.ts ***!
    \********************************************/

  /*! exports provided: TicketComponent */

  /***/
  function srcAppTicketTicketComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketComponent", function () {
      return TicketComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");

    var TicketComponent = /*#__PURE__*/function () {
      function TicketComponent() {
        _classCallCheck(this, TicketComponent);
      }

      _createClass(TicketComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TicketComponent;
    }();

    TicketComponent.ɵfac = function TicketComponent_Factory(t) {
      return new (t || TicketComponent)();
    };

    TicketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TicketComponent,
      selectors: [["app-ticket"]],
      decls: 42,
      vars: 2,
      consts: [[1, "main-container", 2, "height", "100%"], [1, "content-container"], [1, "content-area"], [1, "sidenav"], [3, "clrExpanded"]],
      template: function TicketComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " ... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "clr-tree");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "clr-tree-node", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " David Wallace (CFO) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clr-tree-node", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Michael Scott (Regional Manager) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "clr-tree-node");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Dwight K. Schrute (Assistant to the Regional Manager)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "clr-tree-node");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Jim Halpert (Head of Sales) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "clr-tree-node");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Andy Bernard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "clr-tree-node");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Stanley Hudson");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "clr-tree-node");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Phyllis Vance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "clr-tree-node");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Todd Packer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "clr-tree-node");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Angela Martin (Head of Accounting) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "clr-tree-node");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Kevin Malone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "clr-tree-node");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Oscar Martinez");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "clr-tree-node");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Kelly Kapoor (Head of Customer Service) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "clr-tree-node");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Ryan Howard (Temp)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "clr-tree-node");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Creed Bratton (Quality Assurance) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "clr-tree-node");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Meredith Palmer (Supplier Relations) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "clr-tree-node");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Toby Flenderson (Human Resources) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "clr-tree-node");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Pam Beesly (Reception) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "clr-tree-node");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Darryl Philbin (Warehouse) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrExpanded", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrExpanded", true);
        }
      },
      directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrTree"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrTreeNode"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpY2tldC90aWNrZXQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ticket',
          templateUrl: './ticket.component.html',
          styleUrls: ['./ticket.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ticket/ticket.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/ticket/ticket.module.ts ***!
    \*****************************************/

  /*! exports provided: TicketModule */

  /***/
  function srcAppTicketTicketModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketModule", function () {
      return TicketModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ticket_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ticket-routing.module */
    "./src/app/ticket/ticket-routing.module.ts");
    /* harmony import */


    var _ticket_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ticket.component */
    "./src/app/ticket/ticket.component.ts");
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");

    var TicketModule = function TicketModule() {
      _classCallCheck(this, TicketModule);
    };

    TicketModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TicketModule
    });
    TicketModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TicketModule_Factory(t) {
        return new (t || TicketModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"], _ticket_routing_module__WEBPACK_IMPORTED_MODULE_2__["TicketRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TicketModule, {
        declarations: [_ticket_component__WEBPACK_IMPORTED_MODULE_3__["TicketComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"], _ticket_routing_module__WEBPACK_IMPORTED_MODULE_2__["TicketRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_ticket_component__WEBPACK_IMPORTED_MODULE_3__["TicketComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"], _ticket_routing_module__WEBPACK_IMPORTED_MODULE_2__["TicketRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=ticket-ticket-module-es5.js.map