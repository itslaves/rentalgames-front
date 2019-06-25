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

              <error-dialog v-model="dialog" :timeout="3000">
                <template slot="title">에러</template>
                <template slot="content">{{error}}</template>
              </error-dialog>

              <v-progress-circular
                class="progress-circular"
                v-if="loading"
                :size="100"
                :width="7"
                color="purple"
                indeterminate
              ></v-progress-circular>

            </v-layout>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import LoginButton from '@/components/LoginButton.vue';
import ErrorDialog from '@/components/ErrorDialog.vue';

export default {
  components: {
    LoginButton,
    ErrorDialog,
  },
  props: {},
  data: () => ({
    vendors: [
    ],
    loading: true,
    dialog: false,
    error: '',
  }),
  mounted() {
    this.$http.get(`${process.env.VUE_APP_API_HOST}/oauth/vendors`)
      .then((response) => {
        this.vendors = response.data;
      })
      .catch(() => {
        this.dialog = true;
        this.error = '로그인 정보를 불러오는데 실패하였습니다.';
      })
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>
<style scoped>
  .login-button {
    margin: 50px;
  }
  .progress-circular {
    margin-top: 300px;
  }
</style>
