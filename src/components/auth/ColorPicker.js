import React, { useEffect, useState } from "react";
import { errorMessage } from "../reusable/Toast";

function ColorPicker({ setSelectedColors, selectedColors }) {
  const [colors, setColors] = useState([]);
  const [colorSelect, setColorSelect] = useState([]);

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

  useEffect(() => {
    setSelectedColors(colorSelect);
  }, [colorSelect, setColorSelect]);

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
    <div>
      <h5>Please select 3 from the listed colors</h5>
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
    </div>
  );
}

export default ColorPicker;
