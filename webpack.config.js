
var path = require('path')

module.exports = function(env, argv) {
  return {
    mode: env.production ? 'production' : 'development',
    devServer: {
      disableHostCheck: true,
      historyApiFallback: true,
      open: true
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
    }
  }
}