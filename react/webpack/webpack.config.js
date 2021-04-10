const { resolve } = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: {
    ntp: resolve(process.cwd(), 'src', 'index.tsx')
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: resolve(process.cwd(), 'static', 'index.html')
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: resolve(process.cwd(), 'dist')
  }
}