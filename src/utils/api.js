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

export const loginAuthApi = async (email, password) => {
  let response = {};
  console.log(email, password);

  try {
    console.log("try block");
    await userDB.users.filter(function (user) {
      if (user.email === email && user.password === password) {
        console.log("now we are inside the conditional");

        response = {
          user: user,
          status: 201,
          message: "Phase one login successful",
        };
      } else {
        console.log("else block of the conditional");
        response = {
          status: 404,
          message: "email or password not valid",
        };
      }
    });
  } catch (error) {
    console.log("catch block!");
    response = {
      status: 401,
      message: "This user does not exist",
      error: error,
    };
  }

  return response;
};

export const colorAuthLogin = async (colors) => {
  let response = {};

  return response;
};
