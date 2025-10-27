"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_App_admin_dashboards_email_index_jsx"],{

/***/ "./resources/js/App/(admin)/(dashboards)/email/components/ComposeEmail.jsx":
/*!*********************************************************************************!*\
  !*** ./resources/js/App/(admin)/(dashboards)/email/components/ComposeEmail.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/email-dashboard.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var ComposeEmail = function ComposeEmail() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "col-span-1",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "card",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "card-body",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4", {
          className: "mb-3.5 text-default-800 text-xl leading-relaxed font-semibold",
          children: "Experience Our Fresh Email Composition Interface"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "mb-5 text-default-500",
          children: "A local-part, the symbol @, and a domain, which may be a domain name or an IP address enclosed in brackets."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
          to: "/mailbox",
          className: "mb-3 btn bg-primary text-white transition-all",
          children: "Compose Email"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "flex justify-end",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
            src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/email-dashboard.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            alt: "",
            className: "-scale-x-100 h-48"
          })
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComposeEmail);

/***/ }),

/***/ "./resources/js/App/(admin)/(dashboards)/email/components/EmailBarChart.jsx":
/*!**********************************************************************************!*\
  !*** ./resources/js/App/(admin)/(dashboards)/email/components/EmailBarChart.jsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/client-wrapper/ApexChartClient'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./resources/js/App/(admin)/(dashboards)/email/components/data.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var EmailCard = function EmailCard(_ref) {
  var title = _ref.title,
    tooltip = _ref.tooltip,
    value = _ref.value,
    getOptions = _ref.getOptions;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "card",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "card-body",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "flex items-center justify-between mb-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "text-default-500",
          children: title
        }), tooltip && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "hs-tooltip [--placement:top]",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
            type: "button",
            className: "hs-tooltip-toggle",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuInfo, {
              className: "size-4 text-default-500 mt-2"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-30 py-1 px-2 bg-default-900 text-xs font-medium text-default-100 rounded-md shadow-2xs",
              role: "tooltip",
              children: tooltip
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h5", {
        className: "mb-4 text-default-800 text-lg font-semibold",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          "data-target": value,
          children: value
        }), "%"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/client-wrapper/ApexChartClient'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        getOptions: getOptions,
        series: getOptions().series,
        type: "bar",
        height: 80,
        className: "w-87 h-20"
      })]
    })
  });
};
var EmailBarChart = function EmailBarChart() {
  var cards = [{
    title: 'Delivered Rate',
    value: 100,
    getOptions: _data__WEBPACK_IMPORTED_MODULE_2__.getDeliveredRate,
    tooltip: 'Taking the number of delivered emails and dividing it by the total number of emails sent'
  }, {
    title: 'Hard Bounce Rate',
    value: 89,
    getOptions: _data__WEBPACK_IMPORTED_MODULE_2__.getHardBounceRate,
    tooltip: 'Taking the number of delivered emails and dividing it by the total number of emails sent'
  }, {
    title: 'Unsubscribed Rate',
    value: 33,
    getOptions: _data__WEBPACK_IMPORTED_MODULE_2__.getUnsubscribedRate,
    tooltip: 'Taking the number of delivered emails and dividing it by the total number of emails sent'
  }, {
    title: 'Spam Report Rate',
    value: 11.8,
    getOptions: _data__WEBPACK_IMPORTED_MODULE_2__.getSpanReportRate,
    tooltip: 'Taking the number of delivered emails and dividing it by the total number of emails sent'
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mb-5",
    children: cards.map(function (card, idx) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(EmailCard, _objectSpread({}, card), idx);
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailBarChart);

/***/ }),

/***/ "./resources/js/App/(admin)/(dashboards)/email/components/EmailData.jsx":
/*!******************************************************************************!*\
  !*** ./resources/js/App/(admin)/(dashboards)/email/components/EmailData.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/client-wrapper/ApexChartClient'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./resources/js/App/(admin)/(dashboards)/email/components/data.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var EmailData = function EmailData() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "lg:col-span-2 col-span-1",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "card-header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h6", {
          className: "card-title",
          children: "Email Data"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("select", {
            className: "form-input form-input-sm",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
              defaultValue: "",
              children: "This Yearly"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
              children: "1 Weekly"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
              children: "1 Monthly"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
              children: "3 Monthly"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
              children: "6 Monthly"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
              children: "This Yearly"
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "card-body",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/client-wrapper/ApexChartClient'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          getOptions: _data__WEBPACK_IMPORTED_MODULE_1__.getEmailDataChart,
          series: (0,_data__WEBPACK_IMPORTED_MODULE_1__.getEmailDataChart)().series,
          type: "line",
          height: 333
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailData);

/***/ }),

/***/ "./resources/js/App/(admin)/(dashboards)/email/components/EmailLineChart.jsx":
/*!***********************************************************************************!*\
  !*** ./resources/js/App/(admin)/(dashboards)/email/components/EmailLineChart.jsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/client-wrapper/ApexChartClient'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./resources/js/App/(admin)/(dashboards)/email/components/data.js");
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var EmailLineChart = function EmailLineChart() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "mb-5",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "card",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "card-body",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "grid grid-cols-1 gap-5 divide-y md:divide-x md:divide-y-0 md:grid-cols-2 lg:grid-cols-4 divide-default-200",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "py-5 md:pe-5 pe-0 md:border-e md:border-b-0 border-b border-default-200",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "grid grid-cols-3 mb-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "text-default-500 text-sm w-36 shrink-0",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "flex items-center gap-1.5 mb-6",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuRocket, {
                    className: "size-4"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                    className: "uppercase",
                    children: "sent"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h5", {
                  className: "text-default-800 text-lg font-semibold",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    className: "counter-value",
                    "data-target": "1452",
                    children: "1,452"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "col-span-2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/client-wrapper/ApexChartClient'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                  getOptions: _data__WEBPACK_IMPORTED_MODULE_1__.getSentEmail,
                  series: (0,_data__WEBPACK_IMPORTED_MODULE_1__.getSentEmail)().series,
                  type: "line",
                  height: 80
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "text-default-500",
              children: "238 Emails (Monthly)"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "md:p-5 px-0 py-5  md:border-e md:border-b-0 border-b border-default-200",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "grid grid-cols-3 mb-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "text-default-500 text-sm w-36 shrink-0",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "flex items-center gap-1.5 mb-6",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuMousePointerClick, {
                    className: "size-4"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                    className: "uppercase",
                    children: "Open Rate"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h5", {
                  className: "text-default-800 text-lg font-semibold",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    "data-target": "92.74",
                    children: "92.74"
                  }), "%"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "col-span-2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/client-wrapper/ApexChartClient'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                  getOptions: _data__WEBPACK_IMPORTED_MODULE_1__.getOpenRate,
                  series: (0,_data__WEBPACK_IMPORTED_MODULE_1__.getOpenRate)().series,
                  type: "line",
                  height: 80
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "text-default-500",
              children: "60 Opened (Monthly)"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "md:p-5 px-0 py-5  md:border-e md:border-b-0 border-b border-default-200",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "grid grid-cols-3 mb-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "text-default-500 text-sm w-36 shrink-0",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "flex items-center gap-1.5 mb-6",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuSquareMousePointer, {
                    className: "size-4"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                    className: "uppercase",
                    children: "Open Rate"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h5", {
                  className: "text-default-800 text-lg font-semibold",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    "data-target": "3.79",
                    children: "3.79"
                  }), "%"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "col-span-2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/client-wrapper/ApexChartClient'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                  getOptions: _data__WEBPACK_IMPORTED_MODULE_1__.getClickRate,
                  series: (0,_data__WEBPACK_IMPORTED_MODULE_1__.getClickRate)().series,
                  type: "line",
                  height: 80
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "text-default-500",
              children: "29 Clicks (Monthly)"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "py-5 md:ps-5 ps-0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "grid grid-cols-3 mb-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "text-default-500 text-sm w-36 shrink-0",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "flex items-center gap-1.5 mb-6",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuGoal, {
                    className: "size-4"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                    className: "uppercase",
                    children: "Clicks Through"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h5", {
                  className: "text-default-800 text-lg font-semibold",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    "data-target": "4.06",
                    children: "4.06"
                  }), "%"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "col-span-2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/client-wrapper/ApexChartClient'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                  getOptions: _data__WEBPACK_IMPORTED_MODULE_1__.getClickThrough,
                  series: (0,_data__WEBPACK_IMPORTED_MODULE_1__.getClickThrough)().series,
                  type: "line",
                  height: 80
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "text-default-500",
              children: "29 Click Through (Monthly)"
            })]
          })]
        })
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailLineChart);

/***/ }),

/***/ "./resources/js/App/(admin)/(dashboards)/email/components/EmailMarketing.jsx":
/*!***********************************************************************************!*\
  !*** ./resources/js/App/(admin)/(dashboards)/email/components/EmailMarketing.jsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/client-wrapper/ApexChartClient'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./resources/js/App/(admin)/(dashboards)/email/components/data.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var EmailMarketing = function EmailMarketing() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "col-span-1",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "card-header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h6", {
          className: "card-title",
          children: "Email Marketing"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "hs-dropdown relative inline-flex",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            type: "button",
            className: "hs-dropdown-toggle btn size-7.5 hover:bg-default-150",
            "aria-haspopup": "menu",
            "aria-expanded": "false",
            "aria-label": "Dropdown",
            "hs-dropdown-placement": "bottom-end",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuEllipsis, {
              className: "size-4 text-default-600"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "hs-dropdown-menu",
            role: "menu",
            "aria-orientation": "vertical",
            "aria-labelledby": "hs-dropdown-custom-icon-trigger",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
              className: "flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded",
              to: "#",
              children: "This Year"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
              className: "flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded",
              to: "#",
              children: "Last Year"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "card-body",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/client-wrapper/ApexChartClient'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          getOptions: _data__WEBPACK_IMPORTED_MODULE_3__.getEmailMarketingChart,
          series: (0,_data__WEBPACK_IMPORTED_MODULE_3__.getEmailMarketingChart)().series,
          type: "radialBar",
          height: 345
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailMarketing);

/***/ }),

/***/ "./resources/js/App/(admin)/(dashboards)/email/components/EmailPerformance.jsx":
/*!*************************************************************************************!*\
  !*** ./resources/js/App/(admin)/(dashboards)/email/components/EmailPerformance.jsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var EmailPerformance = function EmailPerformance() {
  var emailStatsData = [{
    email: 'Adverting & Marketing Agencies',
    createDate: '05 Aug, 2023',
    openRate: '18.65%',
    clickThrough: '2.66%',
    clickRate: '14.14%',
    unsubscribed: '0.19%',
    bounce: '1.29%',
    tSpam: '0.03%'
  }, {
    email: 'Automotive & Aerospace',
    createDate: '20 Sep, 2023',
    openRate: '20.13%',
    clickThrough: '3.44%',
    clickRate: '18.03%',
    unsubscribed: '0.18%',
    bounce: '1.18%',
    tSpam: '0.00%'
  }, {
    email: 'Education',
    createDate: '04 Jun, 2023',
    openRate: '18.74%',
    clickThrough: '2.80%',
    clickRate: '14.94%',
    unsubscribed: '0.17%',
    bounce: '1.35%',
    tSpam: '0.02%'
  }, {
    email: 'Financial Services',
    createDate: '11 Feb, 2023',
    openRate: '18.23%',
    clickThrough: '2.72%',
    clickRate: '14.79%',
    unsubscribed: '0.16%',
    bounce: '1.30%',
    tSpam: '0.00%'
  }, {
    email: 'Food & Beverage',
    createDate: '26 Nov, 2023',
    openRate: '15.48%',
    clickThrough: '1.69%',
    clickRate: '10.69%',
    unsubscribed: '0.11%',
    bounce: '0.63%',
    tSpam: '0.00%'
  }, {
    email: 'Healthcare Services',
    createDate: '19 Jul, 2023',
    openRate: '19.12%',
    clickThrough: '2.98%',
    clickRate: '15.11%',
    unsubscribed: '0.17%',
    bounce: '1.08%',
    tSpam: '0.00%'
  }, {
    email: 'Professional Services',
    createDate: '14 Jun, 2023',
    openRate: '18.14%',
    clickThrough: '2.39%',
    clickRate: '12.92%',
    unsubscribed: '0.17%',
    bounce: '1.10%',
    tSpam: '0.00%'
  }, {
    email: 'Logistics & Wholesale',
    createDate: '03 Dec, 2023',
    openRate: '18.50%',
    clickThrough: '0.20%',
    clickRate: '14.84%',
    unsubscribed: '0.15%',
    bounce: '1.40%',
    tSpam: '0.00%'
  }, {
    email: 'Real Estate Agents & Brokers',
    createDate: '03 Dec, 2023',
    openRate: '18.06%',
    clickThrough: '2.02%',
    clickRate: '11.51%',
    unsubscribed: '0.22%',
    bounce: '1.18%',
    tSpam: '0.00%'
  }, {
    email: 'Nonprofit',
    createDate: '03 Dec, 2023',
    openRate: '20.39%',
    clickThrough: '2.66%',
    clickRate: '12.99%',
    unsubscribed: '0.17%',
    bounce: '1.09%',
    tSpam: '0.01%'
  }, {
    email: 'Retail',
    createDate: '03 Dec, 2023',
    openRate: '14.98%',
    clickThrough: '2.25%',
    clickRate: '14.82%',
    unsubscribed: '0.12%',
    bounce: '0.69%',
    tSpam: '0.01%'
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "card",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "card-header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h6", {
        className: "card-title",
        children: "Email Performance"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "flex gap-3 items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "relative",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
            type: "email",
            className: "form-input form-input-sm ps-9",
            placeholder: "Search for...."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "absolute inset-y-0 start-0 flex items-center ps-3",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuSearch, {
              className: "size-3.5  text-default-500"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
          className: "btn btn-sm bg-primary text-white",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuDownload, {
            className: "size-4"
          }), "Export"]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "flex flex-col",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "overflow-x-auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "min-w-full inline-block align-middle",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "overflow-hidden",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("table", {
              className: "min-w-full divide-y divide-default-200",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("thead", {
                className: "bg-default-150",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
                  className: "text-sm font-normal text-default-500 whitespace-nowrap",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
                    scope: "col",
                    className: "py-3 px-4 pe-0 text-start",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                      type: "checkbox",
                      className: "form-checkbox"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
                    className: "px-3.5 py-3 text-start",
                    children: "Email"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
                    className: "px-3.5 py-3 text-start",
                    children: "Create Date"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
                    className: "px-3.5 py-3 text-start",
                    children: "Open Rate (%)"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
                    className: "px-3.5 py-3 text-start",
                    children: "Click Through (%)"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
                    className: "px-3.5 py-3 text-start",
                    children: "Click Rate (%)"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
                    className: "px-3.5 py-3 text-start",
                    children: "Unsubscribed (%)"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
                    className: "px-3.5 py-3 text-start",
                    children: "Bounce (%)"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
                    className: "px-3.5 py-3 text-start",
                    children: "TSpam (%)"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("tbody", {
                className: "divide-y divide-default-200",
                children: emailStatsData.map(function (row, idx) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
                    className: "text-default-800 font-normal",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
                      className: "py-2.5 ps-4",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                        type: "checkbox",
                        className: "form-checkbox"
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
                      className: "px-3.5 py-2.5 whitespace-nowrap text-sm",
                      children: row.email
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
                      className: "px-3.5 py-2.5 whitespace-nowrap text-sm",
                      children: row.createDate
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
                      className: "px-3.5 py-2.5 whitespace-nowrap text-sm",
                      children: row.openRate
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
                      className: "px-3.5 py-2.5 whitespace-nowrap text-sm",
                      children: row.clickThrough
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
                      className: "px-3.5 py-2.5 whitespace-nowrap text-sm",
                      children: row.clickRate
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
                      className: "px-3.5 py-2.5 whitespace-nowrap text-sm",
                      children: row.unsubscribed
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
                      className: "px-3.5 py-2.5 whitespace-nowrap text-sm",
                      children: row.bounce
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
                      className: "px-3.5 py-2.5 whitespace-nowrap text-sm",
                      children: row.tSpam
                    })]
                  }, idx);
                })
              })]
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "card-footer",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
          className: "text-default-500 text-sm",
          children: ["Showing ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
            children: "07"
          }), " of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
            children: "19"
          }), " Results"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("nav", {
          className: "flex items-center gap-2",
          "aria-label": "Pagination",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
            type: "button",
            className: "btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuChevronLeft, {
              className: "size-4 me-1"
            }), " Prev"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            type: "button",
            className: "btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10",
            children: "1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            type: "button",
            className: "btn size-7.5 bg-primary text-white",
            children: "2"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            type: "button",
            className: "btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10",
            children: "3"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
            type: "button",
            className: "btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10",
            children: ["Next", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuChevronRight, {
              className: "size-4 ms-1"
            })]
          })]
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailPerformance);

/***/ }),

/***/ "./resources/js/App/(admin)/(dashboards)/email/components/data.js":
/*!************************************************************************!*\
  !*** ./resources/js/App/(admin)/(dashboards)/email/components/data.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getClickRate: () => (/* binding */ getClickRate),
/* harmony export */   getClickThrough: () => (/* binding */ getClickThrough),
/* harmony export */   getDeliveredRate: () => (/* binding */ getDeliveredRate),
/* harmony export */   getEmailDataChart: () => (/* binding */ getEmailDataChart),
/* harmony export */   getEmailMarketingChart: () => (/* binding */ getEmailMarketingChart),
/* harmony export */   getHardBounceRate: () => (/* binding */ getHardBounceRate),
/* harmony export */   getOpenRate: () => (/* binding */ getOpenRate),
/* harmony export */   getSentEmail: () => (/* binding */ getSentEmail),
/* harmony export */   getSpanReportRate: () => (/* binding */ getSpanReportRate),
/* harmony export */   getUnsubscribedRate: () => (/* binding */ getUnsubscribedRate)
/* harmony export */ });
var getSentEmail = function getSentEmail() {
  return {
    series: [{
      name: 'Sent',
      data: [14, 20, 10, 5, 11, 30, 24, 26, 33, 38, 34, 27, 22]
    }],
    chart: {
      id: 'area-datetime',
      type: 'line',
      height: 80,
      sparkline: {
        enabled: true
      },
      zoom: {
        autoScaleYaxis: true
      }
    },
    colors: ['#2b7fff', '#00c951'],
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    dataLabels: {
      enabled: false
    }
  };
};
var getOpenRate = function getOpenRate() {
  return {
    series: [{
      name: 'Open Rate',
      data: [38, 34, 27, 22, 14, 20, 10, 5, 11, 30, 24, 26, 33]
    }],
    chart: {
      id: 'area-datetime',
      type: 'line',
      height: 80,
      sparkline: {
        enabled: true
      },
      zoom: {
        autoScaleYaxis: true
      }
    },
    colors: ['#00c951'],
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    dataLabels: {
      enabled: false
    }
  };
};
var getClickRate = function getClickRate() {
  return {
    series: [{
      name: 'Click Rate',
      data: [30, 24, 14, 20, 10, 5, 11, 26, 33, 38, 34, 27, 22]
    }],
    chart: {
      id: 'area-datetime',
      type: 'line',
      height: 80,
      sparkline: {
        enabled: true
      },
      zoom: {
        autoScaleYaxis: true
      }
    },
    colors: ['#ff6900'],
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    dataLabels: {
      enabled: false
    }
  };
};
var getClickThrough = function getClickThrough() {
  return {
    series: [{
      name: 'Delivered Rate',
      data: [11, 30, 24, 26, 33, 38, 14, 20, 10, 9, 34, 27, 22]
    }],
    chart: {
      id: 'area-datetime',
      type: 'bar',
      height: 80,
      sparkline: {
        enabled: true
      },
      zoom: {
        autoScaleYaxis: true
      }
    },
    colors: ['#2b7fff'],
    stroke: {
      width: 1,
      curve: 'smooth'
    },
    dataLabels: {
      enabled: false
    }
  };
};
var getDeliveredRate = function getDeliveredRate() {
  return {
    series: [{
      name: 'Delivered Rate',
      data: [11, 30, 24, 26, 33, 38, 14, 20, 10, 9, 34, 27, 22]
    }],
    chart: {
      id: 'area-datetime',
      type: 'bar',
      height: 80,
      sparkline: {
        enabled: true
      },
      zoom: {
        autoScaleYaxis: true
      }
    },
    colors: ['#2b7fff'],
    stroke: {
      width: 1,
      curve: 'smooth'
    },
    dataLabels: {
      enabled: false
    }
  };
};
var getHardBounceRate = function getHardBounceRate() {
  return {
    series: [{
      name: 'Hard Bounce Rate',
      data: [14, 20, 10, 5, 11, 30, 24, 26, 33, 38, 34, 27, 22]
    }],
    chart: {
      id: 'area-datetime',
      type: 'bar',
      height: 80,
      sparkline: {
        enabled: true
      },
      zoom: {
        autoScaleYaxis: true
      }
    },
    colors: ['#00c951'],
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    dataLabels: {
      enabled: false
    }
  };
};
var getUnsubscribedRate = function getUnsubscribedRate() {
  return {
    series: [{
      name: 'Unsubscribed Rate',
      data: [38, 34, 27, 22, 14, 20, 10, 5, 11, 30, 24, 26, 33]
    }],
    chart: {
      id: 'area-datetime',
      type: 'bar',
      height: 80,
      sparkline: {
        enabled: true
      },
      zoom: {
        autoScaleYaxis: true
      }
    },
    colors: ['var(--color-yellow-500)'],
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    dataLabels: {
      enabled: false
    }
  };
};
var getSpanReportRate = function getSpanReportRate() {
  return {
    series: [{
      name: 'Spam Report Rate',
      data: [30, 24, 14, 20, 10, 13, 11, 26, 33, 38, 34, 27, 22]
    }],
    chart: {
      id: 'area-datetime',
      type: 'bar',
      height: 80,
      sparkline: {
        enabled: true
      },
      zoom: {
        autoScaleYaxis: true
      }
    },
    colors: ['var(--color-purple-500)'],
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    dataLabels: {
      enabled: false
    }
  };
};
var getEmailDataChart = function getEmailDataChart() {
  return {
    series: [{
      name: 'Open Rate',
      data: [28, 29, 31, 36, 32, 32, 33, 40, 37]
    }, {
      name: 'Click Rate',
      data: [26, 41, 40, 51, 49, 62, 69, 52, 58]
    }],
    chart: {
      height: 333,
      type: 'line',
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2
      },
      toolbar: {
        show: false
      }
    },
    colors: ['#2b7fff', 'var(--color-purple-500)'],
    stroke: {
      curve: 'smooth',
      width: 3
    },
    markers: {
      size: 5,
      hover: {
        sizeOffset: 1
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -15,
      show: true
      // offsetX: -5
    }
  };
};
var getEmailMarketingChart = function getEmailMarketingChart() {
  return {
    series: [44, 55, 67],
    chart: {
      height: 370,
      type: 'radialBar'
    },
    legend: {
      show: false
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px'
          },
          value: {
            fontSize: '16px'
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function formatter() {
              return '249';
            }
          }
        },
        track: {
          margin: 14
        }
      }
    },
    colors: ['#2b7fff', '#00c951', '#ff6900'],
    labels: ['Sent', 'Opened', 'Not Opened']
  };
};

/***/ }),

/***/ "./resources/js/App/(admin)/(dashboards)/email/index.jsx":
/*!***************************************************************!*\
  !*** ./resources/js/App/(admin)/(dashboards)/email/index.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageBreadcrumb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_ComposeEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ComposeEmail */ "./resources/js/App/(admin)/(dashboards)/email/components/ComposeEmail.jsx");
/* harmony import */ var _components_EmailBarChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/EmailBarChart */ "./resources/js/App/(admin)/(dashboards)/email/components/EmailBarChart.jsx");
/* harmony import */ var _components_EmailData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/EmailData */ "./resources/js/App/(admin)/(dashboards)/email/components/EmailData.jsx");
/* harmony import */ var _components_EmailLineChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/EmailLineChart */ "./resources/js/App/(admin)/(dashboards)/email/components/EmailLineChart.jsx");
/* harmony import */ var _components_EmailMarketing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/EmailMarketing */ "./resources/js/App/(admin)/(dashboards)/email/components/EmailMarketing.jsx");
/* harmony import */ var _components_EmailPerformance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/EmailPerformance */ "./resources/js/App/(admin)/(dashboards)/email/components/EmailPerformance.jsx");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









var Index = function Index() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      title: "Email"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("main", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageBreadcrumb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        title: "Email Analytics",
        subtitle: "Dashboard"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_EmailLineChart__WEBPACK_IMPORTED_MODULE_4__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_EmailBarChart__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "grid lg:grid-cols-4 grid-cols-1 gap-5 mb-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_EmailData__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_EmailMarketing__WEBPACK_IMPORTED_MODULE_5__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_ComposeEmail__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_EmailPerformance__WEBPACK_IMPORTED_MODULE_6__["default"], {})]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ })

}]);