const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: `${__dirname}/app/index.html`,
  filename: 'index.html',
  inject: 'body'
});


module.exports = {
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  },
  entry: {
    components: [
      './app/index.jsx'
    ],
    styles: [
      './app/index.less'
    ]
  },
  output: {
    publicPath: '/',
    path: `${__dirname}/dist`,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /scripts/],
        loader: ['react-hot-loader', 'babel-loader']
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
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    htmlWebpackPlugin
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
