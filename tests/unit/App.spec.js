import { createLocalVue, shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import App from '@/App.vue';

const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.use(VueRouter);

describe('App', () => {
  let vuetify;
  let router;
  beforeEach(() => {
    vuetify = new Vuetify();
    router = new VueRouter();
  });
  it('assertion: defaults', () => {
    const wrapper = shallowMount(App, {
      localVue,
      vuetify,
      router,
    });
    expect(wrapper.name()).to.eq('app');
    // expect(wrapper.vm.$data.dueDateOpen).to.eq(false);
    // expect(wrapper.vm.$data.dueDate).not.eq('');
  });
});
