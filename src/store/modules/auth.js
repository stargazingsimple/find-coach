import { signIn, signUp } from "@/api/auth";
import toast from "@/plugins/toast";

const SET_USER = "SET_USER";

let timer;

export default {
  namespaced: true,
  state() {
    return {
      userId: null,
      token: null,
    };
  },
  mutations: {
    [SET_USER](state, { idToken, localId }) {
      state.token = idToken;
      state.userId = localId;
    },
  },
  actions: {
    async signIn({ commit, dispatch }, payload) {
      dispatch("loader/showLoader", {}, { root: true });
      try {
        const { data } = await signIn(payload);

        const expiresIn = +data.expiresIn * 1000;
        const expirationDate = new Date().getTime() + expiresIn;

        localStorage.setItem("idToken", data.idToken);
        localStorage.setItem("localId", data.localId);
        localStorage.setItem("expirationDate", `${expirationDate}`);

        timer = setTimeout(() => {
          dispatch("signOut");
        }, expiresIn);

        commit(SET_USER, {
          idToken: data.idToken,
          localId: data.localId,
        });

        return true;
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
    signOut({ commit }) {
      localStorage.removeItem("idToken");
      localStorage.removeItem("localId");
      localStorage.removeItem("expirationDate");

      clearTimeout(timer);

      commit(SET_USER, {
        idToken: null,
        localId: null,
      });
    },
    autologin({ commit, dispatch }) {
      const idToken = localStorage.getItem("idToken");
      const localId = localStorage.getItem("localId");
      const tokenExpirationDate = localStorage.getItem("expirationDate");

      const expiresIn = +tokenExpirationDate - new Date().getTime();

      if (expiresIn < 0) {
        return;
      }

      timer = setTimeout(() => {
        dispatch("signOut");
      }, expiresIn);

      if (idToken && localId) {
        commit(SET_USER, {
          idToken,
          localId,
        });
      }
    },
  },
  getters: {
    isAuthenticated: ({ userId }) => !!userId,
  },
};
