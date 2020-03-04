const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack');
const ManifestPlugin = require('webpack-manifest-plugin');

const manifest = {};

module.exports =  [
    new HtmlWebpackPlugin({
        template: './src/template.html',
        filename: 'index-[contenthash:10].html',
    }),
    new ImageminPlugin({
        exclude: 'E:\Software Development\Game-of-Life\src\assets\mortal-kombat.jpg',
        manifest,
        imageminOptions: {
            plugins: [
                ["mozjpeg", { quality: 30 }], //lossy
                // ["jpegtran", { progressive: true }], //lossless
                ["pngquant", { quality: [0.3, 0.5] }], //lossy
                // ["optipng", { optimizationLevel: 10 }] //lossless
            ]
        }
    }),
    new ManifestPlugin({
        manifest,
    })
];