import { createStore } from "vuex";
import coaches from "@/store/modules/coaches";
import requests from "@/store/modules/requests";
import auth from "@/store/modules/auth";
import loader from "@/store/modules/loader";

const store = createStore({
  modules: {
    coaches,
    requests,
    auth,
    loader,
  },
});

export default store;
