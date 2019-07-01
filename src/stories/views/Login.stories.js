/* eslint-disable import/no-extraneous-dependencies */

import { storiesOf } from '@storybook/vue';
import Login from '@/views/Login.vue';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

storiesOf('views/Login', module)
  .add('로그인 API 정상', () => {
    mock.onGet(`${process.env.VUE_APP_API_HOST}/oauth/vendors`)
      .reply(200, [{
        url: 'https://developers.kakao.com/',
        image: 'https://developers.kakao.com/assets/img/about/logos/kakaologin/kr/kakao_account_login_btn_large_wide.png',
        vendor: 'kakao',
      },
      {
        url: 'https://naver.com/',
        image: 'https://static.nid.naver.com/oauth/big_g.PNG',
        vendor: 'naver',
      },
      {
        url: 'https://google.co.kr',
        image: 'https://developers.google.com/identity/images/btn_google_signin_dark_normal_web.png?hl=ko',
        vendor: 'google',
      }]);
    return {
      components: { Login },
      template: '<Login />',
    };
  });

storiesOf('views/Login', module)
  .add('로그인 API 실패', () => {
    mock.onGet(`${process.env.VUE_APP_API_HOST}/oauth/vendors`)
      .networkError();
    return {
      components: { Login },
      template: '<Login />',
    };
  });

storiesOf('views/Login', module)
  .add('로그인 API 지연 성공', () => {
    mock.onGet(`${process.env.VUE_APP_API_HOST}/oauth/vendors`)
      .reply(() => new Promise(((resolve) => {
        setTimeout(() => {
          resolve([200, [{
            url: 'https://developers.kakao.com/',
            image: 'https://developers.kakao.com/assets/img/about/logos/kakaologin/kr/kakao_account_login_btn_large_wide.png',
            vendor: 'kakao',
          },
          {
            url: 'https://naver.com/',
            image: 'https://static.nid.naver.com/oauth/big_g.PNG',
            vendor: 'naver',
          },
          {
            url: 'https://google.co.kr',
            image: 'https://developers.google.com/identity/images/btn_google_signin_dark_normal_web.png?hl=ko',
            vendor: 'google',
          }]]);
        }, 4000);
      })));
    return {
      components: { Login },
      template: '<Login />',
    };
  });

storiesOf('views/Login', module)
  .add('로그인 API 지연 실패', () => {
    mock.onGet(`${process.env.VUE_APP_API_HOST}/oauth/vendors`)
      .reply(() => new Promise(((resolve) => {
        setTimeout(() => {
          resolve([500]);
        }, 4000);
      })));
    return {
      components: { Login },
      template: '<Login />',
    };
  });
