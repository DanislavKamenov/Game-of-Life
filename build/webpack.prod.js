const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const plugins = require('./plugins/prod.plugins');
const loaders = require('./loaders/prod.loaders');

module.exports = merge(commonConfig, {
    mode: 'production',
    plugins,
    module: {
        rules: loaders,
    }
});