const path = require('path');
  
module.exports = {

  entry: './main.ts',

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        // exclude: /node_modules/
      }
    ]
  },

  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist')
  }

};
