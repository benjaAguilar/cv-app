import { useState } from "react";
import PropTypes from "prop-types";
import InputField from "./inputField";
import { userData } from "../userData";

function Contact({ updateCv }) {
  const [contactData, setData] = useState(userData);

  return (
    <div className="form-fields contact-field">
      <div>
        <h2>Your Name</h2>
        <InputField
          labelText={"Name"}
          value={contactData.name}
          change={(e) => {
            setData({ ...contactData, name: e.target.value });
            updateCv({ ...contactData, name: e.target.value });
            userData.name = e.target.value;
          }}
        />
        <InputField
          labelText={"Sure Name"}
          value={contactData.surename}
          change={(e) => {
            setData({ ...contactData, surename: e.target.value });
            updateCv({ ...contactData, surename: e.target.value });
            userData.surename = e.target.value;
          }}
        />
      </div>
      <div>
        <h2>Contact</h2>
        <InputField
          type={"email"}
          labelText={"Email"}
          value={contactData.email}
          change={(e) => {
            setData({ ...contactData, email: e.target.value });
            updateCv({ ...contactData, email: e.target.value });
            userData.email = e.target.value;
          }}
        />
        <InputField
          type={"number"}
          labelText={"Phone"}
          value={contactData.phone}
          change={(e) => {
            setData({ ...contactData, phone: e.target.value });
            updateCv({ ...contactData, phone: e.target.value });
            userData.phone = e.target.value;
          }}
        />
      </div>
      <div className="location-field">
        <h2>Location</h2>
        <InputField
          labelText={"City"}
          value={contactData.city}
          change={(e) => {
            setData({ ...contactData, city: e.target.value });
            updateCv({ ...contactData, city: e.target.value });
            userData.city = e.target.value;
          }}
        />
        <InputField
          labelText={"State"}
          value={contactData.state}
          change={(e) => {
            setData({ ...contactData, state: e.target.value });
            updateCv({ ...contactData, state: e.target.value });
            userData.state = e.target.value;
          }}
        />
        <InputField
          type={"number"}
          labelText={"Zip Code"}
          value={contactData.zipCode}
          change={(e) => {
            setData({ ...contactData, zipCode: e.target.value });
            updateCv({ ...contactData, zipCode: e.target.value });
            userData.zipCode = e.target.value;
          }}
        />
      </div>
    </div>
  );
}

Contact.propTypes = {
  updateCv: PropTypes.func.isRequired,
};

export default Contact;
