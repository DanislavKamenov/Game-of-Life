const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: './src/template.html',
        filename: 'index-[contenthash].html',
    })
];