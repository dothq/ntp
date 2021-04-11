const { resolve } = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV == "dev" ? "development" : "production",
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
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {

                    },
                  ],
                ],
              },
            },
          },
        ],
      }
    ],
  },
  devServer: {
    contentBase: resolve(process.cwd(), 'dist'),
    port: 9000,
    writeToDisk: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(process.cwd(), 'static', 'index.html')
    }),
    new CopyPlugin({
      patterns: [
        { from: resolve(process.cwd(), "..", "html", "constants", "backgrounds.json"), to: "backgrounds.json" },
        { from: resolve(process.cwd(), "src", "backgrounds"), to: "backgrounds" }
      ],
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: resolve(process.cwd(), 'dist')
  }
}