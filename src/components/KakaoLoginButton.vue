<template>
  <a id="kakao-login-btn"></a>
</template>

<script>
export default {
  name: 'KakaoLoginButton',
  props: {
    appkey: {
      type: String,
      reqruied: true,
    },
    onSuccess: Function,
    onFail: Function,
  },
  mounted: function () {
    try {
      Kakao.init(this.appkey);
    } catch (error) {}

    Kakao.Auth.createLoginButton({
      container: '#kakao-login-btn',
      success: (authObj) => {
        if (this.onSuccess) {
          this.onSuccess(authObj);
        }
      },
      fail: (err) => {
        if (this.onFail) {
          this.onFail(err);
        }
      },
    });
  },
};
</script>
