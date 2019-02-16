webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/fernando.canel/Code/me/stockholmrc.github.io/pages/index.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (_ref.current !== undefined) {
      var context2d = _ref.current.getContext('2d');

      context2d.beginPath();
      context2d.moveTo(50, 50);
      context2d.lineTo(100, 100);
      context2d.closePath();
      context2d.stroke();
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Hello world", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
    ref: function ref(domElement) {
      return _ref.current = domElement;
    },
    width: 1000,
    height: 1000,
    style: {
      width: 500,
      height: 500
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.fe62fe5cc782c68cda45.hot-update.js.map