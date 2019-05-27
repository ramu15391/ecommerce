"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaCarousel = exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _CarouselStyle = require("./CarouselStyle");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MediaCarousel =
/*#__PURE__*/
function (_Component) {
  _inherits(MediaCarousel, _Component);

  function MediaCarousel() {
    var _this;

    _classCallCheck(this, MediaCarousel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MediaCarousel).call(this));
    _this.state = {
      transition: '0',
      count: 1
    };

    _this.carouselSlide.bind(_assertThisInitialized(_this));

    console.log(_this.props);
    return _this;
  }

  _createClass(MediaCarousel, [{
    key: "carouselBuilder",
    value: function carouselBuilder() {
      var carouselData = []; // eslint-disable-next-line indent

      console.log('carouselElement', this.props);
      var carouselStack = ['https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg', 'https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg', 'https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg', 'https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg', 'https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg', 'https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg'];

      for (var carouselElement = carouselStack.length - 1; carouselElement >= 0; carouselElement--) {
        carouselData.push(_react["default"].createElement(_CarouselStyle.CarouselItemWrapper, null, _react["default"].createElement(_CarouselStyle.CarouselImage, {
          src: carouselStack[carouselElement]
        })));
        console.log('carouselElement', carouselElement);
      }

      return carouselData;
    }
  }, {
    key: "carouselSlide",
    value: function carouselSlide() {
      if (e.keyCode == "37") {
        var count = this.state.count;
        console.log("this.state.count", this.state.count);
        var transitionPx = -(count * 300);
        this.setState({
          transition: transitionPx + 'px'
        });
        this.setState({
          count: this.state.count++
        });
        console.log("transitionPx", transitionPx);
        console.log("count", count);
      } else if (e.keyCode == "39") {
        console.log("right");
        this.setState({
          transition: '300px'
        });
      }
    }
  }, {
    key: "goBack",
    value: function goBack() {
      console.log('history' + this.props.match);
      this.props.history.push('/loosu');
    }
  }, {
    key: "render",
    value: function render() {
      console.log('carouselElement', this.props.liyaz);
      return _react["default"].createElement("section", null, _react["default"].createElement(_CarouselStyle.CarouselListContainer, {
        data: this.state.transition
      }, this.carouselBuilder(), _react["default"].createElement(_CarouselStyle.CarouselLeftButton, null, "left"), _react["default"].createElement(_CarouselStyle.CarouseRightButton, null, "right")), _react["default"].createElement("button", {
        onClick: this.goBack
      }, "GoBack"));
    }
  }]);

  return MediaCarousel;
}(_react.Component);

exports.MediaCarousel = MediaCarousel;
var _default = MediaCarousel;
exports["default"] = _default;