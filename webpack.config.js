const path = require('path');

module.exports = {
  entry: './tsOutput/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'wpOutput'),
  },
  optimization: {
    minimize: false
  },
  mode:'none'
};

//npx webpack --config webpack.config.js