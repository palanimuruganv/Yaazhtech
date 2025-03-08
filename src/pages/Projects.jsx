import React, { useEffect, useRef, useState } from "react";
import {
  FaRobot,
  FaCloud,
  FaLock,
  FaBrain,
  FaBitcoin,
  FaServer,
  FaShieldAlt,
  FaMobileAlt,
} from "react-icons/fa";

const projects = [
  { icon: <FaRobot />, title: "AI-powered Automation", desc: "Revolutionizing industries with smart automation." },
  { icon: <FaCloud />, title: "Cloud Solutions", desc: "Secure and scalable cloud infrastructure." },
  { icon: <FaLock />, title: "Blockchain Security", desc: "Next-gen decentralized security solutions." },
  { icon: <FaBrain />, title: "Artificial Intelligence", desc: "Advancing AI-driven innovation across industries." },
  { icon: <FaBitcoin />, title: "Blockchain & Crypto", desc: "Innovating financial security with blockchain technology." },
  { icon: <FaServer />, title: "Cloud Computing", desc: "Enhancing business efficiency with cloud solutions." },
  { icon: <FaShieldAlt />, title: "Cybersecurity", desc: "Ensuring data privacy and protection against cyber threats." },
  { icon: <FaMobileAlt />, title: "Mobile Technology", desc: "Developing cutting-edge mobile applications and solutions." },
];

const Projects = () => {
  const projectRefs = useRef([]);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = projectRefs.current.slice(); // Capture current refs

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section style={{ textAlign: "center", padding: "50px" }}>
      <h2>Our Projects</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            style={{
                background: "#1a1a2e",
                color: "white",
                padding: "20px",
                borderRadius: "12px",
                textAlign: "center",
                opacity: "0",
                marginBottom: "50px",
                marginLeft: "15px",
                transform: hoverIndex === index ? "scale(1.1) translateY(0)" : "scale(1) translateY(50px)",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.3s ease-in-out",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                boxShadow: hoverIndex === index ? "0 15px 30px rgba(77, 184, 255, 0.5)" : "none",
            }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div
              style={{
                fontSize: "3rem",
                color: hoverIndex === index ? "#ffffff" : "#4db8ff",
                marginBottom: "10px",
                transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out",
                transform: hoverIndex === index ? "rotate(10deg)" : "rotate(0deg)",
              }}
            >
              {project.icon}
            </div>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
