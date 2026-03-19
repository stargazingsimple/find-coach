import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import coachesRoutes from "./routes/coaches.js";
import registerRoutes from "./routes/register.js";
import requestRoutes from "./routes/requests.js";
import authRoutes from "./routes/auth.js";
import notFoundRoutes from "./routes/not-found.js";

const routes = [
  ...coachesRoutes,
  registerRoutes,
  requestRoutes,
  authRoutes,
  notFoundRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.meta.needAuth && !store.getters["auth/isAuthenticated"]) {
    next("/auth/sign-in");
  } else if (
    to.meta.title === "Authentication" &&
    store.getters["auth/isAuthenticated"]
  ) {
    next("/coaches");
  } else {
    next();
  }
});

export default router;
