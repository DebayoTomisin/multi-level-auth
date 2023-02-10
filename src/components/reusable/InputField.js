import React from "react";

function InputField({ label, value, name, type, placeholder, onChange }) {
  return (
    <div className="inputGroup">
      <label>{label}</label>
      <input
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default InputField;
