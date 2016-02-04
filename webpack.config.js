var webpack = require('webpack');

// webpack.config.js
module.exports = {
  entry: [
    './src/main.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    loaders: [
      { test: require.resolve("jquery"), loader: "imports?jQuery=jquery" },
      { test: /\.jade$/, loader: "html!jade-html"},
      { test: /\.css$/, loader: "style!css"},
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      { test: /\.scss$/, loaders: ["style", "css", "sass"] }
    ],
    postLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // do not lint third-party code
        loader: 'jshint-loader'
      }
    ],
    jshint: {
      // Display JSHint messages as webpack errors
      emitErrors: true,

      // fail the build on JSHInt errors
      failOnHint: false,
    }
  },
  resolve: {
    extensions: ['', '.js', '.jade']
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};