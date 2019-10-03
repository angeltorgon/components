"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.text = void 0;

var _react = _interopRequireDefault(require("react"));

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Dependencies
 */

/**
 * Define component
 */
var text = function text() {
  return _react["default"].createElement(_Text["default"], null, "A span tag!");
};
/**
 * Export component
 */


exports.text = text;
var _default = {
  title: 'Text'
};
exports["default"] = _default;