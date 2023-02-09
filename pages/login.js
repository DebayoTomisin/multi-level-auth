import React, { useState } from "react";
import LoginColorPicker from "../src/components/auth/LoginColorPicker";
import LoginForm from "../src/components/auth/LoginForm";

function Login() {
  const [stage, setState] = useState(0);

  return <div>{stage == 0 ? <LoginForm /> : <LoginColorPicker />}</div>;
}

export default Login;
