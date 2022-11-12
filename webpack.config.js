module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist/js',
    filename: 'sample.js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,  // .jsxも対象に含む
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react' //ReactのPresetを追加
            ],
            plugins: ['@babel/plugin-syntax-jsx'] //JSXパース用
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']  // .jsxも省略可能対象にする
  }
};
