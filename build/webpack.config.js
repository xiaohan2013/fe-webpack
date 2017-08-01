const path = require('path');

console.log(path.resolve(__dirname, ".."))

module.exports = {
  context:path.resolve(__dirname, ".."),
  entry: path.resolve(__dirname, "../src/app/index"),
  output: {
    path: path.resolve(__dirname, "dist"), // string
    filename: "app.[hash:8].js", // string
    publicPath: "./assets/", // string
    library: "MyLibrary",
    libraryTarget: "umd",
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
  // performance: {
  //   hints: "warning",
  //   maxAssetSize: 200000,
  //   maxEntrypointSize: 400000,
  //   assetFilter: function(assetFilename) {
  //     return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
  //   }
  // },
  // devtool: "source-map",
  // context: __dirname,
  // target: "web",
  // externals: {
  //   jquery: 'jQuery'
  // },
  // stats: "errors-only",
  // devServer: {
  //   proxy: {
  //     '/api': 'http://localhost:3000'
  //   },
  //   contentBase: path.join(__dirname, 'public'),
  //   compress: true,
  //   historyApiFallback: true,
  //   hot: true,
  //   https: false,
  //   noInfo: true,
  // },
  // plugins: [],
}