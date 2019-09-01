const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/index.jsx'],
        vendor: ['react', 'react-dom'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath:'/',
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
        }],
    },
    devtool: 'source-map',
    plugins: [
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './index.template.html'),
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: true,
        }),
    ],
    resolve: {
        extensions: ['.webpack.js', '.js', '.jsx', '.json'],
        modules: [
            path.resolve(__dirname, '.'),
            'node_modules',
        ],
    },
    devServer: {
        host: '0.0.0.0',
        watchContentBase: true,
        contentBase: '.',
        hot: true,
    }
};