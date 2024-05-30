import { useState } from "react";
import Contact from "./forms/contact";
import Summary from "./forms/summary";
import Skills from "./forms/skills";
import Work from "./forms/work";
import Education from "./forms/education";

function CvSection() {
  const [formSection, setFormSection] = useState("contact");
  console.log(formSection);
  const Form = () => {
    switch (formSection) {
      case "contact":
        return <Contact />;
      case "summary":
        return <Summary />;
      case "skills":
        return <Skills />;
      case "work":
        return <Work />;
      case "education":
        return <Education />;
      default:
        break;
    }
  };

  return (
    <div className="make-cv">
      <nav>
        <ul>
          <li onClick={() => setFormSection("contact")}>Contact</li>
          <li onClick={() => setFormSection("summary")}>Summary</li>
          <li onClick={() => setFormSection("skills")}>Skills</li>
          <li onClick={() => setFormSection("work")}>Work History</li>
          <li onClick={() => setFormSection("education")}>Education</li>
        </ul>
      </nav>
      <div className="formSection">
        <Form />
      </div>
      <div className="cvContainer"></div>
    </div>
  );
}

export default CvSection;
