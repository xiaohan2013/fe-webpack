var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('./build/webpack.config');
var webpackDevMiddleware = require('webpack-dev-middleware');
var mime = require('mime');

var app = express();
var compiler = webpack(webpackConfig)

console.log(__dirname)
var devServer = webpackDevMiddleware(compiler, {
    proxy: {
      '/api': 'http://localhost:8001/api'
    },
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: false,
    noInfo: true,
})

app.use(devServer);

app.get('*', function (req, res) {
  var fileObj = path.parse(req.originalUrl);
  var filename = fileObj.base || 'index.html';
  var file_url = fileObj.dir + "/" + filename;
  var content = devServer.fileSystem.readFileSync(path.resolve(__dirname, 'dist/'+file_url))
  res.setHeader("Content-Type", mime.lookup(filename) + "; charset=UTF-8");
  res.setHeader("Content-Length", content.length);
  res.statusCode = res.statusCode || 200;
  if(res.send) 
    res.send(content);
  else 
    res.end(content);
});

var server = app.listen(3000, "127.0.0.1", function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});