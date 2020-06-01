import Vue from "vue";
import App from "./core/App.vue";
import { Row, Column } from "vue-grid-responsive";
import router from "./core/router";
import vueHeadful from "vue-headful";

Vue.component("vue-headful", vueHeadful);
Vue.component("row", Row);
Vue.component("column", Column);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
