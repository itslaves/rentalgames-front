import { createLocalVue, shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import Vuetify from 'vuetify';
import ErrorDialog from '@/components/ErrorDialog.vue';

const localVue = createLocalVue();
localVue.use(Vuetify);

describe('components/ErrorDialog', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it('assertion: defaults', () => {
    const wrapper = shallowMount(ErrorDialog, {
      propsData: {
        title: 'title',
        buttonText: 'buttonText',
      },
      localVue,
      vuetify,
    });
    expect(wrapper.props('title')).to.eq('title');
    expect(wrapper.props('details')).to.eq('');
    expect(wrapper.props('buttonText')).to.eq('buttonText');
  });
});
