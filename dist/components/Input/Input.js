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
function Input(props) {
  return _react["default"].createElement("input", {
    id: props.id,
    type: props.type,
    name: props.name,
    value: props.value,
    readOnly: true
  });
}

;
/**
 * Export component
 */

var _default = Input;
exports["default"] = _default;