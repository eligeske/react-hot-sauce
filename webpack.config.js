const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: `${__dirname}/app/index.html`,
  filename: 'index.html',
  inject: 'body'
});

const extractCSSPlugin = new ExtractTextPlugin({
  filename: 'css/styles.css'
});

module.exports = {
  devtool: 'source-map',
  entry: [
    './app/index.jsx',
    './app/index.less'
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /scripts/],
        loader: [
          'babel-loader'
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2?)(\?.*)?$/i,
        loader: 'url-loader'
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        loader: 'file-loader'
      },
      {
        test: /\.less$/,
        exclude: [/node_modules/, /scripts/],
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader']
        })
      }
    ]
  },
  plugins: [
    htmlWebpackPlugin,
    extractCSSPlugin
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
