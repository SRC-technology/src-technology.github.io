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
  Rect: {
    type: 'rect'
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
  },
  BottomLine: {
    type: 'line',
    position: 'bottom'
  },
  LeftLine: {
    type: 'line',
    position: 'left'
  },
  RightLine: {
    type: 'line',
    position: 'right'
  },
  TopLine: {
    type: 'line',
    position: 'top'
  }
};
var logo = {
  0: [Shapes.Rect],
  1: [Shapes.Rect],
  2: [Shapes.Rect],
  5: [Shapes.Rect],
  6: [Shapes.Rect],
  7: [Shapes.Rect],
  8: [Shapes.Rect],
  9: [Shapes.TopLeftTriangle],
  10: [Shapes.BottomLeftTriangle],
  11: [Shapes.Rect],
  12: [Shapes.Rect],
  13: [Shapes.Rect],
  16: [Shapes.Rect],
  17: [Shapes.Rect],
  18: [Shapes.Rect],
  19: [Shapes.Rect],
  20: [Shapes.Rect],
  23: [Shapes.Rect],
  24: [Shapes.Rect],
  31: [Shapes.Rect],
  32: [Shapes.Rect],
  35: [Shapes.Rect],
  36: [Shapes.Rect],
  37: [Shapes.Rect],
  38: [Shapes.Rect],
  39: [Shapes.Rect],
  40: [Shapes.Rect],
  41: [Shapes.Rect],
  42: [Shapes.Rect],
  43: [Shapes.Rect],
  46: [Shapes.Rect],
  47: [Shapes.Rect],
  58: [Shapes.Rect],
  59: [Shapes.Rect],
  62: [Shapes.Rect],
  63: [Shapes.Rect],
  73: [Shapes.BottomRightTriangle, Shapes.LeftLine],
  74: [Shapes.Rect],
  75: [Shapes.Rect],
  76: [Shapes.Rect],
  77: [Shapes.Rect],
  78: [Shapes.BottomLeftTriangle],
  81: [Shapes.BottomRightTriangle],
  82: [Shapes.Rect],
  83: [Shapes.Rect],
  84: [Shapes.Rect],
  85: [Shapes.Rect],
  86: [Shapes.Rect],
  87: [Shapes.Rect],
  88: [Shapes.TopRightTriangle],
  112: [Shapes.LeftLine, Shapes.TopLine],
  113: [Shapes.BottomRightTriangle, Shapes.TopLine],
  114: [Shapes.Rect],
  115: [Shapes.Rect],
  116: [Shapes.BottomLeftTriangle],
  121: [Shapes.BottomRightTriangle],
  122: [Shapes.Rect],
  123: [Shapes.Rect],
  124: [Shapes.Rect],
  125: [Shapes.Rect],
  126: [Shapes.Rect],
  127: [Shapes.Rect],
  128: [Shapes.Rect],
  129: [Shapes.Rect],
  130: [Shapes.TopRightTriangle],
  147: [Shapes.TopLeftTriangle],
  148: [Shapes.Rect],
  149: [Shapes.Rect],
  150: [Shapes.BottomLeftTriangle, Shapes.RightLine],
  151: [Shapes.TopLine, Shapes.RightLine],
  154: [Shapes.Rect],
  155: [Shapes.Rect],
  170: [Shapes.Rect],
  171: [Shapes.Rect],
  178: [Shapes.Rect],
  179: [Shapes.Rect],
  199: [Shapes.TopLeftTriangle],
  200: [Shapes.Rect],
  201: [Shapes.Rect],
  202: [Shapes.Rect],
  203: [Shapes.Rect],
  204: [Shapes.BottomLeftTriangle, Shapes.TopLine],
  207: [Shapes.Rect],
  208: [Shapes.Rect],
  227: [Shapes.Rect],
  228: [Shapes.Rect],
  235: [Shapes.Rect],
  236: [Shapes.Rect],
  260: [Shapes.Rect],
  261: [Shapes.Rect],
  264: [Shapes.Rect],
  265: [Shapes.Rect],
  268: [Shapes.Rect],
  269: [Shapes.Rect],
  292: [Shapes.BottomLeftTriangle, Shapes.TopLine],
  293: [Shapes.Rect],
  300: [Shapes.Rect],
  301: [Shapes.Rect],
  329: [Shapes.Rect],
  330: [Shapes.Rect]
};

var drawingLoop = function drawingLoop(getLatticeTopLeftPixelWithCenterAndGridSize, drawRect, drawTriangle, drawTriangleBoundary, drawLine, squareSide, clean, time) {
  clean();

  for (var i = 0; i < LENGTH; i++) {
    // const displacement = Math.max(20 - time, 0)
    var latticeTopLeftPixel = getLatticeTopLeftPixelWithCenterAndGridSize(i); // const shape = shapes[(i + time) % shapes.length]

    var pieces = logo[i];

    if (pieces !== undefined) {
      console.log(pieces);

      for (var j = 0; j < pieces.length; j++) {
        var shape = pieces[j];

        if (shape.type === 'rect') {
          drawRect(latticeTopLeftPixel[0], latticeTopLeftPixel[1], squareSide, squareSide);
        } else if (shape.type === 'triangle') {
          drawTriangle(latticeTopLeftPixel[0], latticeTopLeftPixel[1], shape.up, shape.left, squareSide, squareSide);
        } else if (shape.type === 'triangleBoundary') {
          drawTriangleBoundary(latticeTopLeftPixel[0], latticeTopLeftPixel[1], shape.up, shape.left, squareSide, squareSide);
        } else if (shape.type === 'line') {
          drawLine(latticeTopLeftPixel[0], latticeTopLeftPixel[1], shape.position, squareSide);
        }
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
      var drawLine = Object(_shapes__WEBPACK_IMPORTED_MODULE_2__["line"])(context2d);

      var clean = function clean() {
        return context2d.clearRect(0, 0, middlePoint[0] * 2, middlePoint[1] * 2);
      };

      var time = 0; // drawingLoop(getLatticeTopLeftPixelWithCenterAndGridSize, drawRect, drawTriangle, drawTriangleBoundary, squareSide, clean, time)

      setInterval(function () {
        drawingLoop(getLatticeTopLeftPixelWithCenterAndGridSize, drawRect, drawTriangle, drawTriangleBoundary, drawLine, squareSide, clean, time);
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
      lineNumber: 185
    },
    __self: this
  });
});

/***/ })

})
//# sourceMappingURL=bigLogo.js.d394d9936e8acbd87b77.hot-update.js.map