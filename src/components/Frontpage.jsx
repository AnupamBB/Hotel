import React from "react";
import { Carousel, Button } from "antd";
import businessData from "../config/business.json";

const Frontpage = ({ setBookingModal, scrollToSection }) => {
  const { frontpage } = businessData;

  return (
    <section
      id="home"
      style={{
        height: "90vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Carousel
        autoplay
        autoplaySpeed={5000}
        effect="fade"
        style={{ height: "100%" }}
      >
        {frontpage.slides.map((img, idx) => (
          <div key={idx}>
            <div
              style={{
                height: "90vh",
                background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  color: "white",
                }}
              >
                <h1
                  style={{
                    fontSize: "clamp(36px, 6vw, 72px)",
                    fontWeight: "800",
                    lineHeight: "0",
                    marginBottom: "20px",
                    textShadow: "2px 2px 20px rgba(0,0,0,0.5)",
                  }}
                >
                  {frontpage.welcomeText}
                </h1>

                <h1
                  style={{
                    fontSize: "clamp(36px, 6vw, 72px)",
                    fontWeight: "800",
                    marginBottom: "20px",
                    lineHeight: "1.2",
                    textShadow: "2px 2px 20px rgba(0,0,0,0.5)",
                  }}
                >
                  {frontpage.businessName}
                </h1>

                <p
                  style={{
                    fontSize: "clamp(18px, 3vw, 24px)",
                    marginBottom: "40px",
                    textShadow: "1px 1px 10px rgba(0,0,0,0.5)",
                    fontWeight: "300",
                  }}
                >
                  {frontpage.tagline}
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Button
                    size="large"
                    onClick={() => setBookingModal(true)}
                    style={{
                      background: frontpage.primaryGradient,
                      border: "none",
                      color: "white",
                      height: "55px",
                      padding: "0 40px",
                      fontSize: "18px",
                      fontWeight: "600",
                      borderRadius: "8px",
                    }}
                  >
                    {frontpage.primaryButtonText}
                  </Button>

                  <Button
                    size="large"
                    onClick={() => scrollToSection("rooms")}
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      backdropFilter: "blur(10px)",
                      border: "2px solid white",
                      color: "white",
                      height: "55px",
                      padding: "0 40px",
                      fontSize: "18px",
                      fontWeight: "600",
                      borderRadius: "8px",
                    }}
                  >
                    {frontpage.secondaryButtonText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Frontpage;
