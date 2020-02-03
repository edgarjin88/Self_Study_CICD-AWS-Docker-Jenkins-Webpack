

const path = require('path'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  entry: './src/index.js', //relative path
  output: {
    path: path.resolve(__dirname, 'build'), //absolute path. resolve would take care for Win, Mac
    filename: 'bundle.js', //conventional name. ,
    publicPath: 'build/' // url-loader would look at this folder for public output path. 
  },
  module:{
    rules: [
      {
        use:'babel-loader',
        test:/\.js$/ // babel applied to js only. not css,
      },
      {

      // use: ['style-loader', 'css-loader'], //order from right to left. 
      loader: ExtractTextPlugin.extract({
        loader: 'css-loader', // loader =preprocessing, plugin = a bit outside of wepack pipeline
      }),
      test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use:[
          {
            loader: 'url-loader',
            options: {limit: 40000}
          },
          'image-webpack-loader'
        ] // in an array, order matters. 
      }
    ]
  },
  plugins:[
    new ExtractTextPlugin('style.css') //catch anything that loader piled, and put it into style.css
  ]
}

module.exports = config; 