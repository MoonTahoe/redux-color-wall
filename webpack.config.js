var webpack = require("webpack");

module.exports = {
    entry: "./index.js",
    output: {
        path: "dist/assets",
        filename: "bundle.min.js",
        publicPath: "/assets/",
        sourceMapFilename: 'bundle.min.map'
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ['babel'],
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            warnings: false,
            mangle: false
        })
    ]
};