import InputField from "./inputField";
import AirDatepicker from "air-datepicker";
import localeEn from "air-datepicker/locale/en";
import "air-datepicker/air-datepicker.css";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Education() {
  const [inputVals, setVals] = useState({
    school: "",
    schoolLoc: "",
    graduation: "",
    degree: "",
    field: "",
  });

  const [education, setEdu] = useState([]);
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
      });
    }
  }, []);

  function addEdu() {
    if (inputVals.degree === "" || inputVals.school === "") return null;

    setEdu([
      ...education,
      {
        degree: inputVals.degree,
        school: inputVals.school,
        id: uuidv4(),
      },
    ]);

    setVals({
      degree: "",
      school: "",
    });
  }

  function delEdu(delId) {
    const filteredEdu = education.filter((edu) => edu.id !== delId);
    setEdu(filteredEdu);
  }

  return (
    <div className="form-fields">
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
      <div>
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
      <div>
        <h2>Education Review</h2>
        <div className="edu-visualizer">
          {education.map((edu) => {
            return (
              <div key={edu.id}>
                <p>
                  {edu.degree}, {edu.school}
                </p>
                <button onClick={() => delEdu(edu.id)}>del</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Education;
