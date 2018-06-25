var webpack = require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var path = require('path');
const publicPath = '/';
const buildPath = 'build';
module.exports = {
  mode: 'development',
  entry: ['./index.js'],
  output: {
    path: path.resolve(__dirname,buildPath),
    filename: 'bundle.js',
    publicPath: publicPath,
  },
  devServer:{
    contentBase:path.resolve(__dirname,buildPath)
  },
  module: {
      rules: [
          {
            test: /\.js|jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          },
          {
            test: /\.css$/,
            loaders: ["style-loader", "css-loader"]
          },
          {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
          },
          {
            test: /\.less$/,
            loaders: ["style-loader", "css-loader", "less-loader"]
          },
          {
            test: /\.(otf|eot|svg|ttf|woff|png|jpg)/,
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
          }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
],
}