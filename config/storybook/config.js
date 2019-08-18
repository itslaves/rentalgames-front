/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import { configure, addDecorator } from '@storybook/vue';
import axios from 'axios';

Vue.prototype.$http = axios;

const req = require.context('@/stories', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(() => ({
  vuetify,
  template: '<v-app><v-content><story/></v-content></v-app>',
}));

configure(loadStories, module);
