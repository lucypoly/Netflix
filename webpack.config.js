const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "style.css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: path.join(__dirname, 'src', 'app.js'),
  output: {
    path: path.join(__dirname, 'static', 'build'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }],
        fallback: "style-loader"
      })
    },
      {
        test: /\.js$/,
        loader: ['babel-loader?presets[]=react,presets[]=es2015,cacheDirectory[]=babel_cache'],
        exclude: /node_modules/
      }]
  },
  plugins: [
    extractSass
  ]
};