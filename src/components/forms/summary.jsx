import { useState } from "react";
import PropTypes from "prop-types";
import { userData } from "../userData";

function Summary({ updateCv }) {
  const [summary, setSummary] = useState(userData.summary);

  return (
    <div className="form-fields">
      <div>
        <h2>Professional Summary</h2>
        <div className="area-detail">Tell us about you!</div>
        <textarea
          id=""
          cols="30"
          rows="10"
          value={summary}
          onChange={(e) => {
            setSummary(e.target.value);
            userData.summary = e.target.value;
            updateCv({ ...userData, summary: e.target.value });
          }}
        ></textarea>
      </div>
    </div>
  );
}

Summary.propTypes = {
  updateCv: PropTypes.func.isRequired,
};

export default Summary;
