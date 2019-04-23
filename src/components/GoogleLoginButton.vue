<template>
  <button id="sign-in-btn"
          style="margin-left: 25px" @click="signIn">Google 로그인
  </button>
</template>

<script>
export default {
  name: 'GoogleLoginButton',
  props: {
    apiKey: {
      type: String,
      reqruied: true,
    },
    onSuccess: Function,
    onFail: Function,
  },
  data: () => ({
    GoogleAuth: undefined,
  }),
  methods: {
    signIn() {
      console.dir(this.GoogleAuth);
      this.GoogleAuth.signIn();
    },
  },
  mounted() {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: this.apiKey,
        clientId: '489302416615-r2f5n9atq9ntk6seebtb0pdg66c51is4.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
      })
        .then(() => {
          this.GoogleAuth = gapi.auth2.getAuthInstance();
          // Listen for sign-in state changes.
          this.GoogleAuth.isSignedIn.listen(isSignedIn => console.dir(isSignedIn));
        });
    });
  },
};
</script>
