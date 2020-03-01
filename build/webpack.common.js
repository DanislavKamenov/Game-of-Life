const path = require('path');
const plugins = require('./plugins/common.plugins');
const loaders = require('./loaders/common.loaders');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
    },
    plugins,
    module: {
        rules: loaders,
    }
}