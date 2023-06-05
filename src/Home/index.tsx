import "./home.css";

const Home = () => {
  const changingText = "Developer";
  return (
    <div className="page home">
      <h2 className="home-name">Hajnalka Richter</h2>
      <p className="home-text">{`I am a ${changingText}`}</p>
    </div>
  );
};

export default Home;
