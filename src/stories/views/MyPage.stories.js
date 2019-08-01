/* eslint-disable import/no-extraneous-dependencies */

import { storiesOf } from '@storybook/vue';
import MyPage from '@/views/MyPage.vue';

storiesOf('views/MyPage', module)
  .add('마이페이지', () => ({
    components: { MyPage },
    template: '<my-page />',
  }));
