import { createLocalVue, shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import Vuetify from 'vuetify';
import ImageFilePicker from '@/components/ImageFilePicker.vue';

const localVue = createLocalVue();
localVue.use(Vuetify);

describe('components/ImageFilePicker', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it('assertion: defaults', () => {
    const wrapper = shallowMount(ImageFilePicker, {
      localVue,
      vuetify,
    });
    expect(wrapper.vm.$data.imageName).to.eq('');
    expect(wrapper.vm.$data.imageContents).to.eq('');
  });
});
