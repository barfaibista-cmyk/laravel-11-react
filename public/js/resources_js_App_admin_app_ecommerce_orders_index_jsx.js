"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_App_admin_app_ecommerce_orders_index_jsx"],{

/***/ "./resources/js/App/(admin)/(app)/(ecommerce)/orders/components/OrderDetailTabel.jsx":
/*!*******************************************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(ecommerce)/orders/components/OrderDetailTabel.jsx ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var orders = [{
  id: '#TWT5015100365',
  orderDate: '08 Jun, 2023',
  deliveryDate: '15 Jun, 2023',
  customerName: 'Marie Prohaska',
  paymentMethod: 'Credit Card',
  amount: '$541.32',
  status: 'Delivered'
}, {
  id: '#TWT5015100366',
  orderDate: '11 July, 2023',
  deliveryDate: '20 July, 2023',
  customerName: 'Jaqueline Hammes',
  paymentMethod: 'Paypal',
  amount: '$1,876.33',
  status: 'Shipping'
}, {
  id: '#TWT5015100367',
  orderDate: '21 Aug, 2023',
  deliveryDate: '24 Aug, 2023',
  customerName: 'Marlene Hirthe',
  paymentMethod: 'Visa Card',
  amount: '$15,023.99',
  status: 'New'
}, {
  id: '#TWT5015100368',
  orderDate: '28 Nov, 2023',
  deliveryDate: '02 Dec, 2023',
  customerName: 'Reagan Larson',
  paymentMethod: 'American Express',
  amount: '$783.56',
  status: 'Delivered'
}, {
  id: '#TWT5015100369',
  orderDate: '11 Oct, 2023',
  deliveryDate: '16 Oct, 2023',
  customerName: 'Glennie Langosh',
  paymentMethod: 'American Express',
  amount: '$986.49',
  status: 'Pending'
}, {
  id: '#TWT5015100370',
  orderDate: '16 Feb, 2023',
  deliveryDate: '22 Feb, 2023',
  customerName: 'Rickie Cremin',
  paymentMethod: 'COD',
  amount: '$741.32',
  status: 'Delivered'
}, {
  id: '#TWT5015100371',
  orderDate: '18 Apr, 2023',
  deliveryDate: '29 Apr, 2023',
  customerName: 'Domenic Tromp',
  paymentMethod: 'Credit Card',
  amount: '$1,386.49',
  status: 'Shipping'
}, {
  id: '#TWT5015100372',
  orderDate: '21 Jan, 2024',
  deliveryDate: '24 Jan, 2023',
  customerName: 'Akeem Paucek',
  paymentMethod: 'PayPal',
  amount: '$3,487.21',
  status: 'New'
}, {
  id: '#TWT5015100373',
  orderDate: '05 Oct, 2024',
  deliveryDate: '11 Oct, 2023',
  customerName: 'David Gaby',
  paymentMethod: 'COD',
  amount: '$5,986.11',
  status: 'Return'
}, {
  id: '#TWT5015100374',
  orderDate: '07 Oct, 2024',
  deliveryDate: '13 Oct, 2023',
  customerName: 'Joel Freeleagus',
  paymentMethod: 'American Express',
  amount: '$9,451.75',
  status: 'Cancelled'
}];
var statusClasses = {
  Delivered: 'bg-success/10 text-success border border-success/30',
  Shipping: 'bg-secondary/10 text-secondary border border-secondary/30',
  New: 'bg-info/10 text-info border border-info/30',
  Pending: 'bg-warning/10 text-warning border border-warning/30',
  Return: 'bg-default-100 text-default-800/80 border border-default-800/20',
  Cancelled: 'bg-danger/10 text-danger border border-danger/30'
};
var OrderDetailTable = function OrderDetailTable() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "card",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "card-header flex justify-between items-center gap-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "relative",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
          type: "email",
          className: "form-input form-input-sm ps-9",
          placeholder: "Search for...."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "absolute inset-y-0 start-0 flex items-center ps-3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuSearch, {
            className: "size-3.5 flex items-center text-default-500"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
        className: "btn btn-sm bg-primary text-white flex items-center gap-1",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuPlus, {
          className: "size-4"
        }), " Add Product"]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "card-header",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex items-center flex-wrap gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
          className: "btn btn-sm bg-primary text-white font-medium flex items-center gap-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuBoxes, {
            className: "size-4"
          }), " All Orders"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
          className: "btn btn-sm text-default-500 hover:text-primary border-0 bg-transparent flex items-center gap-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuLoader, {
            className: "size-4"
          }), " Pending"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
          className: "btn btn-sm text-default-500 hover:text-primary border-0 bg-transparent flex items-center gap-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuPackageCheck, {
            className: "size-4"
          }), " Delivered"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
          className: "btn btn-sm text-default-500 hover:text-primary border-0 bg-transparent flex items-center gap-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuRefreshCw, {
            className: "size-4"
          }), " Returns"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
          className: "btn btn-sm text-default-500 hover:text-primary border-0 bg-transparent flex items-center gap-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuPackageX, {
            className: "size-4"
          }), " Cancelled"]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "flex flex-col overflow-x-auto",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "min-w-full inline-block align-middle",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "overflow-hidden",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("table", {
            className: "min-w-full divide-y divide-default-200",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("thead", {
              className: "bg-default-150",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
                className: "text-sm font-normal text-default-500 whitespace-nowrap",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                  className: "ps-4 text-start",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
                    type: "checkbox",
                    className: "form-checkbox"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                  className: "px-3.5 py-3 text-start",
                  children: "Order ID"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                  className: "px-3.5 py-3 text-start",
                  children: "Order Date"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                  className: "px-3.5 py-3 text-start",
                  children: "Delivery Date"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                  className: "px-3.5 py-3 text-start",
                  children: "Customer Name"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                  className: "px-3.5 py-3 text-start",
                  children: "Payment Method"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                  className: "px-3.5 py-3 text-start",
                  children: "Amount"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                  className: "px-3.5 py-3 text-start",
                  children: "Delivery Status"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                  className: "px-3.5 py-3 text-start",
                  children: "Action"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody", {
              className: "divide-y divide-default-200",
              children: orders.map(function (order, idx) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
                  className: "text-default-800 font-normal",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                    className: "py-2.5 ps-4",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
                      type: "checkbox",
                      className: "form-checkbox"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                    className: "px-3.5 py-2.5 whitespace-nowrap text-sm text-primary",
                    children: order.id
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                    className: "px-3.5 py-2.5 whitespace-nowrap text-sm",
                    children: order.orderDate
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                    className: "px-3.5 py-2.5 whitespace-nowrap text-sm",
                    children: order.deliveryDate
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                    className: "px-3.5 py-2.5 whitespace-nowrap text-sm",
                    children: order.customerName
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                    className: "px-3.5 py-2.5 whitespace-nowrap text-sm",
                    children: order.paymentMethod
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                    className: "px-3.5 py-2.5 whitespace-nowrap text-sm",
                    children: order.amount
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                    className: "px-3.5 py-2.5 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                      className: "inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium ".concat(statusClasses[order.status]),
                      children: order.status
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                    className: "px-3.5 py-2.5",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                      className: "hs-dropdown relative inline-flex",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
                        className: "hs-dropdown-toggle btn size-7.5 bg-default-200 hover:bg-default-600 text-default-500 hover:text-white",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuEllipsis, {
                          className: "size-4"
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                        className: "hs-dropdown-menu",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
                          to: "",
                          className: "flex items-center gap-1.5 py-1.5 px-3 font-medium text-default-500 hover:bg-default-150 rounded",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuEye, {
                            className: "size-3"
                          }), " Overview"]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
                          to: "",
                          className: "flex items-center gap-1.5 py-1.5 px-3 font-medium text-default-500 hover:bg-default-150 rounded",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuSquarePen, {
                            className: "size-3"
                          }), " Edit"]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
                          to: "",
                          className: "flex items-center gap-1.5 py-1.5 px-3 font-medium text-default-500 hover:bg-default-150 rounded",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuTrash2, {
                            className: "size-3"
                          }), " Delete"]
                        })]
                      })]
                    })
                  })]
                }, idx);
              })
            })]
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "card-footer flex justify-between items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
        className: "text-default-500 text-sm",
        children: ["Showing ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
          children: orders.length
        }), " of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
          children: "19"
        }), " Results"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("nav", {
        className: "flex items-center gap-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
          className: "btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuChevronLeft, {
            className: "size-4 me-1"
          }), " Prev"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          className: "btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10",
          children: "1"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          className: "btn size-7.5 bg-primary text-white",
          children: "2"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          className: "btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10",
          children: "3"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
          className: "btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10",
          children: ["Next ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuChevronRight, {
            className: "size-4 ms-1"
          })]
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderDetailTable);

/***/ }),

/***/ "./resources/js/App/(admin)/(app)/(ecommerce)/orders/components/OrderDetails.jsx":
/*!***************************************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(ecommerce)/orders/components/OrderDetails.jsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var orderDetailsData = [{
  id: 1,
  count: '15,101',
  label: 'Total Orders',
  icon: react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuBoxes,
  bgColor: 'bg-primary/10',
  textColor: 'text-primary'
}, {
  id: 2,
  count: '9,543',
  label: 'Shipping Orders',
  icon: react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuTruck,
  bgColor: 'bg-secondary/10',
  textColor: 'text-secondary'
}, {
  id: 3,
  count: '1,548',
  label: 'Pending Orders',
  icon: react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuLoader,
  bgColor: 'bg-warning/15',
  textColor: 'text-warning'
}, {
  id: 4,
  count: '3,874',
  label: 'New Orders',
  icon: react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuPackagePlus,
  bgColor: 'bg-primary/10',
  textColor: 'text-primary'
}, {
  id: 5,
  count: '30,914',
  label: 'Delivered Orders',
  icon: react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuPackageCheck,
  bgColor: 'bg-success/10',
  textColor: 'text-success'
}, {
  id: 6,
  count: '3,863',
  label: 'Cancelled Orders',
  icon: react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuPackageX,
  bgColor: 'bg-danger/10',
  textColor: 'text-danger'
}];
var OrderDetails = function OrderDetails() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "col-span-1",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "grid md:grid-cols-2 grid-cols-1 gap-5",
      children: orderDetailsData.map(function (_ref) {
        var id = _ref.id,
          count = _ref.count,
          label = _ref.label,
          Icon = _ref.icon,
          bgColor = _ref.bgColor,
          textColor = _ref.textColor;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "card",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "card-body",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "flex items-center gap-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "btn size-12 text-15 ".concat(bgColor, " ").concat(textColor),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
                  className: "size-6"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h5", {
                  className: "mb-1 text-base font-semibold text-default-800",
                  "data-target": count,
                  children: count
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                  className: "text-default-500 text-sm",
                  children: label
                })]
              })]
            })
          })
        }, id);
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderDetails);

/***/ }),

/***/ "./resources/js/App/(admin)/(app)/(ecommerce)/orders/components/OrderOverView.jsx":
/*!****************************************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(ecommerce)/orders/components/OrderOverView.jsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/client-wrapper/ApexChartClient'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./resources/js/App/(admin)/(app)/(ecommerce)/orders/components/data.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var OrderOverView = function OrderOverView() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "lg:col-span-2 col-span-1",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "card-header",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h6", {
          className: "car-title",
          children: "Orders Overview"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "card-body",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/client-wrapper/ApexChartClient'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          getOptions: _data__WEBPACK_IMPORTED_MODULE_1__.getOrderOverViewChart,
          series: (0,_data__WEBPACK_IMPORTED_MODULE_1__.getOrderOverViewChart)().series,
          type: "bar",
          height: 190
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderOverView);

/***/ }),

/***/ "./resources/js/App/(admin)/(app)/(ecommerce)/orders/components/data.js":
/*!******************************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(ecommerce)/orders/components/data.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOrderOverViewChart: () => (/* binding */ getOrderOverViewChart)
/* harmony export */ });
var getOrderOverViewChart = function getOrderOverViewChart() {
  return {
    series: [{
      name: 'Orders',
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 3.4, 5.5, 8.8]
    }],
    chart: {
      height: 190,
      type: 'bar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        dataLabels: {
          position: 'top' // top, center, bottom
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function formatter(val) {
        return val + '%';
      },
      style: {
        fontSize: '12px'
      }
    },
    grid: {
      padding: {
        bottom: -10
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      position: 'top',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      tooltip: {
        enabled: true
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false,
        formatter: function formatter(val) {
          return val + '%';
        }
      }
    },
    colors: ['#2b7fff']
  };
};

/***/ }),

/***/ "./resources/js/App/(admin)/(app)/(ecommerce)/orders/index.jsx":
/*!*********************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(ecommerce)/orders/index.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageBreadcrumb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_OrderDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/OrderDetails */ "./resources/js/App/(admin)/(app)/(ecommerce)/orders/components/OrderDetails.jsx");
/* harmony import */ var _components_OrderDetailTabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/OrderDetailTabel */ "./resources/js/App/(admin)/(app)/(ecommerce)/orders/components/OrderDetailTabel.jsx");
/* harmony import */ var _components_OrderOverView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/OrderOverView */ "./resources/js/App/(admin)/(app)/(ecommerce)/orders/components/OrderOverView.jsx");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var Index = function Index() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      title: "Orders"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("main", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageBreadcrumb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        title: "Orders List",
        subtitle: "Orders"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_OrderDetails__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_OrderOverView__WEBPACK_IMPORTED_MODULE_3__["default"], {})]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_OrderDetailTabel__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ })

}]);