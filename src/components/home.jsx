import PropTypes from "prop-types";

function Home({ getStarted }) {
  return (
    <div className="getStarted">
      <h1>Boost your Career with a beautiful CV</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        tincidunt bibendum mattis. Cras nec arcu pretium, auctor massa et,
        varius enim. Donec ultrices felis a mattis tristique. Sed et elit id
        arcu tincidunt tempor. Sed aliquam, quam vitae tincidunt venenatis, leo
        felis dictum nibh, vitae ultrices mauris lectus nec augue.
      </p>
      <button onClick={getStarted}>Get Started</button>
    </div>
  );
}

Home.propTypes = {
  getStarted: PropTypes.func.isRequired,
};

export default Home;
