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

      await addCoach(payload, coachId);

      const coachData = {
        ...payload,
        id: coachId,
      };

      commit(ADD_COACH, coachData);
    },
    async getCoaches({ commit }) {
      const { data } = await getCoaches();

      const coaches = Object.entries(data).map(([key, value]) => ({
        id: key,
        ...value,
      }));

      commit(SET_COACHES, coaches);
    },
  },
  getters: {
    hasCoaches: ({ coaches }) => !!coaches?.length,
    isCoach: ({ coaches }, _, { auth }) =>
      coaches.some(({ id }) => id === auth.userId),
  },
};
