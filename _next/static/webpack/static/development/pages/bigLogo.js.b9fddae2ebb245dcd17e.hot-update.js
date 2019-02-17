webpackHotUpdate("static/development/pages/bigLogo.js",{

/***/ "./src/BigLogo.js":
/*!************************!*\
  !*** ./src/BigLogo.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shapes */ "./src/shapes.js");
/* harmony import */ var _getLatticeTopLeftPixel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getLatticeTopLeftPixel */ "./src/getLatticeTopLeftPixel.js");
var _jsxFileName = "/Users/fernando.canel/Code/me/stockholmrc.github.io/src/BigLogo.js";




var LENGTH = 465;
var Shapes = {
  Square: {
    type: 'square'
  },
  BottomLeftTriangle: {
    type: 'triangle',
    up: true,
    left: true
  },
  BottomRightTriangle: {
    type: 'triangle',
    up: true,
    left: false
  },
  TopLeftTriangle: {
    type: 'triangle',
    up: false,
    left: true
  },
  TopRightTriangle: {
    type: 'triangle',
    up: false,
    left: false
  }
};
var logo = {
  0: [Shapes.Square],
  1: [Shapes.Square],
  2: [Shapes.Square],
  5: [Shapes.Square],
  6: [Shapes.Square],
  7: [Shapes.Square],
  8: [Shapes.Square],
  9: [Shapes.TopLeftTriangle],
  10: [Shapes.BottomLeftTriangle],
  11: [Shapes.Square],
  12: [Shapes.Square]
};

var drawingLoop = function drawingLoop(getLatticeTopLeftPixelWithCenterAndGridSize, drawRect, drawTriangle, drawTriangleBoundary, squareSide, clean, time) {
  clean();

  for (var i = 0; i < LENGTH; i++) {
    var displacement = Math.max(20 - time, 0);
    var latticeTopLeftPixel = getLatticeTopLeftPixelWithCenterAndGridSize(i + displacement); // const shape = shapes[(i + time) % shapes.length]

    var pieces = logo[i];

    for (var j = 0; j < pieces.length; j++) {
      var shape = pieces[j];

      if (shape.type === 'rect') {
        drawRect(latticeTopLeftPixel[0], latticeTopLeftPixel[1], squareSide, squareSide);
      } else if (shape.type === 'triangle') {
        drawTriangle(latticeTopLeftPixel[0], latticeTopLeftPixel[1], shape.up, shape.left, squareSide, squareSide);
      } else if (shape.type === 'triangleBoundary') {
        drawTriangleBoundary(latticeTopLeftPixel[0], latticeTopLeftPixel[1], shape.up, shape.left, squareSide, squareSide);
      }
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var width = _ref.width,
      height = _ref.height,
      devicePixelRatio = _ref.devicePixelRatio;

  var _ref2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (_ref2.current !== undefined) {
      var squareSide = _constants__WEBPACK_IMPORTED_MODULE_1__["GRID"] * devicePixelRatio;
      var middlePoint = [Math.floor(width / 2) * devicePixelRatio, Math.floor(height / 2) * devicePixelRatio];

      var context2d = _ref2.current.getContext('2d');

      var getLatticeTopLeftPixelWithCenterAndGridSize = Object(_getLatticeTopLeftPixel__WEBPACK_IMPORTED_MODULE_3__["default"])(middlePoint, squareSide);
      context2d.fillStyle = 'rgba(0,0,0,.8)';
      var drawRect = Object(_shapes__WEBPACK_IMPORTED_MODULE_2__["rect"])(context2d);
      var drawTriangle = Object(_shapes__WEBPACK_IMPORTED_MODULE_2__["triangle"])(context2d);
      var drawTriangleBoundary = Object(_shapes__WEBPACK_IMPORTED_MODULE_2__["triangleBoundary"])(context2d);

      var clean = function clean() {
        return context2d.clearRect(0, 0, middlePoint[0] * 2, middlePoint[1] * 2);
      };

      var time = 0; // drawingLoop(getLatticeTopLeftPixelWithCenterAndGridSize, drawRect, drawTriangle, drawTriangleBoundary, squareSide, clean, time)

      setInterval(function () {
        drawingLoop(getLatticeTopLeftPixelWithCenterAndGridSize, drawRect, drawTriangle, drawTriangleBoundary, squareSide, clean, time);
        time++;
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
      lineNumber: 86
    },
    __self: this
  });
});

/***/ })

})
//# sourceMappingURL=bigLogo.js.b9fddae2ebb245dcd17e.hot-update.js.map