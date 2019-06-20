<template>
  <v-content>
    <v-container id="container" fluid>
      <v-layout column>
        <v-flex xs12>
          <div>
            <v-layout align-center justify-space-between column fill-height>
              <div class="login-button" :key="v.vendor" v-for="v in vendors">
                <login-button :vendor="v.vendor" :url="v.url" :image="v.image"></login-button>
              </div>
            </v-layout>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import LoginButton from '@/components/LoginButton.vue';

export default {
  components: {
    LoginButton,
  },
  props: {},
  data: () => ({
    vendors: [
    ],
  }),
  mounted() {
    this.$http.get('/vendors')
      .then((response) => {
        this.vendors = response.data;
      })
      .catch((error) => {
        console.log(error);
        alert('페이지를 불러오는 도중 에러가 발생하였습니다.');
      });
  },
};
</script>
<style scoped>
  .login-button {
    margin: 50px;
  }
</style>
