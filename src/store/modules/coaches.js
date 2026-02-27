import { addCoach, getCoaches } from "@/api/coaches";

const ADD_COACH = "ADD_COACH";
const SET_COACHES = "SET_COACHES";
const SET_UPDATE_TIMESTAMP = "SET_UPDATE_TIMESTAMP";

const UPDATE_TIME = 60;

export default {
  namespaced: true,
  state() {
    return {
      coaches: [],
      updateTimestamp: null,
    };
  },
  mutations: {
    [ADD_COACH]({ coaches }, payload) {
      coaches.push(payload);
    },
    [SET_COACHES](state, payload) {
      state.coaches = payload;
    },
    [SET_UPDATE_TIMESTAMP](state) {
      state.updateTimestamp = new Date().getTime();
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
    async getCoaches({ commit, getters }, { forceUpdate }) {
      if (!getters.shouldUpdate && !forceUpdate) return;

      const res = await getCoaches();

      if (!res) return;

      const coaches = Object.entries(res.data || {}).map(([key, value]) => ({
        id: key,
        ...value,
      }));

      commit(SET_COACHES, coaches);
      commit(SET_UPDATE_TIMESTAMP);
    },
  },
  getters: {
    isCoach: ({ coaches }, _, { auth }) =>
      coaches.some(({ id }) => id === auth.userId),
    shouldUpdate: ({ updateTimestamp }) => {
      if (!updateTimestamp) return true;

      const currentTimestamp = new Date().getTime();

      return (currentTimestamp - updateTimestamp) / 1000 > UPDATE_TIME;
    },
  },
};
