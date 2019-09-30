"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _FormGroup = _interopRequireDefault(require("./FormGroup"));

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

describe('FormGroup.js', function () {
  test('it renders without errors', function () {
    (0, _react2.render)(_react["default"].createElement(_FormGroup["default"], null));
  });
});