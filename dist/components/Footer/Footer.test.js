"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Footer = _interopRequireDefault(require("./Footer"));

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

describe('Footer.js', function () {
  test('it renders without errors', function () {
    (0, _react2.render)(_react["default"].createElement(_Footer["default"], null));
  });
  test('it displays "Footer Content"', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_Footer["default"], null, "Footer Content")),
        getByText = _render.getByText;

    getByText('Footer Content');
  });
});