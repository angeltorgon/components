"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Label = _interopRequireDefault(require("./Label"));

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

describe('Label.js', function () {
  test('it renders without errors', function () {
    (0, _react2.render)(_react["default"].createElement(_Label["default"], null));
  });
  test('it displays "Read me"', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_Label["default"], null, "Read me")),
        getByText = _render.getByText;

    getByText('Read me');
  });
});