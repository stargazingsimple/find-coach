import CoachesList from "@/pages/CoachesList.vue";
import CoachDetails from "@/pages/CoachDetails.vue";
import CoachContact from "@/pages/CoachContact.vue";

export default [
  {
    path: "/",
    redirect: "/coaches",
  },
  {
    name: "coaches",
    path: "/coaches",
    component: CoachesList,
    meta: {
      needAuth: true,
      title: "Coaches",
      layout: "main",
    },
  },
  {
    name: "coach",
    path: "/coaches/:id",
    component: CoachDetails,
    children: [
      {
        name: "coach-contact",
        path: "contact",
        component: CoachContact,
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
