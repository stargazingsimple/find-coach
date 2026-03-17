import { AUTH } from "@/api/index";

export const signIn = async ({ email, password }) => {
  return await AUTH.post("/accounts:signInWithPassword", {
    email,
    password,
    returnSecureToken: true,
  });
};

export const signUp = async ({ email, password }) => {
  return await AUTH.post("/accounts:signUp", {
    email,
    password,
    returnSecureToken: true,
  });
};
