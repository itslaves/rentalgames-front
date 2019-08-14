import { createLocalVue, shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import Vuetify from 'vuetify';
import LoginButton from '@/components/LoginButton.vue';

const localVue = createLocalVue();
localVue.use(Vuetify);

describe('components/LoginButton', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it('assertion: defaults', () => {
    const wrapper = shallowMount(LoginButton, {
      propsData: {
        vendor: 'test',
        url: 'http://test.com',
        image: 'http://test.com/login/btn/1',
      },
      localVue,
      vuetify,
    });
    expect(wrapper.props('vendor')).to.eq('test');
    expect(wrapper.props('url')).to.eq('http://test.com');
    expect(wrapper.props('image')).to.eq('http://test.com/login/btn/1');
  });
});
