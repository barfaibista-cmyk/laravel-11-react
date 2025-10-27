"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_App_admin_app_ecommerce_product-grid_index_jsx"],{

/***/ "./resources/js/App/(admin)/(app)/(ecommerce)/product-grid/components/ProductFilter.jsx":
/*!**********************************************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(ecommerce)/product-grid/components/ProductFilter.jsx ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var filterConfig = [{
  id: 'color',
  title: 'Color',
  options: [{
    id: 'color1',
    isColor: true
  }, {
    id: 'color2',
    isColor: true
  }, {
    id: 'color3',
    isColor: true
  }, {
    id: 'color4',
    isColor: true
  }, {
    id: 'color5',
    isColor: true
  }, {
    id: 'color6',
    isColor: true
  }, {
    id: 'color7',
    isColor: true
  }, {
    id: 'color8',
    isColor: true
  }, {
    id: 'color9',
    isColor: true
  }, {
    id: 'color10',
    isColor: true
  }, {
    id: 'color11',
    isColor: true
  }]
}, {
  id: 'price',
  title: 'Price',
  options: [{
    id: 'priceAll',
    label: 'All'
  }, {
    id: 'price1',
    label: '$0.00 – $110.00'
  }, {
    id: 'price2',
    label: '$110.00 – $220.00'
  }, {
    id: 'price3',
    label: '$220 - $330'
  }, {
    id: 'price4',
    label: '$330 - $550'
  }, {
    id: 'price5',
    label: '$550+'
  }, {
    id: 'price6',
    label: 'Low to High'
  }, {
    id: 'price7',
    label: 'High to Low'
  }]
}, {
  id: 'category',
  title: 'Product Category',
  options: [{
    id: 'categoryAll',
    label: 'All'
  }, {
    id: 'category1',
    label: 'Mobiles, Computers'
  }, {
    id: 'category2',
    label: 'TV, Appliances, Electronics'
  }, {
    id: 'category3',
    label: "Men's Fashion"
  }, {
    id: 'category4',
    label: "Women's Fashion"
  }, {
    id: 'category5',
    label: 'Home, Kitchen, Pets'
  }, {
    id: 'category6',
    label: 'Beauty, Health, Grocery'
  }, {
    id: 'category7',
    label: 'Books'
  }]
}, {
  id: 'rating',
  title: 'Rating',
  options: [{
    id: 'ratingAll',
    label: 'All'
  }, {
    id: 'rating5',
    label: '5 Rating'
  }, {
    id: 'rating4',
    label: '4 Rating and Up'
  }, {
    id: 'rating3',
    label: '3 Rating and Up'
  }, {
    id: 'rating2',
    label: '2 Rating and Up'
  }, {
    id: 'rating1',
    label: '1 Rating and Up'
  }, {
    id: 'rating0',
    label: '0 Rating'
  }]
}, {
  id: 'gender',
  title: 'Gender',
  options: [{
    id: 'genderAll',
    label: 'All'
  }, {
    id: 'gendermal',
    label: 'Male'
  }, {
    id: 'genderFemal',
    label: 'Female'
  }, {
    id: 'genderOthers',
    label: 'Other'
  }]
}];
var colorClasses = {
  color1: 'border border-primary bg-primary checked:bg-primary checked:border-primary',
  color2: 'border border-red-300 bg-red-300 checked:bg-red-300 checked:border-red-300',
  color3: 'border border-green-300 bg-green-300 checked:bg-green-300 checked:border-green-300',
  color4: 'border border-default-500 bg-default-500 checked:bg-default-500 checked:border-default-500',
  color5: 'border border-purple-500 bg-purple-500 checked:bg-purple-500 checked:border-purple-500',
  color6: 'border border-sky-500 bg-sky-500 checked:bg-sky-500 checked:border-sky-500',
  color7: 'border border-yellow-500 bg-yellow-500 checked:bg-yellow-500 checked:border-yellow-500',
  color8: 'border border-green-500 bg-green-500 checked:bg-green-500 checked:border-green-500',
  color9: 'border border-default-800 bg-default-800 checked:bg-default-800 checked:border-default-800',
  color10: 'border border-default-200 bg-default-200 checked:bg-default-200 checked:border-default-200',
  color11: 'border border-emerald-300 bg-emerald-300 checked:bg-emerald-300 checked:border-emerald-300'
};
var ProductFilter = function ProductFilter() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "card",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "card-body",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex items-center justify-between gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h6", {
          className: "card-title",
          children: "Filter"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "shrink-0",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_0__.Link, {
            to: "#",
            className: "underline transition-all duration-200 text-default-700 text-sm ease-linear hover:text-primary",
            children: "Clear All"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "mt-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "relative",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            type: "text",
            className: "ps-9 form-input form-input-sm w-full",
            placeholder: "Search for..."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "absolute inset-y-0 start-0 flex items-center z-20 ps-3",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuSearch, {
              className: "size-3.5 text-default-600"
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "mt-4 hs-accordion-group",
        "data-hs-accordion-always-open": "",
        children: filterConfig.map(function (section) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "hs-accordion active mt-4",
            id: "hs-accordion-".concat(section.id),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
              className: "hs-accordion-toggle underline inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-default-800 rounded-lg text-sm",
              "aria-expanded": "true",
              "aria-controls": "hs-collapse-".concat(section.id),
              children: [section.title, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuChevronDown, {
                size: 16,
                className: "text-base hs-accordion-active:hidden block"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuChevronUp, {
                size: 16,
                className: "text-base hs-accordion-active:block hidden"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              id: "hs-collapse-".concat(section.id),
              className: "hs-accordion-content w-full overflow-hidden transition-[height] duration-300",
              role: "region",
              "aria-labelledby": "hs-accordion-".concat(section.id),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "mt-4 flex ".concat(section.id === 'color' ? 'gap-2' : 'flex-col gap-2'),
                children: section.options.map(function (opt) {
                  return opt.isColor ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
                    id: opt.id,
                    type: "checkbox",
                    className: "size-5 cursor-pointer rounded-sm focus:ring-0 ".concat(colorClasses[opt.id])
                  }, opt.id) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: "flex gap-2 items-center",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
                      type: "checkbox",
                      className: "form-checkbox checked:bg-primary",
                      id: opt.id
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
                      htmlFor: opt.id,
                      className: "text-sm text-default-800 align-middle cursor-pointer",
                      children: opt.label
                    })]
                  }, opt.id);
                })
              })
            })]
          }, section.id);
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductFilter);

/***/ }),

/***/ "./resources/js/App/(admin)/(app)/(ecommerce)/product-grid/components/Products.jsx":
/*!*****************************************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(ecommerce)/product-grid/components/Products.jsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/product/img-01.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/product/img-02.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/product/img-03.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/product/img-04.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/product/img-05.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/product/img-06.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/product/img-08.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/product/img-10.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/lu */ "./node_modules/react-icons/lu/index.mjs");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/development/chunk-OIYGIGL5.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











var Products = function Products() {
  var products = [{
    id: 1,
    name: 'Mesh Ergonomic Black Chair',
    image: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/product/img-02.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    rating: 4.5,
    reviews: 198,
    price: 674.12,
    originalPrice: 784.09,
    isFavorite: true
  }, {
    id: 2,
    name: 'Fastcolors Typography Men',
    image: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/product/img-03.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    rating: 4.5,
    reviews: 1150,
    price: 341.99,
    originalPrice: 784.09,
    isFavorite: false
  }, {
    id: 3,
    name: 'Mesh Ergonomic Green Chair',
    image: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/product/img-04.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    rating: 3.5,
    reviews: 29,
    price: 362.2,
    originalPrice: 599.99,
    isFavorite: false
  }, {
    id: 4,
    name: 'Techel Black Bluetooth Sound.',
    image: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/product/img-05.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    rating: 4.5,
    reviews: 1324,
    price: 249.99,
    originalPrice: 399.99,
    isFavorite: true
  }, {
    id: 5,
    name: 'Bovet Fleurier AIFSQ029',
    image: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/product/img-06.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    rating: 4.5,
    reviews: 1324,
    price: 496.16,
    originalPrice: null,
    isFavorite: false
  }, {
    id: 6,
    name: 'Roar Twill Blue Baseball Cap',
    image: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/product/img-08.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    rating: 2.5,
    reviews: 485,
    price: 674.12,
    originalPrice: 784.99,
    isFavorite: true
  }, {
    id: 7,
    name: 'Smartest Printed T-shirt',
    image: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/product/img-01.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    rating: 3.5,
    reviews: 5321,
    price: 89.99,
    originalPrice: null,
    isFavorite: false
  }, {
    id: 8,
    name: 'Crop tops for Women western.',
    image: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/product/img-10.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    rating: 4.5,
    reviews: 1551,
    price: 145,
    originalPrice: 299.99,
    isFavorite: true
  }];
  var renderStars = function renderStars(rating) {
    var stars = [];
    var fullStars = Math.floor(rating);
    var hasHalfStar = rating % 1 !== 0;
    for (var i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuStar, {
          className: "size-4 fill-yellow-500 text-yellow-500"
        }, i));
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuStarHalf, {
          className: "size-4 fill-yellow-500 text-yellow-500"
        }, i));
      } else {
        stars.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuStar, {
          className: "size-4 text-yellow-500"
        }, i));
      }
    }
    return stars;
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "lg:col-span-3 col-span-1",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "flex justify-between gap-2 flex-wrap items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
        className: "text-default-700 text-sm",
        children: ["Showing all ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
          children: "7,410"
        }), " items results"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "flex gap-2 items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "hs-dropdown relative inline-flex",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
            type: "button",
            className: "hs-dropdown-toggle inline-flex items-center btn btn-sm bg-transparent border border-primary text-primary transition-all duration-300 hover:bg-primary hover:text-white",
            "aria-haspopup": "menu",
            "aria-expanded": "false",
            "aria-label": "Dropdown",
            children: ["Sort by: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
              className: "font-medium ml-1",
              children: "Highest Price"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuChevronDown, {
              className: "size-4 ms-2"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-40 card z-30 mt-2 p-2 text-sm",
            role: "menu",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
              className: "flex items-center gap-x-3.5 py-2 font-medium px-4 text-default-600 hover:bg-default-150 rounded",
              to: "",
              children: "Lowest Price"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
              className: "flex items-center gap-x-3.5 py-2 font-medium px-4 text-default-600 hover:bg-default-150 rounded",
              to: "",
              children: "Highest Price"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
              className: "flex items-center gap-x-3.5 py-2 font-medium px-4 text-default-600 hover:bg-default-150 rounded",
              to: "",
              children: "High to Low"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("hr", {
              className: "border-t border-default-200 my-2 -mx-2"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
              className: "flex items-center gap-x-3.5 py-2 font-medium px-4 text-default-600 hover:bg-default-150 rounded",
              to: "",
              children: "Low to High"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("nav", {
          className: "flex gap-x-1",
          "aria-label": "Tabs",
          role: "tablist",
          "aria-orientation": "horizontal",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            type: "button",
            className: "hs-tab-active:font-semibold hs-tab-active:bg-sky-600 hs-tab-active:text-white btn size-7.5 bg-sky-100 text-sky-500 hover:text-white hover:bg-sky-600",
            id: "items-1",
            "aria-selected": "false",
            "data-hs-tab": "item-1",
            "aria-controls": "item-1",
            role: "tab",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuList, {
              className: "size-4"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            type: "button",
            className: "hs-tab-active:font-semibold hs-tab-active:bg-sky-600 hs-tab-active:text-white btn size-7.5 bg-sky-100 text-sky-500 hover:text-white hover:bg-sky-600 active",
            id: "items-2",
            "aria-selected": "true",
            "data-hs-tab": "#item-2",
            "aria-controls": "item-2",
            role: "tab",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuLayoutGrid, {
              className: "size-4"
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "flex items-center mt-3 gap-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
        className: "flex items-center gap-1 rounded-full px-2.5 py-0.75 border border-default-200 text-xs",
        children: ["High to Low", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
          to: "#",
          className: "align-middle transition-al duration-300",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuX, {
            className: "size-3"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
        className: "flex items-center gap-1 rounded-full px-2.5 py-0.75 border border-default-200 text-xs",
        children: ["New", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
          to: "#",
          className: "align-middle transition-al duration-300",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuX, {
            className: "size-3"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
        to: "#",
        className: "py-0.75 px-2.5 text-xs rounded-md transition-all duration-300 hover:bg-default-150",
        children: "All Clear"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-5",
      children: products.map(function (product) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "card",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "card-body relative",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
              src: product.image,
              alt: product.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuHeart, {
              className: "size-5 absolute top-6 end-6 ".concat(product.isFavorite ? 'text-danger fill-danger/15' : 'text-default-500 fill-default-100')
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "pb-5 px-5",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h6", {
              className: "text-base text-default-800 font-semibold hover:text-primary transition-all mb-2",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
                to: "#",
                children: product.name
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex items-center gap-1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "flex items-center gap-0.25",
                children: renderStars(product.rating)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                className: "text-default-500",
                children: ["(", product.reviews, ")"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h5", {
              className: "mt-4 text-base font-semibold text-default-800",
              children: ["$", product.price.toFixed(2), product.originalPrice && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
                className: "line-through font-medium text-default-500 ml-1",
                children: product.originalPrice.toFixed(2)
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex items-center gap-2 mt-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
                className: "border border-default-600 w-full text-default-500 border-dashed btn",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuShoppingCart, {
                  className: "size-3 mr-1"
                }), "Add to Cart"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "hs-dropdown relative inline-flex",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                  type: "button",
                  className: "hs-dropdown-toggle btn size-9 bg-default-200 hover:bg-default-600 text-default-500 hover:text-white",
                  "aria-haspopup": "menu",
                  "aria-expanded": "false",
                  "aria-label": "Dropdown",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuEllipsis, {
                    className: "size-4"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "hs-dropdown-menu",
                  role: "menu",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
                    className: "flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded",
                    to: "#",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuEye, {
                      className: "size-3"
                    }), "Overview"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
                    className: "flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded",
                    to: "#",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuSquarePen, {
                      className: "size-3"
                    }), "Edit"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
                    className: "flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded",
                    to: "#",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuTrash2, {
                      className: "size-3"
                    }), "Delete"]
                  })]
                })]
              })]
            })]
          })]
        }, product.id);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "flex flex-wrap md:justify-between justify-center md:gap-0 gap-4 mt-5",
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
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuChevronLeft, {
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
          children: ["Next ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_lu__WEBPACK_IMPORTED_MODULE_1__.LuChevronRight, {
            className: "size-4 ms-1"
          })]
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Products);

/***/ }),

/***/ "./resources/js/App/(admin)/(app)/(ecommerce)/product-grid/index.jsx":
/*!***************************************************************************!*\
  !*** ./resources/js/App/(admin)/(app)/(ecommerce)/product-grid/index.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_ProductFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ProductFilter */ "./resources/js/App/(admin)/(app)/(ecommerce)/product-grid/components/ProductFilter.jsx");
/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Products */ "./resources/js/App/(admin)/(app)/(ecommerce)/product-grid/components/Products.jsx");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageBreadcrumb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var Index = function Index() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageMeta'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      title: "Product Grid"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("main", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/PageBreadcrumb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        title: "Product Grid",
        subtitle: "Menu"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "grid lg:grid-cols-4 grid-cols-1 gap-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "col-span-1 lg:block hidden",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_ProductFilter__WEBPACK_IMPORTED_MODULE_1__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Products__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ })

}]);