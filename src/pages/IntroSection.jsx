import React from "react";
import "./home.css"; // Ensure it has styles

const IntroSection = () => {
  return (
    <section className="intro-section fade-in">
      <div className="intro-text">
        <h1>YAAZH Solutions Inc.</h1>
        <p>Providing cutting-edge software solutions for businesses worldwide.</p>
      </div>

      <div className="intro-video">
        <img
          src={`${process.env.PUBLIC_URL}/Bdvif.gif`}
          alt="Background Animation"
          className="background-gif"
        />
      </div>
    </section>
  );
};

export default IntroSection;
