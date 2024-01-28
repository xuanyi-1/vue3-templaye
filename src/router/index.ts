import type { App } from "vue";
import type { RouteRecordRaw } from "vue-router";
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import {  RootRoute, PathMatchRoute } from "./routes";
import { createRouterGuard } from "./guard";

/** 静态路由 */
export const constantRoutes: RouteRecordRaw[] = [
  RootRoute,
  
  PathMatchRoute,
];

const { VITE_ROUTE_HASH = "Y" } = import.meta.env;

const router = createRouter({
  history:
    VITE_ROUTE_HASH === "Y" ? createWebHashHistory() : createWebHistory(),
  routes: constantRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export async function setupRouter(app: App) {
  app.use(router);
  createRouterGuard(router);
  await router.isReady();
}

export default router;
