import InputField from "./inputField";
import AirDatepicker from "air-datepicker";
import localeEn from "air-datepicker/locale/en";
import "air-datepicker/air-datepicker.css";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { userData } from "../userData";
import delLogo from "../../assets/del.svg";

function Education({ updateCv }) {
  const [inputVals, setVals] = useState({
    school: "",
    schoolLoc: "",
    graduation: "",
    degree: "",
    field: "",
  });

  const [education, setEdu] = useState(userData.education);
  const endStudy = useRef(null);

  useEffect(() => {
    if (endStudy.current) {
      new AirDatepicker(endStudy.current, {
        locale: localeEn,
        view: "months",
        minView: "months",
        dateFormat: "MMMM yyyy",
        // eslint-disable-next-line no-unused-vars
        onRenderCell({ date, cellType }) {
          if (cellType === "day") {
            return {
              disabled: true,
            };
          }
        },
        onSelect({ date }) {
          setVals((prevVals) => ({
            ...prevVals,
            graduation: date.toLocaleString("en", {
              year: "numeric",
              day: "2-digit",
              month: "long",
            }),
          }));
        },
      });
    }
  }, []);

  function addEdu() {
    if (inputVals.degree === "" || inputVals.school === "") return null;

    const updatedEdu = [
      ...education,
      {
        school: inputVals.school,
        schoolLoc: inputVals.schoolLoc,
        graduation: inputVals.graduation,
        degree: inputVals.degree,
        field: inputVals.field,
        id: uuidv4(),
      },
    ];

    setEdu(updatedEdu);

    setVals({
      degree: "",
      school: "",
    });

    userData.education = updatedEdu;

    updateCv({ ...userData, education: updatedEdu });
  }

  function delEdu(delId) {
    const filteredEdu = education.filter((edu) => edu.id !== delId);
    setEdu(filteredEdu);
    userData.education = filteredEdu;
    updateCv({ ...userData, education: filteredEdu });
  }

  return (
    <div className="form-fields edu-field">
      <div>
        <h2>School</h2>
        <InputField
          labelText={"School"}
          value={inputVals.school}
          change={(e) => setVals({ ...inputVals, school: e.target.value })}
        />
        <InputField
          labelText={"School Location"}
          value={inputVals.schoolLoc}
          change={(e) => setVals({ ...inputVals, schoolLoc: e.target.value })}
        />
      </div>
      <div>
        <h2>Graduation Date</h2>
        <InputField
          labelText={"Graduation"}
          ref={endStudy}
          value={inputVals.graduation}
          change={(e) => setVals({ ...inputVals, graduation: e.target.value })}
        />
      </div>
      <div className="degree-field">
        <h2>Degree and field</h2>
        <InputField
          labelText={"Degree"}
          value={inputVals.degree}
          change={(e) => setVals({ ...inputVals, degree: e.target.value })}
        />
        <InputField
          labelText={"Field of Study"}
          value={inputVals.field}
          change={(e) => setVals({ ...inputVals, field: e.target.value })}
        />
        <button onClick={addEdu}>Add education</button>
      </div>
      <div className="review-field">
        <h2>Education Review</h2>
        <div className="edu-visualizer">
          {education.map((edu) => {
            return (
              <div key={edu.id} className="tag">
                <p>
                  {edu.degree}, {edu.school}
                </p>
                <button onClick={() => delEdu(edu.id)} className="del-btn">
                  <img src={delLogo} alt="" className="del-logo" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Education.propTypes = {
  updateCv: PropTypes.func.isRequired,
};

export default Education;
