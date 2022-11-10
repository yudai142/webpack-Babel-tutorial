module.exports = {
  mode: 'production',
  entry: './src/index.js', 
  // watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  output: {
    path: __dirname + '/dist',
    filename: 'sample.js'
  }
};
