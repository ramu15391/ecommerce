var config = {
	entry: './index.js',
	output: {
		path:'/',
		filename: 'bundle.js',
	},
	devServer: {
		inline: false,
		port: 8888
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					plugins: ['transform-decorators-legacy','transform-class-properties' ],
					presets: ['es2015', 'react'],
				}
			},
			{
				test: /\.css$/,
        		use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true,
							localIdentName: '[name]__[local]___[hash:base64:5]'
						},
					}
				],
				//loader: require.resolve('css-loader'),
				
			}
		]
	}
}
module.exports = config