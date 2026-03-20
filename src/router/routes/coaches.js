export default [
  {
    path: "/",
    redirect: "/coaches",
  },
  {
    name: "coaches",
    path: "/coaches",
    component: () => import("@/pages/CoachesList.vue"),
    meta: {
      needAuth: true,
      title: "Coaches",
      layout: "main",
    },
  },
  {
    name: "coach",
    path: "/coaches/:id",
    component: () => import("@/pages/CoachDetails.vue"),
    children: [
      {
        name: "coach-contact",
        path: "contact",
        component: () => import("@/pages/CoachContact.vue"),
        props: true,
      },
    ],
    props: true,
    meta: {
      needAuth: true,
      title: "Coach Details",
      layout: "main",
    },
  },
];
