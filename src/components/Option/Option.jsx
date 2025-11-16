import React from "react";
import "./Option.css";

export default function Option({ text, checked, onChange }) {
  return (
    <div className="option-row">
      <span className="option-label">{text}</span>

      <div
        className={`custom-checkbox ${checked ? "checked" : ""}`}
        onClick={onChange}
      >
        {checked && (
          <svg
            className="checkmark"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 9L7.2 12.5L14.5 5.5"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
