/**
 * meta 可选参数
 * @param ｛String} title 路由document.title
 */
export default [
  {
    path: "/",
    component: () => System.import("views/index.vue"),
    meta: { title: "首页" }
  },
  {
    path: "/list",
    component: () => System.import("views/list.vue"),
    meta: { title: "列表页", keepAlive: true }
  }
];
