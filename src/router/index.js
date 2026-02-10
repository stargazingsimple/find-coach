import { createRouter, createWebHistory } from "vue-router";
import coachesRoutes from "./routes/coaches.js";
import registerRoutes from "./routes/register.js";
import requestRoutes from "./routes/requests.js";
import notFoundRoutes from "./routes/not-found.js";

const routes = [
  ...coachesRoutes,
  registerRoutes,
  requestRoutes,
  notFoundRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
