import React from "react";
import Pro from "./Projects";
import Footer from "./Footer";
import './home.css';
import Inter from './IntroSection'


const Home = () => {
  return (
    <div className="home-container">
      
      {/*home*/}
      <Inter />

      {/* Projects Section */}
      <Pro />

      {/* Services Section */}
      <section 
        className="services-section fade-in"
        style={{ textAlign: "center", padding: "50px", transition: "opacity 0.6s ease-out, transform 0.6s ease-out" }}
      >
        <h2 style={{ marginBottom: "20px" }}>Our Services</h2>
        <ul 
          style={{
            listStyle: "none",
            padding: "0",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            { title: "Custom Software Development", desc: "Tailor-made solutions to meet your business needs." },
            { title: "AI & Machine Learning Solutions", desc: "Advanced AI models to automate and optimize processes." },
            { title: "Blockchain Security", desc: "Secure and decentralized solutions for modern businesses." },
            { title: "Cloud Computing", desc: "Scalable cloud-based infrastructure for seamless operations." }
          ].map((service, index) => (
            <li
              key={index}
              style={{
                background: "#1a1a2e",
                color: "white",
                padding: "20px",
                borderRadius: "12px",
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                textAlign: "center",
                fontSize: "1.2rem",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                const serviceDesc = e.currentTarget.querySelector(".service-desc");
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(77, 184, 255, 0.5)";
                if (serviceDesc) {
                  serviceDesc.style.opacity = "1";
                  serviceDesc.style.transform = "translateY(0)";
                }
              }}
              onMouseLeave={(e) => {
                const serviceDesc = e.currentTarget.querySelector(".service-desc");
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
                if (serviceDesc) {
                  serviceDesc.style.opacity = "0";
                  serviceDesc.style.transform = "translateY(10px)";
                }
              }}
            >
              {service.title}
              <p 
                className="service-desc"
                style={{
                  marginTop: "10px",
                  fontSize: "1rem",
                  opacity: "0",
                  transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
                  transform: "translateY(10px)",
                  color: "#4db8ff",
                }}
              >
                {service.desc}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Our Impact Section */}
      <section className="impact-section">
  <h3 className="heading">OUR IMPACT</h3>
  <div className="impact-container">
    {[
      { title: "Successful Projects", value: "20+" },
      { title: "Happy Customers", value: "500K+" },
      { title: "Expert Developers", value: "150+" },
      { title: "Years in Business", value: "10+" },
      { title: "Countries Reached", value: "30+" },
    ].map((item, index) => (
      <div key={index} className="card">
        <strong className="card-value">{item.value}</strong>
        <p className="card-title">{item.title}</p>
      </div>
    ))}
  </div>
</section>



      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
