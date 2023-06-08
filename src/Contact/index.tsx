import { useState } from "react";
import plane from "../Assest/Images/paper-plane-solid.svg";
import phone from "../Assest/Images/phone-solid.svg";
import emailjs from "emailjs-com";

import "./contact.css";

const Contact = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [textValue, setTextValue] = useState("");
  console.log("nameValue,nameValue", nameValue);
  function sendEmail(e: any) {
    e.preventDefault();

    emailjs.sendForm("service_uudm4yj", "template_ilo67xm", e.target, "l94dqJl34aFcXfVIG").then(
      (result) => {
        window.location.reload();
      },
      (error) => {
        console.log(error.text);
      }
    );
  }
  return (
    <div className="page contact">
      <div className="contact-head">
        <div>Contact Me.</div>
        <div className="lnr lnr-envelope"></div>
      </div>
      <form className="contact-concept" onSubmit={sendEmail}>
        <div className="contact-text">
          <h2>LET'S TALK</h2>
        </div>
        <div className="contact-input">
          <div className={`contact-input-name ${nameValue ? "contact-input-name-active" : ""}`}>
            <label>Name</label>
            <input
              name="from_name"
              type="text"
              required
              onChange={(e) => {
                setNameValue(e.target.value);
              }}
            />
          </div>
          <div className={`contact-input-email ${emailValue ? "contact-input-name-active" : ""}`}>
            <input
              name="reply_to"
              type="email"
              required
              onChange={(e) => {
                setEmailValue(e.target.value);
              }}
            />
            <label>E-mail</label>
          </div>
        </div>
        <div className={`contact-input-textarea ${textValue ? "contact-input-name-active" : ""}`}>
          <label>How can I help you?</label>
          <textarea
            name="message"
            required
            onChange={(e) => {
              setTextValue(e.target.value);
            }}
          ></textarea>
        </div>
        <input className="contact-button" type="submit" value="Send message" />
      </form>
      <div className="contact-details">
        <div className="contact-personal">
          <div className="contact-personal-email">
            <img src={plane} alt="" className="contact-plane-icon" />
            <p>richter.hajnalka29@gmail.com</p>
          </div>
          <div className="contact-personal-phone">
            <img src={phone} alt="" className="contact-phone-icon" />
            <p>(+44) 7719758319</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
