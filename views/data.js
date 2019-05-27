"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.streamData = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getData() {
  var domain = 'https://adidasapi.skavacommerce.com';
  var axiosConfig = {
    url: '/orchestrationservices/storefront/catalogs/categories/men/products?page=1&size=10',
    method: 'get',
    data: {
      page: 1,
      size: 10
    },
    headers: {
      'x-store-id': '64',
      'x-version': '8.0.2',
      "Access-Control-Allow-Origin": "*"
    }
  };
  (0, _axios["default"])(axiosConfig).then(function (response) {
    if (typeof successCbk == "function") {
      successCbk(response);
    }

    return response;
  })["catch"](function (response) {
    if (typeof successCbk == "function") {
      errorCbk(response);
    }

    return response;
  });
}

var streamData = getData();
exports.streamData = streamData;
console.log('streamData', streamData);