module.exports = [ {
    test: /\.(png|jpe?g|gif)$/i,    
    loader: 'file-loader',
    options: {
        name: '[name]-[contenthash:10].[ext]',
        outputPath: 'assets',
        esModule: false,
    },
},];