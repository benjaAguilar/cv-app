import InputField from "./inputField";
import AirDatepicker from "air-datepicker";
import localeEn from "air-datepicker/locale/en";
import "air-datepicker/air-datepicker.css";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Work() {
  const [currentlyWork, setCurrently] = useState(false);
  const [inputVals, setVals] = useState({
    job: "",
    employer: "",
  });
  const [jobs, setJobs] = useState([]);
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
      });
    }
  }, []);

  function addJob() {
    if (inputVals.job === "" || inputVals.employer === "") return null;

    setJobs([
      ...jobs,
      {
        name: inputVals.job,
        employer: inputVals.employer,
        id: uuidv4(),
      },
    ]);

    setVals({
      job: "",
      employer: "",
    });
  }

  function delJob(delId) {
    const filteredJobs = jobs.filter((job) => job.id !== delId);
    setJobs(filteredJobs);
  }

  return (
    <div className="form-fields">
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
      <div>
        <h2>Job Description</h2>
        <div className="area-detail">describe your ocupation</div>
        <textarea id="" cols="30" rows="10"></textarea>
      </div>
      <div>
        <h2>Duration</h2>
        <InputField labelText={"Start Date"} ref={start} />
        <InputField labelText={"End Date"} ref={end} disabled={currentlyWork} />
        <div>
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
      <div>
        <h2>Jobs review</h2>
        <div className="jobs-visualizer">
          {jobs.map((job) => {
            return (
              <div key={job.id}>
                <p>
                  {job.name}, {job.employer}
                </p>
                <button onClick={() => delJob(job.id)}>del</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
