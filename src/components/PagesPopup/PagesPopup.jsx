import React, { useState } from "react";
import Option from "../Option/Option";
import Button from "../Button/Button";
import "./PagesPopup.css";

export default function PagesPopup({ onDone }) {
  const [pages, setPages] = useState({
    all: false,
    p1: false,
    p2: false,
    p3: false,
    p4: false
  });

  const toggle = (key) => {
    const updated = { ...pages, [key]: !pages[key] };

    // If user checks all individual items → check "all"
    if (key !== "all") {
      const allChecked = updated.p1 && updated.p2 && updated.p3 && updated.p4;
      updated.all = allChecked;
    }

    // If clicking "all" → update all others
    if (key === "all") {
      updated.p1 = updated.all;
      updated.p2 = updated.all;
      updated.p3 = updated.all;
      updated.p4 = updated.all;
    }

    setPages(updated);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <Option text="All pages" checked={pages.all} onChange={() => toggle("all")} />

        <hr />

        <Option text="Page 1" checked={pages.p1} onChange={() => toggle("p1")} />
        <Option text="Page 2" checked={pages.p2} onChange={() => toggle("p2")} />
        <Option text="Page 3" checked={pages.p3} onChange={() => toggle("p3")} />
        <Option text="Page 4" checked={pages.p4} onChange={() => toggle("p4")} />

        <hr />

        <Button text="Done" variant="default" onClick={() => onDone(pages)} />
      </div>
    </div>
  );
}
