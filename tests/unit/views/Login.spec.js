import { createLocalVue, shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import Vuetify from 'vuetify';
import Login from '@/views/Login.vue';
import Vue from 'vue';
import axios from 'axios';

const localVue = createLocalVue();
localVue.use(Vuetify);
Vue.prototype.$http = axios;

describe('views/Login', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it('assertion: defaults', () => {
    const wrapper = shallowMount(Login, {
      localVue,
      vuetify,
    });
    expect(wrapper.vm.$data.loading).to.eq(true);
    expect(wrapper.vm.$data.error).to.eq(false);
  });
});
