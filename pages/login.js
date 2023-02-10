import React, { useState } from "react";
import LoginColorPicker from "../src/components/auth/LoginColorPicker";
import LoginForm from "../src/components/auth/LoginForm";
import { useAppContext } from "../src/utils/context";

function Login() {
  const { state } = useAppContext();

  return (
    <div>{state?.authStage == 0 ? <LoginForm /> : <LoginColorPicker />}</div>
  );
}

export default Login;
