import Vue from 'vue';
import Vuetify from 'vuetify';
import { createLocalVue, mount } from '@vue/test-utils';
import { expect } from 'chai';
import Login from '@/views/Login.vue';

Vue.use(Vuetify);

describe('views/Login', () => {
  let localVue;
  let vuetify;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuetify);
    vuetify = new Vuetify();
  });
  it('assertion: defaults', () => {
    const wrapper = mount(Login, {
      localVue,
      vuetify,
      sync: false,
    });
    expect(wrapper.vm.$data.loading).to.eq(true);
    expect(wrapper.vm.$data.error).to.eq(false);
  });
});
