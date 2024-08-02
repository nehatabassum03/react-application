import React, { useState } from "react";
import "./contact.css";

export default function Contact() {
  // State to manage form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    if (name && email && comment) {
      // Display the submission message
      setSubmitted(true);
      // Optionally, you can clear the form fields
      setName("");
      setEmail("");
      setComment("");
    }
  };

  return (
    <div className="contactcontainer">
      <div className="topbarContainer3">
        <span className="logo3">B.planet</span>
      </div>
      <div className="contactUs">
        <span className="contactspan">Contact Us</span>
      </div>
      <div className="contact">
        <div className="contactWrapper">
          <div className="contactLeft">
            <div className="contactLogo">Stay Updated</div>
            <span className="contactDesc">Need to get in touch with us?</span>
            <br />
            <br />
            <button className="socialsbutton">Facebook</button>
            <br />
            <button className="socialsbutton">Instagram</button>
            <br />
          </div>
          <div className="contactRight">
            <div className="contactBox">
              <form onSubmit={handleSubmit} style={{height: '200px', width: '340px'}}>
                <input
                  placeholder="Name"
                  className="contactInput"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  placeholder="Email"
                  type="email"
                  className="contactInput"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  placeholder="Comment"
                  className="contactcomment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                />
                <button type="submit" className="contactButton">Submit</button>
              </form>
              {submitted && <div className="submissionMessage">Form submitted successfully!</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}