module.exports = {
  webpack: (config, { dev }) => { // eslint-disable-line no-unused-vars
    config.module.rules.push(
      {
        test: /\.(css)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      }
    ,
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      }
    )
    return config
  }
}