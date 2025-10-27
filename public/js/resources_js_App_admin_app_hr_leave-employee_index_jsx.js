"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_App_admin_app_hr_leave-employee_index_jsx"],{

/***/ "./resources/js/App/(admin)/(app)/(hr)/leave-employee/components/EmpLeave.jsx":
/*!************************************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(hr)/leave-employee/components/EmpLeave.jsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var leavesData = [{
  id: 1,
  leaveType: 'Medical Leave',
  reason: 'Going to Hospital',
  days: 2,
  from: '11 Oct, 2023',
  to: '12 Oct, 2023',
  approvedBy: 'Paula Keenan',
  status: 'Approved'
}, {
  id: 2,
  leaveType: 'Casual Leave',
  reason: 'Going to Family Function',
  days: 1,
  from: '07 Sept, 2023',
  to: '07 Sept, 2023',
  approvedBy: 'Admin',
  status: 'Pending'
}, {
  id: 3,
  leaveType: 'Casual Leave',
  reason: 'Going to Holiday',
  days: 6,
  from: '11 Jun, 2023',
  to: '16 Jun, 2023',
  approvedBy: 'Admin',
  status: 'Declined'
}, {
  id: 4,
  leaveType: 'Sick Leave',
  reason: 'Attend Birthday party',
  days: 1,
  from: '15 July, 2023',
  to: '15 July, 2023',
  approvedBy: 'Paula Keenan',
  status: 'Approved'
}, {
  id: 5,
  leaveType: 'Sick Leave',
  reason: 'Personal',
  days: 2,
  from: '19 Aug, 2023',
  to: '20 Aug, 2023',
  approvedBy: 'Paula Keenan',
  status: 'Declined'
}, {
  id: 6,
  leaveType: 'Casual Leave',
  reason: 'Going to Family Function',
  days: 1,
  from: '14 Feb, 2022',
  to: '14 Feb, 2022',
  approvedBy: 'Admin',
  status: 'Approved'
}, {
  id: 7,
  leaveType: 'Medical Leave',
  reason: 'Medical Emergency',
  days: 4,
  from: '23 Jan, 2023',
  to: '26 Jan, 2023',
  approvedBy: 'Paula Keenan',
  status: 'Pending'
}, {
  id: 8,
  leaveType: 'Casual Leave',
  reason: 'Personal',
  days: 2,
  from: '16 Dec, 2023',
  to: '17 Dec, 2023',
  approvedBy: 'Paula Keenan',
  status: 'Declined'
}, {
  id: 9,
  leaveType: 'Casual Leave',
  reason: 'Going to Holiday',
  days: 5,
  from: '29 Nov, 2023',
  to: '03 Dec, 2023',
  approvedBy: 'Admin',
  status: 'Approved'
}, {
  id: 10,
  leaveType: 'Sick Leave',
  reason: 'Going to Hospital',
  days: 1,
  from: '15 Oct, 2023',
  to: '15 Oct, 2023',
  approvedBy: 'Paula Keenan',
  status: 'Approved'
}];
var statusClass = {
  Approved: 'inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-success/15 text-success',
  Pending: 'inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-warning/15 text-warning',
  Declined: 'inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-danger/10 text-danger'
};
var EmpLeave = function EmpLeave() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "grid grid-cols-1 gap-5 mb-5",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "card-header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "relative",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            type: "email",
            className: "ps-11 form-input form-input-sm",
            placeholder: "Search for...."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "absolute inset-y-0 start-0 flex items-center ps-3",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuSearch, {
              className: "size-4 flex items-center text-default-500"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
          className: "btn btn-sm bg-primary text-white",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuDownload, {
            className: "size-3.5 me-1"
          }), " Export"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "overflow-x-auto",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "min-w-full inline-block align-middle",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "overflow-hidden",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("table", {
                className: "min-w-full divide-y divide-default-200",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("thead", {
                  className: "bg-default-150",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
                    className: "text-sm font-normal whitespace-nowrap text-default-500",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                      className: "px-3.5 py-3 text-start",
                      children: "#"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                      className: "px-3.5 py-3 text-start",
                      children: "Leave Type"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                      className: "px-3.5 py-3 text-start",
                      children: "Reason"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                      className: "px-3.5 py-3 text-start",
                      children: "No Of Days"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                      className: "px-3.5 py-3 text-start",
                      children: "From"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                      className: "px-3.5 py-3 text-start",
                      children: "To"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                      className: "px-3.5 py-3 text-start",
                      children: "Approved By"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                      className: "px-3.5 py-3 text-start",
                      children: "Status"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                      className: "px-3.5 py-3 text-end",
                      children: "Action"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody", {
                  className: "divide-y divide-default-200",
                  children: leavesData.map(function (leave) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
                      className: "text-default-800 font-normal whitespace-nowrap",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                        className: "px-3.5 py-2.5 text-sm",
                        children: String(leave.id).padStart(2, '0')
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                        className: "px-3.5 py-2.5 text-sm",
                        children: leave.leaveType
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                        className: "px-3.5 py-2.5 text-sm",
                        children: leave.reason
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                        className: "px-3.5 py-2.5 text-sm",
                        children: leave.days
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                        className: "px-3.5 py-2.5 text-sm",
                        children: leave.from
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                        className: "px-3.5 py-2.5 text-sm",
                        children: leave.to
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                        className: "px-3.5 py-2.5 text-sm",
                        children: leave.approvedBy
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                        className: "px-3.5 py-2.5",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                          className: statusClass[leave.status],
                          children: leave.status
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("td", {
                        className: "px-3.5 py-2.5 flex items-center justify-end gap-2",
                        children: [leave.status === 'Pending' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_0__.Link, {
                          to: "#",
                          className: "btn size-8 bg-default-200 hover:bg-default-600 hover:text-white transition-all text-default-600",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuPencil, {
                            className: "size-4"
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_0__.Link, {
                          to: "#",
                          className: "btn size-8 bg-primary/20 hover:bg-primary text-primary hover:text-white",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuInfo, {
                            className: "size-4"
                          })
                        })]
                      })]
                    }, leave.id);
                  })
                })]
              })
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "card-footer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
            className: "text-default-500 text-sm",
            children: ["Showing ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
              children: leavesData.length
            }), " of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
              children: "17"
            }), " Results"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("nav", {
            className: "flex items-center gap-2",
            "aria-label": "Pagination",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
              type: "button",
              className: "btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuChevronLeft, {
                className: "size-4 me-1"
              }), " Prev"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
              type: "button",
              className: "btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10",
              children: "1"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
              type: "button",
              className: "btn size-7.5 bg-primary text-white",
              children: "2"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
              type: "button",
              className: "btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10",
              children: "3"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
              type: "button",
              className: "btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10",
              children: ["Next ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuChevronRight, {
                className: "size-4 ms-1"
              })]
            })]
          })]
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmpLeave);

/***/ }),

/***/ "./resources/js/App/(admin)/(app)/(hr)/leave-employee/components/LeaveCard.jsx":
/*!*************************************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(hr)/leave-employee/components/LeaveCard.jsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var leaveData = [{
  id: 1,
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuFileChartColumn, {
    size: 24
  }),
  count: 23,
  label: 'Total Leave Balance',
  colorClass: 'text-danger bg-danger/10'
}, {
  id: 2,
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuStethoscope, {
    size: 24
  }),
  count: 4,
  label: 'Medical Leave',
  colorClass: 'text-secondary bg-secondary/10'
}, {
  id: 3,
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuCalendarDays, {
    size: 24
  }),
  count: 12,
  label: 'Annual Leave',
  colorClass: 'text-success bg-success/10'
}, {
  id: 4,
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuAnchor, {
    size: 24
  }),
  count: 11,
  label: 'Remaining Leave',
  colorClass: 'text-info bg-info/10'
}];
var LeaveCard = function LeaveCard() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mb-5",
    children: leaveData.map(function (leave) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "card",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "card-body",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex items-center gap-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "btn ".concat(leave.colorClass, " size-12 flex items-center justify-center"),
              children: leave.icon
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h5", {
                className: "mb-1 text-base text-heading font-semibold",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "counter-value",
                  children: leave.count
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                className: "text-default-500",
                children: leave.label
              })]
            })]
          })
        })
      }, leave.id);
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeaveCard);

/***/ }),

/***/ "./resources/js/App/(admin)/(app)/(hr)/leave-employee/index.jsx":
/*!**********************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(hr)/leave-employee/index.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageBreadcrumb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_EmpLeave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/EmpLeave */ "./resources/js/App/(admin)/(app)/(hr)/leave-employee/components/EmpLeave.jsx");
/* harmony import */ var _components_LeaveCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/LeaveCard */ "./resources/js/App/(admin)/(app)/(hr)/leave-employee/components/LeaveCard.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var Index = function Index() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      title: "Leave Manage (Employee)"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("main", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageBreadcrumb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        title: "Leave Manage (Employee)",
        subtitle: "Menu"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_LeaveCard__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_EmpLeave__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ })

}]);