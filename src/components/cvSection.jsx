import { useRef, useState } from "react";
import Contact from "./forms/contact";
import Summary from "./forms/summary";
import Skills from "./forms/skills";
import Work from "./forms/work";
import Education from "./forms/education";
import Cv from "./cv";
import { userData } from "./userData";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import conactIcon from "../assets/contact.svg";
import summaryIcon from "../assets/summary.svg";
import skillsIcon from "../assets/skills.svg";
import workIcon from "../assets/work.svg";
import eduIcon from "../assets/edu.svg";
import downloadIcon from "../assets/download.svg";
import ColorIcon from "../assets/color.svg?react";
import trashIcon from "../assets/trash.svg";

function CvSection() {
  const [formSection, setFormSection] = useState(
    <Contact updateCv={(data) => setData(data)} />
  );
  const [data, setData] = useState(userData);
  const [display, setDisplay] = useState("block");
  const [color, setColor] = useState("#06b6d4");
  const currentCv = useRef(null);

  const downloadPdf = async () => {
    if (currentCv.current) {
      const content = currentCv.current;

      const scaledPdf = content.style.transform;

      content.style.transform = "scale(2)";

      const createCanavas = await html2canvas(content);
      const imgPdf = createCanavas.toDataURL("image/png");

      content.style.transform = scaledPdf;

      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgPdf);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgPdf, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("my-cv.pdf");
    }
  };

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
          <li>
            <img src={downloadIcon} alt="" />
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
            onClick={() =>
              setFormSection(<Education updateCv={(data) => setData(data)} />)
            }
          >
            <img src={eduIcon} alt="" />
            Education
          </li>
          <li onClick={downloadPdf}>
            <img src={downloadIcon} alt="" />
            Download pdf
          </li>
        </ul>
      </nav>
      <div className="formSection">{formSection}</div>
      <div className="cvContainer">
        <Cv ref={currentCv} {...data} color={color} />
        <div className="toolbar">
          <ul>
            <li>
              <ColorIcon fill="#52525b" onClick={() => setColor("#52525b")} />
            </li>
            <li>
              <ColorIcon fill="#06b6d4" onClick={() => setColor("#06b6d4")} />
            </li>
            <li>
              <ColorIcon fill="#84cc16" onClick={() => setColor("#84cc16")} />
            </li>
            <li>
              <ColorIcon fill="#eab308" onClick={() => setColor("#eab308")} />
            </li>
            <li>
              <ColorIcon fill="#db2777" onClick={() => setColor("#db2777")} />
            </li>
          </ul>
          <button className="toolbar-btns" onClick={downloadPdf}>
            <img src={downloadIcon} alt="" />
          </button>
          <button
            className="toolbar-btns"
            onClick={() => {
              Object.keys(userData).map((keyName) => {
                if (Array.isArray(userData[keyName])) {
                  userData[keyName] = [];
                } else {
                  userData[keyName] = "";
                }
              });
              setData({ ...userData });
              setFormSection(<Contact updateCv={(data) => setData(data)} />);
            }}
          >
            <img src={trashIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CvSection;
