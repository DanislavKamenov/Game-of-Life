
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    new HtmlWebpackPlugin({
        template: './src/template.html',
    })
];