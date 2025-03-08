import React from "react";

const Services = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Services</h1>
      <p style={styles.description}>
        We offer a wide range of cutting-edge software solutions tailored to your business needs.
      </p>

      <ul style={styles.list}>
        <li style={styles.listItem}><strong>💻 Web Development:</strong> Custom websites, web apps, and e-commerce solutions.</li>
        <li style={styles.listItem}><strong>📱 Mobile App Development:</strong> iOS and Android applications with a seamless user experience.</li>
        <li style={styles.listItem}><strong>☁ Cloud Solutions:</strong> Secure cloud computing and hosting services.</li>
        <li style={styles.listItem}><strong>🔒 Cybersecurity:</strong> Protecting your data with advanced security measures.</li>
        <li style={styles.listItem}><strong>🤖 AI & Machine Learning:</strong> Intelligent automation and predictive analytics.</li>
        <li style={styles.listItem}><strong>📊 Data Analytics:</strong> Business intelligence and big data solutions.</li>
        <li style={styles.listItem}><strong>🛠 IT Consulting:</strong> Expert guidance for optimizing your IT infrastructure.</li>
        <li style={styles.listItem}><strong>🎨 UI/UX Design:</strong> Engaging and user-friendly interface designs.</li>
      </ul>
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
    color: "white",
    marginBottom: "10px",
  },
  description: {
    fontSize: "18px",
    color: "red",
    marginBottom: "20px",
  },
  list: {
    listStyleType: "none",
    padding: "0",
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "left",
  },
  listItem: {
    backgroundColor: "#fff",
    padding: "15px",
    margin: "10px 0",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontSize: "16px",
    color: "#444",
  },
};

export default Services;
