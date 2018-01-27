import path from 'path'
import config from './config'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin'

export default {

    entry: path.resolve(__dirname, 'src/js'),

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/app.bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /.(css|scss)$/,
                loader: ExtractTextWebpackPlugin.extract('css-loader!sass-loader')
            }
        ]
    },

    resolve: {
        alias: {
            '@config': path.resolve(__dirname, 'config'),
            '@scripts': path.resolve(__dirname, 'src/js'),
            '@styles': path.resolve(__dirname, 'src/scss'),
            '@': path.resolve(__dirname, 'src')
        }
    },

    plugins: [
        new CleanWebpackPlugin(['public']),
        new ExtractTextWebpackPlugin('css/app.bundle.css'),
        new HtmlWebpackPlugin({
            title: config.app.title,
            template: path.resolve(__dirname, 'src/index.html')
        })
    ]

}