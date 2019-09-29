"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-weight: ", ";\n  margin: ", ";\n  font-family: ", ";\n\n  line-height: ", ";\n  letter-spacing: ", ";\n  text-align: ", ";\n  color: ", ";\n  background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Define styles
 */
var Component = _styledComponents["default"].h2(_templateObject(), function (props) {
  return props.weight ? props.weight : '400';
}, function (props) {
  return props.margin ? props.margin : '0';
}, function (props) {
  return props.fontFamily ? props.fontFamily : '-apple-system, "Roboto", "Ubuntu", "Helvetica", "Arial", sans-serif';
}, function (props) {
  return props.lineHeight ? props.lineHeight : '';
}, function (props) {
  return props.letterSpacing ? props.letterSpacing : '';
}, function (props) {
  return props.align ? props.align : '';
}, function (props) {
  return props.color ? props.color : '';
}, function (props) {
  return props.backgroundColor ? props.backgroundColor : '';
});

var ComponentH1 = (0, _styledComponents["default"])(Component)(_templateObject2(), function (props) {
  return props.size ? props.size : '4.5rem';
});
var ComponentH2 = (0, _styledComponents["default"])(Component)(_templateObject3(), function (props) {
  return props.size ? props.size : '3rem';
});
var ComponentH3 = (0, _styledComponents["default"])(Component)(_templateObject4(), function (props) {
  return props.size ? props.size : '2.3rem';
});
var ComponentH4 = (0, _styledComponents["default"])(Component)(_templateObject5(), function (props) {
  return props.size ? props.size : '1.8rem';
});
var ComponentH5 = (0, _styledComponents["default"])(Component)(_templateObject6(), function (props) {
  return props.size ? props.size : '1.5rem';
});
var ComponentH6 = (0, _styledComponents["default"])(Component)(_templateObject7(), function (props) {
  return props.size ? props.size : '1.25rem';
});
/**
 * Define component
 */

function Heading(props) {
  switch (props.type) {
    case 'h1':
      return _react["default"].createElement(ComponentH1, _extends({
        as: "h1"
      }, props), props.children);

    case 'h2':
      return _react["default"].createElement(ComponentH2, _extends({
        as: "h2"
      }, props), props.children);

    case 'h3':
      return _react["default"].createElement(ComponentH3, _extends({
        as: "h3"
      }, props), props.children);

    case 'h4':
      return _react["default"].createElement(ComponentH4, _extends({
        as: "h4"
      }, props), props.children);

    case 'h5':
      return _react["default"].createElement(ComponentH5, _extends({
        as: "h5"
      }, props), props.children);

    case 'h6':
      return _react["default"].createElement(ComponentH6, _extends({
        as: "h6"
      }, props), props.children);

    default:
      return _react["default"].createElement(ComponentH2, _extends({
        as: "h2"
      }, props), props.children);
  }
}

;
/**
 * Export component
 */

var _default = Heading;
exports["default"] = _default;