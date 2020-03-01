const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const plugins = require('./plugins/dev.plugins');
const loaders = require('./loaders/dev.loaders');

module.exports = merge(commonConfig, {
    mode: 'development',
    plugins,
    module: {
        rules: loaders,
    }
});