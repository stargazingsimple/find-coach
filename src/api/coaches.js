import HTTP from "@/api/index.js";

export const addCoach = async (payload, coachId) => {
  return await HTTP.put(`/coaches/${coachId}.json`, payload);
};
