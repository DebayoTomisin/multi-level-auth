import React, { useState, useEffect } from "react";

const LoginColorPicker = () => {
  const [colors, setColors] = useState([]);
  const [colorSelect, setColorSelect] = useState([]);
  const [activeBtn, setActiveBtn] = useState(false);
  const [loading, setLoading] = useState(false);

  function generateColors() {
    let maxVal = 0xffffff;
    let randomNumber = Math.random() * maxVal;

    randomNumber = Math.floor(randomNumber).toString(16);
    let randomColor = randomNumber.padStart(6, 0);
    return `#${randomColor.toUpperCase()}`;
  }

  useEffect(() => {
    if (colors.length !== 12) {
      Array(12)
        .fill(0)
        .forEach((item, i) => {
          setColors((prevState) => [...prevState, generateColors()]);
        });
    }
  }, []);

  const handleSelectColor = (value) => {
    if (colorSelect.length !== 3) {
      console.log("this is a new selection");
      setColorSelect((oldState) => [...oldState, value]);
    } else {
      errorMessage("You can only select 3 colors");
    }

    if (colorSelect.includes(value)) {
      console.log("this is already selected");
      setColorSelect((oldArray) => {
        return oldArray.filter((color) => color !== value);
      });
    }
  };

  return (
    <div className="authContainer">
      <div className="leftContainer"></div>

      <div className="rightContainer">
        <div className="right-text">
          <h1>Hello! Welcome back to Authentizer</h1>
          <h3>Please select the three colors selected at sign up</h3>
        </div>

        <div className="colorPicker">
          {colors.map((color, index) => {
            return (
              <div
                className=""
                key={index}
                onClick={() => handleSelectColor(color)}
                style={{
                  backgroundColor: color,
                  border: colorSelect.includes(color) ? "3px solid orange" : "",
                  height: "45px",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                {color}
              </div>
            );
          })}
        </div>
        <button
          className="button"
          style={{
            alignSelf: "center",
            width: '50%',
          }}
          disabled={!activeBtn}
        >
          {loading ? (
            <i className="fas fa-circle-notch fa-spin" aria-hidden="true"></i>
          ) : (
            "Continue"
          )}
        </button>
      </div>
    </div>
  );
};

export default LoginColorPicker;
