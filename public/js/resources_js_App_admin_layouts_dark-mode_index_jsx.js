"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_App_admin_layouts_dark-mode_index_jsx"],{

/***/ "./resources/js/App/(admin)/(layouts)/dark-mode/components/DarkMode.jsx":
/*!******************************************************************************!*\
  !*** ./resources/js/App/(admin)/(layouts)/dark-mode/components/DarkMode.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageBreadcrumb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/context/useLayoutContext'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var DarkMode = function DarkMode() {
  var _useLayoutContext = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/context/useLayoutContext'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
    updateSettings = _useLayoutContext.updateSettings;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    updateSettings({
      theme: 'dark',
      sidenav: {
        size: 'default',
        color: 'dark'
      }
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageBreadcrumb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      subtitle: "Layouts",
      title: "Dark"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "card h-40"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DarkMode);

/***/ }),

/***/ "./resources/js/App/(admin)/(layouts)/dark-mode/index.jsx":
/*!****************************************************************!*\
  !*** ./resources/js/App/(admin)/(layouts)/dark-mode/index.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_DarkMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/DarkMode */ "./resources/js/App/(admin)/(layouts)/dark-mode/components/DarkMode.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var Index = function Index() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      title: "Dark Mode"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("main", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_DarkMode__WEBPACK_IMPORTED_MODULE_1__["default"], {})
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ })

}]);