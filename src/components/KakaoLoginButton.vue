<template>
  <a id="kakao-login-btn"></a>
</template>

<script>
export default {
  name: 'KakaoLoginButton',
  props: {
    appkey: {
      type: String,
      required: true,
    },
    callbackUrl: {
      type: String,
      required: true,
    },
  },
  mounted() {
    try {
      Kakao.init(this.appkey);
    } catch (error) {}

    Kakao.Auth.createLoginButton({
      container: '#kakao-login-btn',
      success(authObj) {
        const callback = new URL(this.callbackUrl);
        callback.searchParams.set('access_token', authObj.access_token);
        document.location.href = callback.href;
      },
    });
  },
};
</script>
