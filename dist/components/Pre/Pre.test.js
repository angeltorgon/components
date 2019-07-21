"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Pre = _interopRequireDefault(require("./Pre"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Dependencies
 */

/**
 * Hooks
 */
afterEach(_react2.cleanup);
/**
 * Assertions
 */

describe('Pre.js', function () {
  test('it renders without errors', function () {
    (0, _react2.render)(_react["default"].createElement(_Pre["default"], null));
  });
  test('it displays "Read me"', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_Pre["default"], null, "Read me")),
        getByText = _render.getByText;

    getByText('Read me');
  });
});