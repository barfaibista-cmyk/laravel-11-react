"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_App_admin_app_users_users-list_index_jsx"],{

/***/ "./resources/js/App/(admin)/(app)/(users)/users-list/components/UserListTabel.jsx":
/*!****************************************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(users)/users-list/components/UserListTabel.jsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-1.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-2.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-5.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-7.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var UserListTabel = function UserListTabel() {
  var users = [{
    id: '#TW1500001',
    name: 'Marie Prohaska',
    role: 'Graphic Designer',
    location: 'United Kingdom',
    email: 'prohaska@tailwick.com',
    phone: '853 565 9802',
    joiningDate: '04 Jan, 2023',
    status: 'Verified',
    avatar: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-2.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  }, {
    id: '#TW1500002',
    name: 'Jaqueline Hammes',
    role: 'ASP.Net Developer',
    location: 'Brazil',
    email: 'jaqueline@tailwick.com',
    phone: '546 6334 586',
    joiningDate: '18 Jan, 2023',
    status: 'Waiting',
    avatar: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-1.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  }, {
    id: '#TW1500003',
    name: 'Marlene Hirthe',
    role: 'Angular Developer',
    location: 'Spain',
    email: 'marlene@tailwick.com',
    phone: '141 654 9876',
    joiningDate: '04 Feb, 2023',
    status: 'Verified',
    avatar: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-2.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  }, {
    id: '#TW1500004',
    name: 'Darien Romaguera',
    role: 'PHP Developer',
    location: 'United Kingdom',
    email: 'darien@tailwick.com',
    phone: '687 1345 935',
    joiningDate: '18 May, 2023',
    status: 'Verified',
    avatar: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-5.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  }, {
    id: '#TW1500005',
    name: 'Jessika McKenzie',
    role: 'UI/UX Designer',
    location: 'France',
    email: 'jessika@tailwick.com',
    phone: '546 8745 235',
    joiningDate: '14 Jul, 2023',
    status: 'Rejected',
    avatar: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-7.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  }, {
    id: '#TW1500006',
    name: 'Domenic Tromp',
    role: 'Team Leader',
    location: 'Germany',
    email: 'domenic@tailwick.com',
    phone: '612 6088 735',
    joiningDate: '27 Oct, 2023',
    status: 'Verified',
    initials: 'DT'
  }, {
    id: '#TW1500007',
    name: 'Chandler Erdman',
    role: 'React Developer',
    location: 'Japan',
    email: 'chandler@tailwick.com',
    phone: '687 1345 935',
    joiningDate: '21 Nov, 2023',
    status: 'Waiting',
    initials: 'CE'
  }, {
    id: '#TW1500008',
    name: 'Lavada Muller',
    role: 'Laravel Developer',
    location: 'United States',
    email: 'lavada@tailwick.com',
    phone: '141 654 9876',
    joiningDate: '05 Dec, 2023',
    status: 'Rejected',
    initials: 'LM'
  }, {
    id: '#TW1500009',
    name: 'Ambrose Hills',
    role: 'Python Developer',
    location: 'China',
    email: 'ambrose@tailwick.com',
    phone: '697 4563 453',
    joiningDate: '25 Dec, 2023',
    status: 'Verified',
    initials: 'AH'
  }, {
    id: '#TW1500010',
    name: 'Dameon Watsica',
    role: 'Team Leader',
    location: 'France',
    email: 'dameon@tailwick.com',
    phone: '141 654 9876',
    joiningDate: '14 Jan, 2024',
    status: 'Verified',
    initials: 'DW'
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "card",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "card-header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h6", {
        className: "card-title",
        children: "Users List"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
        className: "btn btn-sm bg-primary text-white",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuPlus, {
          className: "size-4 me-1"
        }), "Add user"]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "card-header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "md:flex items-center md:space-y-0 space-y-4 gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "relative",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
            type: "email",
            className: "form-input form-input-sm ps-9",
            placeholder: "Search for name,email"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "absolute inset-y-0 start-0 flex items-center ps-3",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuSearch, {
              className: "size-3.5 flex items-center text-default-500 fill-default-100"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("select", {
          className: "form-input form-input-sm",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
            defaultValue: "",
            children: "select status"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
            children: "Hidden"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
            children: "Rejected"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
            children: "Verified"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
            children: "Waiting"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "flex gap-2 items-center flex-wrap",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
          type: "button",
          className: "btn btn-sm bg-transparent border border-dashed border-primary  text-primary hover:bg-primary/10",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuDownload, {
            className: "size-4"
          }), "Import"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          type: "button",
          className: "btn btn-sm size-7.5 bg-default-100 text-default-500 hover:bg-default-1500  hover:text-white",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuSlidersHorizontal, {
            className: "size-4"
          })
        })]
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
                className: "bg-default-150",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                  className: "text-sm font-normal text-default-700 whitespace-nowrap",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                    className: "ps-4 text-start",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
                      id: "checkbox-all",
                      type: "checkbox",
                      className: "form-checkbox"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                    className: "px-3.5 py-3 text-start",
                    children: "User ID"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                    className: "px-3.5 py-3 text-start",
                    children: "Name"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                    className: "px-3.5 py-3 text-start",
                    children: "Location"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                    className: "px-3.5 py-3 text-start",
                    children: "Email"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                    className: "px-3.5 py-3 text-start",
                    children: "Phone Number"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                    className: "px-3.5 py-3 text-start",
                    children: "Joining Date"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                    className: "px-3.5 py-3 text-start",
                    children: "Status"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                    className: "px-3.5 py-3 text-start",
                    children: "Action"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tbody", {
                children: users.map(function (user) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                    className: "text-default-800 font-normal text-sm whitespace-nowrap",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                      className: "py-3 ps-4",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
                        type: "checkbox",
                        className: "form-checkbox"
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                      className: "px-3.5 py-3 text-primary",
                      children: user.id
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
                      className: "flex py-3 px-3.5 items-center gap-3",
                      children: [user.avatar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                        src: user.avatar,
                        alt: user.name,
                        className: "w-10 h-10 rounded-full"
                      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                        className: "w-10 h-10 flex items-center justify-center rounded-full bg-default-200 font-semibold",
                        children: user.initials
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h6", {
                          className: "mb-1.5 font-semibold",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
                            to: "#",
                            className: "text-default-800",
                            children: user.name
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                          className: "text-default-500",
                          children: user.role
                        })]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                      className: "py-3 px-3.5",
                      children: user.location
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                      className: "py-3 px-3.5",
                      children: user.email
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                      className: "py-3 px-3.5",
                      children: user.phone
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                      className: "py-3 px-3.5",
                      children: user.joiningDate
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
                      className: "px-3.5 py-3",
                      children: [user.status === 'Verified' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                        className: "py-0.5 px-2.5 inline-flex items-center gap-x-1 text-xs font-medium bg-success/10 text-success rounded",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuCircleCheck, {
                          className: "size-3"
                        }), "Verified"]
                      }), user.status === 'Waiting' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                        className: "py-0.5 px-2.5 inline-flex items-center gap-x-1 text-xs font-medium bg-default-200 text-default-600 rounded",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuLoader, {
                          className: "size-3"
                        }), "Waiting"]
                      }), user.status === 'Rejected' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                        className: "py-0.5 px-2.5 inline-flex items-center gap-x-1 text-xs font-medium bg-danger/10 text-danger rounded",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuCircleX, {
                          className: "size-3"
                        }), "Rejected"]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                      className: "px-3.5 py-3",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: "hs-dropdown relative inline-flex",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                          type: "button",
                          className: "hs-dropdown-toggle btn size-7.5 bg-default-200 hover:bg-default-600 text-default-500",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuEllipsis, {
                            className: "size-4"
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                          className: "hs-dropdown-menu",
                          role: "menu",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
                            to: "#",
                            className: "flex items-center gap-1.5 py-1.5 px-3 text-default-500 hover:bg-default-150 rounded",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuEye, {
                              className: "size-3"
                            }), " Overview"]
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
                            to: "#",
                            className: "flex items-center gap-1.5 py-1.5 px-3 text-default-500 hover:bg-default-150 rounded",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuSquarePen, {
                              className: "size-3"
                            }), " Edit"]
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
                            to: "#",
                            className: "flex items-center gap-1.5 py-1.5 px-3 text-default-500 hover:bg-default-150 rounded",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuTrash2, {
                              className: "size-3"
                            }), " Delete"]
                          })]
                        })]
                      })
                    })]
                  }, user.id);
                })
              })]
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "card-footer",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
          className: "text-default-500 text-sm",
          children: ["Showing ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
            children: "10"
          }), " of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
            children: "58"
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
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserListTabel);

/***/ }),

/***/ "./resources/js/App/(admin)/(app)/(users)/users-list/index.jsx":
/*!*********************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(users)/users-list/index.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageBreadcrumb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_UserListTabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/UserListTabel */ "./resources/js/App/(admin)/(app)/(users)/users-list/components/UserListTabel.jsx");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var Index = function Index() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      title: "List View"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("main", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageBreadcrumb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        subtitle: "Users",
        title: "List view"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_UserListTabel__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ })

}]);