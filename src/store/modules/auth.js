import { signIn, signUp } from "@/api/auth";
import toast from "@/plugins/toast";

const SET_USER = "SET_USER";

export default {
  namespaced: true,
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null,
    };
  },
  mutations: {
    [SET_USER](state, { idToken, localId, expiresIn }) {
      state.token = idToken;
      state.userId = localId;
      state.tokenExpiration = expiresIn;
    },
  },
  actions: {
    async signIn({ commit, dispatch }, payload) {
      dispatch("loader/showLoader", {}, { root: true });
      try {
        const { data } = await signIn(payload);
        commit(SET_USER, data);
      } catch (error) {
        toast.error(error.message || "Something went wrong");
      } finally {
        dispatch("loader/hideLoader", {}, { root: true });
      }
    },
    async signUp({ dispatch }, payload) {
      dispatch("loader/showLoader", {}, { root: true });
      try {
        await signUp(payload);
        toast.success("Registration successful!");
        return true;
      } catch (error) {
        toast.error(error.message || "Something went wrong");
      } finally {
        dispatch("loader/hideLoader", {}, { root: true });
      }
    },
  },
};
