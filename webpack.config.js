const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /styles\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /styles\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          attributes: false,
          minimize: false,
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './src/index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/carrito2.html',
      filename: './src/carrito2.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/contacto.html',
      filename: './src/contacto.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/productos.html',
      filename: './src/productos.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/sesion.html',
      filename: './src/sesion.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      ignoreOrder: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/',
          to: 'src/',
        },
        {
          from: 'src/assets',
          to: 'src/assets/',
        },
        {
          from: 'src/js',
          to: 'src/js/',
        },
        {
          from: 'src/css',
          to: 'src/css/',
        },
      ],
    }),
  ],
};
