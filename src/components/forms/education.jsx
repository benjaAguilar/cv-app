import AirDatepicker from "air-datepicker";
import localeEn from "air-datepicker/locale/en";
import "air-datepicker/air-datepicker.css";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Education() {
  const [inputVals, setVals] = useState({
    degree: "",
    school: "",
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
        <div className="entryArea">
          <input
            type="text"
            className="field"
            value={inputVals.school}
            onChange={(e) => setVals({ ...inputVals, school: e.target.value })}
            required
          />
          <div className="input-label">School</div>
        </div>
        <div className="entryArea">
          <input type="text" className="field" required />
          <div className="input-label">School location</div>
        </div>
      </div>
      <div>
        <h2>Graduation Date</h2>
        <div className="entryArea">
          <input type="text" className="field" ref={endStudy} required />
          <div className="input-label">Graduation</div>
        </div>
      </div>
      <div>
        <h2>Degree and field</h2>
        <div className="entryArea">
          <input
            type="text"
            className="field"
            value={inputVals.degree}
            onChange={(e) => setVals({ ...inputVals, degree: e.target.value })}
            required
          />
          <div className="input-label">Degree</div>
        </div>
        <div className="entryArea">
          <input type="text" className="field" required />
          <div className="input-label">Field of study</div>
        </div>
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
