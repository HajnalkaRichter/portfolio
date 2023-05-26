import plane from "../Assest/Images/paper-plane-solid.svg"
import phone from "../Assest/Images/phone-solid.svg"

import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
        <div className="contact-head">
          <div>Contact Me.</div>
          <div className="lnr lnr-envelope"></div>
        </div>
          <form className="contact-concept">
            <div className="contact-text">
               <h2>LET'S TALK</h2>
            </div>
            <div className="contact-input">
              <div className="contact-input-name">
                  <label>Name</label>
                  <input type="text"/>
              </div>
              <div className="contact-input-email"> 
                  <label>E-mail</label>   
                  <input type="email"/>
              </div>
            </div>
            <div className="contact-input-textarea">
                <label>How can I help you?</label>
                <textarea></textarea>
            </div>
            <div className="contact-button">SEND MESSAGE</div>
          </form>
        <div className="contact-details">
        <div className="contact-personal">
          <div className="contact-personal-email">
            <img src={plane} alt="" className="contact-plane-icon"/>
            <p>richter.hajnalka29@gmail.com</p>
          </div>
          <div className="contact-personal-phone">
            <img src={phone} alt="" className="contact-phone-icon"/>
            <p>(+44) 7719758319</p>
          </div>
        </div>  
      </div>
    </div> 
  )
}
export default Contact;