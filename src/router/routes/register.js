import CoachRegistration from "@/pages/CoachRegistration.vue";

export default {
  name: "register",
  path: "/register",
  component: CoachRegistration,
  meta: {
    needAuth: true,
    title: "Coach registration",
  },
};
