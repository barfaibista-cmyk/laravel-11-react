"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_App_admin_app_hr_holidays_index_jsx"],{

/***/ "./resources/js/App/(admin)/(app)/(hr)/holidays/components/HolidaysLeaveDeleteModal.jsx":
/*!**********************************************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(hr)/holidays/components/HolidaysLeaveDeleteModal.jsx ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/delete.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var HolidaysLeaveDeleteModal = function HolidaysLeaveDeleteModal() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    id: "holidaysLeaveDeleteModal",
    className: "hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none",
    role: "dialog",
    tabIndex: -1,
    "aria-labelledby": "holidaysLeaveDeleteModal-label",
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
            "data-hs-overlay": "#holidaysLeaveDeleteModal",
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
                className: "btn text-danger bg-transparent hover:bg-danger/10",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HolidaysLeaveDeleteModal);

/***/ }),

/***/ "./resources/js/App/(admin)/(app)/(hr)/holidays/components/HoliyDays.jsx":
/*!*******************************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(hr)/holidays/components/HoliyDays.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var holidays = [{
  id: 1,
  day: 'Monday',
  date: '15 Jan',
  name: 'Makara Sankranti',
  type: 'Gazetted Holiday'
}, {
  id: 2,
  day: 'Friday',
  date: '26 Jan',
  name: 'Republic Day',
  type: 'Gazetted Holiday'
}, {
  id: 3,
  day: 'Monday',
  date: '25 Mar',
  name: 'Holi',
  type: 'Gazetted Holiday'
}, {
  id: 4,
  day: 'Friday',
  date: '29 Mar',
  name: 'Good Friday',
  type: 'Gazetted Holiday'
}, {
  id: 5,
  day: 'Sunday',
  date: '4 Aug',
  name: 'Friendship Day',
  type: 'Observance'
}, {
  id: 6,
  day: 'Thursday',
  date: '15 Aug',
  name: 'Independence Day',
  type: 'Gazetted Holiday'
}, {
  id: 7,
  day: 'Sunday',
  date: '15 Sep',
  name: 'Onam',
  type: 'Restricted Holiday'
}, {
  id: 8,
  day: 'Thursday',
  date: '31 Oct',
  name: 'Halloween',
  type: 'Observance'
}, {
  id: 9,
  day: 'Wednesday',
  date: '25 Dec',
  name: 'Christmas',
  type: 'Gazetted Holiday'
}, {
  id: 10,
  day: 'Tuesday',
  date: '31 Dec',
  name: 'New Year',
  type: 'Observance'
}];
var HoliyDays = function HoliyDays() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "card",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "card-header flex justify-between items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h6", {
        className: "text-default-800 text-base font-semibold",
        children: "Holidays 2024"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
        className: "btn btn-sm bg-primary text-white flex items-center gap-1",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuPlus, {
          size: 16
        }), " Add Holiday"]
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
                className: "font-normal whitespace-nowrap",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
                  className: "text-sm text-default-800 divide-x divide-default-200",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                    className: "px-3.5 py-3 font-medium text-start",
                    children: "#"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                    className: "px-3.5 py-3 font-medium text-start",
                    children: "Day"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                    className: "px-3.5 py-3 font-medium text-start",
                    children: "Date"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                    className: "px-3.5 py-3 font-medium text-start",
                    children: "Holiday Name"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                    className: "px-3.5 py-3 font-medium text-start",
                    children: "Type"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                    className: "px-3.5 py-3 font-medium text-start",
                    children: "Action"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody", {
                className: "divide-y divide-default-200",
                children: holidays.map(function (holiday) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
                    className: "text-default-800 font-normal whitespace-nowrap divide-x divide-default-200",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                      className: "px-3.5 py-3 text-sm",
                      children: holiday.id
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                      className: "px-3.5 py-3 text-sm",
                      children: holiday.day
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                      className: "px-3.5 py-3 text-sm",
                      children: holiday.date
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                      className: "px-3.5 py-3 text-sm",
                      children: holiday.name
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                      className: "px-3.5 py-3 text-sm",
                      children: holiday.type
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                      className: "px-3.5 py-3",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_0__.Link, {
                          to: "#",
                          className: "flex size-8  bg-default-200 rounded-md items-center justify-center hover:bg-primary/10 hover:text-primary transition-all text-default-600",
                          "aria-haspopup": "dialog",
                          "aria-expanded": "false",
                          "aria-controls": "holidaysLeaveDeleteModal2",
                          "data-hs-overlay": "#holidaysLeaveDeleteModal2",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuPencil, {
                            className: "size-4"
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_0__.Link, {
                          to: "#",
                          className: "flex size-8  bg-default-200 rounded-md items-center justify-center hover:bg-primary/10 hover:text-primary transition-all text-default-600",
                          "aria-haspopup": "dialog",
                          "aria-expanded": "false",
                          "aria-controls": "holidaysLeaveDeleteModal",
                          "data-hs-overlay": "#holidaysLeaveDeleteModal",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuTrash2, {
                            className: "size-4"
                          })
                        })]
                      })
                    })]
                  }, holiday.id);
                })
              })]
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "card-footer flex justify-between items-center mt-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
          className: "text-default-500 text-sm",
          children: ["Showing ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
            children: "1"
          }), " of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
            children: holidays.length
          }), " Results"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("nav", {
          className: "flex items-center gap-2",
          "aria-label": "Pagination",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
            className: "btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10 flex items-center gap-1",
            "aria-haspopup": "dialog",
            "aria-expanded": "false",
            "aria-controls": "holidaysLeaveDeleteModal2",
            "data-hs-overlay": "#holidaysLeaveDeleteModal2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuChevronLeft, {
              size: 16
            }), " Prev"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            className: "btn size-7.5 bg-primary text-white",
            children: "1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
            className: "btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10 flex items-center gap-1",
            "aria-haspopup": "dialog",
            "aria-expanded": "false",
            "aria-controls": "holidaysLeaveDeleteModal",
            "data-hs-overlay": "#holidaysLeaveDeleteModal",
            children: ["Next ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuChevronRight, {
              size: 16
            })]
          })]
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HoliyDays);

/***/ }),

/***/ "./resources/js/App/(admin)/(app)/(hr)/holidays/components/HoliydaysAdd.jsx":
/*!**********************************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(hr)/holidays/components/HoliydaysAdd.jsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var HoliydaysAdd = function HoliydaysAdd() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    id: "holidaysLeaveDeleteModal2",
    className: "hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none",
    role: "dialog",
    tabIndex: -1,
    "aria-labelledby": "holidaysLeaveDeleteModal-label2",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "w-full flex flex-col card border border-default-200 shadow-2xs rounded-xl pointer-events-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "card-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
            id: "holidaysLeaveDeleteModal-label2",
            className: "card-title",
            children: "Add Holiday"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
              type: "button",
              className: "size-5 text-default-800",
              "aria-label": "Close",
              "data-hs-overlay": "#holidaysLeaveDeleteModal2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "sr-only",
                children: "Close"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuX, {
                className: "size-5"
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "card-body",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "grid grid-cols-1 gap-4 lg:grid-cols-12",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "lg:col-span-12",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                htmlFor: "typeSelect",
                className: "inline-block mb-2 text-base font-medium",
                children: "Type"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("select", {
                id: "typeSelect",
                name: "typeSelect",
                className: "form-input",
                "data-choices": true,
                "data-choices-search-false": true,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
                  value: "Gazetted Holiday",
                  children: "Gazetted Holiday"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
                  value: "Observance",
                  children: "Observance"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
                  value: "Restricted Holiday",
                  defaultValue: "",
                  children: "Restricted Holiday"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
                  value: "Season",
                  children: "Season"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "lg:col-span-12",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                htmlFor: "holidayInput",
                className: "inline-block mb-2 text-base font-medium",
                children: "Holiday Name"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                type: "text",
                id: "holidayInput",
                className: "form-input bg-transparent border-default-200 focus:outline-none focus:border-primary  placeholder:text-default-400",
                placeholder: "Holiday name"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "lg:col-span-12",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                htmlFor: "holidayDateInput",
                className: "inline-block mb-2 text-base font-medium",
                children: "Date"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                type: "text",
                placeholder: "Select Date",
                "data-provider": "flatpickr",
                "data-date-format": "d M, Y",
                "data-range-date": "true",
                readOnly: true,
                "aria-placeholder": "Select Date",
                className: "form-input"
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex justify-end items-center gap-x-2 py-3 px-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            className: "btn border-0 text-sm rounded-md text-danger bg-transparent transition-all duration-300 hover:bg-danger/10",
            "aria-label": "Close",
            children: "Cancel"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            type: "button",
            className: "btn bg-primary text-white",
            children: "Add Holiday"
          })]
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HoliydaysAdd);

/***/ }),

/***/ "./resources/js/App/(admin)/(app)/(hr)/holidays/index.jsx":
/*!****************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(hr)/holidays/index.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageBreadcrumb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_HolidaysLeaveDeleteModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/HolidaysLeaveDeleteModal */ "./resources/js/App/(admin)/(app)/(hr)/holidays/components/HolidaysLeaveDeleteModal.jsx");
/* harmony import */ var _components_HoliyDays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/HoliyDays */ "./resources/js/App/(admin)/(app)/(hr)/holidays/components/HoliyDays.jsx");
/* harmony import */ var _components_HoliydaysAdd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/HoliydaysAdd */ "./resources/js/App/(admin)/(app)/(hr)/holidays/components/HoliydaysAdd.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var Index = function Index() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      title: "Holidays"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("main", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageBreadcrumb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        title: "Holidays",
        subtitle: "Menu"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_HoliyDays__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_HolidaysLeaveDeleteModal__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_HoliydaysAdd__WEBPACK_IMPORTED_MODULE_3__["default"], {})]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ })

}]);