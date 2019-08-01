module.exports = {
  lintOnSave: true,
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true,
  },
  // WORKAROUND: avoid build-break using sass-loader
  // https://github.com/vuetifyjs/vue-cli-plugin-vuetify/issues/101#issuecomment-516747014
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'test') {
      const sassRule = config.module.rule('sass');
      sassRule.uses.clear();
      sassRule.use('null-loader').loader('null-loader');
    }
  },
};
