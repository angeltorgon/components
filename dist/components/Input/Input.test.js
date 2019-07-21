"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Input = _interopRequireDefault(require("./Input"));

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

describe('Input.js', function () {
  test('it renders without errors', function () {
    (0, _react2.render)(_react["default"].createElement(_Input["default"], null));
  });
  test('it displays "Read me"', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_Input["default"], {
      id: "input-username",
      type: "text",
      name: "username",
      value: "wurde"
    })),
        container = _render.container;

    var inputs = container.getElementsByTagName('input');
    expect(inputs.length).toBe(1);
    expect(inputs[0].name).toBe('username');
    expect(inputs[0].value).toBe('wurde');
  });
});