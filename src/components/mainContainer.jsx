import { useState } from "react";
import Home from "./home.jsx";
import CvSection from "./cvSection.jsx";

function MainContainer() {
  const [section, goToSection] = useState("home");

  switch (section) {
    case "home":
      return (
        <Home
          getStarted={() => {
            goToSection("cv");
          }}
        />
      );
    case "cv":
      return <CvSection />;
    default:
      return (
        <Home
          getStarted={() => {
            goToSection("cv");
          }}
        />
      );
  }
}

export default MainContainer;
