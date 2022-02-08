import { createRouter, createWebHistory } from "vue-router";
import NotFound from "../views/NotFound/NotFound.vue";
import About from "../views/About/About.vue";
import Home from "../views/Home/Home.vue";
import Index from "../views/Index/Index.vue";
import Backend from "../views/Technology/Backend/Backend.vue";
import Frontend from "../views/Technology/Frontend/Frontend.vue";
import Ai from "../views/Technology/AI/Ai.vue";
import Technology from "../views/Technology/Index/Index.vue";
import Life from "../views/Life/Index/Index.vue";
import Friends from "../views/Life/Friends/Friends.vue";
import Photograph from "../views/Life/Photograph/Photograph.vue";
import Write from "../views/Create/Write.vue";
const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    redirect: "/home",
    children: [
      {
        path: "home",
        component: Home,
      },
      {
        path: "life",
        component: Life,
        children: [
          { path: "friends", component: Friends },
          { path: "photograph", component: Photograph },
        ],
      },
      {
        path: "create",
        component: Write,
      },
      {
        path: "technology",
        name: "Technology",
        component: Technology,
        children: [
          { path: "backend", component: Backend },
          { path: "frontend", component: Frontend },
          { path: "ai", component: Ai },
        ],
      },
      {
        path: "notfound",
        name: "NotFound",
        component: NotFound,
      },
      {
        path: "about",
        name: "About",
        component: About,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 };
  },
});

export default router;
