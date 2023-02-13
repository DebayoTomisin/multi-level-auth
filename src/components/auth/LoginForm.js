import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAppContext } from "../../utils/context";
import InputField from "../reusable/InputField";
import { loginAuthApi } from "../../utils/api";
import { errorMessage, successMessage } from "../reusable/Toast";

const LoginForm = () => {
  const { state, setState } = useAppContext();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeBtn, setActiveBtn] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    setLoading(true);
    console.log("handle submitfunction");
    e.preventDefault();

    try {
      const response = await loginAuthApi(email, password);
      console.log(response);

      if (response.status == 201) {
        successMessage(response.message);
      } else {
        errorMessage(response.message);
      }
    } catch (error) {
      console.log("an error occured");
      errorMessage(error);
    }
    setLoading(false);
  };

  const activateButton = () => {
    if (email !== "" && password !== "") {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  };

  useEffect(() => {
    activateButton();
  }, [email, password]);

  return (
    <div className="authContainer">
      <div className="leftContainer"></div>

      <div className="rightContainer">
        <div className="right-text">
          <h1>Hello! Welcome back to Authentizer</h1>
          <h3>Please enter your credentials 👌🙌</h3>
        </div>
        <div>
          <form onSubmit={onSubmit}>
            <InputField
              name="email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={setEmail}
              label="Email"
            />

            <InputField
              name="password"
              value={password}
              placeholder="Enter your password"
              type="password"
              onChange={setPassword}
              label="Password"
            />

            <button className="button" disabled={!activeBtn}>
              {loading ? (
                <i
                  className="fas fa-circle-notch fa-spin"
                  aria-hidden="true"
                ></i>
              ) : (
                "Continue"
              )}
            </button>
            <div className="actionText">
              <span>
                Don't own an account? <a href="/register">Register</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
