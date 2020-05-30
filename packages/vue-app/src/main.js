import Vue from "vue";
import App from "./core/App.vue";
import router from "./core/router";
import vueHeadful from "vue-headful";

Vue.component("vue-headful", vueHeadful);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
