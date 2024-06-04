import { useState } from "react";
import Contact from "./forms/contact";
import Summary from "./forms/summary";
import Skills from "./forms/skills";
import Work from "./forms/work";
import Education from "./forms/education";
import Cv from "./cv";
import { userData } from "./userData";

import conactIcon from "../assets/contact.svg";
import summaryIcon from "../assets/summary.svg";
import skillsIcon from "../assets/skills.svg";
import workIcon from "../assets/work.svg";
import eduIcon from "../assets/edu.svg";

function CvSection() {
  const [formSection, setFormSection] = useState(
    <Contact updateCv={(data) => setData(data)} />
  );
  const [data, setData] = useState(userData);
  const [display, setDisplay] = useState("block");

  return (
    <div className="make-cv">
      <div
        className="icons"
        onMouseOver={() => {
          setDisplay("none");
        }}
        style={{ display: display }}
      >
        <ul>
          <li>
            <img src={conactIcon} alt="" />
          </li>
          <li>
            <img src={summaryIcon} alt="" />
          </li>
          <li>
            <img src={skillsIcon} alt="" />
          </li>
          <li>
            <img src={workIcon} alt="" />
          </li>
          <li>
            <img src={eduIcon} alt="" />
          </li>
        </ul>
      </div>
      <nav
        className="navbar"
        onMouseOver={() => {
          setDisplay("none");
        }}
        onMouseOut={() => {
          setDisplay("block");
        }}
      >
        <ul className="ul-nav">
          <li
            className="li-top"
            onClick={() =>
              setFormSection(<Contact updateCv={(data) => setData(data)} />)
            }
          >
            <img src={conactIcon} alt="" />
            Contact
          </li>
          <li
            onClick={() =>
              setFormSection(<Summary updateCv={(data) => setData(data)} />)
            }
          >
            <img src={summaryIcon} alt="" />
            Summary
          </li>
          <li
            onClick={() =>
              setFormSection(<Skills updateCv={(data) => setData(data)} />)
            }
          >
            <img src={skillsIcon} alt="" />
            Skills
          </li>
          <li
            onClick={() =>
              setFormSection(<Work updateCv={(data) => setData(data)} />)
            }
          >
            <img src={workIcon} alt="" />
            Work History
          </li>
          <li
            className="li-bottom"
            onClick={() =>
              setFormSection(<Education updateCv={(data) => setData(data)} />)
            }
          >
            <img src={eduIcon} alt="" />
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
