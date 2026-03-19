import SignIn from "@/components/auth/SignIn.vue";
import SignUp from "@/components/auth/SignUp.vue";

export default {
  name: "auth",
  path: "/auth",
  children: [
    {
      name: "sign-in",
      path: "sign-in",
      component: SignIn,
    },
    {
      name: "sign-up",
      path: "sign-up",
      component: SignUp,
    },
  ],
  meta: {
    needAuth: false,
    title: "Authentication",
    layout: "auth",
  },
};
