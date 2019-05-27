"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContainerElement = exports.HeaderElement = exports.SectionElement = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    width: 100%;\n    flex-wrap: wrap;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    width: 100%;\n    flex-wrap: wrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    width: 100%;\n    flex-wrap: wrap;\n    background: lightcyan;\n    margin: 1rem 0rem;\n    padding:1rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SectionElement = _styledComponents["default"].section(_templateObject());

exports.SectionElement = SectionElement;

var HeaderElement = _styledComponents["default"].header(_templateObject2());

exports.HeaderElement = HeaderElement;

var ContainerElement = _styledComponents["default"].div(_templateObject3());

exports.ContainerElement = ContainerElement;