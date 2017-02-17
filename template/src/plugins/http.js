import { create } from "axios";
import env from "config/env";

export default {
  install (Vue, app) {
    const $loading = app.$root.$loading;
    const http = create({
      baseURL: env.baseURL,
      timeout: env.timeout
    });
    // Request 拦截器
    http.interceptors.request.use(
      config => {
        $loading.show();
        const token = localStorage.getItem("token");  // 自动注入Token
        token && (config.headers.Authorization = /^Bearer /.test(token) ? token : "Bearer " + token);
        return config;
      },
      error => {
        $loading.hide();
        return Promise.reject(error);
      });
    // Response 拦截器
    http.interceptors.response.use(
      ({ data }) => {
        $loading.hide();
        return data;
      },
      error => {
        $loading.hide();
        return Promise.reject(error);
      });
    Vue.http = Vue.prototype.$http = http;
  }
};
