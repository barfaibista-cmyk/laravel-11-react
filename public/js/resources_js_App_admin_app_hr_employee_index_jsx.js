"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_App_admin_app_hr_employee_index_jsx"],{

/***/ "./resources/js/App/(admin)/(app)/(hr)/employee/components/EditEmployeeData.jsx":
/*!**************************************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(hr)/employee/components/EditEmployeeData.jsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/user-dummy-img.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var EditEmployeeData = function EditEmployeeData() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    id: "employeeEdit",
    className: "hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none",
    role: "dialog",
    tabIndex: -1,
    "aria-labelledby": "employeeEditlabel",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 max-w-md lg:w-full m-3 mx-auto min-h-[calc(100%-56px)] flex items-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "w-full flex flex-col card border border-default-200 shadow-2xs rounded-xl pointer-events-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "card-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            id: "employeeEditlabel",
            className: "font-semibold text-base text-default-800",
            children: "Edit Employee Data"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
            type: "button",
            "aria-label": "Close",
            "data-hs-overlay": "#employeeEdit",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "sr-only",
              children: "Close"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuX, {
              className: "size-5"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "card-body overflow-y-auto lg:h-full h-160",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "grid grid-cols-1 gap-6 lg:grid-cols-12",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "lg:col-span-12 flex justify-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "relative mx-auto mb-4 rounded-full shadow-md size-24 bg-default-200",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                  src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/user-dummy-img.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
                  alt: "Profile",
                  className: "object-cover w-full h-full rounded-full user-profile-image"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "absolute bottom-0 right-0 flex items-center justify-center rounded-full size-8 bg-default-50 shadow-lg cursor-pointer",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
                    id: "profile-img-file-input",
                    name: "profile-img-file-input",
                    type: "file",
                    className: "hidden"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
                    htmlFor: "profile-img-file-input",
                    className: "flex items-center justify-center w-full h-full rounded-full cursor-pointer",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuImagePlus, {
                      className: "size-4 text-default-400"
                    })
                  })]
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "lg:col-span-12",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
                htmlFor: "employeeId",
                className: "block mb-2 text-sm font-medium text-default-700",
                children: "Employee ID"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
                type: "text",
                id: "employeeId",
                defaultValue: "#TWE1001528",
                className: "form-input",
                disabled: true
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "lg:col-span-12",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
                htmlFor: "employeeInput",
                className: "block mb-2 text-sm font-medium text-default-700",
                children: "Name"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
                type: "text",
                id: "employeeInput",
                placeholder: "Employee name",
                defaultValue: "Willie Torres",
                className: "form-input"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "lg:col-span-12",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
                htmlFor: "emailInput",
                className: "block mb-2 text-sm font-medium text-default-700",
                children: "Email"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
                type: "email",
                id: "emailInput",
                placeholder: "example@tailwick.com",
                defaultValue: "willie@tailwick.com",
                className: "form-input"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "lg:col-span-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
                htmlFor: "phoneNumberInput",
                className: "block mb-2 text-sm font-medium text-default-700",
                children: "Phone Number"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
                type: "text",
                id: "phoneNumberInput",
                placeholder: "Enter phone number",
                defaultValue: "070 3715 3689",
                className: "form-input"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "lg:col-span-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
                htmlFor: "locationInput",
                className: "block mb-2 text-sm font-medium text-default-700",
                children: "Location"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
                type: "text",
                id: "locationInput",
                placeholder: "Enter location",
                className: "form-input"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "lg:col-span-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
                htmlFor: "joiningDateInput",
                className: "block mb-2 text-sm font-medium text-default-700",
                children: "Joining Date"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
                type: "date",
                id: "joiningDateInput",
                defaultValue: "05 Feb, 2020",
                className: "form-input"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "lg:col-span-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
                htmlFor: "experienceInput",
                className: "block mb-2 text-sm font-medium text-default-700",
                children: "Experience"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
                type: "text",
                id: "experienceInput",
                placeholder: "0.0",
                className: "form-input"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "lg:col-span-12",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
                htmlFor: "designationSelect",
                className: "block mb-2 text-sm font-medium text-default-700",
                children: "Designation"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("select", {
                id: "designationSelect",
                className: "form-input",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
                  defaultValue: "",
                  children: "Angular Developer"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
                  children: "ASP.Net Developer"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
                  children: "NodeJS Developer"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
                  children: "Project Manager"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
                  children: "React Developer"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
                  children: "Team Leader"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
                  children: "UI / UX Designer"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
                  children: "VueJs Developer"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
                  children: "Web Designer"
                })]
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "card-footer flex justify-end gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            type: "button",
            className: "btn bg-transparent border-0  text-danger hover:bg-danger/10",
            "data-hs-overlay": "#employeeEdit",
            children: "Cancel"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            type: "button",
            className: "btn bg-primary text-white",
            children: "Update"
          })]
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditEmployeeData);

/***/ }),

/***/ "./resources/js/App/(admin)/(app)/(hr)/employee/components/EmployeeDelete.jsx":
/*!************************************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(hr)/employee/components/EmployeeDelete.jsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/delete.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var EmployeeDelete = function EmployeeDelete() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    id: "employeeDelete",
    className: "hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none",
    role: "dialog",
    tabIndex: -1,
    "aria-labelledby": "employeeDelete-label",
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
            "data-hs-overlay": "#employeeDelete",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeeDelete);

/***/ }),

/***/ "./resources/js/App/(admin)/(app)/(hr)/employee/components/EmployeeDetails.jsx":
/*!*************************************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(hr)/employee/components/EmployeeDetails.jsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/user-1.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/user-2.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/user-3.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/user-4.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var employees = [{
  id: '#TWE1001528',
  name: 'Willie Torres',
  image: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/user-1.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  designation: 'Nuxt JS Developer',
  email: 'willie@tailwick.com',
  phone: '070 3715 3689',
  location: 'United States',
  experience: '3 Year',
  joiningDate: '05 Feb, 2020'
}, {
  id: '#TWE1001524',
  name: 'Patricia Garcia',
  image: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/user-2.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  designation: 'ASP.Net Developer',
  email: 'PatriciaJGarcia@tailwick.com',
  phone: '077 7317 7572',
  location: 'Brazil',
  experience: '0.5 Year',
  joiningDate: '12 Aug, 2023'
}, {
  id: '#TWE1001506',
  name: 'Tonya Johnson',
  image: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/user-3.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  designation: 'Project Manager',
  email: 'TonyaEJohnson@tailwick.com',
  phone: '079 2383 2340',
  location: 'Denmark',
  experience: '0 Year',
  joiningDate: '11 Nov, 2023'
}, {
  id: '#TWE1001502',
  name: 'Jose White',
  image: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/user-4.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  designation: 'React Developer',
  email: 'ameida@tailwick.com',
  phone: '03476 56 14 12',
  location: 'Philippines',
  experience: '1.5 Year',
  joiningDate: '09 Jun, 2022'
}, {
  id: '#TWE1001503',
  name: 'Juliette Fecteau',
  image: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/user-1.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  designation: 'Sr. Angular Developer',
  email: 'JulietteFecteau@tailwick.com',
  phone: '07231 96 25 88',
  location: 'Belgium',
  experience: '1.9 Year',
  joiningDate: '11 May, 2021'
}, {
  id: '#TWE1001504',
  name: 'Jonas Frederiksen',
  image: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/user-2.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  designation: 'Team Leader',
  email: 'jonas@tailwick.com',
  phone: '61 53 62 05',
  location: 'France',
  experience: '2.9 Year',
  joiningDate: '18 Jan, 2019'
}, {
  id: '#TWE1001505',
  name: 'Kim Broberg',
  image: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/user-4.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  designation: 'UI / UX Designer',
  email: 'KimBroberg@tailwick.com',
  phone: '040 382 2096',
  location: 'Finland',
  experience: '1.2 Year',
  joiningDate: '23 April, 2021'
}];
var EmployeeDetails = function EmployeeDetails() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "card",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "card-header flex justify-between items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h6", {
        className: "card-title",
        children: ["Employee (", employees.length, ")"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
        className: "btn btn-sm bg-primary text-white flex items-center gap-1",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuPlus, {
          className: "size-4"
        }), " Add Employee"]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "flex flex-col",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "overflow-x-auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "min-w-full inline-block align-middle",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "overflow-hidden",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
              className: "min-w-full divide-y divide-default-200",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("thead", {
                className: "bg-default-100 font-normal whitespace-nowrap",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                  className: "text-sm text-default-800",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                    className: "px-3.5 py-3 font-medium text-start",
                    children: "Employee ID"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                    className: "px-3.5 py-3 font-medium text-start",
                    children: "Name"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                    className: "px-3.5 py-3 font-medium text-start",
                    children: "Designation"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                    className: "px-3.5 py-3 font-medium text-start",
                    children: "Email Id"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                    className: "px-3.5 py-3 font-medium text-start",
                    children: "Phone Number"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                    className: "px-3.5 py-3 font-medium text-start",
                    children: "Location"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                    className: "px-3.5 py-3 font-medium text-start",
                    children: "Experience"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                    className: "px-3.5 py-3 font-medium text-start",
                    children: "Joining Date"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                    className: "px-3.5 py-3 font-medium text-start",
                    children: "Action"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tbody", {
                className: "divide-y divide-default-200",
                children: employees.map(function (emp) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                    className: "text-default-800 font-normal whitespace-nowrap",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                      className: "px-3.5 py-3 text-sm text-primary",
                      children: emp.id
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                      className: "px-3.5 py-3 text-sm",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
                        to: "#",
                        className: "flex gap-3 items-center",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                          src: emp.image,
                          alt: emp.name,
                          className: "h-6 rounded-full",
                          width: 24
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h6", {
                          className: "text-heading font-medium",
                          children: emp.name
                        })]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                      className: "px-3.5 py-3 text-sm",
                      children: emp.designation
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                      className: "px-3.5 py-3 text-sm",
                      children: emp.email
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                      className: "px-3.5 py-3 text-sm",
                      children: emp.phone
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                      className: "px-3.5 py-3 text-sm",
                      children: emp.location
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                      className: "px-3.5 py-3 text-sm",
                      children: emp.experience
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                      className: "px-3.5 py-3 text-sm",
                      children: emp.joiningDate
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                      className: "px-3.5 py-3",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
                          className: "flex size-8 bg-default-200 rounded-md items-center justify-center hover:bg-primary/10 hover:text-primary transition-all text-default-600",
                          to: "#",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuEye, {
                            className: "size-3"
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
                          className: "flex size-8 bg-default-200 rounded-md items-center justify-center hover:bg-primary/10 hover:text-primary transition-all text-default-600",
                          to: "#",
                          "aria-haspopup": "dialog",
                          "aria-expanded": "false",
                          "aria-controls": "employeeEdit",
                          "data-hs-overlay": "#employeeEdit",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuSquarePen, {
                            className: "size-4"
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
                          className: "flex size-8 bg-default-200 rounded-md items-center justify-center hover:bg-primary/10 hover:text-primary transition-all text-default-600",
                          to: "#",
                          "aria-haspopup": "dialog",
                          "aria-expanded": "false",
                          "aria-controls": "employeeDelete",
                          "data-hs-overlay": "#employeeDelete",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuTrash2, {
                            className: "size-4"
                          })
                        })]
                      })
                    })]
                  }, emp.id);
                })
              })]
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "card-footer flex justify-between items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
          className: "text-default-500 text-sm",
          children: ["Showing ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
            children: employees.length
          }), " of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
            children: "38"
          }), " Results"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("nav", {
          className: "flex items-center gap-2",
          "aria-label": "Pagination",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
            className: "btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10 flex items-center gap-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuChevronLeft, {
              className: "size-4"
            }), " Prev"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            className: "btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10",
            children: "1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            className: "btn size-7.5 bg-primary text-white",
            children: "2"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            className: "btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10",
            children: "3"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
            className: "btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10 flex items-center gap-1",
            children: ["Next ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuChevronRight, {
              className: "size-4"
            })]
          })]
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeeDetails);

/***/ }),

/***/ "./resources/js/App/(admin)/(app)/(hr)/employee/index.jsx":
/*!****************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(hr)/employee/index.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageBreadcrumb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_EditEmployeeData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/EditEmployeeData */ "./resources/js/App/(admin)/(app)/(hr)/employee/components/EditEmployeeData.jsx");
/* harmony import */ var _components_EmployeeDelete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/EmployeeDelete */ "./resources/js/App/(admin)/(app)/(hr)/employee/components/EmployeeDelete.jsx");
/* harmony import */ var _components_EmployeeDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/EmployeeDetails */ "./resources/js/App/(admin)/(app)/(hr)/employee/components/EmployeeDetails.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var Index = function Index() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      title: "Employee List"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("main", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageBreadcrumb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        title: "Employee List",
        subtitle: "Menu"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_EmployeeDetails__WEBPACK_IMPORTED_MODULE_3__["default"], {})]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_EditEmployeeData__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_EmployeeDelete__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ })

}]);