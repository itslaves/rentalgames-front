import { createLocalVue, shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import Vuetify from 'vuetify';
import GamePostList from '@/views/GamePostList.vue';

const localVue = createLocalVue();
localVue.use(Vuetify);

describe('views/GamePostList', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it('assertion: defaults', () => {
    const wrapper = shallowMount(GamePostList, {
      localVue,
      vuetify,
    });
    expect(wrapper.vm.$data.filters.length).not.eq(0);
    expect(wrapper.vm.$data.posts.length).not.eq(0);
    expect(wrapper.vm.$data.page).eq(1);
  });
});
