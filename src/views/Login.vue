<template>
  <v-content>
    <v-container id="container" grid-list-xl>
      <v-layout align-center justify-space-between column fill-height>
        <v-flex text-xs-center align-center>
          <h1>로그인</h1>
        </v-flex>
        <v-flex text-xs-center align-center>
          <naver-login-button :client-id="naver_client_id"
                              :callback-url="naver_callback_url">
          </naver-login-button>
        </v-flex>
        <v-flex text-xs-center align-center>
          <kakao-login-button :appkey="kakao_appkey"
                               :callback-url="kakao_callback_url"></kakao-login-button>
        </v-flex>
        <v-flex text-xs-center align-center>
          <google-login-button :client-id="google_client_id"
                               :callback-url="google_callback_url"></google-login-button>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import NaverLoginButton from '@/components/NaverLoginButton.vue';
import GoogleLoginButton from '@/components/GoogleLoginButton.vue';
import KakaoLoginButton from '@/components/KakaoLoginButton.vue';

export default {
  components: {
    NaverLoginButton,
    GoogleLoginButton,
    KakaoLoginButton,
  },
  data: () => ({
    naver_client_id: '',
    naver_callback_url: 'http://it-slaves.com/sign-in/naver',
    kakao_appkey: '',
    kakao_callback_url: 'http://it-slaves.com/sign-in/kakao',
    google_client_id: '',
    google_callback_url: 'http://it-slaves.com/sign-in/google',
  }),
  props: {},
};
</script>
