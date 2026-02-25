import { addCoach, getCoaches } from "@/api/coaches";

const ADD_COACH = "ADD_COACH";
const SET_COACHES = "SET_COACHES";

export default {
  namespaced: true,
  state() {
    return {
      coaches: [],
    };
  },
  mutations: {
    [ADD_COACH]({ coaches }, payload) {
      coaches.push(payload);
    },
    [SET_COACHES](state, payload) {
      state.coaches = payload;
    },
  },
  actions: {
    async addCoach({ commit, rootState }, payload) {
      const coachId = rootState.auth.userId;

      const res = await addCoach(payload, coachId);

      if (!res) return;

      const coachData = {
        ...payload,
        id: coachId,
      };

      commit(ADD_COACH, coachData);

      return true;
    },
    async getCoaches({ commit }) {
      const res = await getCoaches();

      if (!res) return;

      const coaches = Object.entries(res.data).map(([key, value]) => ({
        id: key,
        ...value,
      }));

      commit(SET_COACHES, coaches);
    },
  },
  getters: {
    isCoach: ({ coaches }, _, { auth }) =>
      coaches.some(({ id }) => id === auth.userId),
  },
};
