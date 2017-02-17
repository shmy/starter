export default {
  install (Vue, router) {
    router.beforeEach((to, from, next) => {
      const rootElement = document.body || document.documentElement;
      const history = sessionStorage;
      to = to.path;
      from = from.path;
      if (history.getItem(to)) {
        rootElement.classList.add("transition-reverse");
        history.removeItem(to);
      } else {
        from && history.setItem(from, 1);
        rootElement.classList.remove("transition-reverse");
      }
      next();
    });
  }
};

