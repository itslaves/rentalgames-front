/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { VApp } from 'vuetify/lib';
import '@/plugins/vuetify';
import { configure, addDecorator } from '@storybook/vue';
import axios from 'axios';

const req = require.context('../../src/stories', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

Vue.prototype.$http = axios;
Vue.component('v-app', VApp);


addDecorator(() => ({
  template: '<v-app><story/></v-app>',
}));

configure(loadStories, module);
