import Vue from 'vue';
import Vuetify from 'vuetify';
import { createLocalVue, mount } from '@vue/test-utils';
import { expect } from 'chai';
import LoginButton from '@/components/LoginButton.vue';

Vue.use(Vuetify);

describe('components/LoginButton', () => {
  let localVue;
  let vuetify;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuetify);
    vuetify = new Vuetify();
  });
  it('assertion: defaults', () => {
    const wrapper = mount(LoginButton, {
      localVue,
      vuetify,
      sync: false,
      propsData: {
        vendor: 'test',
        url: 'http://test.com',
        image: 'http://test.com/login/btn/1',
      },
    });
    expect(wrapper.props('vendor')).to.eq('test');
    expect(wrapper.props('url')).to.eq('http://test.com');
    expect(wrapper.props('image')).to.eq('http://test.com/login/btn/1');
  });
});
