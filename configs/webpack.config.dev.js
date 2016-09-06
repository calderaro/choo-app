var path = require('path');
var webpack = require('webpack');

module.exports = {
  //devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [path.join(__dirname, "../src/app.js")],
  },
  output: {
    path: path.resolve("./static"),
    library: '[name]',
    filename: '[name].js',
    publicPath: '/static',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel",
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ["es2015","stage-0"],
        }
      },
    ]
  },
};