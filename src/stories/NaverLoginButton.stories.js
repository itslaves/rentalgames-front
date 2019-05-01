/* eslint-disable import/no-extraneous-dependencies */

import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import NaverLoginButton from '../components/NaverLoginButton.vue';

storiesOf('components/KakaoLoginButton', module)
  .add('Basic', () => ({
    components: { NaverLoginButton },
    template: '<naver-login-button clientId="{clientid}" callbackUrl=""></naver-login-button>',
  }));
