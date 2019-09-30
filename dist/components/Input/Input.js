"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  border: 0;\n  outline: 0;\n  font-size: 1rem;\n  padding: .5rem .75rem;\n  \n  font-weight: ", ";\n  transition: ", ";\n  ", "\n  ", "\n  \n  &:focus {\n    ", "\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Define helpers
 */
function setBorderRadius(props) {
  if (props.pill) {
    return 'border-radius: 36px;';
  } else if (props.square) {
    return 'border-radius: 0px;';
  } else if (props.borderRadius) {
    return "border-radius: ".concat(props.borderRadius, ";");
  } else {
    return 'border-radius: 3px;';
  }
}

function setBorder(props) {
  if (props.valid) {
    return 'border: 1px solid #3DAF57;';
  } else if (props.invalid) {
    return 'border: 1px solid #F03434;';
  } else {
    return 'border: 1px solid #D2D8DD;';
  }
}

function setBoxShadow(props) {
  if (props.valid) {
    return 'box-shadow: 0 0 0 0.2rem rgba(61,175,87,.25);';
  } else if (props.invalid) {
    return 'box-shadow: 0 0 0 0.2rem rgba(240,52,52,.25);';
  } else {
    return 'box-shadow: 0 0 0 0.2rem rgba(52,143,240,.25);';
  }
}
/**
 * Define styles
 */


var Component = _styledComponents["default"].input(_templateObject(), function (props) {
  return props.weight ? props.weight : '400';
}, function (props) {
  return props.transition ? props.transition : 'all 0.2s ease';
}, function (props) {
  return setBorderRadius(props);
}, function (props) {
  return setBorder(props);
}, function (props) {
  return setBoxShadow(props);
});
/**
 * Define component
 */


function Input(props) {
  return _react["default"].createElement(Component, _extends({
    type: "text"
  }, props), props.children);
}
/**
 * Export component
 */


var _default = Input;
exports["default"] = _default;