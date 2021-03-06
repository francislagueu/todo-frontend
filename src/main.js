import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from 'vuetify';
import VueSwal from 'vue-swal';
import {sync} from 'vuex-router-sync';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css' ;


Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VueSwal);

sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
