const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  entry: './src/index.tsx',

  target: 'web',

  output: {
    path: path.resolve('dist'),
    filename: 'ntp.js'
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'static/index.html'
    }),
    new CompressionPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'plugins', to: 'plugins' },
        { from: 'backgrounds', to: 'backgrounds' }
      ]
    })
  ]
};

module.exports = config;
