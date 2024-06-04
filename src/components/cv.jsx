import PropTypes from "prop-types";
import conactIcon from "../assets/contact.svg";
import locationIcon from "../assets/location.svg";
import mailIcon from "../assets/mail.svg";
import { forwardRef } from "react";

const Cv = forwardRef(
  (
    {
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
      color,
    },
    ref
  ) => {
    return (
      <div ref={ref} className="a4">
        <div className="cv-head" style={{ backgroundColor: color }}>
          <h1>
            {name} {surename}
          </h1>
        </div>
        <div className="cv-aside" style={{ backgroundColor: color }}>
          <div className="contact">
            <h2>Contact</h2>
            <ul>
              <li>
                <img src={locationIcon} alt="" /> {city}, {state} {zipCode}
              </li>
              <li>
                <img src={mailIcon} alt="" /> {email}
              </li>
              <li>
                <img src={conactIcon} alt="" /> {phone}
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
        <div className="cv-summary">
          <h2 className="h2-main" style={{ backgroundColor: color }}>
            Summary
          </h2>
          <div dangerouslySetInnerHTML={{ __html: summary }}></div>
        </div>
        <div className="cv-work">
          <h2 className="h2-main" style={{ backgroundColor: color }}>
            Work Experience
          </h2>
          {work.map((work) => {
            return (
              <div key={work.id}>
                <h3>
                  {work.job}, {work.employer}
                </h3>
                <div
                  dangerouslySetInnerHTML={{ __html: work.jobDescription }}
                ></div>
                <h4>
                  {work.startDate} -{" "}
                  {work.endDate === "" ? "Current" : work.endDate}
                </h4>
              </div>
            );
          })}
        </div>
        <div className="cv-edu">
          <h2 className="h2-main" style={{ backgroundColor: color }}>
            Education
          </h2>
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
    );
  }
);

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
  color: PropTypes.string,
};

export default Cv;
