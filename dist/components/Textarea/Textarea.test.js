"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Textarea = _interopRequireDefault(require("./Textarea"));

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

describe('Textarea.js', function () {
  test('it renders without errors', function () {
    (0, _react2.render)(_react["default"].createElement(_Textarea["default"], null));
  });
});