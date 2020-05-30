import Vue from "vue";
import VueRouter from "vue-router";
import List from "../screens/List";
import Pokemon from "../screens/Pokemon";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "List",
    component: List
  },
  {
    path: "/pokemon/:id",
    name: "Pokemon",
    component: Pokemon
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/vue/",
  routes
});

export default router;
