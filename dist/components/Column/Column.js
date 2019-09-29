"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n\n  flex-grow: ", ";\n  flex-shrink: ", ";\n  flex-basis: ", ";\n  align-self: ", ";\n  ", ";\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Define helpers
 */
function calc_width(n) {
  if (n) {
    n = Math.round(n / 12 * 10e7) / 10e5;
    if (n < 0) n = 0;
    if (n > 100) n = 100;
    return "".concat(n, "%");
  } else {
    return '100%';
  }
}

function calc_spacing() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return "padding: ".concat(n * 4, "px;");
}
/**
 * Define component
 */


var Column = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.grow ? props.grow : 0;
}, function (props) {
  return props.shrink ? props.shrink : 0;
}, function (props) {
  return calc_width(props.width);
}, function (props) {
  return props.alignSelf ? props.alignSelf : 'auto';
}, function (props) {
  return props.order ? "order: ".concat(props.order, ";") : '';
}, function (props) {
  return calc_spacing(props.spacing);
});
/**
 * Export component
 */


var _default = Column;
exports["default"] = _default;