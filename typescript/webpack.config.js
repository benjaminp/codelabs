const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  entry: {
    main: './app.js',
  },
}