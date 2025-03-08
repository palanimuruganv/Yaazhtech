import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.description}>
        We are <strong>YAAZH Solutions</strong>, a company dedicated to providing cutting-edge software solutions.
      </p>

      <div style={styles.infoContainer}>
        <h2 style={styles.subHeading}>Our Details</h2>
        <p><strong>Name:</strong> YAAZH Solutions Inc.</p>
        <p><strong>City:</strong> Chennai</p>
        <p><strong>Country:</strong> India</p>
      </div>

      <div style={styles.socialMedia}>
        <h2 style={styles.subHeading}>Follow Us</h2>
        <a href="https://facebook.com" style={styles.link} target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" style={styles.link} target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://linkedin.com" style={styles.link} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0a0a0a, #1a1a40)",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#fff",
  },
  description: {
    fontSize: "18px",
    color: "#fff",
    marginTop: "10px",
  },
  infoContainer: {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "inline-block",
    textAlign: "left",
  },
  subHeading: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "10px",
  },
  socialMedia: {
    marginTop: "20px",
  },
  link: {
    display: "inline-block",
    margin: "5px 10px",
    color: "#007bff",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default About;
