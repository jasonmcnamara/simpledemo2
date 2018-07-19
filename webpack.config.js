const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

const path = require('path');


module.exports = {
    entry: ['babel-polyfill', './src/main.js'],
    output: {
        filename:'index_bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({
        meta: {
            viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
        },
        title: 'Simple Demo 2'
    })],
    devServer: {
             contentBase: './dist',
             historyApiFallback : {
                 index: '/'
             }
           },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                } 
            },
            {
                test: /\.html$/,
                loader: 'html_loader'
            },
            {
                test: /\.css$/,
                loader:['style-loader', 'css-loader']
            }
        ]
    },
    mode: 'development'

}