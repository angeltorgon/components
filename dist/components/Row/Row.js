"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n\n  display: ", ";\n  flex-direction: ", ";\n  flex-wrap: ", ";\n  justify-content: ", ";\n  align-items: ", ";\n  align-content: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Define component
 */
var Row = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.display ? props.display : 'flex';
}, function (props) {
  return props.direction ? props.direction : 'row';
}, function (props) {
  return props.wrap ? props.wrap : 'wrap';
}, function (props) {
  return props.justifyContent ? props.justifyContent : 'flex-start';
}, function (props) {
  return props.alignItems ? props.alignItems : 'stretch';
}, function (props) {
  return props.alignContent ? props.alignContent : 'stretch';
});
/**
 * Export component
 */


var _default = Row;
exports["default"] = _default;