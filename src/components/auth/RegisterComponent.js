import React, { useState, useEffect } from "react";
import InputField from "../reusable/InputField";
import ColorPicker from "./ColorPicker";

const RegisterComponent = () => {
  const [colors, setColors] = useState([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [activeBtn, setActiveBtn] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log(username);
  console.log(colors);

  const handleSubmit = () => {
    console.log("registration succesful");
  };

  const activateButton = () => {
    if (
      colors.length !== 3 &&
      username.length !== 5 &&
      email !== "" &&
      password !== ""
    ) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  };

  useEffect(() => {
    activateButton();
  }, [colors, username, email, password]);

  return (
    <div className="authContainer">
      <div className="leftContainer"></div>
      <div className="rightContainer">
        <div className="right-text">
          <h1>Hello☺ Welcome to Authentizer</h1>
          <h3>Please read the signup instructions carefully</h3>
          <p className="signupText">
            Please after inputting your email and name and password, you have to
            select three colors of the available listed, please ensure you
            remember your selections as you will be required to select it from a
            list of options when you try to login
          </p>
        </div>

        <div className="forms">
          <form onSubmit={handleSubmit}>
            <InputField
              name="username"
              value={username}
              placeholder="Enter your username"
              type="text"
              onChange={setUsername}
            />
            <InputField
              name="email"
              value={email}
              placeholder="Enter your email"
              type="email"
              onChange={setEmail}
            />
            <InputField
              name="password"
              value={password}
              type="password"
              placeholder="Enter your password"
              onChange={setPassword}
            />
            <ColorPicker
              setSelectedColors={setColors}
              selectedColors={colors}
            />
            <button className="button" disabled={!activeBtn}>
              {loading ? (
                <i
                  className="fas fa-circle-notch fa-spin"
                  aria-hidden="true"
                ></i>
              ) : (
                "Register"
              )}
            </button>

            <div className="actionText">
              <span>
                Already own an account? <a href="/login">Login</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
