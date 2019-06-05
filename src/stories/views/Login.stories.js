/* eslint-disable import/no-extraneous-dependencies */

import { storiesOf } from '@storybook/vue';
import Login from '@/views/Login.vue';

storiesOf('views/Login', module)
  .add('로그인', () => ({
    components: { Login },
    template: '<Login />',
  }));
