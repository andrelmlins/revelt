import Vue from "vue";
import App from "./core/App.vue";
import router from "./core/router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
