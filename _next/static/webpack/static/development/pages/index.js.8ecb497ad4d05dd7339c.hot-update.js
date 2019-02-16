webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/fantasy-color/dist/Color.js":
/*!**************************************************!*\
  !*** ./node_modules/fantasy-color/dist/Color.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _brightness2 = __webpack_require__(/*! ./brightness */ "./node_modules/fantasy-color/dist/brightness.js");

var _fromString = _interopRequireDefault(__webpack_require__(/*! ./fromString */ "./node_modules/fantasy-color/dist/fromString.js"));

var _toString = __webpack_require__(/*! ./toString */ "./node_modules/fantasy-color/dist/toString.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var Color = function Color(input) {
  var x = typeof input === 'string' ? (0, _fromString.default)(input) : input;
  return x === undefined ? undefined : Color.of.apply(Color, _toConsumableArray(x));
};

var of = function of() {
  var red = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var green = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var blue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  return {
    red: red,
    green: green,
    blue: blue,
    alpha: alpha,
    brightness: function brightness() {
      return (0, _brightness2.brightness)(red, green, blue, alpha);
    },
    toHEX: function toHEX() {
      return (0, _toString.toHEX)(red, green, blue);
    },
    inspect: function inspect() {
      return (0, _toString.toRGBA)(red, green, blue, alpha);
    },
    toArray: function toArray() {
      return [red, green, blue, alpha];
    },
    toRGBA: function toRGBA() {
      return (0, _toString.toRGBA)(red, green, blue, alpha);
    },
    toHSVA: function toHSVA() {
      return (0, _toString.toHSVA)(red, green, blue, alpha);
    },
    toString: function toString() {
      return (0, _toString.toRGBA)(red, green, blue, alpha);
    },
    invert: function invert() {
      var invertColor = function invertColor(color) {
        return 255 - color;
      };

      return Color.of(invertColor(red), invertColor(green), invertColor(blue), alpha);
    }
  };
};

Color.brightness = _brightness2.brightness;
Color.getRedForEquivalentBrightnessColor = _brightness2.getRedForEquivalentBrightnessColor;
Color.getGreenForEquivalentBrightnessColor = _brightness2.getGreenForEquivalentBrightnessColor;
Color.getBlueForEquivalentBrightnessColor = _brightness2.getBlueForEquivalentBrightnessColor;
Color.equivalentBrightnessSet = _brightness2.equivalentBrightnessSet;
Color.toHEX = _toString.toHEX;
Color.toRGB = _toString.toRGB;
Color.toRGBA = _toString.toRGBA;
Color.toHSVA = _toString.toHSVA;
Color.of = of;
var _default = Color;
exports.default = _default;

/***/ }),

/***/ "./node_modules/fantasy-color/dist/brightness.js":
/*!*******************************************************!*\
  !*** ./node_modules/fantasy-color/dist/brightness.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.equivalentBrightnessSet = exports.getBlueForEquivalentBrightnessColor = exports.getGreenForEquivalentBrightnessColor = exports.getRedForEquivalentBrightnessColor = exports.brightness = exports.BLUE_BRIGHTNESS_WEIGHT = exports.GREEN_BRIGHTNESS_WEIGHT = exports.RED_BRIGHTNESS_WEIGHT = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Magical weights for calculating perceived relative brightness
// Taken from http://alienryderflex.com/hsp.html
var RED_BRIGHTNESS_WEIGHT = 0.299;
exports.RED_BRIGHTNESS_WEIGHT = RED_BRIGHTNESS_WEIGHT;
var GREEN_BRIGHTNESS_WEIGHT = 0.587;
exports.GREEN_BRIGHTNESS_WEIGHT = GREEN_BRIGHTNESS_WEIGHT;
var BLUE_BRIGHTNESS_WEIGHT = 0.114;
exports.BLUE_BRIGHTNESS_WEIGHT = BLUE_BRIGHTNESS_WEIGHT;

var brightness = function brightness(red, green, blue, alpha) {
  return Math.sqrt(Math.pow(red, 2) * RED_BRIGHTNESS_WEIGHT + Math.pow(green, 2) * GREEN_BRIGHTNESS_WEIGHT + Math.pow(blue, 2) * BLUE_BRIGHTNESS_WEIGHT) * alpha;
};

exports.brightness = brightness;

var getRedForEquivalentBrightnessColor = function getRedForEquivalentBrightnessColor(brightness, green, blue) {
  return Math.round(Math.sqrt((Math.pow(brightness, 2) - Math.pow(blue, 2) * BLUE_BRIGHTNESS_WEIGHT - Math.pow(green, 2) * GREEN_BRIGHTNESS_WEIGHT) / RED_BRIGHTNESS_WEIGHT));
};

exports.getRedForEquivalentBrightnessColor = getRedForEquivalentBrightnessColor;

var getGreenForEquivalentBrightnessColor = function getGreenForEquivalentBrightnessColor(brightness, red, blue) {
  return Math.round(Math.sqrt((Math.pow(brightness, 2) - Math.pow(blue, 2) * BLUE_BRIGHTNESS_WEIGHT - Math.pow(red, 2) * RED_BRIGHTNESS_WEIGHT) / GREEN_BRIGHTNESS_WEIGHT));
};

exports.getGreenForEquivalentBrightnessColor = getGreenForEquivalentBrightnessColor;

var getBlueForEquivalentBrightnessColor = function getBlueForEquivalentBrightnessColor(brightness, red, green) {
  return Math.round(Math.sqrt((Math.pow(brightness, 2) - Math.pow(red, 2) * RED_BRIGHTNESS_WEIGHT - Math.pow(green, 2) * GREEN_BRIGHTNESS_WEIGHT) / BLUE_BRIGHTNESS_WEIGHT));
};

exports.getBlueForEquivalentBrightnessColor = getBlueForEquivalentBrightnessColor;

var equivalentBrightnessSet = function equivalentBrightnessSet(brightness, equivalentBrightnessArray, options) {
  var lastEquivalentBrightnessColor = equivalentBrightnessArray[equivalentBrightnessArray.length - 1];
  var red = options.affect === 'red' ? getRedForEquivalentBrightnessColor(brightness, options.modify === 'green' ? lastEquivalentBrightnessColor[1] + options.variation : lastEquivalentBrightnessColor[1], options.modify === 'blue' ? lastEquivalentBrightnessColor[2] + options.variation : lastEquivalentBrightnessColor[2]) : options.modify === 'red' ? lastEquivalentBrightnessColor[0] + options.variation : lastEquivalentBrightnessColor[0];
  var green = options.affect === 'green' ? getGreenForEquivalentBrightnessColor(brightness, options.modify === 'red' ? lastEquivalentBrightnessColor[0] + options.variation : lastEquivalentBrightnessColor[0], options.modify === 'blue' ? lastEquivalentBrightnessColor[2] + options.variation : lastEquivalentBrightnessColor[2]) : options.modify === 'green' ? lastEquivalentBrightnessColor[1] + options.variation : lastEquivalentBrightnessColor[1];
  var blue = options.affect === 'blue' ? getBlueForEquivalentBrightnessColor(brightness, options.modify === 'red' ? lastEquivalentBrightnessColor[0] + options.variation : lastEquivalentBrightnessColor[0], options.modify === 'green' ? lastEquivalentBrightnessColor[1] + options.variation : lastEquivalentBrightnessColor[1]) : options.modify === 'blue' ? lastEquivalentBrightnessColor[2] + options.variation : lastEquivalentBrightnessColor[2];
  var next = [red, green, blue];

  if (!isNaN(red) && red >= 0 && red < 256 && !isNaN(green) && green >= 0 && green < 256 && !isNaN(blue) && blue >= 0 && blue < 256) {
    return equivalentBrightnessSet(brightness, _toConsumableArray(equivalentBrightnessArray).concat([next]), options);
  } else {
    return equivalentBrightnessArray;
  }
};

exports.equivalentBrightnessSet = equivalentBrightnessSet;

/***/ }),

/***/ "./node_modules/fantasy-color/dist/fromString.js":
/*!*******************************************************!*\
  !*** ./node_modules/fantasy-color/dist/fromString.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.fromHSVA = exports.fromRGB = exports.fromRGBA = exports.fromHEX = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var fromHEX = function fromHEX(input) {
  return input.length === 7 ? [input.slice(1, 3), input.slice(3, 5), input.slice(5, 7)].map(function (x) {
    return parseInt(x, 16);
  }).reduce(function (acc, color) {
    return acc === undefined || isNaN(color) ? undefined : _toConsumableArray(acc).concat([color]);
  }, []) : undefined;
};

exports.fromHEX = fromHEX;

var fromRGBA = function fromRGBA(input) {
  return input.indexOf('(') === -1 || input.indexOf(')') === -1 ? undefined : input.split('(')[1].split(')')[0].split(',').map(function (y) {
    return y.trim();
  }).map(function (z) {
    return z.indexOf('.') !== -1 ? parseFloat(z, 10) : parseInt(z, 10);
  }).reduce(function (acc, color) {
    return acc === undefined || isNaN(color) ? undefined : _toConsumableArray(acc).concat([color]);
  }, []);
};

exports.fromRGBA = fromRGBA;

var fromRGB = function fromRGB(input) {
  return input.indexOf('(') === -1 || input.indexOf(')') === -1 ? undefined : input.split('(')[1].split(')')[0].split(',').map(function (y) {
    return parseInt(y.trim(), 10);
  }).reduce(function (acc, color) {
    return acc === undefined || isNaN(color) ? undefined : _toConsumableArray(acc).concat([color]);
  }, []);
};

exports.fromRGB = fromRGB;

var fromHSVA = function fromHSVA(input) {
  var parsed = input.indexOf('(') === -1 || input.indexOf(')') === -1 ? undefined : input.split('(')[1].split(')')[0].split(',').map(function (y) {
    return y.trim();
  }).map(function (z) {
    return z.indexOf('.') !== -1 ? parseFloat(z, 10) : parseInt(z, 10);
  }).reduce(function (acc, color) {
    return acc === undefined || isNaN(color) ? undefined : _toConsumableArray(acc).concat([color]);
  }, []);

  if (parsed === undefined) {
    return undefined;
  } // https://en.wikipedia.org/wiki/HSL_and_HSV#From_HSV


  var _parsed = _slicedToArray(parsed, 4),
      hue = _parsed[0],
      saturation = _parsed[1],
      value = _parsed[2],
      alpha = _parsed[3];

  var normalizedSaturation = saturation / 100;
  var normalizedValue = value / 100;
  var C = normalizedValue * normalizedSaturation;
  var hueSixths = hue / 60;
  var X = C * (1 - Math.abs(hueSixths % 2 - 1));
  var red1, green1, blue1;

  if (hueSixths <= 1) {
    red1 = C;
    green1 = X;
    blue1 = 0;
  } else if (hueSixths <= 2) {
    red1 = X;
    green1 = C;
    blue1 = 0;
  } else if (hueSixths <= 3) {
    red1 = 0;
    green1 = C;
    blue1 = X;
  } else if (hueSixths <= 4) {
    red1 = 0;
    green1 = X;
    blue1 = C;
  } else if (hueSixths <= 5) {
    red1 = X;
    green1 = 0;
    blue1 = C;
  } else if (hueSixths <= 6) {
    red1 = C;
    green1 = 0;
    blue1 = X;
  }

  var m = normalizedValue - C;
  var red = Math.round((red1 + m) * 255);
  var green = Math.round((green1 + m) * 255);
  var blue = Math.round((blue1 + m) * 255);
  return [red, green, blue, alpha];
};

exports.fromHSVA = fromHSVA;

var _default = function _default(input) {
  if (input[0] === '#') {
    var colors = fromHEX(input);
    return colors === undefined ? undefined : colors;
  }

  if (input.slice(0, 4) === 'rgba') {
    var _colors = fromRGBA(input);

    return _colors === undefined ? undefined : _colors;
  }

  if (input.slice(0, 4) === 'hsva') {
    var _colors2 = fromHSVA(input);

    return _colors2 === undefined ? undefined : _colors2;
  }

  if (input.slice(0, 3) === 'rgb') {
    var _colors3 = fromRGB(input);

    return _colors3 === undefined || _colors3.length !== 3 ? undefined : _colors3;
  }
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/fantasy-color/dist/toString.js":
/*!*****************************************************!*\
  !*** ./node_modules/fantasy-color/dist/toString.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toHSBA = exports.toHSVA = exports.toRGBA = exports.toRGB = exports.toHEX = void 0;

var toHEX = function toHEX(red, green, blue) {
  return '#' + red.toString(16).toUpperCase() + green.toString(16).toUpperCase() + blue.toString(16).toUpperCase();
};

exports.toHEX = toHEX;

var toRGB = function toRGB(red, green, blue) {
  return "rgb(".concat(red, ", ").concat(green, ", ").concat(blue, ")");
};

exports.toRGB = toRGB;

var toRGBA = function toRGBA(red, green, blue, alpha) {
  return "rgba(".concat(red, ", ").concat(green, ", ").concat(blue, ", ").concat(alpha, ")");
}; // Implementation inspired from
// https://stackoverflow.com/a/4235146/5801727


exports.toRGBA = toRGBA;

var toHSVA = function toHSVA(red, green, blue, alpha) {
  var normalizedRed = red / 255;
  var normalizedGreen = green / 255;
  var normalizedBlue = blue / 255;
  var maximumValue = Math.max(normalizedRed, normalizedGreen, normalizedBlue);
  var minimumValue = Math.min(normalizedRed, normalizedGreen, normalizedBlue);
  var delta = maximumValue - minimumValue;
  var value = Math.round(maximumValue * 100);

  if (delta === 0) {
    // This means that this is gray
    var hue = 0;
    var _saturation = 0;
    return "hsva(".concat(hue, ", ").concat(_saturation, ", ").concat(value, ", ").concat(alpha, ")");
  }

  var saturation = Math.round(delta / maximumValue * 100);
  var deltaRed = ((maximumValue - normalizedRed) / 6 + delta / 2) / delta;
  var deltaGreen = ((maximumValue - normalizedGreen) / 6 + delta / 2) / delta;
  var deltaBlue = ((maximumValue - normalizedBlue) / 6 + delta / 2) / delta;

  switch (maximumValue) {
    case normalizedRed:
      {
        var _hue = Math.round(((deltaBlue - deltaGreen) * 360 + 360) % 360);

        return "hsva(".concat(_hue, ", ").concat(saturation, ", ").concat(value, ", ").concat(alpha, ")");
      }

    case normalizedGreen:
      {
        var _hue2 = Math.round(((1 / 3 + deltaRed - deltaBlue) * 360 + 360) % 360);

        return "hsva(".concat(_hue2, ", ").concat(saturation, ", ").concat(value, ", ").concat(alpha, ")");
      }

    case normalizedBlue:
      {
        var _hue3 = Math.round(((2 / 3 + deltaGreen - deltaRed) * 360 + 360) % 360);

        return "hsva(".concat(_hue3, ", ").concat(saturation, ", ").concat(value, ", ").concat(alpha, ")");
      }
  }
};

exports.toHSVA = toHSVA;
var toHSBA = toHSVA; // export const toHSV = (red, green, blue) => toHSVA(red, green, blue, 1)

exports.toHSBA = toHSBA;

/***/ }),

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

var _jsxFileName = "/Users/fernando.canel/Code/me/stockholmrc.github.io/src/Lattice.js";


var palette = [[19, 107, 251], [252, 107, 33], [252, 36, 226], [28, 165, 252], [253, 183, 43], [0, 0, 0]];

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
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var width = _ref.width,
      height = _ref.height,
      devicePixelRatio = _ref.devicePixelRatio;

  var _ref2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (_ref2.current !== undefined) {
      var squareSide = 10 * devicePixelRatio;
      var middlePoint = [Math.floor(width / 2) * devicePixelRatio, Math.floor(height / 2) * devicePixelRatio];

      var context2d = _ref2.current.getContext('2d');

      drawSquare(squareSide)(context2d).apply(void 0, middlePoint.concat([palette[0]]));
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("canvas", {
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
      lineNumber: 43
    },
    __self: this
  });
});

/***/ })

})
//# sourceMappingURL=index.js.8ecb497ad4d05dd7339c.hot-update.js.map