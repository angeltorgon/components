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
function TableBody(props) {
  return _react["default"].createElement("tbody", null, props.children);
}

;
/**
 * Export component
 */

var _default = TableBody;
exports["default"] = _default;