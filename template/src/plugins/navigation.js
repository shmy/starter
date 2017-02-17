const flatMapComponents = (route, fn) => {
  return Array.prototype.concat.apply([], route.matched.map(function (m, index) {
    return Object.keys(m.components).map(function (key) {
      return fn(m.components[key], m, key, index);
    });
  }));
};
const loadAsyncComponents = async (to, from, next, Vue, router, app) => {
  const $progress = app.$root.$progress;
  const resolveComponents = flatMapComponents(to, (Component, match, key) => {
    if (typeof Component === "function" && !Component.options) {
      return new Promise((resolve, reject) => {
        const _resolve = (Component) => {
          if (!Component.options) {
            Component = Vue.extend(Component); // fix issue #6
            Component._Ctor = Component;
          } else {
            Component._Ctor = Component;
            Component.extendOptions = Component.options;
          }
          match.components[key] = Component;
          resolve(Component);
        };
        Component().then(_resolve).catch(reject);
      });
    }
    return Component;
  });
  const fromPath = from.fullPath.split("#")[0];
  const toPath = to.fullPath.split("#")[0];
  if (!(fromPath === toPath)) {
    $progress.start();
  }
  try {
    await Promise.all(resolveComponents);
    $progress.finish();
    next();
  } catch (error) {
    $progress.fail();
    $progress.finish();
    next(false);
  }
};

export default {
  install (Vue, router, app) {
    router.beforeEach((to, from, next) => loadAsyncComponents(to, from, next, Vue, router, app));
  }
};
