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
var _jsxFileName = "/Users/fernando.canel/Code/me/stockholmrc.github.io/src/Lattice.js";


var palette = ['rgb(19, 107, 251)', 'rgb(252, 107, 33)', 'rgb(252, 36, 226)', 'rgb(28, 165, 252)', 'rgb(253, 183, 43)', 'rgb(252, 19, 109)', 'rgb(0, 0, 0)'];

var drawSquare = function drawSquare(squareSide) {
  return function (context2d) {
    return function (x, y, color) {
      var cachedFillStyle = context2d.fillStyle;
      context2d.fillStyle = color;
      context2d.fillRect(x, y, squareSide, squareSide);
      context2d.fillStyle = cachedFillStyle;
    };
  };
};

var fibonaccis = [1, 1];

var getFibonacci = function getFibonacci(num) {
  for (var i = fibonaccis.length; i <= num; ++i) {
    fibonaccis[i] = fibonaccis[i - 1] + fibonaccis[i - 2];
  }

  return fibonaccis[num];
};

var renderLoop = function renderLoop(context2d, draw, squareSide, length, time, middlePoint) {
  context2d.clearRect(0, 0, middlePoint[0] * 2, middlePoint[1] * 2);

  for (var i = 0; i < length; i++) {
    var latticeCoordinates = zero_indexed_ulam_spiral_getLatticeCoordinatesFor__WEBPACK_IMPORTED_MODULE_1___default()(getFibonacci(i) + time);
    draw(middlePoint[0] + latticeCoordinates[0] * squareSide, middlePoint[1] + latticeCoordinates[1] * squareSide, palette[(i + time) % palette.length]);
  }
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

      var draw = drawSquare(squareSide)(context2d);
      var length = 30;
      var time = 0;
      setInterval(function () {
        renderLoop(context2d, draw, squareSide, length, time, middlePoint);
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
      display: 'block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  });
});

/***/ })

})
//# sourceMappingURL=index.js.2af3139709d912cfc0d6.hot-update.js.map