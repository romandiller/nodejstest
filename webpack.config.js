const path = require('path');

module.exports = {

	mode: 'production',
	entry: './src/js/scripts.js',	
	output: {
		path: path.resolve(__dirname, 'public/javascripts'),
		filename: 'scripts.min.js',
		publicPath: 'public/javascripts'
	},
	devServer: {
		overlay: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			}
		]
	}

};