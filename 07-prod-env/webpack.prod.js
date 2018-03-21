/**
 * author: Joker
 * creationDate: 2018/3/21
 * usage: webpack 生产环境配置
 */
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./webpack.base');
const webpack = require('webpack');

module.exports = merge(baseConfig, {
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});
