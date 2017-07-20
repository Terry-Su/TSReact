const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/visualDom/visualDom.js',
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    filename: 'visualDom.js'
  },
  module: {
    rules: [
      {
        test: /\.js.*/,
        exclude: /node\_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'stage-2'],
            },
          }
        ]
      }
    ],
  },
  plugins: process.env === process.env.__PROD__ ? [
    new webpack.optimize.UglifyJsPlugin()
  ] : []
}

