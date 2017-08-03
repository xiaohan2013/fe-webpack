var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('./build/webpack.config');
var webpackDevMiddleware = require('webpack-dev-middleware');
var mime = require('mime');

var app = express();
var compiler = webpack(webpackConfig)

function pathJoin(a, b) {
  return a == "/" ? "/" + b : (a || "") + "/" + b;
}

var devServer = webpackDevMiddleware(compiler, {
    proxy: {
      '/api': 'http://localhost:8001/api'
    },
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: false,
    noInfo: false,
    stats: {
      colors: true
    },
    stdin:true,
    watchContentBase:true,
    watchOptions: {
      poll: true
    },
    log: console.log
})

app.use(devServer);

app.get('*', function (req, res) {
  // var file_name = devServer.getFilenameFromUrl(req.originalUrl);
  try {
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
  } catch(e) {
    // res.end("没有此文件。。。");
    res.redirect("/api");
  }
  // var fileObj = path.parse(req.originalUrl);
  // var filename = fileObj.base || 'index.html';
  // var file_url = fileObj.dir + "/" + filename;
  // console.log(file_url)
  // console.log(devServer.getFilenameFromUrl(req.originalUrl))
  // var content = devServer.fileSystem.readFileSync(path.resolve(__dirname, 'dist/'+file_url))
});

var server = app.listen(3000, "127.0.0.1", function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

