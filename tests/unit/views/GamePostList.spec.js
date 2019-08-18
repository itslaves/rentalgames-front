import Vue from 'vue';
import Vuetify from 'vuetify';
import { createLocalVue, mount } from '@vue/test-utils';
import { expect } from 'chai';
import GamePostList from '@/views/GamePostList.vue';

Vue.use(Vuetify);

describe('views/GamePostList', () => {
  let localVue;
  let vuetify;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuetify);
    vuetify = new Vuetify();
  });
  it('assertion: defaults', () => {
    const wrapper = mount(GamePostList, {
      localVue,
      vuetify,
      sync: false,
    });
    expect(wrapper.vm.$data.filters.length).not.eq(0);
    expect(wrapper.vm.$data.posts.length).not.eq(0);
    expect(wrapper.vm.$data.page).eq(1);
  });
});
