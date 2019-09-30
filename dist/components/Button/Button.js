"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  color: #FFF;\n  background-color: #F03434;\n  border-color: #F03434;\n  \n  &:hover {\n    text-decoration: none;\n    background-color: #D82E2E;\n    border-color: #D82E2E;\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 0.2rem rgba(240,52,52,.5);\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: #1D2124;\n  background-color: #F0D534;\n  border-color: #F0D534;\n  \n  &:hover {\n    text-decoration: none;\n    background-color: #D8BF2E;\n    border-color: #D8BF2E;\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 0.2rem rgba(240,213,52,.5);\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: #FFF;\n  background-color: #3DAF57;\n  border-color: #3DAF57;\n  \n  &:hover {\n    text-decoration: none;\n    background-color: #369D4E;\n    border-color: #369D4E;\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 0.2rem rgba(61,175,87,.5);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: #1D2124;\n  background-color: #E3E3E3;\n  border-color: #E3E3E3;\n  \n  &:hover {\n    text-decoration: none;\n    background-color: #CCCCCC;\n    border-color: #CCCCCC;\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 0.2rem rgba(227,227,227,.5);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: #FFF;\n  background-color: #348FF0;\n  border-color: #348FF0;\n  \n  &:hover {\n    text-decoration: none;\n    background-color: #2E80D8;\n    border-color: #2E80D8;\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 0.2rem rgba(52,143,240,.5);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  border: 0;\n  outline: 0;\n  text-align: center;\n  vertical-align: middle;\n\n  font-family: ", ";\n  font-weight: ", ";\n  cursor: ", ";\n  padding: ", ";\n  ", "\n  ", "\n  ", "\n\n  &:focus {\n    box-shadow: 0 0 0 0.2rem rgba(52,143,240,.25);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Define helpers
 */
function fillIn(arg) {
  if (arg === 'horizontal') {
    return 'width: 100%;';
  } else if (arg === 'vertical') {
    return 'height: 100%;';
  } else {
    return 'width: 100%; height: 100%;';
  }
}

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

function setSize(props) {
  if (props.large) {
    return "padding: .5rem 1rem; font-size: 1.25rem; line-height: 1.5;";
  } else if (props.small) {
    return "padding: 3px 8px; font-size: .8rem; line-height: 1.5;";
  }
}
/**
 * Define styles
 */


var Component = _styledComponents["default"].button(_templateObject(), function (props) {
  return props.fontFamily ? props.fontFamily : '-apple-system, "Roboto", "Ubuntu", "Helvetica", "Arial", sans-serif';
}, function (props) {
  return props.weight ? props.weight : '500';
}, function (props) {
  return props.cursor ? props.cursor : 'pointer';
}, function (props) {
  return props.padding ? props.padding : '9px 18px';
}, function (props) {
  return props.fill ? fillIn(props.fill) : '';
}, function (props) {
  return setBorderRadius(props);
}, function (props) {
  return setSize(props);
});

var ButtonPrimary = (0, _styledComponents["default"])(Component)(_templateObject2());
var ButtonSecondary = (0, _styledComponents["default"])(Component)(_templateObject3());
var ButtonSuccess = (0, _styledComponents["default"])(Component)(_templateObject4());
var ButtonWarning = (0, _styledComponents["default"])(Component)(_templateObject5());
var ButtonDanger = (0, _styledComponents["default"])(Component)(_templateObject6());
/**
 * Define component
 */

function Button(props) {
  switch (props.type) {
    case 'primary':
      return _react["default"].createElement(ButtonPrimary, props, props.children);

    case 'secondary':
      return _react["default"].createElement(ButtonSecondary, props, props.children);

    case 'success':
      return _react["default"].createElement(ButtonSuccess, props, props.children);

    case 'warning':
      return _react["default"].createElement(ButtonWarning, props, props.children);

    case 'danger':
      return _react["default"].createElement(ButtonDanger, props, props.children);

    default:
      return _react["default"].createElement(ButtonPrimary, props, props.children);
  }
}
/**
 * Export component
 */


var _default = Button;
exports["default"] = _default;