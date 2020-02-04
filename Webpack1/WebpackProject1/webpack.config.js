var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin')
const VENDOR_LIBS = [
  'react', 'lodash', 'redux', 'react-redux', 'react-dom', 'faker', 'react-input-range', 'redux-form', 
  'redux-thunk'
]

module.exports = {
  entry: {
    bundle: './src/index.js', //make a bundle(name).js from 'index.js
    vendor: VENDOR_LIBS

  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js' //name=bundle, vendor, chunkhash=update
  }, 
  module:{
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use:['style-loader', 'css-loader'], //css-loader read css, style-loader apply style
        test: /\.css$/
      }
    ]
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'] 
      //manifest(meta data file) to tell browser whether the vendor file changed or not. 
      //without it, webpack tends to create another vendor.chunk file. 
    }),

    new HtmlwebpackPlugin({
      template:'src/index.html' //basic model(template) of html. 
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) // importing .env as window.process.env.NODE_ENV. What about the security issue?
    })

  ]
};
