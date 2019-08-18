import Vue from 'vue';
import Vuetify from 'vuetify';
import { createLocalVue, mount } from '@vue/test-utils';
import { expect } from 'chai';
import GameRentalRegister from '@/views/GameRentalRegister.vue';

Vue.use(Vuetify);

describe('views/GameRentalRegister', () => {
  let localVue;
  let vuetify;
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuetify);
    vuetify = new Vuetify();
  });

  it('assertion: defaults', () => {
    const wrapper = mount(GameRentalRegister, {
      localVue,
      vuetify,
      sync: false,
    });
    expect(wrapper.vm.$data.dueDateOpen).to.eq(false);
    expect(wrapper.vm.$data.dueDate).not.eq('');
  });
});
