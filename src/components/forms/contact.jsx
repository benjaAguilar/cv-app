function Contact() {
  return (
    <div className="form-fields">
      <div>
        <h2>Your Name</h2>
        <div className="entryArea">
          <input type="text" className="field" required />
          <div className="input-label">Name</div>
        </div>
        <div className="entryArea">
          <input type="text" className="field" required />
          <div className="input-label">Sure Name</div>
        </div>
      </div>
      <div>
        <h2>Contact</h2>
        <div className="entryArea">
          <input type="email" className="field" required />
          <div className="input-label">Email</div>
        </div>
        <div className="entryArea">
          <input type="tel" className="field" required />
          <div className="input-label">Phone</div>
        </div>
      </div>
      <div>
        <h2>Location</h2>
        <div className="entryArea">
          <input type="text" className="field" required />
          <div className="input-label">City</div>
        </div>
        <div className="entryArea">
          <input type="text" className="field" required />
          <div className="input-label">State</div>
        </div>
        <div className="entryArea">
          <input type="tel" className="field" required />
          <div className="input-label">Zip code</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
