import { useState } from "react";
import Contact from "./forms/contact";
import Summary from "./forms/summary";
import Skills from "./forms/skills";
import Work from "./forms/work";
import Education from "./forms/education";
import Cv from "./cv";
import { userData } from "./userData";

function CvSection() {
  const [formSection, setFormSection] = useState(
    <Contact updateCv={(data) => setData(data)} />
  );
  const [data, setData] = useState(userData);

  return (
    <div className="make-cv">
      <nav className="navbar">
        <ul className="ul-nav">
          <li
            className="li-top"
            onClick={() =>
              setFormSection(<Contact updateCv={(data) => setData(data)} />)
            }
          >
            Contact
          </li>
          <li
            onClick={() =>
              setFormSection(<Summary updateCv={(data) => setData(data)} />)
            }
          >
            Summary
          </li>
          <li
            onClick={() =>
              setFormSection(<Skills updateCv={(data) => setData(data)} />)
            }
          >
            Skills
          </li>
          <li
            onClick={() =>
              setFormSection(<Work updateCv={(data) => setData(data)} />)
            }
          >
            Work History
          </li>
          <li
            className="li-bottom"
            onClick={() =>
              setFormSection(<Education updateCv={(data) => setData(data)} />)
            }
          >
            Education
          </li>
        </ul>
      </nav>
      <div className="formSection">{formSection}</div>
      <div className="cvContainer">
        <Cv {...data} />
      </div>
    </div>
  );
}

export default CvSection;
