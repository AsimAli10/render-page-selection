import React from "react";
import "./PagesPopup.css";

export default function ThankYouPopup({ message, onRetry }) {
  const isError = message.includes("Oops");
  
  return (
    <div className="popup-overlay">
      <div className="popup-box thank-you-popup">
        {!isError && <h3>Thank you!</h3>}
        <p>{message}</p>

        <button className="btn default" onClick={onRetry}>Retry</button>
      </div>
    </div>
  );
}
