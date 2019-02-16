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


var drawSquare = function drawSquare(squareSide) {
  return function (context2d) {
    return function (x, y) {
      context2d.beginPath();
      context2d.moveTo(x, y);
      context2d.lineTo(x + squareSide, y);
      context2d.lineTo(x + squareSide, y + squareSide);
      context2d.lineTo(x, y + squareSide);
      context2d.closePath();
      context2d.stroke();
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var width = _ref.width,
      height = _ref.height,
      devicePixelRatio = _ref.devicePixelRatio;

  var _ref2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (_ref2.current !== undefined) {
      var squareSide = 10 * devicePixelRatio;
      var middlePoint = [Math.floor(width / 2) * devicePixelRatio, Math.floor(height / 2) * devicePixelRatio];

      var context2d = _ref2.current.getContext('2d');

      drawSquare(squareSide)(context2d).apply(void 0, middlePoint);
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
//# sourceMappingURL=index.js.048d0cd1a01904a64aec.hot-update.js.map