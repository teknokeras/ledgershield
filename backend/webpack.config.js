var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,

  entry: './frontend/src/index',

  output: {
      path: path.resolve('./frontend/static/'),
      filename: "[name]-[hash].js",
  },

  plugins: [
    new BundleTracker({filename: './frontend/webpack-stats.json'}),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};