/**
 * Dependencies
 */

const path = require('path')
const webpack_node_externals = require('webpack-node-externals')

/**
 * Export config
 */

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './src/index'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  externals: [webpack_node_externals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/react']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
