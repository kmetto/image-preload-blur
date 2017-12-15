const path = require('path');
const env = require('process').env.NODE_ENV || 'dev';
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const plugins = [];

if (env === 'prod') {
  plugins.push(new UglifyJsPlugin());
}

plugins.push(new ExtractTextPlugin("styles.css"));

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index'),
  output: {
    filename: env === 'prod' ? 'index.min.js' : 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'preloadImages'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.handlebars$/,
        use: {
          loader: 'handlebars-loader'
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract([ 'css-loader', 'sass-loader' ]),
      }
    ]
  },
  watch: env === 'dev',
  plugins
};
