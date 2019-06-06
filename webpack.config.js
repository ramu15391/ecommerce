var config = {
	entry: './index.js',
	output: {
		path:'/',
		filename: 'bundle.js',
	},
	devServer: {
		inline: false,
		port: 8888,
		historyApiFallback:true,
		proxy: {
			'/orchestrationservices': {
				target: 'https://adidasapi.skavacommerce.com/',
                secure: false
            }
        }
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ["@babel/preset-react", "@babel/preset-env"],
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