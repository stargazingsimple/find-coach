import UserAuth from "@/pages/UserAuth.vue";
import SignIn from "@/components/auth/SignIn.vue";
import SignUp from "@/components/auth/SignUp.vue";

export default {
  name: "auth",
  path: "/auth",
  component: UserAuth,
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
};
