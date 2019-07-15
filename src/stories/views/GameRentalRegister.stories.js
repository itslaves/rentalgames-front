/* eslint-disable import/no-extraneous-dependencies */

import { storiesOf } from '@storybook/vue';
import GameRentalRegister from '@/views/GameRentalRegister.vue';

storiesOf('views/GameRentalRegister', module)
  .add('보드게임 등록: 기본', () => ({
    components: { GameRentalRegister },
    template: '<game-rental-register />',
  }));
