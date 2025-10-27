"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_App_admin_app_hr_leave_index_jsx"],{

/***/ "./resources/js/App/(admin)/(app)/(hr)/leave/components/LeaveCard.jsx":
/*!****************************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(hr)/leave/components/LeaveCard.jsx ***!
  \****************************************************************************/
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
  title: 'Today/Presents Leave',
  value: '18/60',
  description: 'Today/Presents Leave',
  icon: react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuFileChartColumn,
  textColor: 'text-primary',
  bgColor: 'bg-primary/10'
}, {
  id: 2,
  title: 'Today Leaves',
  value: '5',
  description: 'Today Leaves',
  icon: react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuCalendarCheck,
  textColor: 'text-success',
  bgColor: 'bg-success/10'
}, {
  id: 3,
  title: 'Unplanned Leaves',
  value: '0',
  description: 'Unplanned Leaves',
  icon: react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuCodepen,
  textColor: 'text-secondary',
  bgColor: 'bg-secondary/10'
}, {
  id: 4,
  title: 'Remaining Leave',
  value: '11',
  description: 'Remaining Leave',
  icon: react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuLoader,
  textColor: 'text-warning',
  bgColor: 'bg-warning/10'
}];
var LeaveCard = function LeaveCard() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mb-5",
    children: leaveData.map(function (_ref) {
      var id = _ref.id,
        value = _ref.value,
        description = _ref.description,
        Icon = _ref.icon,
        textColor = _ref.textColor,
        bgColor = _ref.bgColor;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "card",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "card-body",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex items-center gap-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "btn ".concat(textColor, " ").concat(bgColor, " size-12"),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {
                className: "size-6"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h5", {
                className: "mb-1 text-base text-heading font-semibold",
                children: value
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                className: "text-default-500",
                children: description
              })]
            })]
          })
        })
      }, id);
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeaveCard);

/***/ }),

/***/ "./resources/js/App/(admin)/(app)/(hr)/leave/components/LeaveTabel.jsx":
/*!*****************************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(hr)/leave/components/LeaveTabel.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var leaveData = [{
  id: 1,
  employeeName: 'Willie Torres',
  leaveType: 'Medical Leave',
  reason: 'Going to Hospital',
  noOfDays: 2,
  from: '11 Oct, 2023',
  to: '12 Oct, 2023',
  status: 'Approved'
}, {
  id: 2,
  employeeName: 'Patricia Garcia',
  leaveType: 'Casual Leave',
  reason: 'Going to Family Function',
  noOfDays: 1,
  from: '07 Sept, 2023',
  to: '07 Sept, 2023',
  status: 'Pending'
}, {
  id: 3,
  employeeName: 'Juliette Fecteau',
  leaveType: 'Casual Leave',
  reason: 'Going to Holiday',
  noOfDays: 6,
  from: '11 Jun, 2023',
  to: '16 Jun, 2023',
  status: 'New'
}, {
  id: 4,
  employeeName: 'Thomas Hatfield',
  leaveType: 'Sick Leave',
  reason: 'Attend Birthday party',
  noOfDays: 1,
  from: '15 July, 2023',
  to: '15 July, 2023',
  status: 'Approved'
}, {
  id: 5,
  employeeName: 'Sophie Turner',
  leaveType: 'Casual Leave',
  reason: 'Attending Wedding',
  noOfDays: 2,
  from: '05 Jun, 2023',
  to: '06 Jun, 2023',
  status: 'Declined'
}, {
  id: 6,
  employeeName: 'Willie Torres',
  leaveType: 'Medical Leave',
  reason: 'Going to Hospital',
  noOfDays: 2,
  from: '11 Oct, 2023',
  to: '12 Oct, 2023',
  status: 'Approved'
}, {
  id: 7,
  employeeName: 'Patricia Garcia',
  leaveType: 'Casual Leave',
  reason: 'Going to Family Function',
  noOfDays: 1,
  from: '07 Sept, 2023',
  to: '07 Sept, 2023',
  status: 'Pending'
}, {
  id: 8,
  employeeName: 'Juliette Fecteau',
  leaveType: 'Casual Leave',
  reason: 'Going to Holiday',
  noOfDays: 6,
  from: '11 Jun, 2023',
  to: '16 Jun, 2023',
  status: 'New'
}, {
  id: 9,
  employeeName: 'Thomas Hatfield',
  leaveType: 'Sick Leave',
  reason: 'Attend Birthday party',
  noOfDays: 1,
  from: '15 July, 2023',
  to: '15 July, 2023',
  status: 'Approved'
}, {
  id: 10,
  employeeName: 'Sophie Turner',
  leaveType: 'Casual Leave',
  reason: 'Attending Wedding',
  noOfDays: 2,
  from: '05 Jun, 2023',
  to: '06 Jun, 2023',
  status: 'Declined'
}];
var statusClasses = {
  Approved: 'bg-success/15 text-success',
  Pending: 'bg-warning/15 text-warning',
  Declined: 'bg-danger/10 text-danger',
  New: 'bg-secondary/10 text-secondary'
};
var LeaveTabel = function LeaveTabel() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "grid grid-cols-1 gap-5 mb-5",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "card-header flex justify-between items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "relative",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            type: "text",
            className: "form-input form-input-sm ps-9",
            placeholder: "Search for..."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "absolute inset-y-0 start-0 flex items-center ps-3",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuSearch, {
              className: "size-4 text-default-500"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
          className: "btn btn-sm bg-primary text-white flex items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuDownload, {
            className: "size-4 me-1"
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
                    className: "text-sm font-normal text-default-500 whitespace-nowrap",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                      className: "px-3.5 py-3 text-start",
                      children: "#"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                      className: "px-3.5 py-3 text-start",
                      children: "Employee Name"
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
                      children: "Status"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                      className: "px-3.5 py-3 text-start",
                      children: "Action"
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody", {
                  className: "divide-y divide-default-200",
                  children: leaveData.map(function (leave) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
                      className: "text-default-800 font-normal",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                        className: "px-3.5 py-2.5 whitespace-nowrap text-sm",
                        children: leave.id.toString().padStart(2, '0')
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                        className: "px-3.5 py-2.5 whitespace-nowrap text-sm",
                        children: leave.employeeName
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                        className: "px-3.5 py-2.5 whitespace-nowrap text-sm",
                        children: leave.leaveType
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                        className: "px-3.5 py-2.5 whitespace-nowrap text-sm",
                        children: leave.reason
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                        className: "px-3.5 py-2.5 whitespace-nowrap text-sm",
                        children: leave.noOfDays
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                        className: "px-3.5 py-2.5 whitespace-nowrap text-sm",
                        children: leave.from
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                        className: "px-3.5 py-2.5 whitespace-nowrap text-sm",
                        children: leave.to
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                        className: "px-3.5 py-2.5 whitespace-nowrap",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                          className: "inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium ".concat(statusClasses[leave.status]),
                          children: leave.status
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                        className: "px-3.5 py-2.5 whitespace-nowrap",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_0__.Link, {
                            to: "#",
                            className: "btn size-8 bg-default-200 hover:bg-default-600 hover:text-white text-default-600",
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuPencil, {
                              className: "size-4"
                            })
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_0__.Link, {
                            to: "#",
                            className: "btn size-8 bg-success/15 hover:bg-success hover:text-white text-success",
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuCheck, {
                              className: "size-4"
                            })
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_0__.Link, {
                            to: "#",
                            className: "btn size-8 bg-danger/10 hover:bg-danger hover:text-white text-danger",
                            "aria-haspopup": "dialog",
                            "aria-expanded": "false",
                            "aria-controls": "hr-leave-delete-modal",
                            "data-hs-overlay": "#hr-leave-delete-modal",
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuTrash2, {
                              className: "size-4"
                            })
                          })]
                        })
                      })]
                    }, leave.id);
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
              children: leaveData.length
            }), " of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
              children: "17"
            }), " Results"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("nav", {
            className: "flex items-center gap-2",
            "aria-label": "Pagination",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
              className: "btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuChevronLeft, {
                className: "size-4 me-1"
              }), " Prev"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
              className: "btn size-7.5 bg-primary text-white",
              children: "1"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
              className: "btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary",
              children: "2"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
              className: "btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeaveTabel);

/***/ }),

/***/ "./resources/js/App/(admin)/(app)/(hr)/leave/components/Modal.jsx":
/*!************************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(hr)/leave/components/Modal.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/delete.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var Modal = function Modal() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    id: "hr-leave-delete-modal",
    className: "hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none",
    role: "dialog",
    tabIndex: -1,
    "aria-labelledby": "hr-leave-delete-modal-label",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 md:w-sm m-3 mx-auto min-h-[calc(100%-56px)] flex items-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "w-full flex flex-col card shadow-2xs border border-default-200 rounded-xl pointer-events-auto px-6 py-8 relative",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "absolute top-3 end-3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
            type: "button",
            className: "size-5 text-default-800",
            "aria-label": "Close",
            "data-hs-overlay": "#hr-leave-delete-modal",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "sr-only",
              children: "Close"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuX, {
              className: "size-5"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h3", {
          className: "font-semibold text-base text-default-800  text-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
            src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/delete.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            alt: "",
            className: "size-12 mx-auto"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "mt-5 text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h5", {
              className: "mb-1 text-lg font-semibold text-default-800",
              children: "Are you sure?"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              className: "text-default-500 text-sm font-normal",
              children: "Are you certain you want to delete this record?"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "mt-5 flex gap-2 justify-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
                className: "btn btn-sm border-0  text-danger bg-transparent hover:bg-danger/10",
                "aria-label": "Close",
                children: "Cancel"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
                className: "btn bg-danger text-white",
                children: "Yes,Delete It!"
              })]
            })]
          })]
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./resources/js/App/(admin)/(app)/(hr)/leave/index.jsx":
/*!*************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(hr)/leave/index.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageBreadcrumb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_LeaveCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/LeaveCard */ "./resources/js/App/(admin)/(app)/(hr)/leave/components/LeaveCard.jsx");
/* harmony import */ var _components_LeaveTabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/LeaveTabel */ "./resources/js/App/(admin)/(app)/(hr)/leave/components/LeaveTabel.jsx");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Modal */ "./resources/js/App/(admin)/(app)/(hr)/leave/components/Modal.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var Index = function Index() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      title: "Leave Manage (HR)"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("main", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageBreadcrumb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        title: "Leave Manage (HR)",
        subtitle: "Menu"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_LeaveCard__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_LeaveTabel__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {})]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ })

}]);