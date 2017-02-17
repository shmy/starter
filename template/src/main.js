import Vue from "vue";
import Router from "vue-router";
import { sync } from "vuex-router-sync";
import App from "./App";
import store from "store";
import routes from "config/routes";
import http from "plugins/http";
import navigation from "plugins/navigation";
import documentTitle from "plugins/document-title";
import keepScroll from "plugins/keep-scroll";
import routeTransition from "plugins/route-transition";
import progress from "components/sh-progress";
import loading from "components/sh-loading";

Vue.use(Router);
Vue.component(progress.name, progress);
Vue.component(loading.name, loading);

const router = new Router({
  base: "/",
  mode: "history",
  routes
});

const app = new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
sync(store, router);
Vue.use(http, app);
Vue.use(navigation, router, app);
Vue.use(documentTitle, router, { defTitle: "【网站名称】", filter: title => `${title}【网站名称】` });
Vue.use(keepScroll);
Vue.use(routeTransition, router);
