import "./resume.css";

export interface IListItem {
  id: number;
  from: number;
  to: number;
  title: string;
  address: string;
  text: string;
}

const ListItem = (props: IListItem) => {
  const { from, to, title, address, text } = props;

  return (
    <section className={`resume-concept`}>
      <div className={`resume-concept-left`}>
        <h2 className="resume-from">{from}</h2>
        <h2 className="resume-to">{to}</h2>
        <span className="resume-concept-line"></span>
      </div>
      <div className={`resume-concept-right`}>
        <h2 className="resume-title">{title}</h2>
        <p className="resume-address">{address}</p>
        <p className="resume-text">{text}</p>
      </div>
    </section>
  );
};

const Resume = () => {
  const resumeexperienceData: IListItem[] = [
    { id: 1, from: 2023, to: 2023, title: "Test IO", address: "Edinburgh, UK", text: "As a Quality Assurance Tester at Test IO, I focused on Bug Reproduction and Reproduction Feature, as well as identifying and reporting various types of bugs found during testing. My responsibilities included analyzing bug report attachments, identifying root causes, and working closely with the development team to troubleshoot and resolve issues." },
    { id: 2, from: 2022, to: 2023, title: "Freelancer QA tester", address: "Edinburgh, UK", text: "In this role, I analyzed Business Requirements, System Requirements, and User Interface Specification documents, and used this information to write Test Plans and Test Cases in the Quality Center. My focus on attention to detail and analytical skills allowed me to ensure that the software being developed met high-quality standards." },
    { id: 3, from: 2021, to: 2022, title: "The Deli Global", address: "Edinburgh, UK", text: " Shop manager. Open and close the shop, use the till and cash handling, make coffee and food, organize and order food/drink for the next day." },
    { id: 4, from: 2021, to: 2021, title: "Balmoral Hotel", address: "Edinburgh, UK", text: "Room attendant. Check and clean apartments, organize and order cleaning supplies, briefly train new housekeepers." },
    { id: 5, from: 2020, to: 2021, title: "Canon Court Aparthotel", address: "Edinburgh, UK", text: "Housekeeper & Supervisor. Check and clean apartments, corridors, and staircases make order lists for linen, order and replace broken or missing items,etc." },
    { id: 6, from: 2018, to: 2019, title: "Party Point Retail Shop", address: "Budapest, Hungary", text: "Shop assistant manager. Stock control, order and maintain supply, training new members, managing the till, listening to customer requests and resolving issues." },
    { id: 7, from: 2015, to: 2018, title: "Friesland Campina", address: "Budapest, Hungary", text: "Packing assistant. My job was to prepare production to be able to transport the final destination by track. Assist and manage the packages." },
  ];
  const resumeeducationData: IListItem[] = [
    { id: 1, from: 2022, to: 2023, title: "Software Testing,QA Testing, Manual Testing,SDLC,Test Plan", address: "Edinburgh, UK", text: "Finalizing different software testing types, Writing market standard test plan and test cases from scratch, Finalizing test plan and test cases, Scripts and files" },
    { id: 2, from: 2022, to: 2023, title: "Manual Software Testing: Complete Course with Practical Labs", address: "Edinburgh, UK", text: "How to Write Testcases, Software Testing Models, Trello - Project Management Tool, Bugzilla Tool, Jira Tool, Automation Tools, How to do project planning - time management,resource management,budget manageme" },
    { id: 3, from: 2022, to: 2023, title: "Quality Assurance - Become a Freelance Software Tester", address: "Edinburgh, UK", text: "Software Development Life Cycle (SDLC), Software Testing Life Cycle (STLC), Agile vs. Waterfall, Software Theory & Methodologies, Bug Reports, Test Cases" },
    { id: 4, from: 2013, to: 2018, title: "BMSZC Blathy Otto Titusz Information Technology Vocational High", address: "Budapest, Hungary", text: "Database management, Software development, Web development, Network construction" },
  ];
  return (
    <div className="page resume">
      <div className="resume-head">
        <div>Resume</div>
        <div className="lnr lnr-license"></div>
      </div>

      <div className="resume-first-title">
        <h2>EXPERIENCE</h2>
        <h2>EDUCATION & CERTIFICATES</h2>
      </div>
      <div style={{ display: "flex" }}>
        <div className="resume-experience">
          {resumeexperienceData.map((resumeItem: IListItem) => {
            return <ListItem key={resumeItem.id} {...resumeItem}></ListItem>;
          })}
        </div>
        <div className="resume-education">
          {resumeeducationData.map((resumeItem: IListItem) => {
            return <ListItem key={resumeItem.id} {...resumeItem}></ListItem>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Resume;
