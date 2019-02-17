webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/getLogoList.js":
/*!****************************!*\
  !*** ./src/getLogoList.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var shapes = [{
  type: 'rect'
}, {
  type: 'triangle',
  up: true,
  left: false
}, {
  type: 'triangle',
  up: false,
  left: true
}, {
  type: 'triangle',
  up: true,
  left: true
}, {
  type: 'triangle',
  up: false,
  left: false
}, {
  type: 'triangleBoundary',
  up: true,
  left: true
}, {
  type: 'empty'
}, {
  type: 'triangleBoundary',
  up: true,
  left: false
}, {
  type: 'triangleBoundary',
  up: false,
  left: true
}, {
  type: 'triangleBoundary',
  up: false,
  left: false
}];

var getBottomLeftSCorner = function getBottomLeftSCorner() {
  var random = Math.random();

  if (random < 0.8) {
    return [shapes[0]];
  } else if (random < 0.9) {
    return [shapes[1]];
  } else {
    return [shapes[1], shapes[5]];
  }
};

var getCenterRightSCorner = function getCenterRightSCorner() {
  var random = Math.random();

  if (random < 0.8) {
    return [shapes[0]];
  } else {
    return [shapes[3], shapes[7]];
  }
};

var getCenterLeftSCorner = function getCenterLeftSCorner() {
  var random = Math.random();

  if (random < 0.8) {
    return [shapes[0]];
  } else if (random < 0.9) {
    return [shapes[4]];
  } else {
    return [shapes[4], shapes[8]];
  }
};

var getTopRightSCorner = function getTopRightSCorner() {
  var random = Math.random();

  if (random < 0.8) {
    return [shapes[0]];
  } else if (random < 0.9) {
    return [shapes[2]];
  } else {
    return [shapes[2], shapes[9]];
  }
};

var getTopLeftRCorner = function getTopLeftRCorner() {
  var random = Math.random();

  if (random > 0.8) {
    return [shapes[1], shapes[5]];
  } else {
    return [shapes[0]];
  }
};

var getTopRightCCorner = function getTopRightCCorner() {
  var random = Math.random();

  if (random < 0.7) {
    return [shapes[3], shapes[7]];
  } else if (random < 0.8) {
    return [shapes[2], shapes[9]];
  } else if (random < 0.9) {
    return [shapes[2]];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return [[shapes[0]], [shapes[3], shapes[2]], [shapes[0]], [shapes[6]], [shapes[0]], [shapes[0]], [shapes[0]], [shapes[6]], [shapes[0]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[0]], [shapes[6]], [shapes[0]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], getTopLeftRCorner(), [shapes[0]], [shapes[3]], [shapes[6]], [shapes[1]], [shapes[0]], [shapes[0]], [shapes[0]], [shapes[4]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[2]], [shapes[0]], getCenterRightSCorner(), [shapes[6]], getTopRightSCorner(), [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[0]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[0]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[0]], [shapes[6]], [shapes[0]], [shapes[6]], [shapes[0]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[3], shapes[7]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[0]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], [shapes[6]], getBottomLeftSCorner(), [shapes[6]], getCenterLeftSCorner(), [shapes[0]], [shapes[1]]];
});

/***/ })

})
//# sourceMappingURL=index.js.64f18a7fd3f25fb04488.hot-update.js.map