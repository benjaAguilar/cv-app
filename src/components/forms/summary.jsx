import { useState } from "react";
import PropTypes from "prop-types";
import { userData } from "../userData";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Summary({ updateCv }) {
  const [summary, setSummary] = useState(userData.summary);

  const handleChange = (value) => {
    setSummary(value);
    userData.summary = value;
    updateCv({ ...userData, summary: value });
  };

  return (
    <div className="form-fields">
      <div>
        <h2>Professional Summary</h2>
        <ReactQuill value={summary} onChange={handleChange} className="quill" />
      </div>
    </div>
  );
}

Summary.propTypes = {
  updateCv: PropTypes.func.isRequired,
};

export default Summary;
