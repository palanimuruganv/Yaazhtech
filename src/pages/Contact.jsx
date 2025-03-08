import React from "react";

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>

      <div style={styles.infoContainer}>
        <h2 style={styles.subHeading}>Company Leadership</h2>
        <p><strong>CEO:</strong> John Doe</p>
        <p><strong>Founder:</strong> Jane Smith</p>
        <p><strong>Chairman:</strong> Robert Johnson</p>
      </div>

      <div style={styles.contactDetails}>
        <h2 style={styles.subHeading}>Get in Touch</h2>
        <p><strong>Email:</strong> support@yaazhsolutions.com</p>
        <p><strong>Phone:</strong> +123 456 7890</p>
        <p><strong>Address:</strong> 123 Tech Park, Chennai, India</p>
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
  contactDetails: {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "inline-block",
    textAlign: "left",
  },
};

export default Contact;
