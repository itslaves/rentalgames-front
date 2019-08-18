import Vue from 'vue';
import Vuetify from 'vuetify';
import { createLocalVue, mount } from '@vue/test-utils';
import { expect } from 'chai';
import Join from '@/views/Join.vue';

Vue.use(Vuetify);

describe('views/Join', () => {
  let localVue;
  let vuetify;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuetify);
    vuetify = new Vuetify();
  });
  it('assertion: defaults', () => {
    const wrapper = mount(Join, {
      localVue,
      vuetify,
      sync: false,
    });
    expect(wrapper.props('email')).to.eq('');
    expect(wrapper.props('nickname')).to.eq('');
    expect(wrapper.props('profileImage')).to.eq('');
  });
});
