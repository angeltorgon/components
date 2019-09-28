"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Column = _interopRequireDefault(require("./Column"));

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

describe('Column.js', function () {
  test('it renders without errors', function () {
    (0, _react2.render)(_react["default"].createElement(_Column["default"], null));
  });
});