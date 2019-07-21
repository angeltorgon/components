"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Section = _interopRequireDefault(require("./Section"));

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

describe('Section.js', function () {
  test('it renders without errors', function () {
    (0, _react2.render)(_react["default"].createElement(_Section["default"], null));
  });
  test('it displays "Section Content"', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_Section["default"], null, "Section Content")),
        getByText = _render.getByText;

    getByText('Section Content');
  });
});