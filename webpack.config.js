// webpack.config.js
module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        path: './built/assets/js',
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css"},
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ],
    },
};