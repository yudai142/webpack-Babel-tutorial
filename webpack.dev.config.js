module.exports = {
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
}
