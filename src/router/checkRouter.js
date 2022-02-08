import router from "./index";
const whiteRoute = ["/login"];

router.beforeEach((to, from, next) => {
  // 判断此跳转路由的来源路由是否存在，存在的情况跳转到来源路由，否则跳转到404页面
  if (to.matched.length === 0) {
    next("/notfound");
    return;
  }
  next();
});
