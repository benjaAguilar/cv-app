import PropTypes from "prop-types";

function Home({ getStarted }) {
  return (
    <div className="getStarted">
      <h1>
        {" "}
        Boost <span>your Career with a beautiful</span> Curriculum
      </h1>
      <p>
        <strong>Create</strong> a proper curriculum and get the job that you
        desire. <br /> <strong>Customize</strong> the curriculum to your
        preference and download! <br />
        <strong>Share</strong> your beautiful curriculum with employers. <br />
        <strong>its completly free!</strong> what are you waiting for? lets go!
      </p>
      <button onClick={getStarted}>Get Started</button>
      <a href="https://github.com/benjaAguilar" target="_blank">
        Created by colorCode :D
      </a>
    </div>
  );
}

Home.propTypes = {
  getStarted: PropTypes.func.isRequired,
};

export default Home;
