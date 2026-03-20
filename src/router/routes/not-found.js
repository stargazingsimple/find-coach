export default {
  name: "not-found",
  path: "/:pathMatch(.*)*",
  component: () => import("@/pages/NotFound.vue"),
  meta: {
    needAuth: false,
    title: "Not Found",
    layout: "main",
  },
};
