
var HtmlWebpackPlugin = require('html-webpack-plugin')

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: [
    './app/index.js'
  ],
  
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"}      
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },  
  
  output: {
    filename: "index_bundle.js",
    path: __dirname + "/dist"
  },
  
  plugins: [HtmlWebpackPluginConfig]
}