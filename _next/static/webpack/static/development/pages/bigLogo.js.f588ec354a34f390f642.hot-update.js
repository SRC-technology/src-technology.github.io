webpackHotUpdate("static/development/pages/bigLogo.js",{

/***/ "./src/shapes.js":
/*!***********************!*\
  !*** ./src/shapes.js ***!
  \***********************/
/*! exports provided: rect, circle, dot, triangle, triangleBoundary, line */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rect", function() { return rect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circle", function() { return circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triangle", function() { return triangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triangleBoundary", function() { return triangleBoundary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "line", function() { return line; });
var rect = function rect(context2d) {
  return function (x, y, width, height) {
    context2d.fillRect(x, y, width, height);
  };
};
var circle = function circle(context2d) {
  return function (x, y, radius) {
    context2d.beginPath();
    context2d.arc(x, y, radius, 0, 2 * Math.PI);
    context2d.fill();
  };
};
var dot = function dot(context2d) {
  return function (x, y) {
    context2d.beginPath();
    context2d.arc(x, y, 2, 0, 2 * Math.PI);
    context2d.fill();
  };
};
var triangle = function triangle(context2d) {
  return function (x, y, up, left, width, height) {
    context2d.beginPath();
    context2d.moveTo(left ? x : x + width, up ? y : y + height);
    context2d.lineTo(left ? x : x + width, up ? y + height : y);
    context2d.lineTo(left ? x + width : x, up ? y + height : y);
    context2d.closePath();
    context2d.fill();
  };
};
var triangleBoundary = function triangleBoundary(context2d) {
  return function (x, y, up, left, width, height) {
    context2d.beginPath();

    if (up && left) {
      context2d.moveTo(x + width, y);
      context2d.lineTo(x + width, y + height / 10);
      context2d.lineTo(x + width / 10, y + height / 10);
      context2d.lineTo(x + width / 10, y + height);
      context2d.lineTo(x, y + height);
      context2d.lineTo(x, y);
    } else if (!up && !left) {
      context2d.moveTo(x, y + height);
      context2d.lineTo(x, y + height - height / 10);
      context2d.lineTo(x + width - width / 10, y + height - height / 10);
      context2d.lineTo(x + width - width / 10, y);
      context2d.lineTo(x + width, y);
      context2d.lineTo(x + width, y + height);
    } else if (!up && left) {
      context2d.moveTo(x + width, y + height);
      context2d.lineTo(x + width, y + height - height / 10);
      context2d.lineTo(x + width / 10, y + height - height / 10);
      context2d.lineTo(x + width / 10, y);
      context2d.lineTo(x, y);
      context2d.lineTo(x, y + height);
    } else if (up && !left) {
      context2d.moveTo(x, y);
      context2d.lineTo(x + width, y);
      context2d.lineTo(x + width, y + height);
      context2d.lineTo(x + width - width / 10, y + height);
      context2d.lineTo(x + width - width / 10, y + height / 10);
      context2d.lineTo(x, y + height / 10);
    }

    context2d.closePath();
    context2d.fill();
  };
};
var line = function line(context2d) {
  return function (x, y, position, grid) {
    var thick = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
    var width = grid / (thick ? 5 : 10);

    switch (position) {
      case 'left':
        {
          return context2d.fillRect(x, y, width, grid);
        }

      case 'right':
        {
          return context2d.fillRect(x + grid - width, y, width, grid);
        }

      case 'top':
        {
          return context2d.fillRect(x, y, grid, width);
        }

      case 'bottom':
        {
          return context2d.fillRect(x, y + grid - width, grid, width);
        }
    }
  };
};

/***/ })

})
//# sourceMappingURL=bigLogo.js.f588ec354a34f390f642.hot-update.js.map