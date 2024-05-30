import { useState } from "react";
import InputField from "./inputField";
import { v4 as uuidv4 } from "uuid";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [value, setValue] = useState("");

  function addSkill() {
    if (value === "") return null;

    setSkills([
      ...skills,
      {
        name: value,
        id: uuidv4(),
      },
    ]);
    setValue("");
  }

  function delSkill(delId) {
    const filteredSkills = skills.filter((skill) => skill.id !== delId);
    setSkills(filteredSkills);
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

export default Skills;
