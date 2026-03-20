export default {
  name: "auth",
  path: "/auth",
  children: [
    {
      name: "sign-in",
      path: "sign-in",
      component: () => import("@/components/auth/SignIn.vue"),
    },
    {
      name: "sign-up",
      path: "sign-up",
      component: () => import("@/components/auth/SignUp.vue"),
    },
  ],
  meta: {
    needAuth: false,
    title: "Authentication",
    layout: "auth",
  },
};
