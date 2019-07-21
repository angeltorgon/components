"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _TableRow = _interopRequireDefault(require("./TableRow"));

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

describe('TableRow.js', function () {
  test('it displays "Read me"', function () {
    var _render = (0, _react2.render)(_react["default"].createElement("table", null, _react["default"].createElement("tbody", null, _react["default"].createElement(_TableRow["default"], null, _react["default"].createElement("td", null, "Read me"))))),
        getByText = _render.getByText;

    getByText('Read me');
  });
});