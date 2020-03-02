const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack');

module.exports =  [
    new HtmlWebpackPlugin({
        template: './src/template.html',
        filename: 'index-[contenthash:hex:10].html',
    }),
    new ImageminPlugin({
        imageminOptions: {
            plugins: [
                ["mozjpeg", { quality: 30 }], //lossy
                // ["jpegtran", { progressive: true }], //lossless
                ["pngquant", { quality: [0.3, 0.5] }], //lossy
                // ["optipng", { optimizationLevel: 10 }] //lossless
            ]
        }
    })
];