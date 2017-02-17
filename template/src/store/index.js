import Vue from "vue";
import Vuex from "vuex";
import createPersist from "vuex-localstorage";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);
const plugins = [createPersist({
  namespace: "vuex-state",
  // 持久化到sessionStorage
  provider: sessionStorage,
  initialState: state,
  // 一周
  expires: 7 * 24 * 60 * 60 * 1e3
})];
// 开发环境使用严格模式
const strict = process.env.NODE_EVN !== "production";
export default new Vuex.Store({
  plugins,
  strict,
  // state,
  mutations,
  getters,
  actions
});
