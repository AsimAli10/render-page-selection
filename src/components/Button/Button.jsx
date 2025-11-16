import React from "react";
import "./Button.css";

export default function Button({ text, onClick, variant = "default" }) {
  return (
    <button className={`btn ${variant}`} onClick={onClick}>
      {text}
    </button>
  );
}
