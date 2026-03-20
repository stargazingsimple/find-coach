export default {
  name: "register",
  path: "/register",
  component: () => import("@/pages/CoachRegistration.vue"),
  meta: {
    needAuth: true,
    title: "Coach Registration",
    layout: "main",
  },
};
