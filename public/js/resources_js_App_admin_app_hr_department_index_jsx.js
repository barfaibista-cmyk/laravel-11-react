"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_App_admin_app_hr_department_index_jsx"],{

/***/ "./resources/js/App/(admin)/(app)/(hr)/department/components/AddDepartment.jsx":
/*!*************************************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(hr)/department/components/AddDepartment.jsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var AddDepartment = function AddDepartment() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    id: "department-edit-modal",
    className: "hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none",
    role: "dialog",
    tabIndex: -1,
    "aria-labelledby": "department-delete-modal-label2",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "w-full flex flex-col card border border-default-200 shadow-2xs rounded-xl pointer-events-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "card-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
            id: "department-delete-modal-label2",
            className: "font-bold text-default-800 text-base",
            children: "Add Department"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
              type: "button",
              className: "size-5 text-default-800",
              "aria-label": "Close",
              "data-hs-overlay": "#department-edit-modal",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "sr-only",
                children: "Close"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuX, {
                className: "size-5"
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "p-4 overflow-y-auto",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "flex flex-col gap-y-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "lg:col-span-12",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                htmlFor: "Department Name",
                className: "inline-block mb-2 text-base font-medium",
                children: "Department Name"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                type: "text",
                id: "Department Name",
                className: "form-input",
                placeholder: "Department Name"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "lg:col-span-12",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                htmlFor: "Head of Dep. Name",
                className: "inline-block mb-2 text-base font-medium",
                children: "Head of Dep. Name"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                type: "text",
                placeholder: "Head name",
                className: "form-input"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "lg:col-span-12",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                htmlFor: "Phone Number",
                className: "inline-block mb-2 text-base font-medium",
                children: "Phone Number"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                type: "text",
                id: "Phone Number",
                className: "form-input",
                placeholder: "1234567890"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "lg:col-span-12",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                htmlFor: "Email",
                className: "inline-block mb-2 text-base font-medium",
                children: "Email"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                type: "text",
                placeholder: "Enter Email",
                className: "form-input"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "lg:col-span-12",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                htmlFor: "Total Employee",
                className: "inline-block mb-2 text-base font-medium",
                children: "Total Employee"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                type: "text",
                placeholder: "0",
                className: "form-input"
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex justify-end items-center gap-x-2 py-3 px-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            "data-hs-overlay": "#department-edit-modal",
            className: "bg-transparent text-danger btn border-0 hover:bg-danger/10",
            "aria-label": "Close",
            children: "Cancel"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            type: "button",
            className: "text-white  btn bg-primary",
            children: "Add Department"
          })]
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddDepartment);

/***/ }),

/***/ "./resources/js/App/(admin)/(app)/(hr)/department/components/DeleteModal.jsx":
/*!***********************************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(hr)/department/components/DeleteModal.jsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/delete.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var DeleteModal = function DeleteModal() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    id: "department-delete-modal",
    className: "hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none",
    role: "dialog",
    tabIndex: -1,
    "aria-labelledby": "department-delete-modal-label",
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
            "data-hs-overlay": "#department-delete-modal",
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
                "data-hs-overlay": "#department-delete-modal",
                className: "btn text-danger bg-transparent hover:bg-danger/10",
                "aria-label": "Close",
                children: "Cancel"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
                className: "bg-danger text-white  btn border-0 btn-sm",
                children: "Yes,Delete It!"
              })]
            })]
          })]
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteModal);

/***/ }),

/***/ "./resources/js/App/(admin)/(app)/(hr)/department/components/Departments.jsx":
/*!***********************************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(hr)/department/components/Departments.jsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var departmentsData = [{
  id: 1,
  name: 'Web Development',
  head: 'Patricia Garcia',
  phone: '077 7317 7572',
  email: 'PatriciaJGarcia@tailwick.com',
  employees: 15
}, {
  id: 2,
  name: 'IOS Application Development',
  head: 'Frederiksen',
  phone: '61 53 62 05',
  email: 'jonas@tailwick.com',
  employees: 9
}, {
  id: 3,
  name: 'Designing',
  head: 'Juliette Fecteau',
  phone: '07231 96 25 88',
  email: 'JulietteFecteau@tailwick.com',
  employees: 11
}, {
  id: 4,
  name: 'HR Management',
  head: 'Thomas Hatfield',
  phone: '0911 47 65 49',
  email: 'thomas@tailwick.com',
  employees: 3
}, {
  id: 5,
  name: 'Accounts Management',
  head: 'Holly Kavanaugh',
  phone: '819 947 5846',
  email: 'HollyKavanaugh@tailwick.com',
  employees: 2
}];
var Departments = function Departments() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "card",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "card-header flex justify-between items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h6", {
        className: "card-title",
        children: "Departments"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
        className: "btn btn-sm bg-primary text-white flex items-center gap-1",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuPlus, {
          className: "size-4"
        }), " Add Department"]
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
                className: "font-semibold whitespace-nowrap",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
                  className: "text-sm text-default-800 divide-x divide-default-200",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                    className: "px-3.5 py-3 text-start",
                    children: "#"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                    className: "px-3.5 py-3 text-start",
                    children: "Department Name"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                    className: "px-3.5 py-3 text-start",
                    children: "Head of Dep."
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                    className: "px-3.5 py-3 text-start",
                    children: "Phone Number"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                    className: "px-3.5 py-3 text-start",
                    children: "Email"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                    className: "px-3.5 py-3 text-start",
                    children: "Employee"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                    className: "px-3.5 py-3 text-start",
                    children: "Action"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody", {
                className: "divide-y divide-default-200",
                children: departmentsData.map(function (dept) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
                    className: "text-default-800 font-normal whitespace-nowrap divide-x divide-default-200",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                      className: "px-3.5 py-3 text-sm",
                      children: dept.id
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                      className: "px-3.5 py-3 text-sm",
                      children: dept.name
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                      className: "px-3.5 py-3 text-sm",
                      children: dept.head
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                      className: "px-3.5 py-3 text-sm",
                      children: dept.phone
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                      className: "px-3.5 py-3 text-sm",
                      children: dept.email
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                      className: "px-3.5 py-3 text-sm",
                      children: dept.employees.toString().padStart(2, '0')
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                      className: "px-3.5 py-3",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
                          to: "#",
                          className: "btn size-8 bg-default-200 hover:bg-primary/10 hover:text-primary text-default-600",
                          "aria-haspopup": "dialog",
                          "aria-expanded": "false",
                          "aria-controls": "department-edit-modal",
                          "data-hs-overlay": "#department-edit-modal",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuPencil, {
                            className: "size-4"
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
                          to: "#",
                          className: "btn size-8 bg-default-200 hover:bg-primary/10 hover:text-primary text-default-600",
                          "aria-haspopup": "dialog",
                          "aria-expanded": "false",
                          "aria-controls": "department-delete-modal",
                          "data-hs-overlay": "#department-delete-modal",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuTrash2, {
                            className: "size-4"
                          })
                        })]
                      })
                    })]
                  }, dept.id);
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
            children: departmentsData.length
          }), " of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
            children: "8"
          }), " Results"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("nav", {
          className: "flex items-center gap-2",
          "aria-label": "Pagination",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
            type: "button",
            className: "btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10 flex items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuChevronLeft, {
              className: "size-4 me-1"
            }), " Prev"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            className: "btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary",
            children: "1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            className: "btn size-7.5 bg-primary text-white",
            children: "2"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            className: "btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary",
            children: "3"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
            type: "button",
            className: "btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10 flex items-center",
            children: ["Next ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuChevronRight, {
              className: "size-4 ms-1"
            })]
          })]
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Departments);

/***/ }),

/***/ "./resources/js/App/(admin)/(app)/(hr)/department/index.jsx":
/*!******************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(hr)/department/index.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageBreadcrumb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_AddDepartment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AddDepartment */ "./resources/js/App/(admin)/(app)/(hr)/department/components/AddDepartment.jsx");
/* harmony import */ var _components_DeleteModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/DeleteModal */ "./resources/js/App/(admin)/(app)/(hr)/department/components/DeleteModal.jsx");
/* harmony import */ var _components_Departments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Departments */ "./resources/js/App/(admin)/(app)/(hr)/department/components/Departments.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var Index = function Index() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      title: "Departments"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("main", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageBreadcrumb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        title: "Departments",
        subtitle: "Menu"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Departments__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_DeleteModal__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_AddDepartment__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ })

}]);