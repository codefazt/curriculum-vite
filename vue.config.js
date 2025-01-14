const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/curriculum-vite/' // Replace <REPO_NAME> with your repository name
    : '/',
    chainWebpack: config => {
      config.module
        .rule('pdf')
        .test(/\.pdf$/)
        .use('file-loader')
        .loader('file-loader')
        .options({
          name: '[name].[hash:8].[ext]'
        })
    }
})
