const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: "/",
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          { loader: 'html-loader' }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader', options: { importLoaders: 1 }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.png/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CleanWebpackPlugin(),
    new Dotenv(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ]
  }
}