/* eslint-disable import/no-extraneous-dependencies */

import { storiesOf } from '@storybook/vue';
import LoginButton from '../components/LoginButton.vue';

storiesOf('components/LoginButton', module)
  .add('Basic', () => ({
    components: { LoginButton },
    template: '<login-button url="https://developers.kakao.com/" image="https://developers.kakao.com/assets/img/about/logos/kakaologin/kr/kakao_account_login_btn_large_wide.png" vendors="kakao"></login-button>',
  }));
