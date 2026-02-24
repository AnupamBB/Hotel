import React from "react";
import { Row, Col, Card, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

const RoomsSection = ({ rooms, setBookingModal }) => {
  return (
    <section
      id="rooms"
      style={{
        padding: "100px 5%",
        background: "#f8f9fa",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: "700",
              marginBottom: "15px",
              background:
                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Premium Rooms
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#666",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Comfortable and elegantly designed rooms for your perfect stay
          </p>
        </div>

        <Row gutter={[30, 30]}>
          {rooms.map((room, idx) => (
            <Col xs={24} sm={12} lg={6} key={idx}>
              <Card
                hoverable
                cover={
                  <div
                    style={{
                      height: "250px",
                      background: `url(${room.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "15px",
                        right: "15px",
                        background: "rgba(255,255,255,0.95)",
                        padding: "8px 15px",
                        borderRadius: "20px",
                        fontWeight: "700",
                        color: "#667eea",
                        fontSize: "16px",
                      }}
                    >
                      {room.price}
                    </div>
                  </div>
                }
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "none",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                }}
                bodyStyle={{ padding: "25px" }}
              >
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: "700",
                    marginBottom: "10px",
                    color: "#333",
                  }}
                >
                  {room.title}
                </h3>
                <p
                  style={{
                    color: "#666",
                    marginBottom: "15px",
                    fontSize: "14px",
                  }}
                >
                  <UserOutlined /> {room.capacity}
                </p>
                <div style={{ marginBottom: "20px" }}>
                  {room.features.map((feature, i) => (
                    <span
                      key={i}
                      style={{
                        display: "inline-block",
                        background: "#f0f2f5",
                        padding: "5px 12px",
                        borderRadius: "15px",
                        fontSize: "12px",
                        margin: "3px",
                        color: "#555",
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Button
                  type="primary"
                  block
                  onClick={() => setBookingModal(true)}
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    border: "none",
                    height: "45px",
                    fontWeight: "600",
                    borderRadius: "8px",
                  }}
                >
                  Book Now
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default RoomsSection;
