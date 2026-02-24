import React from "react";
import { Row, Col } from "antd";
import {
  WifiOutlined,
  CarOutlined,
  CoffeeOutlined,
  CustomerServiceOutlined,
  SafetyOutlined,
  ClockCircleOutlined,
  ThunderboltOutlined,
  InboxOutlined,
  HomeOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

import businessData from "../config/business.json";

const iconMap = {
  WifiOutlined: <WifiOutlined />,
  CarOutlined: <CarOutlined />,
  CoffeeOutlined: <CoffeeOutlined />,
  CustomerServiceOutlined: <CustomerServiceOutlined />,
  SafetyOutlined: <SafetyOutlined />,
  ClockCircleOutlined: <ClockCircleOutlined />,
  ThunderboltOutlined: <ThunderboltOutlined />,
  InboxOutlined: <InboxOutlined />,
  HomeOutlined: <HomeOutlined />,
  AppstoreOutlined: <AppstoreOutlined />,
};

const AmenitiesSection = () => {
  const { amenitiesSection } = businessData;

  return (
    <section
      id="amenities"
      style={{
        padding: "100px 5%",
        background: "white",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: "700",
              marginBottom: "15px",
              background: amenitiesSection.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {amenitiesSection.title}
          </h2>

          <p
            style={{
              fontSize: "18px",
              color: "#666",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            {amenitiesSection.subtitle}
          </p>
        </div>

        <Row gutter={[40, 40]}>
          {amenitiesSection.items.map((amenity, idx) => (
            <Col xs={24} sm={12} md={8} key={idx}>
              <div
                style={{
                  textAlign: "center",
                  padding: "40px 20px",
                  background: "#f8f9fa",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(102,126,234,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    fontSize: "48px",
                    color: "#667eea",
                    marginBottom: "20px",
                  }}
                >
                  {iconMap[amenity.icon]}
                </div>

                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    marginBottom: "8px",
                    color: "#333",
                  }}
                >
                  {amenity.title}
                </h3>

                <p style={{ color: "#666", margin: 0 }}>
                  {amenity.desc}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default AmenitiesSection;
