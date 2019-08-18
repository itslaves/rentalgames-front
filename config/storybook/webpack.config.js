const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = async ({ config }) => {
  config.plugins.push(new VuetifyLoaderPlugin());
  return config;
};
