const path = require('path');

module.exports = {
  // entry: "./src/index",
  // output: {
  //   path: path.resolve(__dirname, "dist"), // string
  //   filename: "app.[hash:8].js", // string
  //   publicPath: "./assets/", // string
  //   library: "MyLibrary", // string,
  //   libraryTarget: "umd", // universal module definition
  // },
  // module: {
  //   rules: [
  //     {
  //       test: /\.jsx?$/,
  //       include: [
  //         path.resolve(__dirname, "app")
  //       ],
  //       exclude: [
  //         path.resolve(__dirname, "app/demo-files")
  //       ],
  //       issuer: { test, include, exclude },
  //       enforce: "pre",
  //       enforce: "post",
  //       loader: "babel-loader",
  //       options: {
  //         presets: ["es2015"]
  //       },
  //     },
  //     {
  //       test: /\.html$/,
  //       use: [
  //         "htmllint-loader",
  //         {
  //           loader: "html-loader",
  //           options: {
  //           }
  //         }
  //       ]
  //     },
  //     { oneOf: [ /* rules */ ] },
  //     { rules: [ /* rules */ ] },
  //     { resource: { and: [ /* conditions */ ] } },
  //     { resource: { or: [  conditions  ] } },
  //     { resource: [ /* conditions */ ] },
  //     { resource: { not: /* condition */ } }
  //   ],
  // },
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