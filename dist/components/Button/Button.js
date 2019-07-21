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
function Button(props) {
  return _react["default"].createElement("button", null, props.children);
}

;
/**
 * Export component
 */

var _default = Button;
exports["default"] = _default;