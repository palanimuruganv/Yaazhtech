import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Left Section */}
        <div style={styles.section}>
          <h2 style={styles.brand}>
            <span style={styles.trends}></span> YAAZH<span style={styles.trends}>Solution</span>
          </h2>
          <p style={styles.description}>
            Your daily source for the latest innovations, breakthroughs, and trends shaping the future of technology.
          </p>
          <div style={styles.socialIcons}>
            <FaTwitter style={styles.icon} />
            <FaFacebook style={styles.icon} />
            <FaInstagram style={styles.icon} />
            <FaLinkedin style={styles.icon} />
          </div>
        </div>

        {/* Categories Section */}
        <div style={styles.section}>
          <h3 style={styles.heading}>CATEGORIES</h3>
          <ul style={styles.list}>
            <li>Artificial Intelligence</li>
            <li>Blockchain & Crypto</li>
            <li>Cloud Computing</li>
            <li>Cybersecurity</li>
            <li>Mobile Technology</li>
          </ul>
        </div>

        {/* Company Section */}
        <div style={styles.section}>
          <h3 style={styles.heading}>COMPANY</h3>
          <ul style={styles.list}>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Advertise</li>
            <li>Press Kit</li>
          </ul>
        </div>

        {/* Legal Section */}
        <div style={styles.section}>
          <h3 style={styles.heading}>LEGAL</h3>
          <ul style={styles.list}>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

// Inline CSS
const styles = {
  footer: {
    background: "#0a0a1a",
    padding: "40px 0",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    flexWrap: "wrap",
  },
  section: {
    flex: "1",
    minWidth: "200px",
    marginBottom: "20px",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#ff00ff",
  },
  trends: {
    color: "#4db8ff",
  },
  description: {
    fontSize: "14px",
    color: "#ccc",
    marginBottom: "10px",
  },
  socialIcons: {
    display: "flex",
    gap: "10px",
  },
  icon: {
    fontSize: "20px",
    cursor: "pointer",
    color: "#ccc",
    transition: "color 0.3s",
  },
  heading: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#ff00ff",
    marginBottom: "10px",
  },
  list: {
    listStyle: "none",
    padding: "0",
    color: "#ccc",
    fontSize: "14px",
    lineHeight: "2",
  },
};

export default Footer;
