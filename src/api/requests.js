import HTTP from "@/api/index";

export const addRequest = async (payload, coachId) => {
  return HTTP.post(`/requests/${coachId}.json`, payload);
};

export const getRequests = async (coachId) => {
  return HTTP.get(`/requests/${coachId}.json`);
};
