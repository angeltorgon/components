"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Define component
 */
var Paragraph = _styledComponents["default"].p(_templateObject(), function (props) {
  return props.fontFamily ? props.fontFamily : '-apple-system, "Roboto", "Ubuntu", "Helvetica", "Arial", sans-serif';
}, function (props) {
  return props.lineHeight ? "line-height: ".concat(props.lineHeight, ";") : '';
}, function (props) {
  return props.letterSpacing ? "letter-spacing: ".concat(props.letterSpacing, ";") : '';
}, function (props) {
  return props.align ? "text-align: ".concat(props.align, ";") : '';
}, function (props) {
  return props.weight ? "font-weight: ".concat(props.weight, ";") : '';
}, function (props) {
  return props.size ? "font-size: ".concat(props.size, ";") : '';
}, function (props) {
  return props.color ? "color: ".concat(props.color, ";") : '';
}, function (props) {
  return props.backgroundColor ? "background-color: ".concat(props.backgroundColor, ";") : '';
});
/**
 * Export component
 */


var _default = Paragraph;
exports["default"] = _default;