'use strict';

let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  rules: [
    {
      test: /\.ts$/,
      use: ['awesome-typescript-loader', 'angular2-template-loader?keepUrl=true'],
      exclude: [/\.(spec|e2e)\.ts$/]
    },
    /* Async loading. */
    {
      test: /\.html$/,
      use: ['file-loader?name=[name].[hash].[ext]', 'extract-loader', 'html-loader?' + JSON.stringify({
        attrs: ["img:src", "link:href"]
      })]
    },
    {
      test: /\.css$/,
      include: path.resolve(process.cwd(), 'src', 'app'),
      loaders: ['to-string-loader', 'css-loader'],
      exclude: /\.async\.css/
    },
    {
      test: /\.css$/,
      exclude: path.resolve(process.cwd(), 'src', 'app'),
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      })
    }
  ]
};
