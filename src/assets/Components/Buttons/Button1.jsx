import React from "react";
import "../Buttons/Button1.css";

const Button1 = ({ onClick, children, color, font }) => {
  return (
    <button
      className="button1"
      style={{ backgroundColor: color, fontSize: font }}
      onClick={onClick}
    >
      <span className="spanButton1">{children}</span>
    </button>
  );
};

export default Button1;
