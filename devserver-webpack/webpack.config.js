const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

console.log(__dirname)

module.exports = {
    // 需要用相对路径的，只需加上这个配置就行了。所有的都是基于这个路径
    // 对于需要用绝对的路径，就需要path
    context: path.resolve(__dirname, '../src'),
    entry: '../src/app/',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "app.[hash:8].js",
        publicPath: './'
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
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
      new HtmlWebpackPlugin({
          filename: '../dist/index.html',
          template: 'index.html'
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    ],
    devServer: {
      // contentBase: path.join(__dirname, "../dist"),
      publicPath: './',
      port: 9000,
      stats: {
        colors: true
      }
    }
}