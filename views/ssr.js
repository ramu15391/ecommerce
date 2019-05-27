"use strict";

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _app = require("./app");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//const renderToString = require('react-dom/server')
var express = require('express');

var app = express();
app.listen(4000);
app.get('/ssr', function (req, res) {
  var content = (0, _server.renderToString)(_react["default"].createElement(_app.APP, null));
  var data = template("ssr", content);
  res.send(data);
});

function template(title, content) {
  var page = "<!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n          <meta charset=\"utf-8\">\n          <title> ".concat(title, " </title>\n          <link href=\"assets/style.css\" rel=\"stylesheet\">\n        </head>\n        <body>\n          <div class=\"content\">\n             <div id=\"app\" class=\"wrap-inner\">\n                <!--- magic happens here -->  ").concat(content, "\n             </div>\n          </div>\n        </body>\n        ");
  return page;
}