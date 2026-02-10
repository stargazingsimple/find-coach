import NotFound from "@/pages/NotFound.vue";

export default {
  name: "not-found",
  path: "/:pathMatch(.*)*",
  component: NotFound,
};
