"use strict";

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _react = _interopRequireDefault(require("react"));

var _express = _interopRequireDefault(require("express"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _App = require("../App");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.PORT || 3006;
var app = (0, _express["default"])();
app.use(_express["default"]["static"]('./build'));
app.get('/*', function (req, res) {
  var app = _server["default"].renderToString(_react["default"].createElement(_App.App, null));

  var indexFile = _path["default"].resolve('./build/index.html');

  _fs["default"].readFile(indexFile, 'utf8', function (err, data) {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(data.replace('<div id="root"></div>', "<div id=\"root\">".concat(app, "</div>")));
  });
});
app.listen(PORT, function () {
  console.log("\uD83D\uDE0E Server is listening on port ".concat(PORT));
});