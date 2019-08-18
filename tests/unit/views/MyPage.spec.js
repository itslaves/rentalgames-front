import Vue from 'vue';
import Vuetify from 'vuetify';
import { createLocalVue, mount } from '@vue/test-utils';
import { expect } from 'chai';
import MyPage from '@/views/MyPage.vue';

Vue.use(Vuetify);

describe('views/MyPage', () => {
  let localVue;
  let vuetify;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuetify);
    vuetify = new Vuetify();
  });
  it('assertion: defaults', () => {
    const wrapper = mount(MyPage, {
      localVue,
      vuetify,
      sync: false,
    });
    expect(wrapper.vm.$data.rentalHistoryHeaders).not.length(0);
    expect(wrapper.vm.$data.rentalHistory).not.length(0);
    expect(wrapper.vm.$data.qnaHistoryHeaders).not.length(0);
    expect(wrapper.vm.$data.qnaHistory).not.length(0);
  });
});
