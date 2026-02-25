const INCREMENT_LOADER = "INCREMENT_LOADER";
const DECREMENT_LOADER = "DECREMENT_LOADER";

export default {
  namespaced: true,
  state() {
    return {
      requestsCount: 0,
    };
  },
  mutations: {
    [INCREMENT_LOADER](state) {
      state.requestsCount += 1;
    },
    [DECREMENT_LOADER](state) {
      state.requestsCount -= 1;
    },
  },
  actions: {
    showLoader({ commit }) {
      commit(INCREMENT_LOADER);
    },
    hideLoader({ commit, state }) {
      if (state.requestsCount > 0) {
        commit(DECREMENT_LOADER);
      }
    },
  },
  getters: {
    isLoading({ requestsCount }) {
      return requestsCount > 0;
    },
  },
};
