import { addRequest, getRequests } from "@/api/requests";

const ADD_REQUEST = "ADD_REQUEST";
const SET_REQUESTS = "SET_REQUESTS";

export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  mutations: {
    [ADD_REQUEST]({ requests }, payload) {
      requests.push(payload);
    },
    [SET_REQUESTS](state, payload) {
      state.requests = payload;
    },
  },
  actions: {
    async addRequest({ commit }, { formData, coachId }) {
      const res = await addRequest(formData, coachId);

      if (!res) return;

      commit(ADD_REQUEST, {
        ...formData,
        coachId,
        id: res.data.name,
      });

      return true;
    },
    async getRequests({ commit, rootState }) {
      const coachId = rootState.auth.userId;

      const res = await getRequests(coachId);

      if (!res) return;

      const requests = Object.entries(res.data || {}).map(([key, value]) => ({
        id: key,
        coachId,
        ...value,
      }));

      commit(SET_REQUESTS, requests);
    },
  },
  getters: {
    requestsByCoach: ({ requests }, _, { auth }) => {
      return requests.filter(({ coachId }) => coachId === auth.userId);
    },
    hasRequestsByCoach: (_, { requestsByCoach }) => !!requestsByCoach?.length,
  },
};
