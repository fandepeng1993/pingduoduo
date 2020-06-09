const webpack = require('webpack');
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin') ;
var ZipPlugin = require('zip-webpack-plugin');

module.exports = {
  plugins: [
    new ZipPlugin({
      path:path.join(__dirname,'zip'),
      filename: 'pingduoduo.zip',
      // pathPrefix: 'zip',
    }),
  ],
}