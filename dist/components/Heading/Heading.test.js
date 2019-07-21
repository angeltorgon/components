"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Heading = _interopRequireDefault(require("./Heading"));

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

describe('Heading.js', function () {
  test('it renders without errors', function () {
    (0, _react2.render)(_react["default"].createElement(_Heading["default"], null));
  });
  test('it renders h2 by default', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_Heading["default"], null, "H2")),
        container = _render.container;

    var h1_tags = container.getElementsByTagName('h1');
    expect(h1_tags.length).toBe(0);
    var h2_tags = container.getElementsByTagName('h2');
    expect(h2_tags.length).toBe(1);
  });
  test('it displays "Big Title"', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_Heading["default"], null, "Big Title")),
        getByText = _render2.getByText;

    getByText('Big Title');
  });
  test('it displays types h1,h2,h3,h4,h5,h6', function () {
    var _render3 = (0, _react2.render)(_react["default"].createElement("div", null, _react["default"].createElement(_Heading["default"], {
      type: "h1"
    }, "H1"), _react["default"].createElement(_Heading["default"], {
      type: "h2"
    }, "H2"), _react["default"].createElement(_Heading["default"], {
      type: "h3"
    }, "H3"), _react["default"].createElement(_Heading["default"], {
      type: "h4"
    }, "H4"), _react["default"].createElement(_Heading["default"], {
      type: "h5"
    }, "H5"), _react["default"].createElement(_Heading["default"], {
      type: "h6"
    }, "H6"))),
        container = _render3.container;

    var h1_tags = container.getElementsByTagName('h1');
    expect(h1_tags.length).toBe(1);
    expect(h1_tags[0].textContent).toBe('H1');
    var h2_tags = container.getElementsByTagName('h2');
    expect(h2_tags.length).toBe(1);
    expect(h2_tags[0].textContent).toBe('H2');
    var h3_tags = container.getElementsByTagName('h3');
    expect(h3_tags.length).toBe(1);
    expect(h3_tags[0].textContent).toBe('H3');
    var h4_tags = container.getElementsByTagName('h4');
    expect(h4_tags.length).toBe(1);
    expect(h4_tags[0].textContent).toBe('H4');
    var h5_tags = container.getElementsByTagName('h5');
    expect(h5_tags.length).toBe(1);
    expect(h5_tags[0].textContent).toBe('H5');
    var h6_tags = container.getElementsByTagName('h6');
    expect(h6_tags.length).toBe(1);
    expect(h6_tags[0].textContent).toBe('H6');
  });
});