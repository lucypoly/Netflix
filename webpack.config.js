const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sassLoader = {
    loader: 'sass-loader',
    data: '@import "src/styles/index";',
    options: {
        includePaths: [
            path.join(__dirname, 'src', 'styles', 'index.scss'),
        ],
        sourceMap: true,
    },
};

module.exports = {
    entry: path.join(__dirname, 'src', 'app.js'),
    output: {
        path: path.join(__dirname, 'src', 'static', 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, 'src'),
                loader: ['babel-loader?presets[]=react,presets[]=es2015,cacheDirectory[]=babel_cache']
            },
            {
                test: /\.modules\.(css|sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                modules: true,
                                localIdentName:  '[path][name]__[local]--[hash:base64:5]',
                                importLoaders: 1,
                            },
                        },
                        sassLoader,
                    ],
                }),
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new ExtractTextPlugin('style.css'),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            mangle: true,
            sourcemap: false,
            beautify: false,
            dead_code: true
        })
    ]
};