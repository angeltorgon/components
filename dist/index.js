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
function Link() {
  return _react["default"].createElement("a", {
    href: "#"
  }, "Link 2");
}

;
/**
 * Export component
 */

var _default = Link;
exports["default"] = _default;