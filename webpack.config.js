const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        "./app/index.js"
    ],
    output: {
        path: __dirname + "/dist",
        filename: "index_bundle.js"
    },
    module: {
        loaders: [
            { loader: "babel-loader", test: /\.js$/, include: __dirname + "/app" },
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: __dirname + '/app/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.ProvidePlugin({
            'React': 'react',
            'ReactDOM': 'react-dom'
        })
    ]
};
