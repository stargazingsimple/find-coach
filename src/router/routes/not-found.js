export default {
  name: "not-found",
  path: "/:pathMatch(.*)*",
  component: () => import("@/pages/NotFound.vue"),
  meta: {
    needAuth: true,
    title: "Not Found",
    layout: "main",
  },
};
