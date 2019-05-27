"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarouseRightButton = exports.CarouselLeftButton = exports.CarouselImage = exports.CarouselListContainer = exports.CarouselItemWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    right: 0;\n    left: auto;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    left: 0;\n    right: auto;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    max-height: 100%;\n    max-width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    padding: 0;\n    flex-direction: row;\n    transform: ", ";\n    transition: all 1s ease-in-out;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width:  250px;\n    height: 250px;\n    position: relative;\n    display: flex;\n    flex: 0 0 20rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CarouselItemWrapper = _styledComponents["default"].li(_templateObject());

exports.CarouselItemWrapper = CarouselItemWrapper;

var CarouselSection = _styledComponents["default"].section(_templateObject2());

var CarouselListContainer = _styledComponents["default"].ul(_templateObject3(), function (props) {
  return props.data ? 'translate(' + props.data + ',0)' : 'translate(20rem,0)';
});

exports.CarouselListContainer = CarouselListContainer;

var CarouselImage = _styledComponents["default"].img(_templateObject4());

exports.CarouselImage = CarouselImage;

var CarouselLeftButton = _styledComponents["default"].button(_templateObject5());

exports.CarouselLeftButton = CarouselLeftButton;

var CarouseRightButton = _styledComponents["default"].button(_templateObject6());

exports.CarouseRightButton = CarouseRightButton;