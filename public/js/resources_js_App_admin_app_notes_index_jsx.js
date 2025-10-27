"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_App_admin_app_notes_index_jsx"],{

/***/ "./resources/js/App/(admin)/(app)/notes/components/Notes.jsx":
/*!*******************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/notes/components/Notes.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var notesData = [{
  id: 1,
  title: 'Show Then Our Research',
  description: 'You should identify and anticipate any ethical issues or dilemmas that may arise during or after your research, and how you will resolve them.You should identify and anticipate any ethical issues or dilemmas that may arise during...',
  date: '16 May, 2023',
  category: 'Personal',
  categoryColor: 'bg-primary/15 border-primary',
  isStarred: true
}, {
  id: 2,
  title: 'New People Hiring',
  description: 'Steps to recruiting employees',
  details: ['Consider your actual needs', 'Conduct interviews with top applicants', 'Don’t take too long to hire', 'Making the offer'],
  date: '24 Mar, 2023',
  category: 'Business',
  categoryColor: 'bg-danger/15 border-danger',
  isStarred: false
}, {
  id: 3,
  title: 'Design Tools',
  description: 'Visual design tools are, for example, gesture, sketch, drawing, scale model, perspective drawing, photograph, film, video. These include flowcharts, pseudocode, and Nassi-Shneiderman diagrams.',
  date: '29 Feb, 2023',
  category: 'Social',
  categoryColor: 'bg-secondary/10 border-secondary',
  isStarred: true
}, {
  id: 4,
  title: 'Create Chat Apps',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  date: '01 Jan, 2023',
  category: 'Home',
  categoryColor: 'bg-success/10 border-success',
  isStarred: false
}, {
  id: 5,
  title: 'Show Then Our Research',
  description: 'You should identify and anticipate any ethical issues or dilemmas that may arise during or after your research, and how you will resolve them.You should identify and anticipate any ethical issues or dilemmas that may arise during...',
  date: '16 May, 2023',
  category: 'Personal',
  categoryColor: 'bg-primary/15 border-primary',
  isStarred: true
}, {
  id: 6,
  title: 'New People Hiring',
  description: 'Steps to recruiting employees',
  details: ['Consider your actual needs', 'Conduct interviews with top applicants', 'Don’t take too long to hire', 'Making the offer'],
  date: '24 Mar, 2023',
  category: 'Business',
  categoryColor: 'bg-danger/15 border-danger',
  isStarred: false
}, {
  id: 7,
  title: 'Boarding is Important Thing',
  description: 'Living away from home and residing on campus in a dorm setting provides invaluable opportunities for personal growth. Boarding school students tend to develop life Business such as time management, work ethic',
  date: '29 Mar, 2023',
  category: 'Personal',
  categoryColor: 'bg-primary/10 border-primary',
  isStarred: false
}, {
  id: 8,
  title: 'Company Improvements',
  description: "Improving a business's performance requires a strategic and holistic approach that focuses on key areas such as setting and tracking KPIs, improving operational efficiency.",
  date: '10 Apr, 2023',
  category: 'Business',
  categoryColor: 'bg-secondary/10 border-secondary',
  isStarred: true
}];
var Notes = function Notes() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5",
    children: notesData.map(function (note) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "card",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "card-body",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex flex-col justify-between h-full",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "mb-5 flex justify-between items-center gap-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "flex gap-2 items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "hs-dropdown relative inline-flex",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
                    type: "button",
                    className: "hs-dropdown-toggle size-4 border border-dashed rounded-full shrink-0 ".concat(note.categoryColor),
                    "aria-haspopup": "menu",
                    "aria-expanded": "false"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                    className: "hs-dropdown-menu",
                    role: "menu",
                    children: ['Personal', 'Business', 'Social', 'Home'].map(function (cat) {
                      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
                        to: "#",
                        className: "flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-sm text-default-600 hover:bg-default-150 rounded",
                        children: cat
                      }, cat);
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h5", {
                  className: "card-title",
                  children: note.title
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "hs-dropdown relative inline-flex",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
                  type: "button",
                  className: "hs-dropdown-toggle btn size-7.5 bg-default-200 hover:bg-default-600 text-default-500 hover:text-white",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuEllipsis, {
                    className: "size-4"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "hs-dropdown-menu",
                  role: "menu",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
                    to: "#",
                    className: "flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuEye, {
                      className: "size-3"
                    }), " Overview"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
                    to: "#",
                    className: "flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuSquarePen, {
                      className: "size-3"
                    }), " Edit"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
                    to: "#",
                    className: "flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuTrash2, {
                      className: "size-3"
                    }), " Delete"]
                  })]
                })]
              })]
            }), note.details ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                className: "text-default-800 font-semibold text-sm",
                children: note.description
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ol", {
                className: "flex flex-col text-default-600 gap-1 text-sm mt-1",
                children: note.details.map(function (d, i) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                    children: d
                  }, i);
                })
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              className: "text-default-700 text-sm",
              children: note.description
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "mt-4 flex justify-between gap-3 items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_0__.LuStar, {
                className: "".concat(note.isStarred ? 'text-warning fill-warning/20' : 'text-default-500 fill-default-200', " size-5")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                className: "text-default-500 text-sm",
                children: note.date
              })]
            })]
          })
        })
      }, note.id);
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notes);

/***/ }),

/***/ "./resources/js/App/(admin)/(app)/notes/index.jsx":
/*!********************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/notes/index.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageBreadcrumb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_Notes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Notes */ "./resources/js/App/(admin)/(app)/notes/components/Notes.jsx");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var Index = function Index() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      title: "Notes"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("main", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageBreadcrumb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        title: "Notes",
        subtitle: "Menu"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Notes__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ })

}]);