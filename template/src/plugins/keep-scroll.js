const attrName = "data-scroll-pos";
export default {
  install (Vue) {
    Vue.directive("keep-scroll", {
      bind (el, binding, vnode) {
        el.addEventListener("scroll", e => {
          e = e.target;
          e.setAttribute(attrName, e.scrollLeft + "-" + e.scrollTop);
        }, false);
        const restore = (el, attr) => {
          attr = attr.split("-");
          el.scrollLeft = attr[0];
          el.scrollTop = attr[1];
        };
        vnode.context.$on("hook:activated", () => {
          const refs = el.parentElement.querySelectorAll(`[${attrName}]`);
          [].forEach.call(refs, ref => {
            const attr = ref.getAttribute(attrName);
            attr && restore(ref, attr);
          });
        });
      }
    });
  }
};
