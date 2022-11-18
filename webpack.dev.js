/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'development',
  entry: './src/Index.tsx',
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, 'postcss.config.js'),
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, './.env.development'),
    }),
  ],
});
