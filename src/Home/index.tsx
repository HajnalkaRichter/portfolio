import ReactTypingEffect from "react-typing-effect";

import "./home.css";

const Home = () => {
  const changingText = "Developer";
  return (
    <div className="page home">
      <h2 className="home-name">Hajnalka Richter</h2>
      <p className="home-text">
        <ReactTypingEffect staticText="I am a" speed={100} text={changingText} />
      </p>
    </div>
  );
};

export default Home;
