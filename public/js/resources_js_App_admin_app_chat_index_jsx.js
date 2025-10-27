"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_App_admin_app_chat_index_jsx"],{

/***/ "./resources/js/App/(admin)/(app)/chat/components/Chats.jsx":
/*!******************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/chat/components/Chats.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-1.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-10.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-5.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-8.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/user-1.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/user-2.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/user-3.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/user-4.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











var chats = [{
  id: 1,
  name: 'Marie Prohaska',
  message: 'I will purchase it for support',
  time: '2min ago',
  image: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-5.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  status: 'online',
  type: 'recent'
}, {
  id: 2,
  name: 'Kara Miller',
  message: "Hey, how's it going?",
  time: '02:57 PM',
  image: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/user-1.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  status: 'busy',
  type: 'recent'
}, {
  id: 3,
  name: 'Mark Walton',
  message: "Hey, how's it going?",
  time: 'Yesterday',
  image: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-1.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  status: 'online',
  type: 'recent'
}, {
  id: 4,
  name: 'Aurore Maggio',
  message: 'React Developer',
  image: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/user-2.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  status: 'default',
  type: 'all'
}, {
  id: 5,
  name: 'Mark Walton',
  message: 'UI / UX Designer',
  initials: 'LP',
  status: 'online',
  type: 'all'
}, {
  id: 6,
  name: 'Daniel Miller',
  message: 'ASP.Net Developer',
  image: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-5.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  status: 'busy',
  type: 'all'
}, {
  id: 7,
  name: 'Jaqueline Hammes',
  message: 'Angular Developer',
  image: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/user-3.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  status: 'offline',
  type: 'all'
}, {
  id: 8,
  name: 'Andrea Pesina',
  message: 'Laravel Developer',
  image: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-8.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  status: 'offline',
  type: 'all'
}, {
  id: 9,
  name: 'Bernard Pereira',
  message: 'Web Designer',
  image: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-10.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  status: 'online',
  type: 'all'
}, {
  id: 10,
  name: 'William Jones',
  message: 'Project Manager',
  image: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/user-4.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  status: 'offline',
  type: 'all'
}];
var statusColor = {
  online: 'bg-green-500',
  offline: 'bg-default-950',
  busy: 'bg-danger',
  away: 'bg-default-500',
  "default": 'bg-default-500'
};
var Chats = function Chats() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "w-80",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "card-body",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "flex justify-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "flex gap-3 items-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h6", {
            className: "card-title",
            children: "Chats"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          className: "size-8 btn bg-default-150",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuPlus, {
            className: "size-4 text-default-500 hover:text-primary"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "mt-5 relative",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
          type: "email",
          className: "ps-11 block w-full form-input form-input-sm",
          placeholder: "Search for...."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "absolute inset-y-0 start-0 flex items-center ps-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuSearch, {
            className: "size-3.5 flex items-center text-default-500"
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "lg:h-[calc(100vh-310px)] h-[calc(100vh-125px)]",
      "data-simplebar": true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "px-5 mb-1",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "mb-1 text-default-500 text-sm",
          children: "Recent Chats"
        })
      }), chats.filter(function (chat) {
        return chat.type === 'recent';
      }).map(function (chat) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
          to: "#",
          className: "flex gap-3 py-2 px-4 ".concat(chat.id === 1 ? 'bg-default-200' : 'hover:bg-default-150'),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200",
            children: [chat.image ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
              src: chat.image,
              alt: chat.name,
              width: 36,
              height: 36,
              className: "rounded-full w-9 h-9"
            }) : chat.initials, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full ".concat(statusColor[chat.status])
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "flex-grow",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h6", {
              className: "mb-1 text-default-800 font-semibold text-sm",
              children: chat.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-xs truncate text-default-500",
              children: chat.message
            })]
          }), chat.time && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
            className: "text-xs text-default-500",
            children: chat.time
          })]
        }, chat.id);
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "px-5 pt-2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: "mb-1 text-default-500 text-sm",
          children: "All Conversion"
        })
      }), chats.filter(function (chat) {
        return chat.type === 'all';
      }).map(function (chat) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
          to: "#",
          className: "flex gap-3 py-2 px-4 hover:bg-default-150",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200",
            children: [chat.image ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
              src: chat.image,
              alt: chat.name,
              width: 36,
              height: 36,
              className: "rounded-full w-9 h-9"
            }) : chat.initials, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full ".concat(statusColor[chat.status])
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h6", {
              className: "mb-1 text-default-800 font-semibold text-sm",
              children: chat.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-xs truncate text-default-500",
              children: chat.message
            })]
          })]
        }, chat.id);
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chats);

/***/ }),

/***/ "./resources/js/App/(admin)/(app)/chat/components/IconTab.jsx":
/*!********************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/chat/components/IconTab.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/logo-sm.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-1.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var IconTab = function IconTab() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "card-body flex flex-col justify-between",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: "#",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
        src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/logo-sm.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        alt: "logo",
        className: "h-8 mx-auto",
        width: 32
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "flex flex-col items-center gap-6 pt-10",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        className: "btn size-9 hover:bg-primary/10 hover:text-primary transition-all",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuMessagesSquare, {
          className: "size-5"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        className: "btn size-9 hover:bg-primary/10 hover:text-primary transition-all",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuSquareUser, {
          className: "size-5"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        className: "btn size-9 hover:bg-primary/10 hover:text-primary transition-all",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuBot, {
          className: "size-5"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        className: "btn size-9 hover:bg-primary/10 hover:text-primary transition-all",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuUser, {
          className: "size-5"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        className: "btn size-9 hover:bg-primary/10 hover:text-primary transition-all",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuScrollText, {
          className: "size-5"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "flex flex-col items-center gap-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        className: "btn size-9 hover:bg-primary/10 hover:text-primary transition-all",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuSettings, {
          className: "size-5"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "hs-dropdown relative",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          type: "button",
          className: "hs-dropdown-toggle flex justify-center items-center",
          "aria-haspopup": "menu",
          "aria-expanded": "false",
          "aria-label": "Dropdown",
          "hs-dropdown-placement": "top-end",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
            src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-1.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            alt: "avatar",
            className: "rounded-md bg-pink-500/10 size-12 object-cover"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "hs-dropdown-menu",
          role: "menu",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
            className: "flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-sm text-default-600 hover:bg-default-150 rounded",
            to: "#",
            children: "Logout"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
            className: "flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-sm text-default-600 hover:bg-default-150 rounded",
            to: "#",
            children: "Switch Account"
          })]
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconTab);

/***/ }),

/***/ "./resources/js/App/(admin)/(app)/chat/components/UserChats.jsx":
/*!**********************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/chat/components/UserChats.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-3.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-5.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-1.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-7.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/client-wrapper/SimplebarClient'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var messages = [{
  id: 1,
  sender: 'other',
  text: 'Sure, I have my pen and paper ready.',
  avatar: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-7.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
}, {
  id: 2,
  sender: 'me',
  text: 'Great. Please read the notes of our last meeting for us.',
  avatar: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-1.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
}, {
  id: 3,
  sender: 'other',
  avatar: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-7.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  contents: [{
    id: 1,
    text: 'Okay. First, we talked about the budget for next year.',
    images: [Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-3.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-5.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]
  }, {
    id: 2,
    text: 'I will budget is getting smaller every year.'
  }, {
    id: 3,
    text: 'Second, we talked about the new products we are going to selling.'
  }, {
    id: 4,
    text: 'O.K. Third, we talked about the profits that we had last month. And fourth, we talked about the bills we had to pay.'
  }]
}, {
  id: 7,
  sender: 'me',
  text: 'Sorry, William. O.K. We have a few things to talk about today. would you like to give your report.',
  avatar: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-1.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
}, {
  id: 8,
  sender: 'other',
  text: 'Yes, thank you 🤩. I have a sales graph I would like to show everyone. This shows how well we are selling our products this year.',
  avatar: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-7.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
}, {
  id: 9,
  sender: 'me',
  text: 'Thank you 🤩, William. Very good. Tom, do you have anything to tell everyone.',
  avatar: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-1.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
}];
var UserChats = function UserChats() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "w-full border-e border-default-200 rounded",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "card-body",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "gap-3 flex justify-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "flex gap-3.5 items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            className: "lg:hidden size-8 rounded-md flex justify-center items-center bg-default-100",
            "aria-haspopup": "dialog",
            "aria-expanded": "false",
            "aria-controls": "hs-offcanvas-left",
            "data-hs-overlay": "#hs-offcanvas-left",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuChevronsLeft, {
              className: "size-4 text-default-500 hover:text-primary"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "rounded-full size-10 bg-default-100",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
              src: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user/avatar-7.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
              alt: "user",
              className: "h-10 rounded-full"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h6", {
              className: "text-default-800 mb-1 font-bold text-sm",
              children: "William Heineman"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-xs text-default-500",
              children: "NextJS Developer"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "flex gap-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            className: "btn rounded-full size-9 hover:bg-primary/10 hover:text-primary transition-all",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuPhone, {
              className: "size-5"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            className: "btn rounded-full size-9 hover:bg-primary/10 hover:text-primary transition-all",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuVideo, {
              className: "size-5"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            className: "btn rounded-full size-9 hover:bg-primary/10 hover:text-primary transition-all",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuSearch, {
              className: "size-5"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            className: "btn rounded-full size-9 hover:bg-primary/10 hover:text-primary transition-all",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuPanelRightOpen, {
              className: "size-5"
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/client-wrapper/SimplebarClient'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      className: "h-[calc(100vh-340px)]",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "card-body bg-default-50",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "flex flex-col gap-5",
          children: messages.map(function (msg) {
            return msg.sender === 'other' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex gap-3 items-end",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
                to: "#",
                className: "flex items-center justify-center text-sm font-semibold rounded-full size-9 bg-default-200",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                  src: msg.avatar,
                  alt: "avatar",
                  className: "object-cover rounded-full h-9",
                  width: 36,
                  height: 36
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "flex flex-col gap-3",
                children: [msg.text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "w-92 p-4 card text-default-700 text-sm",
                  children: [msg.text, msg.images && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                    className: "grid grid-cols-3 gap-4 mt-4",
                    children: msg.images.map(function (img, i) {
                      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
                        to: "#",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                          src: img,
                          alt: "chat-img",
                          className: "rounded-md"
                        })
                      }, i);
                    })
                  })]
                }), msg.contents && msg.contents.map(function (block) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "w-92 p-4 card text-default-700 text-sm",
                    children: [block.text, block.images && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                      className: "grid grid-cols-3 gap-4 mt-4",
                      children: block.images.map(function (img, i) {
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
                          to: "#",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                            src: img,
                            alt: "chat-img",
                            className: "rounded-md"
                          })
                        }, i);
                      })
                    })]
                  }, block.id);
                })]
              })]
            }, msg.id) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex gap-3 justify-end items-end",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "flex flex-col gap-3 items-end",
                children: [msg.text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "w-92 p-4 card text-default-700 text-sm",
                  children: msg.text
                }), msg.contents && msg.contents.map(function (block) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "w-92 p-4 card text-default-700 text-sm",
                    children: [block.text, block.images && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                      className: "grid grid-cols-3 gap-4 mt-4",
                      children: block.images.map(function (img, i) {
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
                          to: "#",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                            src: img,
                            alt: "chat-img",
                            className: "rounded-md"
                          })
                        }, i);
                      })
                    })]
                  }, block.id);
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
                to: "#",
                className: "flex items-center justify-center text-sm font-semibold rounded-full size-9 bg-default-200",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                  src: msg.avatar,
                  alt: "avatar",
                  className: "object-cover rounded-full h-9",
                  width: 36,
                  height: 36
                })
              })]
            }, msg.id);
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "card-body",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "flex gap-2 items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
          type: "text",
          className: "form-input w-full",
          placeholder: "Type your message here..."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            className: "btn size-9 bg-danger/10 text-danger hover:bg-danger hover:text-white",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuMic, {
              className: "size-4"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            className: "btn size-9 bg-primary/10 text-primary hover:bg-primary hover:text-white",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuImage, {
              className: "size-4"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
            className: "btn bg-primary text-white flex items-center gap-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_2__.LuSend, {
              className: "size-4"
            }), " Send"]
          })]
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserChats);

/***/ }),

/***/ "./resources/js/App/(admin)/(app)/chat/index.jsx":
/*!*******************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/chat/index.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_Chats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Chats */ "./resources/js/App/(admin)/(app)/chat/components/Chats.jsx");
/* harmony import */ var _components_IconTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/IconTab */ "./resources/js/App/(admin)/(app)/chat/components/IconTab.jsx");
/* harmony import */ var _components_UserChats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/UserChats */ "./resources/js/App/(admin)/(app)/chat/components/UserChats.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var Index = function Index() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      title: "Chat"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("main", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "card overflow-hidden",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "lg:border-e border-default-200",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              id: "hs-offcanvas-left",
              className: "hs-overlay [--auto-close:lg] lg:block lg:translate-x-0 lg:static lg:end-auto lg:bottom-0 w-96 hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform h-full hidden fixed top-0 start-0 bottom-0 overflow-hidden z-60",
              role: "dialog",
              tabIndex: -1,
              "aria-label": "Sidebar",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "card rounded-none shadow-none relative flex flex-row h-full max-h-full overflow-hidden divide-x divide-default-200",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_IconTab__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Chats__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_UserChats__WEBPACK_IMPORTED_MODULE_3__["default"], {})]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ })

}]);