import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import axios from 'axios';
import router from '@/router';
import store from '@/store';
import App from '@/App.vue';
import '@/registerServiceWorker';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

axios.defaults.withCredentials = true;

axios.interceptors.response.use(response => response, (error) => {
  if (error.response.status === 401 && error.config.url.startsWith(`${process.env.VUE_APP_API_HOST}`)) {
    // TODO server api 응답 형식 변경되면 에러코드에 따라 login / join 페이지로 구분되어 이동하도록 변경
    router.push('login');
    return Promise.resolve();
  }
  return Promise.reject(error);
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(routeInfo => routeInfo.meta.authRequired)) {
    // TODO 별도로 api를 호출하지는 않지만 auth check 가 필요한 페이지가 있으면 인증여부 확인하는 api가 통과된 경우에만 이동 가능하도록
    axios.get(`${process.env.VUE_APP_API_HOST}/v1/authentication`).then(() => {
      next();
    });
  } else {
    next(); // 페이지 전환
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
