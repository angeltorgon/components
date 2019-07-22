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
function List(props) {
  if (props.ordered) {
    return _react["default"].createElement("ol", null, props.children);
  } else {
    return _react["default"].createElement("ul", null, props.children);
  }
}

;
/**
 * Export component
 */

var _default = List;
exports["default"] = _default;