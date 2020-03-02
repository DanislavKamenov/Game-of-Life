module.exports = [
    {
        test: /\.(png|jpe?g|gif)$/i,    
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            outputPath: 'assets',
            esModule: false,
        },
    },
];