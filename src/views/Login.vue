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

              <error-dialog v-if="error"
                            :title="`페이지 로딩 에러`"
                            :details="`로그인 페이지 정보를 불러오던중 에러가 발생하였습니다.`"
                            :button-text="`새로고침`" @click="reloadPage">
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
    error: false,
  }),
  mounted() {
    this.$http.get(`${process.env.VUE_APP_API_HOST}/oauth/vendors`, {
      timeout: 5000,
    })
      .then((response) => {
        this.vendors = response.data;
      })
      .catch(() => {
        this.error = true;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>
<style scoped>
  .login-button {
    margin: 10px;
  }
  .progress-circular {
    margin-top: 100px;
  }
</style>
