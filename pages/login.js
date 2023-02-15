import React, { useState } from "react";
import LoginColorPicker from "../src/components/auth/LoginColorPicker";
import LoginForm from "../src/components/auth/LoginForm";
import LoginCaptcha from "../src/components/auth/LoginCaptcha";
import { useAppContext } from "../src/utils/context";

function Login() {
  const { state } = useAppContext();

  function Render() {
    switch (state?.authStage) {
      case 2:
        return <LoginForm />;

      case 1:
        return <LoginColorPicker />;

      case 0:
        return <LoginCaptcha />;
      default:
        return <LoginForm />;
    }
  }

  return <div>{<Render />}</div>;
}

export default Login;
