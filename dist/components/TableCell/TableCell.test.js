"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _TableCell = _interopRequireDefault(require("./TableCell"));

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

describe('TableCell.js', function () {
  test('it displays "Read me"', function () {
    var _render = (0, _react2.render)(_react["default"].createElement("table", null, _react["default"].createElement("tbody", null, _react["default"].createElement("tr", null, _react["default"].createElement(_TableCell["default"], null, "Read me"))))),
        getByText = _render.getByText;

    getByText('Read me');
  });
});