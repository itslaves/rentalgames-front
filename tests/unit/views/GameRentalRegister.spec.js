import { createLocalVue, shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import Vuetify from 'vuetify';
import GameRentalRegister from '@/views/GameRentalRegister.vue';

const localVue = createLocalVue();
localVue.use(Vuetify);

describe('views/GameRentalRegister', () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it('assertion: defaults', () => {
    const wrapper = shallowMount(GameRentalRegister, {
      localVue,
      vuetify,
    });
    expect(wrapper.vm.$data.dueDateOpen).to.eq(false);
    expect(wrapper.vm.$data.dueDate).not.eq('');
  });
});
