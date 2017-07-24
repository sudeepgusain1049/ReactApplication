module.exports = {
    entry: './app/main.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: __dirname + '/app',
        host: '0.0.0.0',
        historyApiFallback: true,
        disableHostCheck: true,
        port: 8100
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}
