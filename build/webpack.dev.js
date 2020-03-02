const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const plugins = require('./plugins/dev.plugins');
const loaders = require('./loaders/dev.loaders');

module.exports = merge(commonConfig, {
    mode: 'development',
    output: {
        filename: "app.js",
    },
    devtool: 'inline-cheap-module-source-map',
    plugins,
    module: {
        rules: loaders,
    },
    devServer: {
        writeToDisk: true,
        open: true,
        noInfo: true,
    }
});