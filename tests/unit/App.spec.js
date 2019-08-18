import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import axios from 'axios';
import { createLocalVue, mount } from '@vue/test-utils';
import { expect } from 'chai';
import App from '@/App.vue';

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.prototype.$http = axios;

describe('App', () => {
  let localVue;
  let vuetify;
  let router;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuetify);
    localVue.use(VueRouter);
    vuetify = new Vuetify();
    router = new VueRouter();
  });
  it('assertion: defaults', () => {
    const wrapper = mount(App, {
      localVue,
      vuetify,
      router,
      sync: false,
    });
    expect(wrapper.name()).to.eq('app');
    // expect(wrapper.vm.$data.dueDateOpen).to.eq(false);
    // expect(wrapper.vm.$data.dueDate).not.eq('');
  });
});
