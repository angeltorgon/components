"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Header = _interopRequireDefault(require("./Header"));

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

describe('Header.js', function () {
  test('it renders without errors', function () {
    (0, _react2.render)(_react["default"].createElement(_Header["default"], null));
  });
  test('it displays "Header Content"', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_Header["default"], null, "Header Content")),
        getByText = _render.getByText;

    getByText('Header Content');
  });
});