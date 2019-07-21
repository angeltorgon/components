"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Button = _interopRequireDefault(require("./Button"));

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

describe('Button.js', function () {
  test('it renders without errors', function () {
    (0, _react2.render)(_react["default"].createElement(_Button["default"], null));
  });
  test('it displays "Click me"', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_Button["default"], null, "Click me")),
        getByText = _render.getByText;

    getByText('Click me');
  });
});