"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Dependencies
 */

/**
 * Define component
 */
function Heading(props) {
  switch (props.type) {
    case 'h1':
      return _react["default"].createElement("h1", null, props.children);

    case 'h2':
      return _react["default"].createElement("h2", null, props.children);

    case 'h3':
      return _react["default"].createElement("h3", null, props.children);

    case 'h4':
      return _react["default"].createElement("h4", null, props.children);

    case 'h5':
      return _react["default"].createElement("h5", null, props.children);

    case 'h6':
      return _react["default"].createElement("h6", null, props.children);

    default:
      return _react["default"].createElement("h2", null, props.children);
  }
}

;
/**
 * Export component
 */

var _default = Heading;
exports["default"] = _default;