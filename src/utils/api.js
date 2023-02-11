import { userDB } from "./db";
import { useLiveQuery } from "dexie-react-hooks";

export const registerApi = async (email, password, username, colors) => {
  let response = {};
  try {
    await userDB.users.add({
      username,
      email,
      password,
      colors,
    });
    response = {
      status: 200,
      message: "Registration Successful",
    };
  } catch (error) {
    response = {
      status: 400,
      message: "error occurred processing this request",
    };
  }

  return response;
};

export const loginAuthApi = (email, password) => {
  response = {};

  return response;
};
