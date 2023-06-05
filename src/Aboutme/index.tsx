import "./aboutme.css";

const Aboutme = () => {
  return (
    <div className="page about">
      <div className="aboutme-head">
        <div>About Me</div>
        <div className="lnr lnr-user"></div>
      </div>
      <div className="about-text">
        <div className="about-title">Developer</div>
        <div className="aboutme-text">I am a highly motivated and detail-oriented individual with a passion for ensuring the quality and functionality of software products. As a beginner in the field of Quality Assurance, I am eager to learn and grow in this industry. I possess strong analytical and problem-solving skills, and I am able to think critically and independently. I am also an excellent communicator and am able to work effectively in a team environment.</div>
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
  );
};

export default Aboutme;
