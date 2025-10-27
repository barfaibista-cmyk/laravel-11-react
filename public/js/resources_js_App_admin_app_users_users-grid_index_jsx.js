"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_App_admin_app_users_users-grid_index_jsx"],{

/***/ "./resources/js/App/(admin)/(app)/(users)/users-grid/components/UserGrid.jsx":
/*!***********************************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(users)/users-grid/components/UserGrid.jsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-1.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-2.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-3.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-4.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-5.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-6.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-7.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-8.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











var UserGrid = function UserGrid() {
  var users = [{
    id: 1,
    name: 'Paula Keenan',
    role: '@Admin',
    username: 'Admin',
    address: '748 Luettgen Plain Suite South Winstonfort, NM',
    avatar: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-1.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    status: 'success'
  }, {
    id: 2,
    name: 'Marie Prohaska',
    role: '@Subscriber',
    username: 'Subscriber',
    address: '125 Ortiz Camp Suite 471 Rippinport, US',
    avatar: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-2.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    status: 'success'
  }, {
    id: 3,
    name: 'Jaqueline Hammes',
    role: '@Editor',
    username: 'Editor',
    address: '8716 Dell Manors New Ahmedmouth, WI',
    avatar: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-3.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    status: 'success'
  }, {
    id: 4,
    name: 'Angus Bergstrom',
    role: '@Developer',
    username: 'Developer',
    address: '617 Powlowski Crossroad Apt. 716 New Victoria',
    initials: 'AB',
    status: 'success'
  }, {
    id: 5,
    name: 'Aurore Maggio',
    role: '@Subscriber',
    username: 'Subscriber',
    address: '8751 Boyer Courts Suite 532 West Fletcherside',
    avatar: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-4.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    status: 'danger'
  }, {
    id: 6,
    name: 'Andrea Pesina',
    role: '@Editor',
    username: 'Editor',
    address: '32 Maidstone Road WELLSBOROUGH',
    initials: 'AP',
    status: 'success'
  }, {
    id: 7,
    name: 'Daniel Miller',
    role: '@Subscriber',
    username: 'Subscriber',
    address: '431 Elk Rd Little Ticonderoga, NY',
    avatar: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-5.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    status: 'danger'
  }, {
    id: 8,
    name: 'Ashley Wilson',
    role: '@Subscriber',
    username: 'Subscriber',
    address: '0816 Bradford Alley Lake Adamfort, ME',
    avatar: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-6.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    status: 'success'
  }, {
    id: 9,
    name: 'William Heineman',
    role: '@Author',
    username: 'Author',
    address: '99614 Pollich Extension Apt. 938 South Alf, GA',
    avatar: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-7.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    status: 'success'
  }, {
    id: 10,
    name: 'Kara Miller',
    role: '@Subscriber',
    username: 'Subscriber',
    address: '755 Kody Plaza Apt. 138 East Reinholdberg, AR',
    avatar: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-8.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    status: 'success'
  }, {
    id: 11,
    name: 'Mark Walton',
    role: '@Author',
    username: 'Author',
    address: '895 Camylle Tunnel Lake Chasity, SC',
    initials: 'MW',
    status: 'success'
  }, {
    id: 12,
    name: 'David Biggs',
    role: '@Subscriber',
    username: 'Subscriber',
    address: '75, Deccan Gymkhana, Alwar',
    initials: 'DB',
    status: 'danger'
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "flex justify-between gap-3 flex-wrap items-center mb-5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "relative",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
          type: "email",
          className: "form-input form-input-sm ps-9",
          placeholder: "Search for name,email,phone number etc..."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "absolute inset-y-0 start-4 flex items-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuSearch, {
            className: "size-3.5 flex items-center text-default-500"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "flex gap-3 items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
          type: "button",
          className: "btn btn-sm bg-primary text-white",
          "aria-haspopup": "dialog",
          "aria-expanded": "false",
          "aria-controls": "addUserModal",
          "data-hs-overlay": "#addUserModal",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuPlus, {
            className: "size-4 ms-1"
          }), "Add User"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          type: "button",
          className: "btn size-7.5 bg-default-500 text-white hover:bg-default-600   ",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuSlidersHorizontal, {
            className: "size-4"
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mb-5",
      children: users.map(function (user) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "card",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "card-body",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "relative flex items-center justify-center mx-auto text-lg rounded-full size-16 bg-default-100",
              children: [user.avatar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                src: user.avatar,
                alt: user.name,
                className: "rounded-full size-16"
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                children: user.initials
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "absolute ".concat(user.status === 'success' ? 'bg-success' : 'bg-danger', " border-2 border-white rounded-full size-3 end-0 bottom-1")
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mt-4 text-center text-default-500",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h5", {
                className: "mb-1 text-base text-default-800 font-semibold",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
                  to: "/account",
                  children: user.name
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "mb-3 text-sm text-default-500",
                children: user.role
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "text-sm text-default-500",
                children: user.address
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex gap-2 mt-5",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
                to: "/chat",
                className: "btn border-primary text-primary hover:bg-primary hover:text-white flex-grow",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuMessagesSquare, {
                  size: 14
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "align-middle",
                  children: "Send Message"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "hs-dropdown relative inline-flex",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                  type: "button",
                  className: "hs-dropdown-toggle btn bg-primary size-9 text-white",
                  "aria-haspopup": "menu",
                  "aria-expanded": "false",
                  "aria-label": "Dropdown",
                  "hs-dropdown-placement": "bottom-end",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuEllipsis, {
                    className: "iconify lucide--ellipsis size-4"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "hs-dropdown-menu",
                  role: "menu",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
                    className: "flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded",
                    to: "#",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuEye, {
                      className: "size-3"
                    }), "Overview"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
                    className: "flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded",
                    to: "#",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuSquarePen, {
                      className: "size-3"
                    }), "Edit"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
                    className: "flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded",
                    to: "#",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuTrash2, {
                      className: "size-3"
                    }), "Delete"]
                  })]
                })]
              })]
            })]
          })
        }, user.id);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "flex flex-wrap md:justify-between justify-center items-centermd:gap-0 gap-4 my-5 text-default-500",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
        className: "text-default-500 text-sm",
        children: ["Showing ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
          children: "07"
        }), " of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
          children: "19"
        }), " Results"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("nav", {
        className: "flex items-center gap-2",
        "aria-label": "Pagination",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
          type: "button",
          className: "btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuChevronLeft, {
            className: "size-4 me-1"
          }), " Prev"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          type: "button",
          className: "btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10",
          children: "1"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          type: "button",
          className: "btn size-7.5 bg-primary text-white",
          children: "2"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          type: "button",
          className: "btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10",
          children: "3"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
          type: "button",
          className: "btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10",
          children: ["Next", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuChevronRight, {
            className: "size-4 ms-1"
          })]
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserGrid);

/***/ }),

/***/ "./resources/js/App/(admin)/(app)/(users)/users-grid/index.jsx":
/*!*********************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(users)/users-grid/index.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageBreadcrumb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_UserGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/UserGrid */ "./resources/js/App/(admin)/(app)/(users)/users-grid/components/UserGrid.jsx");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var Index = function Index() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      title: "Grid View"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("main", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageBreadcrumb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        title: "Grid View",
        subtitle: "Mesnu"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_UserGrid__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ })

}]);