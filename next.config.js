const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.vue$/,
      use: ['vue-loader'],
    })

    config.module.rules.push({
      test: /\.css$/,
      use: ['vue-style-loader', 'style-loader', 'css-loader'],
    })

    config.plugins.push(new VueLoaderPlugin())

    config.resolve.alias.vue$ = 'vue/dist/vue.esm.js'

    return config
  },
}
