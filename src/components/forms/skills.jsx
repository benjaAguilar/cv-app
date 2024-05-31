import { useState } from "react";
import PropTypes from "prop-types";
import InputField from "./inputField";
import { v4 as uuidv4 } from "uuid";
import { userData } from "../userData";

function Skills({ updateCv }) {
  const [skills, setSkills] = useState(userData.skills);
  const [value, setValue] = useState("");

  function addSkill() {
    if (value === "") return null;

    const updatedSkills = [
      ...skills,
      {
        name: value,
        id: uuidv4(),
      },
    ];

    setSkills(updatedSkills);
    setValue("");

    userData.skills = updatedSkills;

    updateCv({ ...userData, skills: updatedSkills });
  }

  function delSkill(delId) {
    const filteredSkills = skills.filter((skill) => skill.id !== delId);
    setSkills(filteredSkills);
    userData.skills = filteredSkills;

    updateCv({ ...userData, skills: filteredSkills });
  }

  return (
    <div className="form-fields">
      <h2>Skills</h2>
      <div className="skill-adder">
        <InputField
          labelText={"Skills"}
          value={value}
          change={(e) => setValue(e.target.value)}
        />
        <button onClick={addSkill}>Add +</button>
      </div>
      <div className="skill-visualizer">
        {skills.map((skill) => {
          return (
            <div key={skill.id}>
              <p>{skill.name}</p>
              <button
                onClick={() => {
                  delSkill(skill.id);
                }}
              >
                del
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Skills.propTypes = {
  updateCv: PropTypes.func.isRequired,
};

export default Skills;
