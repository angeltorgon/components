"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  outline: 0;\n\n  color: ", ";\n  background-color: ", ";\n  font-weight: ", ";\n  transition: ", ";\n  \n  &:hover {\n    color: ", ";\n  }\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Define styles
 */
var underlineNone = "\n  text-decoration: none;\n  \n  &:hover {\n    text-decoration: none;\n  }\n";
var underlineHover = "\n  text-decoration: none;\n  \n  &:hover {\n    text-decoration: underline;\n  }\n";
var underlineAlways = "\n  text-decoration: underline;\n  \n  &:hover {\n    text-decoration: underline;\n  }\n";
/**
 * Define component
 */

var Link = _styledComponents["default"].a(_templateObject(), function (props) {
  return props.color ? props.color : '#348FF0';
}, function (props) {
  return props.backgroundColor ? props.backgroundColor : 'transparent';
}, function (props) {
  return props.weight ? props.weight : '500';
}, function (props) {
  return props.transition ? props.transition : 'all 0.2s ease';
}, function (props) {
  return props.hoverColor ? props.hoverColor : '#2E80D8';
}, function (props) {
  if (props.underline === 'none') {
    return underlineNone;
  } else if (props.underline === 'hover') {
    return underlineHover;
  } else if (props.underline === 'always') {
    return underlineAlways;
  } else {
    return underlineHover;
  }
});
/**
 * Export component
 */


var _default = Link;
exports["default"] = _default;