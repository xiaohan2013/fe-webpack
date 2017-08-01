var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('./build/webpack.config');
var webpackDevMiddleware = require('webpack-dev-middleware');


var app = express();
var compiler = webpack(webpackConfig)

console.log(__dirname)

app.use(webpackDevMiddleware(compiler, {
    proxy: {
    '/api': 'http://localhost:3000'
    },
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: false,
    noInfo: true,
}));

app.get('/', function (req, res) {
  res.send('Hello World!');
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});