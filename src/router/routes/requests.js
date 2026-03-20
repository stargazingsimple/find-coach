export default {
  name: "requests",
  path: "/requests",
  component: () => import("@/pages/RequestsList.vue"),
  meta: {
    needAuth: true,
    title: "Requests",
    layout: "main",
  },
};
