import React from "react";
import { Row, Col, Card, Rate } from "antd";
import businessData from "../config/business.json";

const ReviewsSection = () => {
  const { reviewsSection } = businessData;

  return (
    <section
      id="reviews"
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
              background: reviewsSection.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {reviewsSection.title}
          </h2>

          <p
            style={{
              fontSize: "18px",
              color: "#666",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            {reviewsSection.subtitle}
          </p>
        </div>

        <Row gutter={[30, 30]}>
          {reviewsSection.reviews.map((review, idx) => (
            <Col xs={24} md={8} key={idx}>
              <Card
                style={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  height: "100%",
                }}
                bodyStyle={{ padding: "30px" }}
              >
                <Rate
                  disabled
                  defaultValue={review.rating}
                  style={{ fontSize: "20px", marginBottom: "15px" }}
                />

                <p
                  style={{
                    fontSize: "16px",
                    color: "#555",
                    lineHeight: "1.8",
                    marginBottom: "20px",
                  }}
                >
                  "{review.comment}"
                </p>

                <div
                  style={{
                    borderTop: "1px solid #f0f0f0",
                    paddingTop: "15px",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "700",
                      color: "#333",
                      margin: 0,
                    }}
                  >
                    {review.name}
                  </p>

                  <p
                    style={{
                      color: "#999",
                      fontSize: "14px",
                      margin: 0,
                    }}
                  >
                    {review.date}
                  </p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default ReviewsSection;