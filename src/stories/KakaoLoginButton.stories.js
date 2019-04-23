/* eslint-disable import/no-extraneous-dependencies */

import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import KakaoLoginButton from '../components/KakaoLoginButton.vue';

storiesOf('KakaoLoginButton', module)
  .add('Basic', () => ({
    components: { KakaoLoginButton },
    template: '<kakao-login-button appkey="{appkey}"></kakao-login-button>',
  }));
