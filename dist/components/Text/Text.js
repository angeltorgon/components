"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  line-height: ", ";\n  letter-spacing: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  color: ", ";\n  background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Define component
 */
var Text = _styledComponents["default"].span(_templateObject(), function (props) {
  return props.fontFamily ? props.fontFamily : 'inherit';
}, function (props) {
  return props.lineHeight ? props.lineHeight : 'inherit';
}, function (props) {
  return props.letterSpacing ? props.letterSpacing : 'inherit';
}, function (props) {
  return props.weight ? props.weight : 'inherit';
}, function (props) {
  return props.size ? props.size : 'inherit';
}, function (props) {
  return props.color ? props.color : 'inherit';
}, function (props) {
  return props.backgroundColor ? props.backgroundColor : 'inherit';
});
/**
 * Export component
 */


var _default = Text;
exports["default"] = _default;