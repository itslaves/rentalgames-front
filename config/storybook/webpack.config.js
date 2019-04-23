const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = async ({ config }) => ({
  ...config,
  plugins: [
    ...config.plugins,
    new VuetifyLoaderPlugin(),
  ],
});
