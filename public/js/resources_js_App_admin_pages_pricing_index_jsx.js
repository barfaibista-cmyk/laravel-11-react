"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_App_admin_pages_pricing_index_jsx"],{

/***/ "./resources/js/App/(admin)/(pages)/pricing/components/HorizontalPricing.jsx":
/*!***********************************************************************************!*\
  !*** ./resources/js/App/(admin)/(pages)/pricing/components/HorizontalPricing.jsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var plans = [{
  id: 1,
  title: 'Personal Plan',
  price: '29.99',
  period: 'Per Month',
  color: 'bg-primary/10 text-primary',
  buttonColor: 'bg-blue-600 text-white',
  features: [{
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
        children: "3"
      }), " Projects"]
    })
  }, {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
        children: "299"
      }), " Customers"]
    })
  }, {
    label: 'Scalable Bandwidth'
  }, {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
        children: "0"
      }), " No Team Account"]
    })
  }, {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
        children: "3"
      }), " Projects"]
    })
  }, {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
        children: "299"
      }), " Customers"]
    })
  }]
}, {
  id: 2,
  title: 'Enterprise Plan',
  price: '49.99',
  period: 'Per Month',
  color: 'bg-purple-500/20 text-purple-600',
  buttonColor: 'bg-purple-600 text-white',
  features: [{
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
        children: "3"
      }), " Projects"]
    })
  }, {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
        children: "299"
      }), " Customers"]
    })
  }, {
    label: 'Scalable Bandwidth'
  }, {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
        children: "0"
      }), " No Team Account"]
    })
  }, {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
        children: "3"
      }), " Projects"]
    })
  }, {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
        children: "299"
      }), " Customers"]
    })
  }, {
    label: 'Scalable Bandwidth'
  }, {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
        children: "0"
      }), " No Team Account"]
    })
  }]
}];
var HorizontalPricing = function HorizontalPricing() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h5", {
      className: "mt-2 mb-4 underline text-lg font-semibold text-default-700",
      children: "Horizontal Pricing"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "grid lg:grid-cols-2 gap-5",
      children: plans.map(function (plan) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "card",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "card-body",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h5", {
              className: "text-lg mb-2 font-semibold text-default-800",
              children: plan.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "grid lg:grid-cols-3 gap-5",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "lg:col-span-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                  className: "relative before:content-[''] before:absolute before:border-b before:border-default-200 before:bottom-2 before:start-0 before:end-0",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                    className: "pe-2 bg-card relative text-default-500 text-sm",
                    children: "Everything Includes"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "grid md:grid-cols-2 md:gap-5",
                  children: [0, 1].map(function (col) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
                        className: "mt-5 flex flex-col gap-3 text-sm",
                        children: plan.features.slice(col * Math.ceil(plan.features.length / 2), (col + 1) * Math.ceil(plan.features.length / 2)).map(function (feature, i) {
                          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                            className: "flex items-center gap-2",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuSquareCheck, {
                              className: "size-4 text-success"
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                              className: "text-default-900",
                              children: feature.label
                            })]
                          }, i);
                        })
                      })
                    }, col);
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "lg:col-span-1",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "p-5 rounded-lg ".concat(plan.color.split(' ')[0]),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                      className: "text-sm mb-4 ".concat(plan.color.split(' ')[1]),
                      children: plan.period
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
                      className: "text-2xl font-bold mb-4 text-default-800",
                      children: ["$", plan.price]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
                      type: "button",
                      className: "py-1.5 px-4 w-full rounded-md ".concat(plan.buttonColor),
                      children: "Buy Now"
                    })]
                  })
                })
              })]
            })]
          })
        }, plan.id);
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HorizontalPricing);

/***/ }),

/***/ "./resources/js/App/(admin)/(pages)/pricing/components/PricingCard.jsx":
/*!*****************************************************************************!*\
  !*** ./resources/js/App/(admin)/(pages)/pricing/components/PricingCard.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var pricingPlans = [{
  id: 1,
  title: 'Lite',
  description: 'Perfect plan for Lite',
  price: '9.99',
  period: '/Monthly',
  icon: react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuGoal,
  iconColor: 'text-success',
  buttonText: 'Purchase Now',
  features: [{
    name: '<b>3</b> Projects',
    included: true
  }, {
    name: '<b>299 </b>Customers',
    included: true
  }, {
    name: 'Scalable Bandwidth',
    included: true
  }, {
    name: 'No Team Account',
    included: true
  }, {
    name: 'In app messaging',
    included: false
  }, {
    name: '5 FTP Login',
    included: false
  }, {
    name: 'Detailed Analytics',
    included: false
  }, {
    name: 'Custom Domain',
    included: false
  }, {
    name: 'Smart Workflow',
    included: false
  }, {
    name: 'IQ test',
    included: false
  }]
}, {
  id: 2,
  title: 'Professional',
  description: 'For users who want to do more.',
  price: '29.99',
  period: '/Monthly',
  icon: react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuGraduationCap,
  iconColor: 'text-secondary',
  buttonText: 'Purchase Now',
  features: [{
    name: '<b>3</b> Projects',
    included: true
  }, {
    name: '<b>299</b> Customers',
    included: true
  }, {
    name: 'Scalable Bandwidth',
    included: true
  }, {
    name: '<b>3</b> No Team Account',
    included: true
  }, {
    name: 'In app messaging',
    included: true
  }, {
    name: '5 FTP Login',
    included: false
  }, {
    name: 'Detailed Analytics',
    included: false
  }, {
    name: 'Custom Domain',
    included: false
  }, {
    name: 'Smart Workflow',
    included: false
  }, {
    name: 'IQ test',
    included: false
  }]
}, {
  id: 3,
  title: 'Enterprise',
  description: 'Run your company on your teams',
  price: '39.99',
  period: '/Monthly',
  icon: react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuCrown,
  iconColor: 'text-primary',
  buttonText: 'Purchase Now',
  highlight: '25% Sale',
  features: [{
    name: '<b>3</b> Projects',
    included: true
  }, {
    name: '<b>299</b> Customers',
    included: true
  }, {
    name: 'Scalable Bandwidth',
    included: true
  }, {
    name: '<b>3</b> No Team Account',
    included: true
  }, {
    name: 'In app messaging',
    included: true
  }, {
    name: '5 FTP Login',
    included: true
  }, {
    name: 'Detailed Analytics',
    included: true
  }, {
    name: 'Custom Domain',
    included: false
  }, {
    name: 'Smart Workflow',
    included: false
  }, {
    name: 'IQ test',
    included: false
  }]
}, {
  id: 4,
  title: 'Unlimited',
  description: 'Your entire team in one place',
  price: '49.99',
  period: '/Monthly',
  icon: react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuLuggage,
  iconColor: 'text-danger',
  buttonText: 'Purchase Now',
  features: [{
    name: '<b>3</b> Projects',
    included: true
  }, {
    name: '<b>299</b> Customers',
    included: true
  }, {
    name: 'Scalable Bandwidth',
    included: true
  }, {
    name: '<b>3</b> No Team Account',
    included: true
  }, {
    name: 'In app messaging',
    included: true
  }, {
    name: '5 FTP Login',
    included: true
  }, {
    name: 'Detailed Analytics',
    included: true
  }, {
    name: 'Custom Domain',
    included: true
  }, {
    name: 'Smart Workflow',
    included: true
  }, {
    name: 'IQ test',
    included: true
  }]
}];
var Pricing = function Pricing() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "grid lg:grid-cols-4 md:grid-cols-2 gap-5 mb-6",
    children: pricingPlans.map(function (plan) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "card relative overflow-hidden",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "card-body",
          children: [plan.highlight && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "size-16 absolute top-0 end-0",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "absolute bg-primary text-center w-42.5 text-white py-1 transform rotate-45 top-6 -end-12 font-semibold",
              children: plan.highlight
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h5", {
            className: "mb-2 flex items-center gap-1.5",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(plan.icon, {
              className: "".concat(plan.iconColor, " size-5")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "text-lg font-semibold text-default-800",
              children: plan.title
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "mb-4 text-default-500",
            children: plan.description
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h1", {
            className: "mb-4 text-4xl text-default-800 font-normal",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "text-default-400",
              children: "$"
            }), plan.price, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("small", {
              className: "text-base text-default-500",
              children: plan.period
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            type: "button",
            className: "btn border w-full border-dashed border-primary bg-transparent text-primary hover:bg-primary/20",
            children: plan.buttonText
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
            className: "mt-5 flex flex-col gap-3 text-sm",
            children: plan.features.map(function (feature, i) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                className: "flex items-center gap-2.5",
                children: [feature.included ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuCheckCheck, {
                  className: "size-4 text-success"
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuX, {
                  className: "size-4 text-danger"
                }), feature.included ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: feature.included ? 'text-default-900' : 'text-default-500',
                  dangerouslySetInnerHTML: {
                    __html: feature.name
                  }
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("del", {
                  className: "text-default-500",
                  children: feature.name
                })]
              }, i);
            })
          })]
        })
      }, plan.id);
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pricing);

/***/ }),

/***/ "./resources/js/App/(admin)/(pages)/pricing/index.jsx":
/*!************************************************************!*\
  !*** ./resources/js/App/(admin)/(pages)/pricing/index.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageBreadcrumb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_HorizontalPricing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/HorizontalPricing */ "./resources/js/App/(admin)/(pages)/pricing/components/HorizontalPricing.jsx");
/* harmony import */ var _components_PricingCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/PricingCard */ "./resources/js/App/(admin)/(pages)/pricing/components/PricingCard.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var Index = function Index() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      title: "Pricing"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("main", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageBreadcrumb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        title: "Pricing",
        subtitle: "Pages"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_PricingCard__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_HorizontalPricing__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ })

}]);