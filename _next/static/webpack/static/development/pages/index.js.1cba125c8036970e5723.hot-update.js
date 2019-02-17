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
/* harmony import */ var zero_indexed_ulam_spiral_getLatticeCoordinatesFor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zero-indexed-ulam-spiral/getLatticeCoordinatesFor */ "./node_modules/zero-indexed-ulam-spiral/getLatticeCoordinatesFor.js");
/* harmony import */ var zero_indexed_ulam_spiral_getLatticeCoordinatesFor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zero_indexed_ulam_spiral_getLatticeCoordinatesFor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _getFibonacci__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getFibonacci */ "./src/getFibonacci.js");
/* harmony import */ var _getLatticeTopLeftPixel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getLatticeTopLeftPixel */ "./src/getLatticeTopLeftPixel.js");
/* harmony import */ var _colorPicking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colorPicking */ "./src/colorPicking.js");
/* harmony import */ var triangular_numbers_getNthTriangularNumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! triangular-numbers/getNthTriangularNumber */ "./node_modules/triangular-numbers/getNthTriangularNumber.js");
/* harmony import */ var triangular_numbers_getNthTriangularNumber__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(triangular_numbers_getNthTriangularNumber__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shapes */ "./src/shapes.js");
var _jsxFileName = "/Users/fernando.canel/Code/me/stockholmrc.github.io/src/Lattice.js";








var LENGTH = 20000;

var circle = function circle(context2d) {
  return function (x, y, radius) {
    context2d.beginPath();
    context2d.arc(x, y, radius, 0, 2 * Math.PI);
    context2d.fill();
  };
};

var drawSquare = function drawSquare(context2d) {
  return function (x, y, color, size) {
    var cachedFillStyle = context2d.fillStyle;
    context2d.fillStyle = color; // if (Math.random() > 0.5) {

    Object(_shapes__WEBPACK_IMPORTED_MODULE_7__["rect"])(context2d)(x, y, size[0], size[1]); // } else {
    //   circle(context2d)(x, y, size[0])
    // }

    context2d.fillStyle = cachedFillStyle;
  };
};

var sizes = [[10, 10], [20, 20], [30, 30]];

var renderLoop = function renderLoop(context2d, draw, squareSide, time, middlePoint) {
  context2d.clearRect(0, 0, middlePoint[0] * 2, middlePoint[1] * 2);

  for (var i = 0; i < LENGTH; i++) {
    // const latticeTopLeftPixel = getLatticeTopLeftPixel(middlePoint, squareSide)(getFibonacci(i + time))
    // const latticeTopLeftPixel = getLatticeTopLeftPixel(middlePoint, squareSide)(getNthTriangularNumber(i + time))
    var latticeTopLeftPixel = Object(_getLatticeTopLeftPixel__WEBPACK_IMPORTED_MODULE_4__["default"])(middlePoint, squareSide)(i * time);
    draw(latticeTopLeftPixel[0], latticeTopLeftPixel[1], Object(_colorPicking__WEBPACK_IMPORTED_MODULE_5__["upToTriangular"])(i + time), sizes[1]);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var width = _ref.width,
      height = _ref.height,
      devicePixelRatio = _ref.devicePixelRatio;

  var _ref2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (_ref2.current !== undefined) {
      var squareSide = _constants__WEBPACK_IMPORTED_MODULE_2__["GRID"] * devicePixelRatio;
      var middlePoint = [Math.floor(width / 2) * devicePixelRatio, Math.floor(height / 2) * devicePixelRatio];

      var context2d = _ref2.current.getContext('2d');

      var draw = drawSquare(context2d);
      var time = 0;
      setInterval(function () {
        renderLoop(context2d, draw, squareSide, time, middlePoint);
        time += 1;
      }, 50);
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
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  });
});

/***/ })

})
//# sourceMappingURL=index.js.1cba125c8036970e5723.hot-update.js.map