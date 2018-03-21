/**
 * author: Joker
 * creationDate: 2018/3/21
 * usage: webpack 开发环境配置
 */
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
});
