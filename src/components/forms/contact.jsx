import InputField from "./inputField";

function Contact() {
  return (
    <div className="form-fields">
      <div>
        <h2>Your Name</h2>
        <InputField labelText={"Name"} />
        <InputField labelText={"Sure Name"} />
      </div>
      <div>
        <h2>Contact</h2>
        <InputField type={"email"} labelText={"Email"} />
        <InputField type={"number"} labelText={"Phone"} />
      </div>
      <div>
        <h2>Location</h2>
        <InputField labelText={"City"} />
        <InputField labelText={"State"} />
        <InputField type={"number"} labelText={"Zip Code"} />
      </div>
    </div>
  );
}

export default Contact;
