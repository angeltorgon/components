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
function TableHeadCell(props) {
  return _react["default"].createElement("th", null, props.children);
}

;
/**
 * Export component
 */

var _default = TableHeadCell;
exports["default"] = _default;