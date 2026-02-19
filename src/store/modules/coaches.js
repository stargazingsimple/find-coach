const ADD_COACH = "ADD_COACH";

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: "c1",
          firstName: "Maximilian",
          lastName: "Schwarzmüller",
          areas: ["frontend", "backend", "career"],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: "c2",
          firstName: "Julie",
          lastName: "Jones",
          areas: ["frontend", "career"],
          description:
            "I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations: {
    [ADD_COACH]({ coaches }, payload) {
      coaches.push(payload);
    },
  },
  actions: {
    addCoach({ commit, rootState }, payload) {
      const coach = {
        ...payload,
        id: rootState.auth.userId,
      };
      commit(ADD_COACH, coach);
    },
  },
  getters: {
    hasCoaches: ({ coaches }) => !!coaches?.length,
    isCoach: ({ coaches }, _, { auth }) =>
      coaches.some(({ id }) => id === auth.userId),
  },
};
