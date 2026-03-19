import { signIn, signUp } from "@/api/auth";
import { getUserById, userRegistration } from "@/api/users";
import toast from "@/plugins/toast";

const SET_USER = "SET_USER";

let timer;

export default {
  namespaced: true,
  state() {
    return {
      userId: null,
      token: null,
      userData: null,
    };
  },
  mutations: {
    [SET_USER](state, { idToken, localId, userData }) {
      state.token = idToken;
      state.userId = localId;
      state.userData = userData;
    },
  },
  actions: {
    async signIn({ commit, dispatch }, payload) {
      dispatch("loader/showLoader", {}, { root: true });
      try {
        const { data } = await signIn(payload);
        const res = await getUserById(data.localId);

        if (!res) return;

        if (!res.data) {
          throw new Error("User not found in the database");
        }

        const userData = Object.values(res.data)[0];

        const expiresIn = +data.expiresIn * 1000;
        const expirationDate = new Date().getTime() + expiresIn;

        localStorage.setItem("idToken", data.idToken);
        localStorage.setItem("localId", data.localId);
        localStorage.setItem("expirationDate", `${expirationDate}`);
        localStorage.setItem("userData", JSON.stringify(userData));

        timer = setTimeout(() => {
          dispatch("signOut");
        }, expiresIn);

        commit(SET_USER, {
          idToken: data.idToken,
          localId: data.localId,
          userData,
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
        const { data } = await signUp(payload);

        delete payload.password;
        delete payload.passwordConfirm;

        const res = await userRegistration(payload, data.localId);

        if (!res) return;

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
      localStorage.removeItem("userData");

      clearTimeout(timer);

      commit(SET_USER, {
        idToken: null,
        localId: null,
        userData: null,
      });
    },
    autologin({ commit, dispatch }) {
      const idToken = localStorage.getItem("idToken");
      const localId = localStorage.getItem("localId");
      const tokenExpirationDate = localStorage.getItem("expirationDate");
      const userData = localStorage.getItem("userData");

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
          userData: JSON.parse(userData),
        });
      }
    },
  },
  getters: {
    isAuthenticated: ({ userId }) => !!userId,
  },
};
