<template>
  <div id="google-login-button"></div>
</template>

<script>
export default {
  name: 'GoogleLoginButton',
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
    renderConfig: {
      scope: 'profile',
      width: 240,
      height: 50,
      longtitle: true,
      theme: 'dark',
    },
  }),
  methods: {
    renderLoginButton() {
      const auth2Config = {
        client_id: this.clientId,
        ux_mode: 'redirect',
        redirect_uri: this.callbackUrl,
      };

      gapi.load('auth2', () => {
        const authInstance = gapi.auth2.init(auth2Config);
        authInstance
          .then(() => authInstance.signOut())
          .then(() => gapi.signin2.render('google-login-button', this.renderConfig));
      });
    },
  },
  created() {
    this.renderLoginButton();
  },
};
</script>
