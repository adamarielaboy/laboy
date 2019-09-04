module.exports = {
  webpack: (config, { dev }) => { // eslint-disable-line no-unused-vars
    config.module.rules.push(
      {
        test: /\.css$/,
        use: ['css-loader']
      },
    )
    return config;
  }
}