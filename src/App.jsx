import React, { useState } from "react";
import PagesPopup from "./components/PagesPopup/PagesPopup";
import ThankYouPopup from "./components/PagesPopup/ThankYouPopup";

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [thankYou, setThankYou] = useState(null);

  const handleDone = (pages) => {
    const selected = Object.entries(pages)
      .filter(([k, v]) => v && k !== "all")
      .map(([k]) => k.replace("p", "Page "));

    setShowPopup(false);

    if (selected.length === 0) {
      setThankYou("Oops, you didn't select an option, you can always retry");
    } else {
      setThankYou(
        selected.length === 4
          ? "You selected all pages. Champ, you're gonna mark it all - that's brave!"
          : `You selected: ${selected.join(", ")}. Oh, picking and choosing? How selective of you!`
      );
    }
  };

  return (
    <>
      {showPopup && <PagesPopup onDone={handleDone} />}
      {thankYou && (
        <ThankYouPopup 
          message={thankYou} 
          onRetry={() => {
            setThankYou(null);
            setShowPopup(true);
          }} 
        />
      )}
    </>
  );
}

export default App;
