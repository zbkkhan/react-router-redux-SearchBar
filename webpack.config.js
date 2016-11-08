var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
	'webpack-hot-middleware/client',
    './app/index.js'
  ],
  module: {
		loaders: [
	      {
          test: /\.js$/,
		   exclude: /node_modules/,
		   loader: "babel-loader",
       query: {
          presets: ['es2015', 'react']
        }
     }
	    ]
	  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, 'dist'),
	publicPath: '/static/'
  },
  plugins: [
		    new webpack.optimize.OccurenceOrderPlugin(),
    		new webpack.HotModuleReplacementPlugin()
		   ]
}
