const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context:path.resolve(__dirname, ".."),
  entry: path.resolve(__dirname, "../src/app/index"),
  output: {
    path: path.resolve(__dirname, "../dist/assets/"),
    filename: "app.js",
    publicPath: "./assets/",
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader", 
        options: {presets: ['env']} 
      }
    ],
  },
  // resolve: {
  //   modules: [
  //     "node_modules",
  //     path.resolve(__dirname, "app")
  //   ],
  //   extensions: [".js", ".json", ".jsx", ".css"],
  //   alias: {
  //     "module": "new-module",
  //     "only-module$": "new-module",
  //     "module": path.resolve(__dirname, "app/third/module.js"),
  //   },
  // },
  // devtool: "source-map",
  // context: __dirname,
  // target: "web",
  // externals: {
  //   jquery: 'jQuery'
  // },
  // stats: "errors-only",
  plugins: [
    new HtmlWebpackPlugin({
        filename: '../../dist/index.html',
        template: 'src/index.html'
    })
  ],
}