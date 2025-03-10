import React from "react";

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>

      <div style={styles.infoContainer}>
        <h2 style={styles.subHeading}>Company Leadership</h2>
        <p><strong>CEO:</strong> Neeleshwar</p>
        <p><strong>Founder:</strong> Palani Murugan</p>
        <p><strong>Chairman:</strong> Rahul </p>
      </div>

      <div style={styles.contactDetails}>
        <h2 style={styles.subHeading}>Get in Touch</h2>
        <p><strong>Email:</strong> support@yaazhsolutions.com</p>
        <p><strong>Phone:</strong> +91 951487623</p>
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
    gap: "80px",
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
    marginLeft: "10px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "inline-block",
    textAlign: "left",
    marginBottom: "40px", // Increased space below this section
  },

  subHeading: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "10px",
  },
  contactDetails: {
    marginTop: "50px", // Increased space above this section
    padding: "20px",
    marginRight:"50px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "inline-block",
    textAlign: "left",
    marginLeft:"10Px",
  },
};

export default Contact;
