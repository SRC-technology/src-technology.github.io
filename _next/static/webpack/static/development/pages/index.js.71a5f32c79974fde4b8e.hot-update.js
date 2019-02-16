webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/Lattice.js":
/*!************************!*\
  !*** ./src/Lattice.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fantasy_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fantasy-color */ "./node_modules/fantasy-color/dist/Color.js");
/* harmony import */ var fantasy_color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fantasy_color__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var zero_indexed_ulam_spiral_getLatticeCoordinatesFor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zero-indexed-ulam-spiral/getLatticeCoordinatesFor */ "./node_modules/zero-indexed-ulam-spiral/getLatticeCoordinatesFor.js");
/* harmony import */ var zero_indexed_ulam_spiral_getLatticeCoordinatesFor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(zero_indexed_ulam_spiral_getLatticeCoordinatesFor__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/fernando.canel/Code/me/stockholmrc.github.io/src/Lattice.js";




var palette = [[19, 107, 251], [252, 107, 33], [252, 36, 226], [28, 165, 252], [253, 183, 43], [252, 19, 109], [0, 0, 0]];

var drawSquare = function drawSquare(squareSide) {
  return function (context2d) {
    return function (x, y, color) {
      var cachedFillStyle = context2d.fillStyle;
      context2d.beginPath();
      context2d.moveTo(x, y);
      context2d.lineTo(x + squareSide, y);
      context2d.lineTo(x + squareSide, y + squareSide);
      context2d.lineTo(x, y + squareSide);
      context2d.closePath();
      context2d.fillStyle = fantasy_color__WEBPACK_IMPORTED_MODULE_2___default.a.of.apply(fantasy_color__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(color)).toRGBA();
      context2d.fill();
      context2d.fillStyle = cachedFillStyle;
    };
  };
};

var series = Object(ramda__WEBPACK_IMPORTED_MODULE_3__["range"])(0, 10000).reduce(function (points, i) {
  return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(points), [{
    x: zero_indexed_ulam_spiral_getLatticeCoordinatesFor__WEBPACK_IMPORTED_MODULE_4___default()(index)[0],
    y: zero_indexed_ulam_spiral_getLatticeCoordinatesFor__WEBPACK_IMPORTED_MODULE_4___default()(index)[1],
    color: palette[i % palette.length]
  }]);
}, []);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var width = _ref.width,
      height = _ref.height,
      devicePixelRatio = _ref.devicePixelRatio;

  var _ref3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (_ref3.current !== undefined) {
      var squareSide = 10 * devicePixelRatio;
      var middlePoint = [Math.floor(width / 2) * devicePixelRatio, Math.floor(height / 2) * devicePixelRatio];

      var context2d = _ref3.current.getContext('2d');

      var draw = drawSquare(squareSide)(context2d);
      series.forEach(function (_ref2) {
        var x = _ref2.x,
            y = _ref2.y,
            color = _ref2.color;
        draw(middlePoint[0] + x * squareSide, middlePoint[1] + y * squareSide, color);
      });
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("canvas", {
    ref: function ref(domElement) {
      return _ref3.current = domElement;
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
      lineNumber: 66
    },
    __self: this
  });
});

/***/ })

})
//# sourceMappingURL=index.js.71a5f32c79974fde4b8e.hot-update.js.map