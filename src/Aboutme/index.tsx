import "./aboutme.css";

const Aboutme = () => {
  return (
    <div className="page about">
      <div className="aboutme-head">
        <div>About Me</div>
        <div className="lnr lnr-user"></div>
      </div>
      <div className="about-concept">
        <div className="about-text">
          <div className="about-title">Developer</div>
          <div className="aboutme-text">
            Although I may not have a formal academic degree, I have acquired practical skills and knowledge through various certificate programs and self-guided learning, making me well-equipped to contribute to your development team. Through my dedication and passion for coding, I have actively pursued certifications. These programs have provided me with hands-on experience in developing practical projects and understanding industry best practices. Additionally, I have proactively engaged in online coding communities, participated in open-source projects, and collaborated with other
            developers to enhance my skills and broaden my knowledge base. While I may not possess professional experience, I am a fast learner, self-motivated, and possess a strong work ethic. I have a natural inclination towards problem-solving and am adept at breaking down complex issues into manageable tasks. I embrace challenges as opportunities for growth and constantly seek new ways to improve my coding abilities.
          </div>
        </div>
        <ul className="about-details">
          <h2 className="about-details-title">Personal Information</h2>
          <li>
            <b>Name: </b>Hajnalka Richter
          </li>
          <li>
            <b>Age: </b>24
          </li>
          <li>
            <b>Residence: </b>Edinburgh, UK
          </li>
          <li>
            <b>Postcode: </b>EH17 7NA
          </li>
          <li>
            <b>E-mail: </b>richter.hajnalka29@gmail.com
          </li>
          <li>
            <b>Phone:</b>(+44) 7719758319
          </li>
          <li>
            <b>Freelance: </b>Available
          </li>
        </ul>
      </div>
      <input className="about-button" type="submit" value="DOWNLOAD CV" />
    </div>
  );
};

export default Aboutme;
