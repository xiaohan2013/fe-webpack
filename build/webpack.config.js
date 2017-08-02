const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

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
  // 无需使用loader对这些文件进行编译或者其他操作，可以在无loader下进行打包
  // resolve: {
  //   modules: [
  //     "node_modules",
  //     path.resolve(__dirname, "../src/app")
  //   ],
  //   extensions: [".js", ".json", ".jsx", ".css"],
  //   // alias: {
  //   //   "module": "new-module",
  //   //   "only-module$": "new-module",
  //   //   "module": path.resolve(__dirname, "app/third/module.js"),
  //   // },
  // },
  devtool: "cheap-module-source-map",
  // context: __dirname,
  // target: "web",
  externals: {
    jquery: 'jQuery'
  },
  // stats: "errors-only",
  plugins: [
    new HtmlWebpackPlugin({
        filename: '../../dist/index.html',
        template: 'src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  performance: {
    hints: 'warning'
  },
  watch:true
}