const ADD_REQUEST = "ADD_REQUEST";

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
  },
  actions: {
    addRequest({ commit }, payload) {
      const request = {
        ...payload,
        id: Date.now().toString(),
      };
      commit(ADD_REQUEST, request);
    },
  },
  getters: {
    requestsByCoach: ({ requests }, _, { auth }) => {
      return requests.filter(({ coachId }) => coachId === auth.userId);
    },
    hasRequestsByCoach: (_, { requestsByCoach }) => !!requestsByCoach?.length,
  },
};
