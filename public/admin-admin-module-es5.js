function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"], {
  /***/
  "./src/app/admin/admin-access-management/admin-access-management.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/admin/admin-access-management/admin-access-management.component.ts ***!
    \************************************************************************************/

  /*! exports provided: AdminAccessManagementComponent */

  /***/
  function srcAppAdminAdminAccessManagementAdminAccessManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminAccessManagementComponent", function () {
      return AdminAccessManagementComponent;
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


    var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");

    var AdminAccessManagementComponent = /*#__PURE__*/function () {
      function AdminAccessManagementComponent() {
        _classCallCheck(this, AdminAccessManagementComponent);
      }

      _createClass(AdminAccessManagementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminAccessManagementComponent;
    }();

    AdminAccessManagementComponent.ɵfac = function AdminAccessManagementComponent_Factory(t) {
      return new (t || AdminAccessManagementComponent)();
    };

    AdminAccessManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminAccessManagementComponent,
      selectors: [["app-admin-access-management"]],
      decls: 19,
      vars: 0,
      consts: [[1, "main-container", 2, "height", "100%"], [1, "header", "header-5"], [1, "branding"], ["routerLink", "./", 1, "nav-link"], [1, "title"], [1, "content-container"], ["clrVerticalNavLink", "", "routerLink", "./users", "routerLinkActive", "active"], ["clrVerticalNavIcon", "", "shape", "user"], ["clrVerticalNavLink", "", "routerLink", "./groups", "routerLinkActive", "active"], ["clrVerticalNavIcon", "", "shape", "users"], ["clrVerticalNavLink", "", "routerLink", "./roles", "routerLinkActive", "active"], ["clrVerticalNavIcon", "", "shape", "employee-group"], [1, "content-area", 2, "padding", "0"]],
      template: function AdminAccessManagementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Access Management");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "clr-vertical-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "clr-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Users ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "clr-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Groups ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "clr-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Roles ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrVerticalNav"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrVerticalNavLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrVerticalNavIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWFjY2Vzcy1tYW5hZ2VtZW50L2FkbWluLWFjY2Vzcy1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminAccessManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-access-management',
          templateUrl: './admin-access-management.component.html',
          styleUrls: ['./admin-access-management.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/admin-class-manager/admin-class-manager.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/admin/admin-class-manager/admin-class-manager.component.ts ***!
    \****************************************************************************/

  /*! exports provided: AdminClassManagerComponent */

  /***/
  function srcAppAdminAdminClassManagerAdminClassManagerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminClassManagerComponent", function () {
      return AdminClassManagerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdminClassManagerComponent = /*#__PURE__*/function () {
      function AdminClassManagerComponent() {
        _classCallCheck(this, AdminClassManagerComponent);
      }

      _createClass(AdminClassManagerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminClassManagerComponent;
    }();

    AdminClassManagerComponent.ɵfac = function AdminClassManagerComponent_Factory(t) {
      return new (t || AdminClassManagerComponent)();
    };

    AdminClassManagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminClassManagerComponent,
      selectors: [["app-admin-class-manager"]],
      decls: 2,
      vars: 0,
      template: function AdminClassManagerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-class-manager works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWNsYXNzLW1hbmFnZXIvYWRtaW4tY2xhc3MtbWFuYWdlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminClassManagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-class-manager',
          templateUrl: './admin-class-manager.component.html',
          styleUrls: ['./admin-class-manager.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/admin-groups/admin-groups.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/admin/admin-groups/admin-groups.component.ts ***!
    \**************************************************************/

  /*! exports provided: AdminGroupsComponent */

  /***/
  function srcAppAdminAdminGroupsAdminGroupsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminGroupsComponent", function () {
      return AdminGroupsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdminGroupsComponent = /*#__PURE__*/function () {
      function AdminGroupsComponent() {
        _classCallCheck(this, AdminGroupsComponent);
      }

      _createClass(AdminGroupsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminGroupsComponent;
    }();

    AdminGroupsComponent.ɵfac = function AdminGroupsComponent_Factory(t) {
      return new (t || AdminGroupsComponent)();
    };

    AdminGroupsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminGroupsComponent,
      selectors: [["app-admin-groups"]],
      decls: 2,
      vars: 0,
      template: function AdminGroupsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-groups works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWdyb3Vwcy9hZG1pbi1ncm91cHMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminGroupsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-groups',
          templateUrl: './admin-groups.component.html',
          styleUrls: ['./admin-groups.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/admin-roles/admin-roles.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/admin/admin-roles/admin-roles.component.ts ***!
    \************************************************************/

  /*! exports provided: AdminRolesComponent */

  /***/
  function srcAppAdminAdminRolesAdminRolesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminRolesComponent", function () {
      return AdminRolesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdminRolesComponent = /*#__PURE__*/function () {
      function AdminRolesComponent() {
        _classCallCheck(this, AdminRolesComponent);
      }

      _createClass(AdminRolesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminRolesComponent;
    }();

    AdminRolesComponent.ɵfac = function AdminRolesComponent_Factory(t) {
      return new (t || AdminRolesComponent)();
    };

    AdminRolesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminRolesComponent,
      selectors: [["app-admin-roles"]],
      decls: 2,
      vars: 0,
      template: function AdminRolesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-roles works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXJvbGVzL2FkbWluLXJvbGVzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRolesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-roles',
          templateUrl: './admin-roles.component.html',
          styleUrls: ['./admin-roles.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/admin-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/admin/admin-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: AdminRoutingModule */

  /***/
  function srcAppAdminAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function () {
      return AdminRoutingModule;
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


    var _admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin-users/admin-users.component */
    "./src/app/admin/admin-users/admin-users.component.ts");
    /* harmony import */


    var _admin_groups_admin_groups_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admin-groups/admin-groups.component */
    "./src/app/admin/admin-groups/admin-groups.component.ts");
    /* harmony import */


    var _admin_access_management_admin_access_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./admin-access-management/admin-access-management.component */
    "./src/app/admin/admin-access-management/admin-access-management.component.ts");
    /* harmony import */


    var _admin_roles_admin_roles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./admin-roles/admin-roles.component */
    "./src/app/admin/admin-roles/admin-roles.component.ts");
    /* harmony import */


    var _admin_settings_admin_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./admin-settings/admin-settings.component */
    "./src/app/admin/admin-settings/admin-settings.component.ts");
    /* harmony import */


    var _admin_class_manager_admin_class_manager_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./admin-class-manager/admin-class-manager.component */
    "./src/app/admin/admin-class-manager/admin-class-manager.component.ts");
    /* harmony import */


    var _components_admin_record_list_admin_record_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/admin-record-list/admin-record-list.component */
    "./src/app/admin/components/admin-record-list/admin-record-list.component.ts");

    var routes = [{
      path: '',
      component: _admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
      children: [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'users'
      }, {
        path: ':table',
        component: _components_admin_record_list_admin_record_list_component__WEBPACK_IMPORTED_MODULE_9__["AdminRecordListComponent"]
      }, {
        path: 'users',
        component: _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_3__["AdminUsersComponent"]
      }, {
        path: 'groups',
        component: _admin_groups_admin_groups_component__WEBPACK_IMPORTED_MODULE_4__["AdminGroupsComponent"]
      }, {
        path: 'roles',
        component: _admin_roles_admin_roles_component__WEBPACK_IMPORTED_MODULE_6__["AdminRolesComponent"]
      }, {
        path: 'roles',
        component: _admin_roles_admin_roles_component__WEBPACK_IMPORTED_MODULE_6__["AdminRolesComponent"]
      }, {
        path: 'class-manager',
        component: _admin_class_manager_admin_class_manager_component__WEBPACK_IMPORTED_MODULE_8__["AdminClassManagerComponent"]
      }, {
        path: 'settings',
        component: _admin_settings_admin_settings_component__WEBPACK_IMPORTED_MODULE_7__["AdminSettingsComponent"]
      }, {
        path: 'access-management',
        component: _admin_access_management_admin_access_management_component__WEBPACK_IMPORTED_MODULE_5__["AdminAccessManagementComponent"],
        children: [{
          path: '',
          pathMatch: 'full',
          redirectTo: 'users'
        }, {
          path: 'users',
          component: _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_3__["AdminUsersComponent"]
        }, {
          path: 'groups',
          component: _admin_groups_admin_groups_component__WEBPACK_IMPORTED_MODULE_4__["AdminGroupsComponent"]
        }, {
          path: 'roles',
          component: _admin_roles_admin_roles_component__WEBPACK_IMPORTED_MODULE_6__["AdminRolesComponent"]
        }]
      }]
    }];

    var AdminRoutingModule = function AdminRoutingModule() {
      _classCallCheck(this, AdminRoutingModule);
    };

    AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdminRoutingModule
    });
    AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdminRoutingModule_Factory(t) {
        return new (t || AdminRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRoutingModule, [{
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
  "./src/app/admin/admin-settings/admin-settings.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/admin/admin-settings/admin-settings.component.ts ***!
    \******************************************************************/

  /*! exports provided: AdminSettingsComponent */

  /***/
  function srcAppAdminAdminSettingsAdminSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminSettingsComponent", function () {
      return AdminSettingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdminSettingsComponent = /*#__PURE__*/function () {
      function AdminSettingsComponent() {
        _classCallCheck(this, AdminSettingsComponent);
      }

      _createClass(AdminSettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminSettingsComponent;
    }();

    AdminSettingsComponent.ɵfac = function AdminSettingsComponent_Factory(t) {
      return new (t || AdminSettingsComponent)();
    };

    AdminSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminSettingsComponent,
      selectors: [["app-admin-settings"]],
      decls: 2,
      vars: 0,
      template: function AdminSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-settings works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXNldHRpbmdzL2FkbWluLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-settings',
          templateUrl: './admin-settings.component.html',
          styleUrls: ['./admin-settings.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/admin-ticket-classes/admin-ticket-classes.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/admin/admin-ticket-classes/admin-ticket-classes.component.ts ***!
    \******************************************************************************/

  /*! exports provided: AdminTicketClassesComponent */

  /***/
  function srcAppAdminAdminTicketClassesAdminTicketClassesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminTicketClassesComponent", function () {
      return AdminTicketClassesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdminTicketClassesComponent = /*#__PURE__*/function () {
      function AdminTicketClassesComponent() {
        _classCallCheck(this, AdminTicketClassesComponent);
      }

      _createClass(AdminTicketClassesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminTicketClassesComponent;
    }();

    AdminTicketClassesComponent.ɵfac = function AdminTicketClassesComponent_Factory(t) {
      return new (t || AdminTicketClassesComponent)();
    };

    AdminTicketClassesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminTicketClassesComponent,
      selectors: [["app-admin-ticket-classes"]],
      decls: 2,
      vars: 0,
      template: function AdminTicketClassesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-ticket-classes works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXRpY2tldC1jbGFzc2VzL2FkbWluLXRpY2tldC1jbGFzc2VzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminTicketClassesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-ticket-classes',
          templateUrl: './admin-ticket-classes.component.html',
          styleUrls: ['./admin-ticket-classes.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/admin-users/admin-user-add/admin-user-add.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/admin/admin-users/admin-user-add/admin-user-add.component.ts ***!
    \******************************************************************************/

  /*! exports provided: AdminUserAddComponent */

  /***/
  function srcAppAdminAdminUsersAdminUserAddAdminUserAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminUserAddComponent", function () {
      return AdminUserAddComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AdminUserAddComponent = /*#__PURE__*/function () {
      function AdminUserAddComponent(dataService) {
        _classCallCheck(this, AdminUserAddComponent);

        this.dataService = dataService;
        this.alert = false;
      }

      _createClass(AdminUserAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onCancel",
        value: function onCancel() {}
      }]);

      return AdminUserAddComponent;
    }();

    AdminUserAddComponent.ɵfac = function AdminUserAddComponent_Factory(t) {
      return new (t || AdminUserAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    AdminUserAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminUserAddComponent,
      selectors: [["app-admin-user-add"]],
      inputs: {
        userRecord: "userRecord",
        current_meta: "current_meta"
      },
      decls: 23,
      vars: 4,
      consts: [[1, "clr-row"], [1, "clr-col"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "name", "first_name", "placeholder", "First Name", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "last_name", "placeholder", "Last Name", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "email", "name", "email", "placeholder", "Email Address", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "password", "name", "passowrd", "placeholder", "Password", 3, "ngModel", "ngModelChange"]],
      template: function AdminUserAddComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminUserAddComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.userRecord.first_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminUserAddComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.userRecord.last_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminUserAddComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.userRecord.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminUserAddComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.userRecord.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userRecord.first_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userRecord.last_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userRecord.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userRecord.password);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: [".clr-input-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.clr-input[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bmJyYWRsZXkvcHJvamVjdHMvbnRzLWFuZ3VsYXItY2xpZW50L3NyYy9hcHAvYWRtaW4vYWRtaW4tdXNlcnMvYWRtaW4tdXNlci1hZGQvYWRtaW4tdXNlci1hZGQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkbWluLXVzZXJzL2FkbWluLXVzZXItYWRkL2FkbWluLXVzZXItYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXVzZXJzL2FkbWluLXVzZXItYWRkL2FkbWluLXVzZXItYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsci1pbnB1dC13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jbHItaW5wdXQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufSIsIi5jbHItaW5wdXQtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2xyLWlucHV0IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminUserAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-user-add',
          templateUrl: './admin-user-add.component.html',
          styleUrls: ['./admin-user-add.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      }, {
        userRecord: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['userRecord']
        }],
        current_meta: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['current_meta']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/admin/admin-users/admin-user-edit/admin-user-edit.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/admin/admin-users/admin-user-edit/admin-user-edit.component.ts ***!
    \********************************************************************************/

  /*! exports provided: AdminUserEditComponent */

  /***/
  function srcAppAdminAdminUsersAdminUserEditAdminUserEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminUserEditComponent", function () {
      return AdminUserEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AdminUserEditComponent = /*#__PURE__*/function () {
      function AdminUserEditComponent() {
        _classCallCheck(this, AdminUserEditComponent);
      }

      _createClass(AdminUserEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminUserEditComponent;
    }();

    AdminUserEditComponent.ɵfac = function AdminUserEditComponent_Factory(t) {
      return new (t || AdminUserEditComponent)();
    };

    AdminUserEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminUserEditComponent,
      selectors: [["app-admin-user-edit"]],
      inputs: {
        userRecord: "userRecord"
      },
      decls: 23,
      vars: 4,
      consts: [[1, "clr-row"], [1, "clr-col"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "name", "first_name", "placeholder", "First Name", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "last_name", "placeholder", "Last Name", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "email", "name", "email", "placeholder", "Email Address", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "password", "name", "passowrd", "placeholder", "Password", 3, "ngModel", "ngModelChange"]],
      template: function AdminUserEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminUserEditComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.userRecord.first_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminUserEditComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.userRecord.last_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminUserEditComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.userRecord.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminUserEditComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.userRecord.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userRecord.first_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userRecord.last_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userRecord.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userRecord.password);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXVzZXJzL2FkbWluLXVzZXItZWRpdC9hZG1pbi11c2VyLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminUserEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-user-edit',
          templateUrl: './admin-user-edit.component.html',
          styleUrls: ['./admin-user-edit.component.scss']
        }]
      }], function () {
        return [];
      }, {
        userRecord: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['userRecord']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/admin/admin-users/admin-users.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/admin/admin-users/admin-users.component.ts ***!
    \************************************************************/

  /*! exports provided: AdminUsersComponent */

  /***/
  function srcAppAdminAdminUsersAdminUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminUsersComponent", function () {
      return AdminUsersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
    /* harmony import */


    var _admin_user_add_admin_user_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./admin-user-add/admin-user-add.component */
    "./src/app/admin/admin-users/admin-user-add/admin-user-add.component.ts");
    /* harmony import */


    var _admin_user_edit_admin_user_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./admin-user-edit/admin-user-edit.component */
    "./src/app/admin/admin-users/admin-user-edit/admin-user-edit.component.ts");

    function AdminUsersComponent_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add User");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AdminUsersComponent_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedUser.display_name);
      }
    }

    function AdminUsersComponent_a_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminUsersComponent_a_11_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.onDelete();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "clr-icon", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AdminUsersComponent_app_admin_user_add_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-admin-user-add", 25);
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userRecord", ctx_r3.userRecord);
      }
    }

    function AdminUsersComponent_app_admin_user_edit_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-admin-user-edit", 25);
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userRecord", ctx_r4.userRecord);
      }
    }

    function AdminUsersComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "clr-icon", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.alertSuccess.message, " ");
      }
    }

    function AdminUsersComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "clr-icon", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.alertError.message, " ");
      }
    }

    function AdminUsersComponent_div_31_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Display Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function AdminUsersComponent_div_31_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function AdminUsersComponent_div_31_ng_container_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Created ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function AdminUsersComponent_div_31_ng_container_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Updated ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function AdminUsersComponent_div_31_clr_dg_row_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-row", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-dg-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-dg-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "clr-dg-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clr-dg-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgItem", user_r17)("clrDgSelectable", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r17.display_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r17.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, user_r17.created_at));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 8, user_r17.updated_at));
      }
    }

    var _c0 = function _c0() {
      return {
        hidden: false
      };
    };

    var _c1 = function _c1() {
      return [30, 50, 100, 200, 500];
    };

    function AdminUsersComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-datagrid", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clrDgSingleSelectedChange", function AdminUsersComponent_div_31_Template_clr_datagrid_clrDgSingleSelectedChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.selectedUser = $event;
        })("clrDgSingleSelectedChange", function AdminUsersComponent_div_31_Template_clr_datagrid_clrDgSingleSelectedChange_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.selectionChanged();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "clr-dg-column", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdminUsersComponent_div_31_ng_container_3_Template, 2, 0, "ng-container", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "clr-dg-column", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdminUsersComponent_div_31_ng_container_5_Template, 2, 0, "ng-container", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "clr-dg-column", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminUsersComponent_div_31_ng_container_7_Template, 2, 0, "ng-container", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clr-dg-column", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdminUsersComponent_div_31_ng_container_9_Template, 2, 0, "ng-container", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AdminUsersComponent_div_31_clr_dg_row_10_Template, 11, 10, "clr-dg-row", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "clr-dg-footer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "clr-dg-pagination", 38, 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "clr-dg-page-size", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Users per page");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var users_r10 = ctx.ngIf;

        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgSingleSelected", ctx_r7.selectedUser)("clrDgRowSelection", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "display_name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgHideableColumn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgHideableColumn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "created_at");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgHideableColumn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "updated_at");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgHideableColumn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgItemsOf", users_r10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgPageSize", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _r16.firstItem + 1, " - ", _r16.lastItem + 1, " of ", _r16.totalItems, " users ");
      }
    }

    var AdminUsersComponent = /*#__PURE__*/function () {
      function AdminUsersComponent(dataService, authService) {
        _classCallCheck(this, AdminUsersComponent);

        this.dataService = dataService;
        this.authService = authService;
        this.selected = null;
        this.sideOpen = false;
        this.addUser = false;
        this.editUser = false;
        this.detailState = null;
        this.userRecord = {};
        this.selectedUser = null;
        this.alertSuccess = {
          active: false,
          message: 'test'
        };
        this.alertError = {
          active: false,
          message: 'test'
        };
      }

      _createClass(AdminUsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadUsers();
        }
      }, {
        key: "loadUsers",
        value: function loadUsers() {
          this.users$ = this.dataService.records$('users', {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (r) {
            return r.data;
          }));
        }
      }, {
        key: "onAdd",
        value: function onAdd() {
          this.addUser = true;
          this.sideOpen = true;
        }
      }, {
        key: "onSave",
        value: function onSave() {
          var _this = this;

          this.userRecord.display_name = this.userRecord.first_name + ' ' + this.userRecord.last_name;

          if (this.userRecord._id) {
            this.dataService.updateRecord('users', this.userRecord._id, this.userRecord).then(function (res) {
              _this.alertSuccess.active = true;
              _this.alertSuccess.message = 'The changes to the user record have been saved to the database.';

              _this.onClose();

              setTimeout(function () {
                _this.alertSuccess.active = false;
                _this.alertSuccess.message = '';
                _this.userRecord = {};
              }, 3000);
            })["catch"](function (error) {
              _this.alertError.active = true;
              _this.alertError.message = error;
            });
          } else {
            this.dataService.createRecord('users', this.userRecord).then(function (res) {
              _this.alertSuccess.active = true;
              _this.alertSuccess.message = 'The user has been added to the database.';

              _this.onClose();

              setTimeout(function () {
                _this.alertSuccess.active = false;
                _this.alertSuccess.message = '';
                _this.userRecord = {};
              }, 3000);
            })["catch"](function (error) {
              _this.alertError.active = true;
              _this.alertError.message = error;
            });
          }
        }
      }, {
        key: "onClose",
        value: function onClose() {
          var _this2 = this;

          this.sideOpen = false;
          this.addUser = false;
          this.editUser = false;
          this.selected = null;
          this.userRecord = {}; // console.log(this.selectedUser);
          //this.selectedUser = {};

          setTimeout(function () {
            _this2.alertSuccess.active = false;
            _this2.alertError.active = false;
          }, 3000);
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          var _this3 = this;

          this.authService.logIn().then(function (res) {
            _this3.userRecord.deleted_by = res.user._id;
            _this3.userRecord.deleted_at = new Date();
            var deleteThis = _this3.userRecord;

            _this3.dataService.createRecord('deleted-records', deleteThis).then(function (res) {
              _this3.onClose();

              _this3.dataService.deleteRecord('users', deleteThis._id, {}).then(function (res) {
                _this3.alertSuccess.active = true;
                _this3.alertSuccess.message = 'The user records was deleted from the database.'; //this.onClose();
              });
            })["catch"](function (err) {
              _this3.alertError.active = true;
              _this3.alertError.message = err; //this.onClose();
            });
          })["catch"](function (err) {
            _this3.alertError.active = true;
            _this3.alertError.message = err; //this.onClose();
          });
        }
      }, {
        key: "selectionChanged",
        value: function selectionChanged() {
          this.userRecord = this.selectedUser;
          this.sideOpen = true;
          this.editUser = true;
        }
      }, {
        key: "onEdit",
        value: function onEdit() {}
      }, {
        key: "onExportSelected",
        value: function onExportSelected() {}
      }, {
        key: "onExportAll",
        value: function onExportAll() {}
      }]);

      return AdminUsersComponent;
    }();

    AdminUsersComponent.ɵfac = function AdminUsersComponent_Factory(t) {
      return new (t || AdminUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    AdminUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminUsersComponent,
      selectors: [["app-admin-users"]],
      decls: 33,
      vars: 11,
      consts: [[1, "main-container", 2, "height", "100%"], ["position", "end", 2, "min-width", "60%", 3, "opened"], [1, "header", "header-4"], [1, "branding"], ["routerLink", "./", 1, "nav-link"], ["class", "title", 4, "ngIf"], [1, "header-actions"], ["href", "javascript:void(0);", "aria-label", "save", 1, "nav-link", "nav-icon", 3, "click"], ["shape", "floppy", 1, "is-solid"], ["href", "javascript:void(0);", "class", "nav-link nav-icon", "aria-label", "cancel", 3, "click", 4, "ngIf"], ["href", "javascript:void(0);", "aria-label", "cancel", 1, "nav-link", "nav-icon", 3, "click"], ["shape", "times-circle", 1, "is-solid"], [1, "content-container"], [1, "content-area"], [3, "userRecord", 4, "ngIf"], ["class", "alert alert-app-level alert-success", "role", "alert", 4, "ngIf"], ["class", "alert alert-app-level alert-danger", "role", "alert", 4, "ngIf"], [1, "title"], [1, "header-nav"], ["href", "javascript:void(0);", 1, "nav-link", "nav-icon", 3, "click"], ["shape", "plus-circle", 1, "is-solid"], [1, "content-container", 2, "height", "calc(100% - 60px)"], [1, "content-area", 2, "padding", "0 !important"], ["class", "admin-data", "style", "height: 100%;", 4, "ngIf"], ["shape", "trash", 1, "is-solid"], [3, "userRecord"], ["role", "alert", 1, "alert", "alert-app-level", "alert-success"], [1, "alert-items"], [1, "alert-item", "static"], [1, "alert-icon-wrapper"], ["shape", "check-circle", 1, "alert-icon"], [1, "alert-text"], ["role", "alert", 1, "alert", "alert-app-level", "alert-danger"], [1, "admin-data", 2, "height", "100%"], [2, "min-height", "100% !important", "border", "0 !important", 3, "clrDgSingleSelected", "clrDgRowSelection", "clrDgSingleSelectedChange"], [3, "clrDgField"], [4, "clrDgHideableColumn"], [3, "clrDgItem", "clrDgSelectable", 4, "clrDgItems", "clrDgItemsOf"], [3, "clrDgPageSize"], ["pagination", ""], [3, "clrPageSizeOptions"], [3, "clrDgItem", "clrDgSelectable"]],
      template: function AdminUsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdminUsersComponent_span_6_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminUsersComponent_span_7_Template, 2, 1, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminUsersComponent_Template_a_click_9_listener() {
            return ctx.onSave();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "clr-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AdminUsersComponent_a_11_Template, 2, 0, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminUsersComponent_Template_a_click_12_listener() {
            return ctx.onClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "clr-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AdminUsersComponent_app_admin_user_add_16_Template, 1, 1, "app-admin-user-add", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AdminUsersComponent_app_admin_user_edit_17_Template, 1, 1, "app-admin-user-edit", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AdminUsersComponent_div_19_Template, 7, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AdminUsersComponent_div_20_Template, 7, 1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminUsersComponent_Template_a_click_27_listener() {
            return ctx.onAdd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "clr-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AdminUsersComponent_div_31_Template, 17, 21, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.sideOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alertSuccess.active);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alertError.active);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 9, ctx.users$));
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrIconCustomTag"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _admin_user_add_admin_user_add_component__WEBPACK_IMPORTED_MODULE_8__["AdminUserAddComponent"], _admin_user_edit_admin_user_edit_component__WEBPACK_IMPORTED_MODULE_9__["AdminUserEditComponent"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrAlertText"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrDatagrid"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdj"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdn"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdr"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrDatagridColumn"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdk"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrDatagridHideableColumn"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrDatagridItems"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrDatagridFooter"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrDatagridPagination"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrDatagridPageSize"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrDatagridRow"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdl"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrDatagridCell"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdm"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
      styles: [".datagrid[_ngcontent-%COMP%] {\n  margin-top: 20px !important;\n}\n\n.datagrid-footer[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n}\n\n.admin-data[_ngcontent-%COMP%]   clr-datagrid[_ngcontent-%COMP%] {\n  height: 286px;\n}\n\n.datagrid-table[_ngcontent-%COMP%]   .datagrid-cell.datagrid-fixed-column[_ngcontent-%COMP%] {\n  flex: 0 0 1.9rem;\n  max-width: 1.9rem;\n  min-width: 1.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bmJyYWRsZXkvcHJvamVjdHMvbnRzLWFuZ3VsYXItY2xpZW50L3NyYy9hcHAvYWRtaW4vYWRtaW4tdXNlcnMvYWRtaW4tdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkbWluLXVzZXJzL2FkbWluLXVzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7QUNDRjs7QURDQTtFQUNFLDhCQUFBO0FDRUY7O0FEQUE7RUFDRSxhQUFBO0FDR0Y7O0FEQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXVzZXJzL2FkbWluLXVzZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGFncmlkIHtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xufVxuLmRhdGFncmlkLWZvb3RlciB7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cbi5hZG1pbi1kYXRhIGNsci1kYXRhZ3JpZCB7XG4gIGhlaWdodDogMjg2cHg7XG59XG5cbi5kYXRhZ3JpZC10YWJsZSAuZGF0YWdyaWQtY2VsbC5kYXRhZ3JpZC1maXhlZC1jb2x1bW4ge1xuICBmbGV4OiAwIDAgMS45cmVtO1xuICBtYXgtd2lkdGg6IDEuOXJlbTtcbiAgbWluLXdpZHRoOiAxLjlyZW07XG59IiwiLmRhdGFncmlkIHtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uZGF0YWdyaWQtZm9vdGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYWRtaW4tZGF0YSBjbHItZGF0YWdyaWQge1xuICBoZWlnaHQ6IDI4NnB4O1xufVxuXG4uZGF0YWdyaWQtdGFibGUgLmRhdGFncmlkLWNlbGwuZGF0YWdyaWQtZml4ZWQtY29sdW1uIHtcbiAgZmxleDogMCAwIDEuOXJlbTtcbiAgbWF4LXdpZHRoOiAxLjlyZW07XG4gIG1pbi13aWR0aDogMS45cmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminUsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-users',
          templateUrl: './admin-users.component.html',
          styleUrls: ['./admin-users.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/admin.component.ts":
  /*!******************************************!*\
    !*** ./src/app/admin/admin.component.ts ***!
    \******************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function AdminComponent_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "clr-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", i_r1.path);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("shape", i_r1.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r1.name, " ");
      }
    }

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent() {
        _classCallCheck(this, AdminComponent);

        this.adminCollapse = true;
        this.adminCollapsed = true;
        this.navItems = [{
          path: './users',
          icon: 'user',
          name: 'Users'
        }, {
          path: './groups',
          icon: 'users',
          name: 'Groups'
        }, {
          path: './roles',
          icon: 'employee-group',
          name: 'Roles'
        }, {
          path: './ticket-classes',
          icon: 'tree-view',
          name: 'Class Manager'
        }, {
          path: './settings',
          icon: 'cog',
          name: 'Settings'
        }];
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminComponent;
    }();

    AdminComponent.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)();
    };

    AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      decls: 6,
      vars: 3,
      consts: [[1, "main-container", 2, "height", "100%"], [1, "content-container"], [1, "nav-trigger--bottom", 3, "clrVerticalNavCollapsible", "clrVerticalNavCollapsed"], ["clrVerticalNavLink", "", "routerLinkActive", "active", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "content-area", 2, "padding", "0"], ["clrVerticalNavLink", "", "routerLinkActive", "active", 3, "routerLink"], ["clrVerticalNavIcon", ""]],
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "clr-vertical-nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdminComponent_a_3_Template, 3, 3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrVerticalNavCollapsible", true)("clrVerticalNavCollapsed", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navItems);
        }
      },
      directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrVerticalNav"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrVerticalNavLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrIconCustomTag"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrVerticalNavIcon"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin',
          templateUrl: './admin.component.html',
          styleUrls: ['./admin.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/admin.module.ts":
  /*!***************************************!*\
    !*** ./src/app/admin/admin.module.ts ***!
    \***************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
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


    var _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin-routing.module */
    "./src/app/admin/admin-routing.module.ts");
    /* harmony import */


    var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
    /* harmony import */


    var _material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../material-ui/material-ui.module */
    "./src/app/material-ui/material-ui.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _admin_access_management_admin_access_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./admin-access-management/admin-access-management.component */
    "./src/app/admin/admin-access-management/admin-access-management.component.ts");
    /* harmony import */


    var _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./admin-users/admin-users.component */
    "./src/app/admin/admin-users/admin-users.component.ts");
    /* harmony import */


    var _admin_groups_admin_groups_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./admin-groups/admin-groups.component */
    "./src/app/admin/admin-groups/admin-groups.component.ts");
    /* harmony import */


    var _admin_roles_admin_roles_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./admin-roles/admin-roles.component */
    "./src/app/admin/admin-roles/admin-roles.component.ts");
    /* harmony import */


    var _admin_users_admin_user_add_admin_user_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./admin-users/admin-user-add/admin-user-add.component */
    "./src/app/admin/admin-users/admin-user-add/admin-user-add.component.ts");
    /* harmony import */


    var _admin_users_admin_user_edit_admin_user_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./admin-users/admin-user-edit/admin-user-edit.component */
    "./src/app/admin/admin-users/admin-user-edit/admin-user-edit.component.ts");
    /* harmony import */


    var _admin_settings_admin_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./admin-settings/admin-settings.component */
    "./src/app/admin/admin-settings/admin-settings.component.ts");
    /* harmony import */


    var _admin_ticket_classes_admin_ticket_classes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./admin-ticket-classes/admin-ticket-classes.component */
    "./src/app/admin/admin-ticket-classes/admin-ticket-classes.component.ts");
    /* harmony import */


    var _admin_class_manager_admin_class_manager_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./admin-class-manager/admin-class-manager.component */
    "./src/app/admin/admin-class-manager/admin-class-manager.component.ts");
    /* harmony import */


    var _components_admin_record_list_admin_record_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/admin-record-list/admin-record-list.component */
    "./src/app/admin/components/admin-record-list/admin-record-list.component.ts");
    /* harmony import */


    var _loading_loading_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../loading/loading.module */
    "./src/app/loading/loading.module.ts");
    /* harmony import */


    var _components_admin_add_record_admin_add_record_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/admin-add-record/admin-add-record.component */
    "./src/app/admin/components/admin-add-record/admin-add-record.component.ts");
    /* harmony import */


    var _components_admin_edit_record_admin_edit_record_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/admin-edit-record/admin-edit-record.component */
    "./src/app/admin/components/admin-edit-record/admin-edit-record.component.ts");

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdminModule
    });
    AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdminModule_Factory(t) {
        return new (t || AdminModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"], _material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_5__["MaterialUiModule"], _loading_loading_module__WEBPACK_IMPORTED_MODULE_17__["LoadingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, {
        declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"], _admin_access_management_admin_access_management_component__WEBPACK_IMPORTED_MODULE_7__["AdminAccessManagementComponent"], _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_8__["AdminUsersComponent"], _admin_groups_admin_groups_component__WEBPACK_IMPORTED_MODULE_9__["AdminGroupsComponent"], _admin_roles_admin_roles_component__WEBPACK_IMPORTED_MODULE_10__["AdminRolesComponent"], _admin_users_admin_user_add_admin_user_add_component__WEBPACK_IMPORTED_MODULE_11__["AdminUserAddComponent"], _admin_users_admin_user_edit_admin_user_edit_component__WEBPACK_IMPORTED_MODULE_12__["AdminUserEditComponent"], _admin_settings_admin_settings_component__WEBPACK_IMPORTED_MODULE_13__["AdminSettingsComponent"], _admin_ticket_classes_admin_ticket_classes_component__WEBPACK_IMPORTED_MODULE_14__["AdminTicketClassesComponent"], _admin_class_manager_admin_class_manager_component__WEBPACK_IMPORTED_MODULE_15__["AdminClassManagerComponent"], _components_admin_record_list_admin_record_list_component__WEBPACK_IMPORTED_MODULE_16__["AdminRecordListComponent"], _components_admin_add_record_admin_add_record_component__WEBPACK_IMPORTED_MODULE_18__["AdminAddRecordComponent"], _components_admin_edit_record_admin_edit_record_component__WEBPACK_IMPORTED_MODULE_19__["AdminEditRecordComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"], _material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_5__["MaterialUiModule"], _loading_loading_module__WEBPACK_IMPORTED_MODULE_17__["LoadingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"], _admin_access_management_admin_access_management_component__WEBPACK_IMPORTED_MODULE_7__["AdminAccessManagementComponent"], _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_8__["AdminUsersComponent"], _admin_groups_admin_groups_component__WEBPACK_IMPORTED_MODULE_9__["AdminGroupsComponent"], _admin_roles_admin_roles_component__WEBPACK_IMPORTED_MODULE_10__["AdminRolesComponent"], _admin_users_admin_user_add_admin_user_add_component__WEBPACK_IMPORTED_MODULE_11__["AdminUserAddComponent"], _admin_users_admin_user_edit_admin_user_edit_component__WEBPACK_IMPORTED_MODULE_12__["AdminUserEditComponent"], _admin_settings_admin_settings_component__WEBPACK_IMPORTED_MODULE_13__["AdminSettingsComponent"], _admin_ticket_classes_admin_ticket_classes_component__WEBPACK_IMPORTED_MODULE_14__["AdminTicketClassesComponent"], _admin_class_manager_admin_class_manager_component__WEBPACK_IMPORTED_MODULE_15__["AdminClassManagerComponent"], _components_admin_record_list_admin_record_list_component__WEBPACK_IMPORTED_MODULE_16__["AdminRecordListComponent"], _components_admin_add_record_admin_add_record_component__WEBPACK_IMPORTED_MODULE_18__["AdminAddRecordComponent"], _components_admin_edit_record_admin_edit_record_component__WEBPACK_IMPORTED_MODULE_19__["AdminEditRecordComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"], _material_ui_material_ui_module__WEBPACK_IMPORTED_MODULE_5__["MaterialUiModule"], _loading_loading_module__WEBPACK_IMPORTED_MODULE_17__["LoadingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin/components/admin-add-record/admin-add-record.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/admin/components/admin-add-record/admin-add-record.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: AdminAddRecordComponent */

  /***/
  function srcAppAdminComponentsAdminAddRecordAdminAddRecordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminAddRecordComponent", function () {
      return AdminAddRecordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../loading/loading/loading.component */
    "./src/app/loading/loading/loading.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function AdminAddRecordComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loading");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AdminAddRecordComponent_div_1_div_1_div_1_mat_form_field_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminAddRecordComponent_div_1_div_1_div_1_mat_form_field_1_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

          var f_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r10.userRecord[f_r5.field] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var f_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](f_r5.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", f_r5.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", f_r5.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.userRecord[f_r5.field]);
      }
    }

    function AdminAddRecordComponent_div_1_div_1_div_1_mat_form_field_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "textarea", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminAddRecordComponent_div_1_div_1_div_1_mat_form_field_2_Template_textarea_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var f_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r14.userRecord[f_r5.field] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var f_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](f_r5.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", f_r5.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", f_r5.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r7.userRecord[f_r5.field]);
      }
    }

    function AdminAddRecordComponent_div_1_div_1_div_1_mat_form_field_3_mat_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r19 = ctx.$implicit;

        var f_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r19._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](option_r19[f_r5.reference.display_field]);
      }
    }

    function AdminAddRecordComponent_div_1_div_1_div_1_mat_form_field_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminAddRecordComponent_div_1_div_1_div_1_mat_form_field_3_Template_mat_select_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

          var f_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r21.userRecord[f_r5.field] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdminAddRecordComponent_div_1_div_1_div_1_mat_form_field_3_mat_option_4_Template, 2, 2, "mat-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var f_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](f_r5.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", f_r5.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.userRecord[f_r5.field]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", f_r5.reference.optionList);
      }
    }

    function AdminAddRecordComponent_div_1_div_1_div_1_mat_form_field_4_mat_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r26 = ctx.$implicit;

        var f_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r26._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](option_r26[f_r5.reference.display_field]);
      }
    }

    function AdminAddRecordComponent_div_1_div_1_div_1_mat_form_field_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminAddRecordComponent_div_1_div_1_div_1_mat_form_field_4_Template_mat_select_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);

          var f_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r28.userRecord[f_r5.field] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdminAddRecordComponent_div_1_div_1_div_1_mat_form_field_4_mat_option_4_Template, 2, 2, "mat-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var f_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](f_r5.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", f_r5.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r9.userRecord[f_r5.field]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", f_r5.reference.optionList);
      }
    }

    function AdminAddRecordComponent_div_1_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminAddRecordComponent_div_1_div_1_div_1_mat_form_field_1_Template, 4, 4, "mat-form-field", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdminAddRecordComponent_div_1_div_1_div_1_mat_form_field_2_Template, 4, 4, "mat-form-field", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AdminAddRecordComponent_div_1_div_1_div_1_mat_form_field_3_Template, 5, 4, "mat-form-field", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdminAddRecordComponent_div_1_div_1_div_1_mat_form_field_4_Template, 5, 4, "mat-form-field", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var f_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", f_r5.type == "single-line-text");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", f_r5.type == "multi-line-text");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", f_r5.type == "reference-multi-select");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", f_r5.type == "reference-single-select");
      }
    }

    function AdminAddRecordComponent_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminAddRecordComponent_div_1_div_1_div_1_Template, 5, 4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", row_r3.fields);
      }
    }

    function AdminAddRecordComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminAddRecordComponent_div_1_div_1_Template, 2, 1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.form_view.rows);
      }
    }

    var AdminAddRecordComponent = /*#__PURE__*/function () {
      function AdminAddRecordComponent(dataService) {
        _classCallCheck(this, AdminAddRecordComponent);

        this.dataService = dataService;
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
        this.loading = false;
      }

      _createClass(AdminAddRecordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loading = true;
          this.form_view = this.current_meta.form_views.add;

          for (var row in this.form_view.rows) {
            for (var field in this.form_view.rows[row].fields) {
              if (this.form_view.rows[row].fields[field].reference) {
                this.populateReferenceOptions(this.form_view.rows[row].fields[field]);
              }
            }
          }

          this.loading = false;
        }
      }, {
        key: "populateReferenceOptions",
        value: function populateReferenceOptions(field) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.dataService.records$(field.reference.service, field.reference.filter).subscribe(function (res) {
                      field.reference.optionList = res.data;
                      console.log(_this4.form_view);
                    });

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return AdminAddRecordComponent;
    }();

    AdminAddRecordComponent.ɵfac = function AdminAddRecordComponent_Factory(t) {
      return new (t || AdminAddRecordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    AdminAddRecordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AdminAddRecordComponent,
      selectors: [["app-admin-add-record"]],
      inputs: {
        userRecord: "userRecord",
        current_meta: "current_meta"
      },
      decls: 2,
      vars: 2,
      consts: [["class", "add-record-loading", 4, "ngIf"], ["class", "add-record-container", 4, "ngIf"], [1, "add-record-loading"], [1, "add-record-container"], ["class", "clr-row", 4, "ngFor", "ngForOf"], [1, "clr-row"], ["class", "clr-col", 4, "ngFor", "ngForOf"], [1, "clr-col"], ["class", "w-100", "appearance", "outline", 4, "ngIf"], ["appearance", "outline", "class", "w-100", 4, "ngIf"], ["appearance", "outline", 1, "w-100"], ["matInput", "", 3, "ngModel", "name", "placeholder", "ngModelChange"], ["matInput", "", "rows", "5", 3, "ngModel", "name", "placeholder", "ngModelChange"], ["multiple", "", 3, "ngModel", "name", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "ngModel", "name", "ngModelChange"]],
      template: function AdminAddRecordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AdminAddRecordComponent_div_0_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminAddRecordComponent_div_1_Template, 2, 1, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvYWRtaW4tYWRkLXJlY29yZC9hZG1pbi1hZGQtcmVjb3JkLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminAddRecordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-admin-add-record',
          templateUrl: './admin-add-record.component.html',
          styleUrls: ['./admin-add-record.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      }, {
        userRecord: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['userRecord']
        }],
        current_meta: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['current_meta']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/admin/components/admin-edit-record/admin-edit-record.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/admin/components/admin-edit-record/admin-edit-record.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: AdminEditRecordComponent */

  /***/
  function srcAppAdminComponentsAdminEditRecordAdminEditRecordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminEditRecordComponent", function () {
      return AdminEditRecordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../loading/loading/loading.component */
    "./src/app/loading/loading/loading.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function AdminEditRecordComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loading");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AdminEditRecordComponent_div_1_div_1_div_1_mat_form_field_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminEditRecordComponent_div_1_div_1_div_1_mat_form_field_1_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

          var f_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r10.userRecord[f_r5.field] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var f_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](f_r5.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", f_r5.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", f_r5.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.userRecord[f_r5.field]);
      }
    }

    function AdminEditRecordComponent_div_1_div_1_div_1_mat_form_field_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "textarea", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminEditRecordComponent_div_1_div_1_div_1_mat_form_field_2_Template_textarea_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var f_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r14.userRecord[f_r5.field] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var f_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](f_r5.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", f_r5.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", f_r5.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r7.userRecord[f_r5.field]);
      }
    }

    function AdminEditRecordComponent_div_1_div_1_div_1_mat_form_field_3_mat_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r19 = ctx.$implicit;

        var f_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r19._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](option_r19[f_r5.reference.display_field]);
      }
    }

    function AdminEditRecordComponent_div_1_div_1_div_1_mat_form_field_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminEditRecordComponent_div_1_div_1_div_1_mat_form_field_3_Template_mat_select_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

          var f_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r21.userRecord[f_r5.field] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdminEditRecordComponent_div_1_div_1_div_1_mat_form_field_3_mat_option_4_Template, 2, 2, "mat-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var f_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](f_r5.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", f_r5.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.userRecord[f_r5.field]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", f_r5.reference.optionList);
      }
    }

    function AdminEditRecordComponent_div_1_div_1_div_1_mat_form_field_4_mat_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r26 = ctx.$implicit;

        var f_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r26._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](option_r26[f_r5.reference.display_field]);
      }
    }

    function AdminEditRecordComponent_div_1_div_1_div_1_mat_form_field_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminEditRecordComponent_div_1_div_1_div_1_mat_form_field_4_Template_mat_select_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);

          var f_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r28.userRecord[f_r5.field] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdminEditRecordComponent_div_1_div_1_div_1_mat_form_field_4_mat_option_4_Template, 2, 2, "mat-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var f_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](f_r5.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", f_r5.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r9.userRecord[f_r5.field]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", f_r5.reference.optionList);
      }
    }

    function AdminEditRecordComponent_div_1_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminEditRecordComponent_div_1_div_1_div_1_mat_form_field_1_Template, 4, 4, "mat-form-field", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdminEditRecordComponent_div_1_div_1_div_1_mat_form_field_2_Template, 4, 4, "mat-form-field", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AdminEditRecordComponent_div_1_div_1_div_1_mat_form_field_3_Template, 5, 4, "mat-form-field", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdminEditRecordComponent_div_1_div_1_div_1_mat_form_field_4_Template, 5, 4, "mat-form-field", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var f_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", f_r5.type == "single-line-text");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", f_r5.type == "multi-line-text");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", f_r5.type == "reference-multi-select");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", f_r5.type == "reference-single-select");
      }
    }

    function AdminEditRecordComponent_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminEditRecordComponent_div_1_div_1_div_1_Template, 5, 4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", row_r3.fields);
      }
    }

    function AdminEditRecordComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminEditRecordComponent_div_1_div_1_Template, 2, 1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.form_view.rows);
      }
    }

    var AdminEditRecordComponent = /*#__PURE__*/function () {
      function AdminEditRecordComponent(dataService) {
        _classCallCheck(this, AdminEditRecordComponent);

        this.dataService = dataService;
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
        this.loading = false;
      }

      _createClass(AdminEditRecordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loading = true;
          this.form_view = this.current_meta.form_views.add;

          if (this.current_meta.form_views.edit) {
            this.form_view = this.current_meta.form_views.edit;
          }

          for (var row in this.form_view.rows) {
            for (var field in this.form_view.rows[row].fields) {
              if (this.form_view.rows[row].fields[field].reference) {
                this.populateReferenceOptions(this.form_view.rows[row].fields[field]);
              }
            }
          }

          this.loading = false;
        }
      }, {
        key: "populateReferenceOptions",
        value: function populateReferenceOptions(field) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this5 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.dataService.records$(field.reference.service, field.reference.filter).subscribe(function (res) {
                      field.reference.optionList = res.data;
                      console.log(_this5.form_view);
                    });

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return AdminEditRecordComponent;
    }();

    AdminEditRecordComponent.ɵfac = function AdminEditRecordComponent_Factory(t) {
      return new (t || AdminEditRecordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    AdminEditRecordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AdminEditRecordComponent,
      selectors: [["app-admin-edit-record"]],
      inputs: {
        userRecord: "userRecord",
        current_meta: "current_meta"
      },
      decls: 2,
      vars: 2,
      consts: [["class", "add-record-loading", 4, "ngIf"], ["class", "add-record-container", 4, "ngIf"], [1, "add-record-loading"], [1, "add-record-container"], ["class", "clr-row", 4, "ngFor", "ngForOf"], [1, "clr-row"], ["class", "clr-col", 4, "ngFor", "ngForOf"], [1, "clr-col"], ["class", "w-100", "appearance", "outline", 4, "ngIf"], ["appearance", "outline", "class", "w-100", 4, "ngIf"], ["appearance", "outline", 1, "w-100"], ["matInput", "", 3, "ngModel", "name", "placeholder", "ngModelChange"], ["matInput", "", "rows", "5", 3, "ngModel", "name", "placeholder", "ngModelChange"], ["multiple", "", 3, "ngModel", "name", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "ngModel", "name", "ngModelChange"]],
      template: function AdminEditRecordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AdminEditRecordComponent_div_0_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminEditRecordComponent_div_1_Template, 2, 1, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvYWRtaW4tZWRpdC1yZWNvcmQvYWRtaW4tZWRpdC1yZWNvcmQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminEditRecordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-admin-edit-record',
          templateUrl: './admin-edit-record.component.html',
          styleUrls: ['./admin-edit-record.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      }, {
        userRecord: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['userRecord']
        }],
        current_meta: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['current_meta']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/admin/components/admin-record-list/admin-record-list.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/admin/components/admin-record-list/admin-record-list.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: AdminRecordListComponent */

  /***/
  function srcAppAdminComponentsAdminRecordListAdminRecordListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminRecordListComponent", function () {
      return AdminRecordListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
    /* harmony import */


    var _admin_add_record_admin_add_record_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../admin-add-record/admin-add-record.component */
    "./src/app/admin/components/admin-add-record/admin-add-record.component.ts");
    /* harmony import */


    var _admin_edit_record_admin_edit_record_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../admin-edit-record/admin-edit-record.component */
    "./src/app/admin/components/admin-edit-record/admin-edit-record.component.ts");
    /* harmony import */


    var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../loading/loading/loading.component */
    "./src/app/loading/loading/loading.component.ts");

    function AdminRecordListComponent_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Add ", ctx_r0.current_meta.singular_name, "");
      }
    }

    function AdminRecordListComponent_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedUser.display_name);
      }
    }

    function AdminRecordListComponent_div_8_a_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminRecordListComponent_div_8_a_3_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.onDelete();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "clr-icon", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AdminRecordListComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminRecordListComponent_div_8_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.onSave();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "clr-icon", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdminRecordListComponent_div_8_a_3_Template, 2, 0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminRecordListComponent_div_8_Template_a_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.onClose();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "clr-icon", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.editUser);
      }
    }

    function AdminRecordListComponent_div_9_a_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminRecordListComponent_div_9_a_3_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r19.onDelete();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "clr-icon", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AdminRecordListComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminRecordListComponent_div_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.onUpdate();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "clr-icon", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdminRecordListComponent_div_9_a_3_Template, 2, 0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminRecordListComponent_div_9_Template_a_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.onClose();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "clr-icon", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.editUser);
      }
    }

    function AdminRecordListComponent_app_admin_add_record_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-admin-add-record", 29);
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("current_meta", ctx_r4.current_meta)("userRecord", ctx_r4.userRecord);
      }
    }

    function AdminRecordListComponent_app_admin_edit_record_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-admin-edit-record", 29);
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("current_meta", ctx_r5.current_meta)("userRecord", ctx_r5.userRecord);
      }
    }

    function AdminRecordListComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "clr-icon", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.alertSuccess.message, " ");
      }
    }

    function AdminRecordListComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "clr-icon", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.alertError.message, " ");
      }
    }

    function AdminRecordListComponent_a_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminRecordListComponent_a_23_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.onAdd();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "clr-icon", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AdminRecordListComponent_a_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminRecordListComponent_a_31_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.onDelete();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "clr-icon", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AdminRecordListComponent_div_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AdminRecordListComponent_div_36_div_1_clr_dg_column_2_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var col_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r33.name, " ");
      }
    }

    var _c0 = function _c0() {
      return {
        hidden: false
      };
    };

    function AdminRecordListComponent_div_36_div_1_clr_dg_column_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-column", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminRecordListComponent_div_36_div_1_clr_dg_column_2_ng_container_1_Template, 3, 1, "ng-container", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var col_r33 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", col_r33.field);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgHideableColumn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
      }
    }

    function AdminRecordListComponent_div_36_div_1_clr_dg_row_3_clr_dg_cell_1_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var coll_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var r_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", r_r36[coll_r38.field], " ");
      }
    }

    function AdminRecordListComponent_div_36_div_1_clr_dg_row_3_clr_dg_cell_1_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var coll_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var r_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", r_r36[coll_r38.field][coll_r38.reference.display_field], " ");
      }
    }

    function AdminRecordListComponent_div_36_div_1_clr_dg_row_3_clr_dg_cell_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminRecordListComponent_div_36_div_1_clr_dg_row_3_clr_dg_cell_1_span_1_Template, 2, 1, "span", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminRecordListComponent_div_36_div_1_clr_dg_row_3_clr_dg_cell_1_span_2_Template, 2, 1, "span", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var coll_r38 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !coll_r38.reference);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", coll_r38.reference);
      }
    }

    function AdminRecordListComponent_div_36_div_1_clr_dg_row_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-row", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminRecordListComponent_div_36_div_1_clr_dg_row_3_Template_clr_dg_row_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

          var r_r36 = ctx.$implicit;

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r45.recordSelected(r_r36);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminRecordListComponent_div_36_div_1_clr_dg_row_3_clr_dg_cell_1_Template, 3, 2, "clr-dg-cell", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var r_r36 = ctx.$implicit;

        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgItem", r_r36)("clrDgSelectable", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r31.current_meta.list_view.cols);
      }
    }

    var _c1 = function _c1() {
      return [30, 50, 100, 200, 500];
    };

    function AdminRecordListComponent_div_36_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-datagrid", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clrDgSingleSelectedChange", function AdminRecordListComponent_div_36_div_1_Template_clr_datagrid_clrDgSingleSelectedChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r47.selectedUser = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminRecordListComponent_div_36_div_1_clr_dg_column_2_Template, 2, 3, "clr-dg-column", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdminRecordListComponent_div_36_div_1_clr_dg_row_3_Template, 2, 3, "clr-dg-row", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "clr-dg-footer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "clr-dg-pagination", 46, 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "clr-dg-page-size", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Users per page");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var records_r29 = ctx.ngIf;

        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgSingleSelected", ctx_r28.selectedUser)("clrDgRowSelection", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r28.current_meta.list_view.cols);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgItemsOf", records_r29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgPageSize", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _r32.firstItem + 1, " - ", _r32.lastItem + 1, " of ", _r32.totalItems, " users ");
      }
    }

    function AdminRecordListComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminRecordListComponent_div_36_div_1_Template, 10, 10, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r11.records$));
      }
    }

    var AdminRecordListComponent = /*#__PURE__*/function () {
      function AdminRecordListComponent(dataService, authService, activatedRoute, router) {
        _classCallCheck(this, AdminRecordListComponent);

        this.dataService = dataService;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.table = null;
        this.table_display_name = null;
        this.recs = [];
        this.loading = false;
        this.records$ = null;
        this.selected = null;
        this.sideOpen = false;
        this.addUser = false;
        this.editUser = false;
        this.detailState = null;
        this.userRecord = {};
        this.selectedUser = null;
        this.alertSuccess = {
          active: false,
          message: 'test'
        };
        this.alertError = {
          active: false,
          message: 'test'
        };
        this.tables = {
          users: {
            display_name: 'Users',
            singular_name: 'User',
            icon: 'user',
            service: 'users',
            list_view: {
              cols: [{
                name: 'Display Name',
                field: 'display_name'
              }, {
                name: 'First Name',
                field: 'first_name'
              }, {
                name: 'Last Name',
                field: 'last_name'
              }, {
                name: 'Email Address',
                field: 'email'
              }]
            },
            form_views: {
              add: {
                rows: [{
                  fields: [{
                    name: 'Display Name',
                    field: 'display_name',
                    type: 'single-line-text'
                  }]
                }, {
                  fields: [{
                    name: 'First Name',
                    field: 'first_name',
                    type: 'single-line-text'
                  }, {
                    name: 'Last Name',
                    field: 'last_name',
                    type: 'single-line-text'
                  }]
                }, {
                  fields: [{
                    name: 'Email Address',
                    field: 'email',
                    type: 'single-line-text'
                  }, {
                    name: 'Manager',
                    field: 'manager',
                    type: 'reference-single-select',
                    reference: {
                      service: 'users',
                      display_field: 'display_name',
                      filter: null
                    }
                  }]
                }, {
                  fields: [{
                    name: 'Groups',
                    field: 'groups',
                    type: 'reference-multi-select',
                    reference: {
                      service: 'api/admin/groups',
                      display_field: 'name',
                      filter: null
                    }
                  }]
                }, {
                  fields: [{
                    name: 'Roles',
                    field: 'roles',
                    type: 'reference-multi-select',
                    reference: {
                      service: 'api/admin/roles',
                      display_field: 'name',
                      filter: null
                    }
                  }]
                }, {
                  fields: [{
                    name: 'Password',
                    field: 'password',
                    type: 'single-line-text'
                  }]
                }]
              },
              edit: {
                mafin_section: {
                  rows: [{
                    fields: [{
                      name: 'Display Namde',
                      field: 'display_name',
                      type: 'single-line-text'
                    }]
                  }, {
                    fields: [{
                      name: 'First Name',
                      field: 'first_name',
                      type: 'single-line-text'
                    }, {
                      name: 'Last Name',
                      field: 'last_name',
                      type: 'single-line-text'
                    }]
                  }, {
                    fields: [{
                      name: 'Email Address',
                      field: 'email',
                      type: 'single-line-text'
                    }, {
                      name: 'Manager',
                      field: 'manager',
                      type: 'reference-single-select',
                      reference: {
                        service: 'users',
                        display_field: 'display_name',
                        filter: null
                      }
                    }]
                  }, {
                    fields: [{
                      name: 'Groups',
                      field: 'groups',
                      type: 'reference-multi-select',
                      reference: {
                        service: 'api/admin/groups',
                        display_field: 'name',
                        filter: null
                      }
                    }]
                  }, {
                    fields: [{
                      name: 'Roles',
                      field: 'roles',
                      type: 'reference-multi-select',
                      reference: {
                        service: 'api/admin/roles',
                        display_field: 'name',
                        filter: null
                      }
                    }]
                  }, {
                    fields: [{
                      name: 'Password',
                      field: 'password',
                      type: 'single-line-text'
                    }]
                  }]
                },
                other_section: {},
                related_section: [{
                  name: "Groups",
                  service: "api/admin/groups"
                }],
                actions_section: {},
                rows: [{
                  fields: [{
                    name: 'Display Name',
                    field: 'display_name',
                    type: 'single-line-text'
                  }]
                }, {
                  fields: [{
                    name: 'First Name',
                    field: 'first_name',
                    type: 'single-line-text'
                  }, {
                    name: 'Last Name',
                    field: 'last_name',
                    type: 'single-line-text'
                  }]
                }, {
                  fields: [{
                    name: 'Email Address',
                    field: 'email',
                    type: 'single-line-text'
                  }, {
                    name: 'Manager',
                    field: 'manager',
                    type: 'reference-single-select',
                    reference: {
                      service: 'users',
                      display_field: 'display_name',
                      filter: null
                    }
                  }]
                }, {
                  fields: [{
                    name: 'Password',
                    field: 'password',
                    type: 'single-line-text'
                  }]
                }]
              }
            }
          },
          groups: {
            display_name: 'Groups',
            singular_name: 'Group',
            icon: 'users',
            service: 'api/admin/groups',
            list_view: {
              cols: [{
                name: 'Name',
                field: 'name'
              }, {
                name: 'Manager',
                field: 'manager',
                reference: {
                  service: 'users',
                  display_field: 'display_name',
                  filter: null
                }
              }, {
                name: 'Email Address',
                field: 'email_address'
              }]
            },
            form_views: {
              add: {
                rows: [{
                  fields: [{
                    name: 'Name',
                    field: 'name',
                    type: 'single-line-text'
                  }, {
                    name: 'Manager',
                    field: 'manager',
                    type: 'reference-single-select',
                    reference: {
                      service: 'users',
                      display_field: 'display_name',
                      filter: null
                    }
                  }]
                }, {
                  fields: [{
                    name: 'Email Address',
                    field: 'email_address',
                    type: 'single-line-text'
                  }]
                }, {
                  fields: [{
                    name: 'Notes',
                    field: 'notes',
                    type: 'multi-line-text'
                  }]
                }]
              }
            }
          },
          roles: {
            display_name: 'Roles',
            singular_name: 'Role',
            icon: 'employee-group',
            service: 'api/admin/roles',
            list_view: {
              cols: [{
                name: 'Name',
                field: 'name'
              }]
            },
            form_views: {
              add: {
                rows: [{
                  fields: [{
                    name: 'Name',
                    field: 'name',
                    type: 'single-line-text'
                  }]
                }, {
                  fields: [{
                    name: 'Notes',
                    field: 'notes',
                    type: 'multi-line-text'
                  }]
                }]
              }
            }
          },
          settings: {
            display_name: 'Settings',
            singular_name: 'settings',
            icon: 'users',
            service: 'api/admin/settings',
            list_view: {
              cols: [{
                name: 'Name',
                field: '_id'
              }, {
                name: 'Value',
                field: 'value'
              }, {
                name: 'Description',
                field: 'description'
              }]
            },
            form_views: {
              add: {
                rows: [{
                  fields: [{
                    name: 'Name',
                    field: '_id',
                    type: 'single-line-text'
                  }]
                }, {
                  fields: [{
                    name: 'Value',
                    field: 'value',
                    type: 'single-line-text'
                  }]
                }, {
                  fields: [{
                    name: 'Description',
                    field: 'description',
                    type: 'multi-line-text'
                  }]
                }]
              }
            }
          }
        };

        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
        }; //this.loadUsers();

      }

      _createClass(AdminRecordListComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          console.log('destroy!');
          this.records$ = null;
          this.records$ = null;
          this.table = null;
          this.current_meta = null;
          this.recordSub.unsubscribe();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          console.log('changes');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.records$ = null;
          this.table = null;
          this.current_meta = null;
          this.loading = true;
          this.activatedRoute.params.subscribe(function (params) {
            // this.initialiseState();
            _this6.table = params.table;
            _this6.table_display_name = _this6.tables["".concat(_this6.table)].display_name;
            _this6.current_meta = _this6.tables["".concat(_this6.table)];

            _this6.loadRecords();
          });
        }
      }, {
        key: "loadRecords",
        value: function loadRecords() {
          var _this7 = this;

          if (this.table == 'users') {
            this.records$ = this.dataService.records$(this.table, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (r) {
              return r.data;
            }));
          } else {
            this.records$ = this.dataService.records$("api/admin/".concat(this.table), {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (r) {
              return r.data;
            }));
          }

          this.recordSub = this.records$.subscribe(function (records) {
            var lv = _this7.tables[_this7.table].list_view;
            lv.cols.forEach(function (col) {
              if (col.reference) {
                records.forEach(function (record) {
                  if (record[col.field]) {
                    _this7.dataService.record$(col.reference.service, record[col.field]).subscribe(function (res) {
                      record["".concat(col.field)] = res;

                      _this7.recs.push(record);

                      console.log(record);
                    }).remove();
                  } else {
                    _this7.recs.push(record);
                  }
                });
              }
            });
            console.log(records);
            _this7.loading = false;
            console.log(_this7.loading);
          });
        }
      }, {
        key: "onAdd",
        value: function onAdd() {
          this.addUser = true;
          this.sideOpen = true;
        }
      }, {
        key: "onUpdate",
        value: function onUpdate() {
          var _this8 = this;

          this.dataService.updateRecord(this.current_meta.service, this.userRecord._id, this.userRecord).then(function (res) {
            _this8.alertSuccess.active = true;
            _this8.alertSuccess.message = 'The changes to the record have been saved to the database.';
            setTimeout(function () {
              _this8.alertSuccess.active = false;
              _this8.alertSuccess.message = ''; // this.userRecord = {};

              _this8.sideOpen = false;
              _this8.editUser = false;

              _this8.onClose();
            }, 3000);
          })["catch"](function (error) {
            _this8.alertError.active = true;
            _this8.alertError.message = error;
          });
          console.log(this.userRecord);
        }
      }, {
        key: "onSave",
        value: function onSave() {
          var _this9 = this;

          this.dataService.createRecord(this.current_meta.service, this.userRecord).then(function (res) {
            console.log('---- CREATE RES ----');
            _this9.alertSuccess.active = true;
            _this9.alertSuccess.message = 'The record has been added to the database.';
            console.log('---- CREATE END ----');

            _this9.onClose();

            setTimeout(function () {
              _this9.alertSuccess.active = false;
              _this9.alertSuccess.message = '';
            }, 3000);
          })["catch"](function (error) {
            _this9.alertError.active = true;
            _this9.alertError.message = error;
          });
        }
      }, {
        key: "onClose",
        value: function onClose() {
          var _this10 = this;

          this.sideOpen = false;
          this.addUser = false;
          this.editUser = false;
          this.selected = {};
          this.selectedUser = null;
          this.userRecord = {};
          this.loading = false; // console.log(this.selectedUser);
          //this.selectedUser = {};

          setTimeout(function () {
            _this10.alertSuccess.active = false;
            _this10.alertError.active = false;
          }, 3000);
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          var _this11 = this;

          this.authService.logIn().then(function (res) {
            _this11.userRecord.deleted_by = res.user._id;
            _this11.userRecord.deleted_at = new Date();
            var deleteThis = _this11.userRecord;

            _this11.dataService.createRecord('deleted-records', deleteThis).then(function (res) {
              _this11.onClose();

              _this11.dataService.deleteRecord('users', deleteThis._id, {}).then(function (res) {
                _this11.alertSuccess.active = true;
                _this11.alertSuccess.message = 'The user records was deleted from the database.'; //this.onClose();
              });
            })["catch"](function (err) {
              _this11.alertError.active = true;
              _this11.alertError.message = err; //this.onClose();
            });
          })["catch"](function (err) {
            _this11.alertError.active = true;
            _this11.alertError.message = err; //this.onClose();
          });
        }
      }, {
        key: "recordSelected",
        value: function recordSelected(record) {
          var _this12 = this;

          this.loading = true;
          setTimeout(function () {
            _this12.userRecord = record;
            _this12.selectedUser = record;
            _this12.sideOpen = true;
            _this12.editUser = true;
          }, 1000);
        }
      }, {
        key: "onEdit",
        value: function onEdit() {}
      }, {
        key: "onExportSelected",
        value: function onExportSelected() {}
      }, {
        key: "onExportAll",
        value: function onExportAll() {}
      }]);

      return AdminRecordListComponent;
    }();

    AdminRecordListComponent.ɵfac = function AdminRecordListComponent_Factory(t) {
      return new (t || AdminRecordListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    AdminRecordListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminRecordListComponent,
      selectors: [["app-admin-record-list"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 37,
      vars: 14,
      consts: [[1, "main-container", 2, "height", "100%"], ["position", "end", 2, "min-width", "100%", 3, "opened"], [1, "header", "header-4"], [1, "branding"], ["routerLink", "./", 1, "nav-link"], ["class", "title", 4, "ngIf"], ["class", "header-actions", 4, "ngIf"], [1, "content-container"], [1, "content-area"], [3, "current_meta", "userRecord", 4, "ngIf"], ["class", "alert alert-app-level alert-success", "role", "alert", 4, "ngIf"], ["class", "alert alert-app-level alert-danger", "role", "alert", 4, "ngIf"], [1, "title"], [1, "header-nav"], ["href", "javascript:void(0);", "class", "nav-link nav-icon", 3, "click", 4, "ngIf"], [1, "flex-header-container"], [1, "box-container", "box-container-highlight"], ["shape", "search"], ["autocomplete", "off", "name", "list-filter", "placeholder", "Search...", "type", "text"], [1, "header-actions"], ["href", "javascript:void(0);", "aria-label", "save", 1, "nav-link", "nav-icon", 3, "click"], ["shape", "floppy", 1, "is-solid"], ["href", "javascript:void(0);", "class", "nav-link nav-icon", "aria-label", "cancel", 3, "click", 4, "ngIf"], ["href", "javascript:void(0);", "aria-label", "cancel", 1, "nav-link", "nav-icon", 3, "click"], ["shape", "times-circle", 1, "is-solid"], [1, "content-container", 2, "height", "calc(100% - 60px)"], ["class", "content-area", "style", "text-align: center; margin-top: 200px;", 4, "ngIf"], ["class", "content-area", "style", "padding: 0 !important;", 4, "ngIf"], ["shape", "trash", 1, "is-solid"], [3, "current_meta", "userRecord"], ["role", "alert", 1, "alert", "alert-app-level", "alert-success"], [1, "alert-items"], [1, "alert-item", "static"], [1, "alert-icon-wrapper"], ["shape", "check-circle", 1, "alert-icon"], [1, "alert-text"], ["role", "alert", 1, "alert", "alert-app-level", "alert-danger"], ["href", "javascript:void(0);", 1, "nav-link", "nav-icon", 3, "click"], ["shape", "plus-circle", 1, "is-solid"], [1, "content-area", 2, "text-align", "center", "margin-top", "200px"], [1, "content-area", 2, "padding", "0 !important"], ["class", "admin-data", "style", "height: 100%;", 4, "ngIf"], [1, "admin-data", 2, "height", "100%"], [2, "min-height", "100% !important", "border", "0 !important", 3, "clrDgSingleSelected", "clrDgRowSelection", "clrDgSingleSelectedChange"], [3, "clrDgField", 4, "ngFor", "ngForOf"], [3, "clrDgItem", "clrDgSelectable", "click", 4, "clrDgItems", "clrDgItemsOf"], [3, "clrDgPageSize"], ["pagination", ""], [3, "clrPageSizeOptions"], [3, "clrDgField"], [4, "clrDgHideableColumn"], [3, "clrDgItem", "clrDgSelectable", "click"], [4, "ngFor", "ngForOf"], [4, "ngIf"]],
      template: function AdminRecordListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdminRecordListComponent_span_6_Template, 2, 1, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminRecordListComponent_span_7_Template, 2, 1, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdminRecordListComponent_div_8_Template, 6, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdminRecordListComponent_div_9_Template, 6, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdminRecordListComponent_app_admin_add_record_12_Template, 1, 2, "app-admin-add-record", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdminRecordListComponent_app_admin_edit_record_13_Template, 1, 2, "app-admin-edit-record", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdminRecordListComponent_div_15_Template, 7, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AdminRecordListComponent_div_16_Template, 7, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AdminRecordListComponent_a_23_Template, 2, 0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "clr-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminRecordListComponent_Template_a_click_29_listener() {
            return ctx.onSave();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "clr-icon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AdminRecordListComponent_a_31_Template, 2, 0, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminRecordListComponent_Template_a_click_32_listener() {
            return ctx.onClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "clr-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AdminRecordListComponent_div_35_Template, 2, 0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AdminRecordListComponent_div_36_Template, 3, 3, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.sideOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editUser && ctx.selectedUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alertSuccess.active);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alertError.active);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.table_display_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.table != "settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContent"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrIconCustomTag"], _admin_add_record_admin_add_record_component__WEBPACK_IMPORTED_MODULE_8__["AdminAddRecordComponent"], _admin_edit_record_admin_edit_record_component__WEBPACK_IMPORTED_MODULE_9__["AdminEditRecordComponent"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrAlertText"], _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrDatagrid"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdj"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdn"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdr"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrDatagridItems"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrDatagridFooter"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrDatagridPagination"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrDatagridPageSize"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrDatagridColumn"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdk"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrDatagridHideableColumn"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrDatagridRow"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdl"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ClrDatagridCell"], _clr_angular__WEBPACK_IMPORTED_MODULE_7__["ɵdm"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: [".flex-header-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  align-items: center;\n  margin-left: 10px;\n}\n.flex-header-container[_ngcontent-%COMP%]   .box-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  border-radius: 3px;\n  padding: 6px;\n}\n.flex-header-container[_ngcontent-%COMP%]   .box-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #565656;\n  border: 0;\n}\n.flex-header-container[_ngcontent-%COMP%]   .box-container-highlight[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  z-index: 1080;\n}\n.flex-header-container[_ngcontent-%COMP%]   .box-container-highlight[_ngcontent-%COMP%]   clr-icon[_ngcontent-%COMP%] {\n  fill: #565656;\n}\n.flex-header-container[_ngcontent-%COMP%]   clr-icon[shape=search][_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n  margin-right: 8px;\n}\n.datagrid[_ngcontent-%COMP%] {\n  margin-top: 20px !important;\n}\n.datagrid-footer[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n}\n.admin-data[_ngcontent-%COMP%]   clr-datagrid[_ngcontent-%COMP%] {\n  height: 286px;\n}\n.datagrid-table[_ngcontent-%COMP%]   .datagrid-cell.datagrid-fixed-column[_ngcontent-%COMP%] {\n  flex: 0 0 1.9rem;\n  max-width: 1.9rem;\n  min-width: 1.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bmJyYWRsZXkvcHJvamVjdHMvbnRzLWFuZ3VsYXItY2xpZW50L3NyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9hZG1pbi1yZWNvcmQtbGlzdC9hZG1pbi1yZWNvcmQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9hZG1pbi1yZWNvcmQtbGlzdC9hZG1pbi1yZWNvcmQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUdBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDRjtBRENFO0VBR0UsYUFBQTtFQUdBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDSjtBRENJO0VBQ0UsY0FBQTtFQUNBLFNBQUE7QUNDTjtBREdFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FDREo7QURJSTtFQUNFLGFBQUE7QUNGTjtBRE1FO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0pKO0FEUUE7RUFDRSwyQkFBQTtBQ0xGO0FET0E7RUFDRSw4QkFBQTtBQ0pGO0FETUE7RUFDRSxhQUFBO0FDSEY7QURNQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9hZG1pbi1yZWNvcmQtbGlzdC9hZG1pbi1yZWNvcmQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWhlYWRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuXG4gIC5ib3gtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwYWRkaW5nOiA2cHg7XG5cbiAgICBpbnB1dCB7XG4gICAgICBjb2xvcjogIzU2NTY1NjtcbiAgICAgIGJvcmRlcjogMDtcbiAgICB9XG4gIH1cblxuICAuYm94LWNvbnRhaW5lci1oaWdobGlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgei1pbmRleDogMTA4MDtcblxuXG4gICAgY2xyLWljb24ge1xuICAgICAgZmlsbDogIzU2NTY1NjtcbiAgICB9XG4gIH1cblxuICBjbHItaWNvbltzaGFwZT1zZWFyY2hdIHtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7ICAgIFxuICB9XG59XG5cbi5kYXRhZ3JpZCB7XG4gIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcbn1cbi5kYXRhZ3JpZC1mb290ZXIge1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG4uYWRtaW4tZGF0YSBjbHItZGF0YWdyaWQge1xuICBoZWlnaHQ6IDI4NnB4O1xufVxuXG4uZGF0YWdyaWQtdGFibGUgLmRhdGFncmlkLWNlbGwuZGF0YWdyaWQtZml4ZWQtY29sdW1uIHtcbiAgZmxleDogMCAwIDEuOXJlbTtcbiAgbWF4LXdpZHRoOiAxLjlyZW07XG4gIG1pbi13aWR0aDogMS45cmVtO1xufVxuXG4iLCIuZmxleC1oZWFkZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5mbGV4LWhlYWRlci1jb250YWluZXIgLmJveC1jb250YWluZXIge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xuICBmbGV4LWdyb3c6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogNnB4O1xufVxuLmZsZXgtaGVhZGVyLWNvbnRhaW5lciAuYm94LWNvbnRhaW5lciBpbnB1dCB7XG4gIGNvbG9yOiAjNTY1NjU2O1xuICBib3JkZXI6IDA7XG59XG4uZmxleC1oZWFkZXItY29udGFpbmVyIC5ib3gtY29udGFpbmVyLWhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIHotaW5kZXg6IDEwODA7XG59XG4uZmxleC1oZWFkZXItY29udGFpbmVyIC5ib3gtY29udGFpbmVyLWhpZ2hsaWdodCBjbHItaWNvbiB7XG4gIGZpbGw6ICM1NjU2NTY7XG59XG4uZmxleC1oZWFkZXItY29udGFpbmVyIGNsci1pY29uW3NoYXBlPXNlYXJjaF0ge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmRhdGFncmlkIHtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uZGF0YWdyaWQtZm9vdGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYWRtaW4tZGF0YSBjbHItZGF0YWdyaWQge1xuICBoZWlnaHQ6IDI4NnB4O1xufVxuXG4uZGF0YWdyaWQtdGFibGUgLmRhdGFncmlkLWNlbGwuZGF0YWdyaWQtZml4ZWQtY29sdW1uIHtcbiAgZmxleDogMCAwIDEuOXJlbTtcbiAgbWF4LXdpZHRoOiAxLjlyZW07XG4gIG1pbi13aWR0aDogMS45cmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRecordListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-record-list',
          templateUrl: './admin-record-list.component.html',
          styleUrls: ['./admin-record-list.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/loading/loading.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/loading/loading.module.ts ***!
    \*******************************************/

  /*! exports provided: LoadingModule */

  /***/
  function srcAppLoadingLoadingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingModule", function () {
      return LoadingModule;
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


    var _loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./loading/loading.component */
    "./src/app/loading/loading/loading.component.ts");

    var LoadingModule = function LoadingModule() {
      _classCallCheck(this, LoadingModule);
    };

    LoadingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LoadingModule
    });
    LoadingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LoadingModule_Factory(t) {
        return new (t || LoadingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoadingModule, {
        declarations: [_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/loading/loading/loading.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/loading/loading/loading.component.ts ***!
    \******************************************************/

  /*! exports provided: LoadingComponent */

  /***/
  function srcAppLoadingLoadingLoadingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () {
      return LoadingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoadingComponent = /*#__PURE__*/function () {
      function LoadingComponent() {
        _classCallCheck(this, LoadingComponent);
      }

      _createClass(LoadingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoadingComponent;
    }();

    LoadingComponent.ɵfac = function LoadingComponent_Factory(t) {
      return new (t || LoadingComponent)();
    };

    LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoadingComponent,
      selectors: [["app-loading"]],
      decls: 2,
      vars: 0,
      consts: [[1, "spinner"]],
      template: function LoadingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Loading...\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYWRpbmcvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-loading',
          templateUrl: './loading.component.html',
          styleUrls: ['./loading.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=admin-admin-module-es5.js.map