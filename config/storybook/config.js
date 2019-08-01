/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { configure, addDecorator } from '@storybook/vue';
import axios from 'axios';
import vuetify from '@/plugins/vuetify';

const req = require.context('../../src/stories', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

Vue.prototype.$http = axios;

addDecorator(() => ({
  vuetify,
  template: '<v-app><v-content><story/></v-content></v-app>',
}));

configure(loadStories, module);
