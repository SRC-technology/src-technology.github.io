webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/Lattice.js":
/*!************************!*\
  !*** ./src/Lattice.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/fernando.canel/Code/me/stockholmrc.github.io/src/Lattice.js";

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var width = _ref.width,
      height = _ref.height,
      devicePixelRatio = _ref.devicePixelRatio;

  var _ref2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (_ref2.current !== undefined) {
      var middlePoint = [Math.floor(width / 2), Math.floor(height / 2)];

      var context2d = _ref2.current.getContext('2d');

      context2d.beginPath();
      context2d.moveTo.apply(context2d, middlePoint);
      context2d.lineTo([middlePoint + 10, middlePoint]);
      context2d.lineTo([middlePoint + 10, middlePoint + 10]);
      context2d.lineTo([middlePoint, middlePoint + 10]);
      context2d.closePath();
      context2d.stroke();
      console.log('middle line', Math.floor(width / 2), Math.floor(height / 2));
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
    ref: function ref(domElement) {
      return _ref2.current = domElement;
    },
    width: width * devicePixelRatio,
    height: height * devicePixelRatio,
    style: {
      width: width,
      height: height,
      display: 'block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  });
});

/***/ })

})
//# sourceMappingURL=index.js.74c294890fc0809cbdf2.hot-update.js.map