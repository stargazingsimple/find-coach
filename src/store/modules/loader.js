const INCREMENT_REQUESTS = "INCREMENT_REQUESTS";
const DECREMENT_REQUESTS = "DECREMENT_REQUESTS";

export default {
  namespaced: true,
  state() {
    return {
      requestsCount: 0,
    };
  },
  mutations: {
    [INCREMENT_REQUESTS](state) {
      state.requestsCount += 1;
    },
    [DECREMENT_REQUESTS](state) {
      state.requestsCount -= 1;
    },
  },
  actions: {
    showLoader({ commit }) {
      commit(INCREMENT_REQUESTS);
    },
    hideLoader({ commit, state }) {
      if (state.requestsCount > 0) {
        commit(DECREMENT_REQUESTS);
      }
    },
  },
  getters: {
    isLoading({ requestsCount }) {
      return requestsCount > 0;
    },
  },
};
