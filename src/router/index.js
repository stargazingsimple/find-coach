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
  document.title = `Find Coach | ${to.meta.title}`;

  if (to.meta.needAuth && !store.getters["auth/isAuthenticated"]) {
    next("/auth/sign-in");
  } else if (
    ((to.name === "sign-in" || to.name === "sign-up") &&
      store.getters["auth/isAuthenticated"]) ||
    (to.name === "requests" && !store.getters["coaches/isCoach"])
  ) {
    next("/coaches");
  } else {
    next();
  }
});

export default router;
