const HtmlWebpackPlugin = require('html-webpack-plugin');
const {join} = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', include: /src/ }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ],
  output: {
    path: join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  entry: [
    "./src/main.js"
  ]
};
