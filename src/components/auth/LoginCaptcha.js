import React, { useState, useEffect } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import InputField from "../reusable/InputField";
import { useRouter } from "next/router";

const LoginCaptcha = () => {
  const [captchaValue, setCaptchaValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeBtn, setActiveBtn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    loadCaptchaEnginge(8);
  }, []);

  function handleSubmit() {
    if (validateCaptcha(user_captcha) == True) {
      successMessage("Captcha Matched");
      setCaptchaValue("");
      router.push("/");
    } else {
      errorMessage("Captcha does not match");
    }
  }

  return (
    <div className="authContainer">
      <div className="leftContainer"></div>

      <div className="rightContainer">
        <div className="right-text">
          <h1>Hello! Welcome back to Authentizer</h1>
          <h3>Please follow the instructions</h3>
        </div>
        <div>
          <LoadCanvasTemplate />
        </div>
        <form onSubmit={handleSubmit}>
          <InputField
            name="captcha"
            value={captchaValue}
            placeholder="Input what you see"
            type="text"
            onChange={setCaptchaValue}
          />
          <button className="button" disabled={!activeBtn}>
            {loading ? (
              <i className="fas fa-circle-notch fa-spin" aria-hidden="true"></i>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginCaptcha;
