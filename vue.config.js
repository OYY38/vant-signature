const externals = {
  vue: 'vue',
  vant: 'vant'
}

module.exports = {
  chainWebpack(config) {
    config.externals(externals)
  }
}
