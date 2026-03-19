import { HTTP } from "@/api/index";

export const userRegistration = async (payload, userId) => {
  return HTTP.post(`/users/${userId}.json`, payload);
};

export const getUserById = async (userId) => {
  return HTTP.get(`/users/${userId}.json`);
};
