import { Helmet } from "react-helmet-async";

function About() {
  return (
    <>
      <Helmet>
        <title>About - Kitkat Software Technologies</title>
        <meta
          name="description"
          content="Learn more about Kitkat Software Technologies company, mission and services."
        />
      </Helmet>

      <h1>About Us</h1>
      <p>
        Kitkat Software Technologies is a web development company located in
        Coimbatore providing software solutions.
      </p>
    </>
  );
}

export default About;