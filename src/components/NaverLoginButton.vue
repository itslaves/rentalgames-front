<template>
  <div id="naverIdLogin">
  </div>
</template>


<script>
export default {
  name: 'NaverLoginButton',
  props: {
    clientId: {
      type: String,
      required: true,
    },
    callbackUrl: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    btnConfig: {
      btnColor: 'green',
      btnType: 3,
      btnHeight: 50,
    },
  }),
  methods: {
    renderButton() {
      const naverLogin = new naver.LoginWithNaverId(
        {
          clientId: this.clientId,
          isPopup: false,
          loginButton: {
            color: this.btnConfig.btnColor,
            type: this.btnConfig.btnType,
            height: this.btnConfig.btnHeight,
          },
          callbackUrl: this.callbackUrl,
          callbackHandle: false,
        },
      );

      naverLogin.init();
    },
  },
  mounted() {
    this.renderButton();
  },
};
</script>
