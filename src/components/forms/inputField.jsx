import PropTypes from "prop-types";
import React from "react";

const InputField = React.forwardRef(
  ({ type, value, change, disabled, labelText }, ref) => {
    if (type === undefined) type = "text";
    if (value === undefined) value = "";
    if (change === undefined) change = null;
    if (disabled === undefined) disabled = false;

    return (
      <div className="entryArea">
        <input
          type={type}
          value={value}
          onChange={change}
          ref={ref}
          disabled={disabled}
          className="field"
          required
        />
        <div className="input-label">{labelText}</div>
      </div>
    );
  }
);

InputField.displayName = "InputField";

InputField.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  change: PropTypes.func,
  disabled: PropTypes.bool,
  labelText: PropTypes.string.isRequired,
};

export default InputField;
