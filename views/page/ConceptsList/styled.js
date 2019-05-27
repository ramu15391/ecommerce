"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainSection = exports.HeaderElement = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background: lightsalmon;\n    display: flex;\n    flex: 0 0 100%;\n    justify-content: center;\n    padding: 1rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex: 0 0 100%;\n    flex-wrap: wrap;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MainSection = _styledComponents["default"].section(_templateObject());

exports.MainSection = MainSection;

var HeaderElement = _styledComponents["default"].header.attrs({
  className: 'header'
})(_templateObject2());

exports.HeaderElement = HeaderElement;