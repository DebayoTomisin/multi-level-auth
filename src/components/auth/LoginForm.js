import React, { useState } from "react";
import { useAppContext } from "../../utils/context";
import InputField from "../reusable/InputField";

const LoginForm = () => {
  const { state, setState } = useAppContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeBtn, setActiveBtn] = useState(false);

  const onSubmit = () => {};

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

            <button className="button">
              {activeBtn ? (
                <i
                  className="fas fa-circle-notch fa-spin"
                  aria-hidden="true"
                ></i>
              ) : (
                "Login"
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
