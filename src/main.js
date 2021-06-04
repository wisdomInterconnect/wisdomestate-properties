import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuelidate from 'vuelidate';
import 'semantic-ui-css/semantic.css';
import chartkick from 'vue-chartkick';
import chart from 'chart.js';
import VueChatScroll from 'vue-chat-scroll';
import axios from 'axios'
import VueResource from 'vue-resource'
// import vuetify from 'vuetify';
// import Bootstrap from "bootstrap/dist/css/boostrap.css";

Vue.config.productionTip = false;
Vue.use(vuelidate);
Vue.prototype.$http = axios;
Vue.use(VueChatScroll);
Vue.use(chartkick.use(chart));
Vue.use(VueResource)
// vue.use(vuetify);
// Vue.use($)npm run serve
// Vue.use(Bootstrap)


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
