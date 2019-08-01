import { createLocalVue, shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import Vuetify from 'vuetify';
import Join from '@/views/Join.vue';

const localVue = createLocalVue();
localVue.use(Vuetify);

describe('views/Join', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it('assertion: default props', () => {
    const wrapper = shallowMount(Join, {
      localVue,
      vuetify,
    });
    expect(wrapper.props('email')).to.eq('');
    expect(wrapper.props('nickname')).to.eq('');
    expect(wrapper.props('profileImage')).to.eq('');
  });
});
