"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n\n  @media (min-width: 576px) {\n    max-width: 540px;\n  }\n\n  @media (min-width: 768px) {\n    max-width: 720px;\n  }\n\n  @media (min-width: 992px) {\n    max-width: 960px;\n  }\n\n  @media (min-width: 1200px) {\n    max-width: 1140px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Define component
 */
var Container = _styledComponents["default"].div(_templateObject());
/**
 * Export component
 */


var _default = Container;
exports["default"] = _default;