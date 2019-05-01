/* eslint-disable import/no-extraneous-dependencies */

import { storiesOf } from '@storybook/vue';
import GoogleLoginButton from '../components/GoogleLoginButton.vue';

storiesOf('components/GoogleLoginButton', module)
  .add('Basic', () => ({
    components: { GoogleLoginButton },
    template: '<google-login-button clientId="{clientId}" callbackUrl=""></google-login-button>',
  }));
