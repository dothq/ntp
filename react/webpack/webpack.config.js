const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const BrotliPlugin = require('brotli-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasurePlugin();

const config = smp.wrap({
  mode: process.env.NODE_ENV == 'dev' ? 'development' : 'production',
  devtool: process.env.NODE_ENV == 'dev' ? 'inline-source-map' : undefined,
  cache: true,
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
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ],
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              import: false,
              modules: true
            }
          }
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env', {}]]
              }
            }
          }
        ],
        exclude: /\.module\.css$/
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {
            // make loader to behave like url-loader, for all svg files
            encoding: 'base64'
          }
        }
      },
      {
        test: /\.(png)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: resolve(process.cwd(), 'dist'),
    port: 9000,
    writeToDisk: true,
    https: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(process.cwd(), 'static', 'index.html')
    }),
    new CopyPlugin({
      patterns: [
        {
          from: resolve(process.cwd(), 'src', 'backgrounds.json'),
          to: 'backgrounds.json'
        },
        {
          from: resolve(process.cwd(), 'src', 'backgrounds'),
          to: 'backgrounds'
        },
        {
          from: resolve(
            process.cwd(),
            '..',
            'extensions',
            'official',
            'manifest.json'
          ),
          to: 'manifest.json'
        },
        {
          from: resolve(
            process.cwd(),
            '..',
            'extensions',
            'official',
            'images'
          ),
          to: 'images'
        }
      ]
    }),
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: resolve(process.cwd(), 'dist')
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
});

if (process.env.NODE_ENV == 'dev') {
  config.plugins.push(new BundleAnalyzerPlugin());
} else {
  // Brotli ads an extra ~12 seconds to build time on my machine
  // I see no good reason to ues it in dev
  config.plugins.push(
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg|ts|tsx)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  );
}

module.exports = config;
