import PropTypes from "prop-types";

function Cv({
  name,
  surename,
  email,
  phone,
  city,
  state,
  zipCode,
  skills,
  summary,
  work,
  education,
}) {
  return (
    <>
      <div className="cv-head">
        <div className="logo">
          <h3>{name}</h3>
        </div>
        <h1>
          {name} {surename}
        </h1>
      </div>
      <div className="cv-aside">
        <div className="contact">
          <h2>Contact</h2>
          <ul>
            <li>
              <img src="" alt="" /> {city}, {state} {zipCode}
            </li>
            <li>
              <img src="" alt="" /> {email}
            </li>
            <li>
              <img src="" alt="" /> {phone}
            </li>
          </ul>
        </div>
        <div className="cv-skills">
          <h2>Skills</h2>
          <ul>
            {skills.map((skill) => {
              return <li key={skill.id}>{skill.name}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="cv-main">
        <div className="cv-summary">
          <h2>Summary</h2>
          <p>{summary}</p>
        </div>
        <div className="cv-work">
          <h2>Work Experience</h2>
          {work.map((work) => {
            return (
              <div key={work.id}>
                <h3>
                  {work.job}, {work.employer}
                </h3>
                <p>{work.jobDescription}</p>
                <h4>
                  {work.startDate} - {work.endDate}
                </h4>
              </div>
            );
          })}
        </div>
        <div className="cv-edu">
          <h2>Education</h2>
          {education.map((edu) => {
            return (
              <div key={edu.id}>
                <h3>
                  {edu.degree}, {edu.field}
                </h3>
                <p>
                  {edu.school}, {edu.schoolLoc}
                </p>
                <h4>{edu.graduation}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

Cv.displayName = "cv";

Cv.propTypes = {
  name: PropTypes.string,
  surename: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zipCode: PropTypes.string,
  skills: PropTypes.array,
  summary: PropTypes.string,
  work: PropTypes.array,
  education: PropTypes.array,
};

export default Cv;

/*

*/
