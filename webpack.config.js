const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
    host: "localhost",
    port: 8081
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Template',
      template: './src/index.html',
      inject: 'body'
    }),
    new CleanWebpackPlugin(['dist']),
    new Dotenv();
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /spec/, /dist/],
        loader: "eslint-loader",
        enforce: "pre"
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /spec/],
        loader: "babel-loader"
      }
    ]
  }
};
