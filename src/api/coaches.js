import HTTP from "@/api/index.js";

export const addCoach = async (payload, coachId) => {
  return await HTTP.put(`/coaches/${coachId}.json`, payload);
};

export const getCoaches = async () => {
  return await HTTP.get("/coaches.json");
};
