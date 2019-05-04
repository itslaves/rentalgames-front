/* eslint-disable import/no-extraneous-dependencies */

import { storiesOf } from '@storybook/vue';
import Join from '@/views/Join.vue';

storiesOf('views/Join', module)
  .add('회원 가입: 기본값', () => ({
    components: { Join },
    template: '<join />',
  }))
  .add('회원 가입: OAuth 연동', () => ({
    components: { Join },
    template: '<join email="sample@local" nickname="Sample" gender="남자" />',
  }));
