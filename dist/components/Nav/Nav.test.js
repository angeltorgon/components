"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Nav = _interopRequireDefault(require("./Nav"));

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

describe('Nav.js', function () {
  test('it renders without errors', function () {
    (0, _react2.render)(_react["default"].createElement(_Nav["default"], null));
  });
  test('it displays "Home"', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_Nav["default"], null, _react["default"].createElement("ul", null, _react["default"].createElement("li", null, _react["default"].createElement("a", {
      href: "#"
    }, "Home")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
      href: "#"
    }, "About")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
      href: "#"
    }, "Contact"))))),
        getByText = _render.getByText;

    getByText('Home');
  });
});