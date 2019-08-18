import Vue from 'vue';
import Vuetify from 'vuetify';
import { createLocalVue, mount } from '@vue/test-utils';
import { expect } from 'chai';
import ImageFilePicker from '@/components/ImageFilePicker.vue';

Vue.use(Vuetify);

describe('components/ImageFilePicker', () => {
  let localVue;
  let vuetify;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuetify);
    vuetify = new Vuetify();
  });
  it('assertion: defaults', () => {
    const wrapper = mount(ImageFilePicker, {
      localVue,
      vuetify,
      sync: false,
    });
    expect(wrapper.vm.$data.imageName).to.eq('');
    expect(wrapper.vm.$data.imageContents).to.eq('');
  });
});
