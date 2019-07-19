/* eslint-disable import/no-extraneous-dependencies */

import { storiesOf } from '@storybook/vue';
import GamePostList from '@/views/GamePostList.vue';

storiesOf('views/GamePostList', module)
  .add('게임 대여 목록', () => ({
    components: { GamePostList },
    template: '<game-post-list />',
  }));
