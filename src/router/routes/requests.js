import RequestsList from "@/pages/RequestsList.vue";

export default {
  name: "requests",
  path: "/requests",
  component: RequestsList,
  meta: {
    needAuth: true,
    title: "Requests",
  },
};
