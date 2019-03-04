'use strict';

const path = require('path');
// const HappyPack = require('happypack');

// 构造出共享进程池，进程池中包含8个子进程
// const cssHappyThreadPool = HappyPack.ThreadPool({ size: 3 });
// const babelHappyThreadPoll = HappyPack.ThreadPool({ size: 3 });

module.exports = {
    entry: path.resolve(__dirname, '../test/index.js'),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                //?minimize压缩css文件,生产环境配置 
                use: ['happypack/loader?id=css'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/, 
                use: ['style-loader', 'css-loader', 'less-loader'],
                exclude: /node_modules/
            }/*解析less, 把less解析成浏览器可以识别的css语言*/
        ]
    },
};