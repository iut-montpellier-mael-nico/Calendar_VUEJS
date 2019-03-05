import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import cors from "cors";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
//Vue.use(cors({ credentials: true, origin: true }));

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
