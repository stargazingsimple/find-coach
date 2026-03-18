import { HTTP } from "@/api/index.js";

export const addCoach = async (payload, { coachId, token }) => {
  return await HTTP.put(`/coaches/${coachId}.json`, payload, {
    params: {
      auth: token,
    },
  });
};

export const getCoaches = async () => {
  return await HTTP.get("/coaches.json");
};
