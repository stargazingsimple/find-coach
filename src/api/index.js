import axios from "axios";
import store from "@/store";
import toast from "@/plugins/toast";

const HTTP = axios.create({
  baseURL:
    "https://personal-81e60-default-rtdb.europe-west1.firebasedatabase.app/",
  timeout: 10000,
});

HTTP.interceptors.request.use(
  function (config) {
    store.dispatch("loader/showLoader");
    return config;
  },
  function (error) {
    store.dispatch("loader/hideLoader");
    return Promise.reject(error);
  },
);

HTTP.interceptors.response.use(
  function (response) {
    store.dispatch("loader/hideLoader");
    return response;
  },
  function (error) {
    toast.error(error.message || "Something went wrong");
    store.dispatch("loader/hideLoader");
  },
);

export default HTTP;
