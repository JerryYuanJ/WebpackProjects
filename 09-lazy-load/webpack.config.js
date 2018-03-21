/**
 * author: Joker
 * creationDate: 2018/3/21
 * usage: 代码分离的配置
 */

const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Lazy Loading'
        }),
        new UglifyJSPlugin(),
        /*
         webpack4 已经移除该插件，改用optimization来配置
         new webpack.optimize.CommonsChunkPlugin({
         name:'yuanjie'// 指定公共 bundle 的名称。
         })*/
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            name: 'yuanjie',
            chunks: "initial"
        }
    }
};

