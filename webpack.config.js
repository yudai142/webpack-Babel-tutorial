module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'sample.js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',   //loader名
          options: {                //Babelの設定
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
