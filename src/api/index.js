import axios from "axios";
import store from "@/store";
import toast from "@/plugins/toast";

const API_KEY = "AIzaSyD2wrn0GQOrFW3KS9XF1Su6_c7A1qz-6zA";

export const HTTP = axios.create({
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

export const AUTH = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/",
  timeout: 10000,
  params: {
    key: API_KEY,
  },
});
