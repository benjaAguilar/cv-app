import { useState } from "react";
import InputField from "./inputField";

function Contact() {
  const [contactData, setData] = useState({
    name: "",
    surename: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    zipCode: "",
  });

  return (
    <div className="form-fields">
      <div>
        <h2>Your Name</h2>
        <InputField
          labelText={"Name"}
          value={contactData.name}
          change={(e) => setData({ ...contactData, name: e.target.value })}
        />
        <InputField
          labelText={"Sure Name"}
          value={contactData.surename}
          change={(e) => setData({ ...contactData, surename: e.target.value })}
        />
      </div>
      <div>
        <h2>Contact</h2>
        <InputField
          type={"email"}
          labelText={"Email"}
          value={contactData.email}
          change={(e) => setData({ ...contactData, email: e.target.value })}
        />
        <InputField
          type={"number"}
          labelText={"Phone"}
          value={contactData.phone}
          change={(e) => setData({ ...contactData, phone: e.target.value })}
        />
      </div>
      <div>
        <h2>Location</h2>
        <InputField
          labelText={"City"}
          value={contactData.city}
          change={(e) => setData({ ...contactData, city: e.target.value })}
        />
        <InputField
          labelText={"State"}
          value={contactData.state}
          change={(e) => setData({ ...contactData, state: e.target.value })}
        />
        <InputField
          type={"number"}
          labelText={"Zip Code"}
          value={contactData.zipCode}
          change={(e) => setData({ ...contactData, zipCode: e.target.value })}
        />
      </div>
    </div>
  );
}

export default Contact;
