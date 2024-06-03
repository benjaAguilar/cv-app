import InputField from "./inputField";
import AirDatepicker from "air-datepicker";
import localeEn from "air-datepicker/locale/en";
import "air-datepicker/air-datepicker.css";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { userData } from "../userData";
import delLogo from "../../assets/del.svg";
import ReactQuill from "react-quill";

function Work({ updateCv }) {
  const [currentlyWork, setCurrently] = useState(false);
  const [inputVals, setVals] = useState({
    job: "",
    employer: "",
    jobDescription: "",
    startDate: "",
    endDate: "",
  });
  const [jobs, setJobs] = useState(userData.work);
  const start = useRef(null);
  const end = useRef(null);

  useEffect(() => {
    if (start.current) {
      new AirDatepicker(start.current, {
        locale: localeEn,
        dateFormat(date) {
          return date.toLocaleString("en", {
            year: "numeric",
            day: "2-digit",
            month: "long",
          });
        },
        onSelect({ date }) {
          setVals((prevVals) => ({
            ...prevVals,
            startDate: date.toLocaleString("en", {
              year: "numeric",
              day: "2-digit",
              month: "long",
            }),
          }));
        },
      });
    }

    if (end.current) {
      new AirDatepicker(end.current, {
        locale: localeEn,
        dateFormat(date) {
          return date.toLocaleString("en", {
            year: "numeric",
            day: "2-digit",
            month: "long",
          });
        },
        onSelect({ date }) {
          setVals((prevVals) => ({
            ...prevVals,
            endDate: date.toLocaleString("en", {
              year: "numeric",
              day: "2-digit",
              month: "long",
            }),
          }));
        },
      });
    }
  }, []);

  function addJob() {
    if (inputVals.job === "" || inputVals.employer === "") return null;

    const updatedJobs = [
      ...jobs,
      {
        job: inputVals.job,
        employer: inputVals.employer,
        jobDescription: inputVals.jobDescription,
        startDate: inputVals.startDate,
        endDate: inputVals.endDate,
        id: uuidv4(),
      },
    ];

    setJobs(updatedJobs);

    setVals({
      job: "",
      employer: "",
      jobDescription: "",
      startDate: "",
      endDate: "",
    });

    userData.work = updatedJobs;
    updateCv({ ...userData, work: updatedJobs });
  }

  function delJob(delId) {
    const filteredJobs = jobs.filter((job) => job.id !== delId);
    setJobs(filteredJobs);
    userData.work = filteredJobs;

    updateCv({ ...userData, work: filteredJobs });
  }

  const handleChange = (value) => {
    setVals({ ...inputVals, jobDescription: value });
  };

  return (
    <div className="form-fields work-field">
      <div>
        <h2>Job Info</h2>
        <InputField
          labelText={"Job Title"}
          value={inputVals.job}
          change={(e) => setVals({ ...inputVals, job: e.target.value })}
        />
        <InputField
          labelText={"Employer"}
          value={inputVals.employer}
          change={(e) => setVals({ ...inputVals, employer: e.target.value })}
        />
      </div>
      <div className="job-field">
        <h2>Job Description</h2>
        <ReactQuill value={inputVals.jobDescription} onChange={handleChange} />
      </div>
      <div className="duration-field">
        <h2>Duration</h2>
        <InputField
          labelText={"Start Date"}
          value={inputVals.startDate}
          change={(e) => setVals({ ...inputVals, startDate: e.target.value })}
          ref={start}
        />
        <InputField
          labelText={"End Date"}
          value={inputVals.endDate}
          change={(e) => setVals({ ...inputVals, endDate: e.target.value })}
          ref={end}
          disabled={currentlyWork}
        />
        <div className="current-work">
          <input
            type="checkbox"
            id="current"
            checked={currentlyWork}
            onChange={() => {
              setCurrently(!currentlyWork);
            }}
          />
          <label htmlFor="current">I currrently work here</label>
        </div>
        <button onClick={addJob}>Add job</button>
      </div>
      <div className="review-field">
        <h2>Jobs review</h2>
        <div className="jobs-visualizer">
          {jobs.map((job) => {
            return (
              <div key={job.id} className="tag">
                <p>
                  {job.job}, {job.employer}
                </p>
                <button onClick={() => delJob(job.id)} className="del-btn">
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

Work.propTypes = {
  updateCv: PropTypes.func.isRequired,
};

export default Work;
