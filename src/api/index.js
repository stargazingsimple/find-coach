import axios from "axios";

const HTTP = axios.create({
  baseURL:
    "https://personal-81e60-default-rtdb.europe-west1.firebasedatabase.app/",
  timeout: 10000,
});

export default HTTP;
