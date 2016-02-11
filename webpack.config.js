var path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
    path:       __dirname,
    filename:   'bundle.js'
  },
  module: {
    loaders: [{
      loader:   'babel-loader',
      test:     /\.js$/,
      exclude:  /node_modules/,
      query: {
        presets: ['es2015']
      }
    }]
  }
}
