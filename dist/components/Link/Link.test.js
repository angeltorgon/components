"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Link = _interopRequireDefault(require("./Link"));

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

describe('Link.js', function () {
  test('it renders without errors', function () {
    (0, _react2.render)(_react["default"].createElement(_Link["default"], null));
  });
  test('it displays "Click me"', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_Link["default"], null, "Click me")),
        getByText = _render.getByText;

    getByText('Click me');
  });
});