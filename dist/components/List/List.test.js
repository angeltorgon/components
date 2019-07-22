"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _List = _interopRequireDefault(require("./List"));

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

describe('List.js', function () {
  test('it renders without errors', function () {
    (0, _react2.render)(_react["default"].createElement(_List["default"], null));
  });
  test('it displays "Read me"', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_List["default"], null, _react["default"].createElement("li", null, "Item 1"), _react["default"].createElement("li", null, "Item 2"))),
        getByText = _render.getByText;

    getByText('Item 1');
  });
});