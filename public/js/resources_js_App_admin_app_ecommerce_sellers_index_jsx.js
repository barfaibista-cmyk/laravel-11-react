"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_App_admin_app_ecommerce_sellers_index_jsx"],{

/***/ "./resources/js/App/(admin)/(app)/(ecommerce)/sellers/components/Modal.jsx":
/*!*********************************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(ecommerce)/sellers/components/Modal.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var Modal = function Modal() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    id: "ecommerce-sellers-add",
    className: "hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none",
    role: "dialog",
    tabIndex: -1,
    "aria-labelledby": "ecommerce-sellers-add-label",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "w-full flex flex-col card border border-default-200 shadow-2xs rounded-xl pointer-events-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "card-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            id: "ecommerce-sellers-add-label",
            className: "font-semibold text-base text-default-800",
            children: "Add Seller"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
            type: "button",
            className: "size-5 text-default-800",
            "aria-label": "Close",
            "data-hs-overlay": "#ecommerce-sellers-add",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "sr-only",
              children: "Close"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuX, {
              className: "size-5"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "card-body overflow-y-auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
              htmlFor: "",
              className: "inline-block mb-2 text-sm text-default-800 font-medium",
              children: "Company Logo"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "flex items-center justify-center bg-transparent border border-dashed rounded-md cursor-pointer dropzone border-default-300 dropzone2",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "w-full py-5 text-lg text-center dz-message needsclick",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "mb-3 flex justify-center",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuCloudUpload, {
                    className: "size-12 fill-default-200 text-default-500"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h5", {
                  className: "mb-0 font-normal text-[15px] text-default-500",
                  children: ["Drag and drop your files or ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
                    to: "#",
                    children: "browse"
                  }), " your files"]
                })]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
              htmlFor: "",
              className: "inline-block mb-2 text-sm text-default-800 font-medium",
              children: "Company Name"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
              id: "",
              type: "text",
              className: "form-input",
              placeholder: "Seller name"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
              htmlFor: "",
              className: "inline-block mb-2 text-sm text-default-800 font-medium",
              children: "Owner Name"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
              id: "",
              type: "text",
              className: "form-input",
              placeholder: "Owner Name"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "mt-4 flex gap-2 md:justify-end",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
              className: "btn border-0 text-danger bg-transparent transition-all duration-300 hover:bg-danger/10",
              "aria-label": "Close",
              "data-hs-overlay": "#ecommerce-sellers-add",
              children: "Cancel"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
              className: "btn bg-primary text-white",
              children: "Add Seller"
            })]
          })]
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./resources/js/App/(admin)/(app)/(ecommerce)/sellers/components/Sallers.jsx":
/*!***********************************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(ecommerce)/sellers/components/Sallers.jsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/client-wrapper/IconifyIcon'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var sellers = [{
  name: 'Themesdesign',
  owner: 'Paula Keenan',
  sales: '4.5k',
  products: 310,
  revenue: '$235.3k',
  heartColor: 'warning',
  iconifyIcon: 'logos:google-adwords'
}, {
  name: 'Nazox Fashion',
  owner: 'Kara Miller',
  sales: '2.3k',
  products: 67,
  revenue: '$235.3k',
  heartColor: 'warning',
  iconifyIcon: 'logos:apple-app-store'
}, {
  name: '4xM Infotech',
  owner: 'Daniel Miller',
  sales: '7.1k',
  products: 138,
  revenue: '$465.9k',
  heartColor: 'default',
  iconifyIcon: 'logos:google-gmail'
}, {
  name: 'Extra Fashion',
  owner: 'Mark Walton',
  sales: '1.9k',
  products: 49,
  revenue: '$198.3k',
  heartColor: 'warning',
  iconifyIcon: 'logos:android'
}, {
  name: 'Nesta Technologies',
  owner: 'William Heineman',
  sales: '4.8k',
  products: 172,
  revenue: '$746.1k',
  heartColor: 'default',
  iconifyIcon: 'logos:figma'
}, {
  name: 'Digitech Galaxy',
  owner: 'David Biggs',
  sales: '9.2k',
  products: 674,
  revenue: '$14.4m',
  heartColor: 'default',
  iconifyIcon: 'logos:meta'
}, {
  name: 'Zoetic Fashion',
  owner: 'Jaqueline Hammes',
  sales: '1.8k',
  products: 112,
  revenue: '$132.4k',
  heartColor: 'default',
  iconifyIcon: 'logos:google'
}, {
  name: 'Force Medicines',
  owner: 'Ashley Uilson',
  sales: '4.1k',
  products: 243,
  revenue: '$861.7k',
  heartColor: 'default',
  iconifyIcon: 'logos:telegram'
}];
var Sallers = function Sallers() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5",
    children: sellers.map(function (seller, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "card",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "card-body",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "flex justify-between gap-5 items-center mb-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuHeart, {
              className: "size-5 ".concat(seller.heartColor === 'warning' ? 'text-warning fill-warning/10' : 'text-default-500 fill-default-100')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "hs-dropdown relative inline-flex",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                type: "button",
                className: "hs-dropdown-toggle btn size-7.5 bg-default-200 hover:bg-default-600 text-default-500 hover:text-white",
                "aria-haspopup": "menu",
                "aria-expanded": "false",
                "aria-label": "Dropdown",
                "hs-dropdown-placement": "bottom-end",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuEllipsis, {
                  className: "size-4"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "hs-dropdown-menu",
                role: "menu",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
                  className: "flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded",
                  to: "#",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuEye, {
                    className: "size-3"
                  }), "Overview"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
                  className: "flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded",
                  to: "#",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuSquarePen, {
                    className: "size-3"
                  }), "Edit"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
                  className: "flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded",
                  to: "#",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuTrash2, {
                    className: "size-3"
                  }), "Delete"]
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "flex items-center justify-center mx-auto rounded-full size-16 bg-default-100 outline outline-default-100 outline-offset-4",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/client-wrapper/IconifyIcon'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              icon: seller.iconifyIcon,
              width: "40",
              height: "40"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "mt-4 mb-6 text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h6", {
              className: "text-base text-default-800 font-semibold",
              children: seller.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-default-500 text-sm",
              children: seller.owner
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "grid grid-cols-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "text-center p-2 text-sm",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h6", {
                className: "mb-1 text-default-800 font-semibold",
                children: seller.sales
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "text-default-500",
                children: "Sales"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "text-center p-2 border-e border-s border-dashed border-default-200 text-sm",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h6", {
                className: "mb-1 text-default-800 font-semibold",
                children: seller.products
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "text-default-500",
                children: "Product"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "text-center p-2 text-sm",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h6", {
                className: "mb-1 text-default-800 font-semibold",
                children: seller.revenue
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "text-default-500",
                children: "Revenue"
              })]
            })]
          })]
        })
      }, index);
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sallers);

/***/ }),

/***/ "./resources/js/App/(admin)/(app)/(ecommerce)/sellers/index.jsx":
/*!**********************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(ecommerce)/sellers/index.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageBreadcrumb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Modal */ "./resources/js/App/(admin)/(app)/(ecommerce)/sellers/components/Modal.jsx");
/* harmony import */ var _components_Sallers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Sallers */ "./resources/js/App/(admin)/(app)/(ecommerce)/sellers/components/Sallers.jsx");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var Index = function Index() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      title: "Sellers"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("main", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageBreadcrumb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        title: "Sellers",
        subtitle: "Menu"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "flex justify-between gap-3 flex-wrap items-center mb-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "relative",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
            type: "email",
            className: "ps-11 form-input",
            placeholder: "Search for..."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "absolute inset-y-0 start-0 flex items-center ps-3",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuSearch, {
              className: "size-4 flex items-center text-default-500"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
          type: "button",
          className: "btn  bg-primary text-white",
          "aria-haspopup": "dialog",
          "aria-expanded": "false",
          "aria-controls": "ecommerce-sellers-add",
          "data-hs-overlay": "#ecommerce-sellers-add",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuPlus, {
            className: "size-4 ms-1"
          }), "Add Seller"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Sallers__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "flex flex-wrap justify-center md:justify-between items-center md:gap-0 gap-4 mt-5 text-default-500",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
          className: "text-default-500 text-sm",
          children: ["Showing ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
            children: "12"
          }), " of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
            children: "44"
          }), " Results"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("nav", {
          className: "flex items-center gap-2",
          "aria-label": "Pagination",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
            type: "button",
            className: "btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuChevronLeft, {
              className: "size-4 me-1"
            }), " Prev"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            type: "button",
            className: "btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10",
            children: "1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            type: "button",
            className: "btn size-7.5 bg-primary text-white",
            children: "2"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            type: "button",
            className: "btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10",
            children: "3"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
            type: "button",
            className: "btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10",
            children: ["Next", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuChevronLeft, {
              className: "size-4 ms-1"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ })

}]);