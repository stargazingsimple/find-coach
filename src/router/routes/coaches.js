export default [
  {
    path: "/",
    redirect: "/coaches",
  },
  {
    name: "coaches",
    path: "/coaches",
    component: null,
  },
  {
    name: "coach",
    path: "/coaches/:id",
    component: null,
  },
  {
    name: "coach-contact",
    path: "/coaches/:id/contact",
    component: null,
  },
];
