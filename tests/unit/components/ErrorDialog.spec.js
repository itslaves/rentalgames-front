import Vue from 'vue';
import Vuetify from 'vuetify';
import { createLocalVue, mount } from '@vue/test-utils';
import { expect } from 'chai';
import ErrorDialog from '@/components/ErrorDialog.vue';

Vue.use(Vuetify);

describe('components/ErrorDialog', () => {
  let localVue;
  let vuetify;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuetify);
    vuetify = new Vuetify();
  });
  it('assertion: defaults', () => {
    const wrapper = mount(ErrorDialog, {
      localVue,
      vuetify,
      sync: false,
      propsData: {
        title: 'title',
        buttonText: 'buttonText',
      },
    });
    expect(wrapper.props('title')).to.eq('title');
    expect(wrapper.props('details')).to.eq('');
    expect(wrapper.props('buttonText')).to.eq('buttonText');
  });
});
