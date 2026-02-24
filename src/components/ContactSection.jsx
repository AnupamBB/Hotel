import React from "react";
import { Row, Col, Button } from "antd";
import {
	EnvironmentOutlined,
	PhoneOutlined,
	MailOutlined,
	ClockCircleOutlined,
	CalendarOutlined,
} from "@ant-design/icons";

import businessData from "../config/business.json";

const ContactSection = ({ setBookingModal }) => {
	const { contactSection } = businessData;

	return (
		<section
			id="contact"
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
							background: contactSection.gradient,
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
						}}
					>
						{contactSection.title}
					</h2>

					<p
						style={{
							fontSize: "18px",
							color: "#666",
							maxWidth: "600px",
							margin: "0 auto",
						}}
					>
						{contactSection.subtitle}
					</p>
				</div>

				<Row gutter={[60, 60]} align="middle">
					<Col xs={24} md={12}>
						<div
							style={{
								height: "400px",
								borderRadius: "12px",
								overflow: "hidden",
								boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
							}}
						>
							<iframe
								src={contactSection.mapEmbedUrl}
								width="100%"
								height="450"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Location"
							/>
						</div>
					</Col>

					<Col xs={24} md={12}>
						<div
							style={{
								background: "#f8f9fa",
								padding: "40px",
								borderRadius: "12px",
							}}
						>
							<h3
								style={{
									fontSize: "24px",
									fontWeight: "700",
									marginBottom: "25px",
									color: "#333",
								}}
							>
								{contactSection.contactInfoTitle}
							</h3>

							{/* Address */}
							<div style={{ display: "flex", marginBottom: "20px" }}>
								<EnvironmentOutlined
									style={{
										fontSize: "24px",
										color: "#667eea",
										marginRight: "15px",
									}}
								/>
								<div>
									<p style={{ fontWeight: "600", margin: 0 }}>Address</p>
									<p style={{ margin: 0, color: "#666" }}>
										{contactSection.address}
									</p>
								</div>
							</div>

							{/* Phone */}
							<div style={{ display: "flex", marginBottom: "20px" }}>
								<PhoneOutlined
									style={{
										fontSize: "24px",
										color: "#667eea",
										marginRight: "15px",
									}}
								/>
								<div>
									<p style={{ fontWeight: "600", margin: 0 }}>Phone</p>
									<p style={{ margin: 0, color: "#666" }}>
										{contactSection.phone}
									</p>
								</div>
							</div>

							{/* Email */}
							<div style={{ display: "flex", marginBottom: "20px" }}>
								<MailOutlined
									style={{
										fontSize: "24px",
										color: "#667eea",
										marginRight: "15px",
									}}
								/>
								<div>
									<p style={{ fontWeight: "600", margin: 0 }}>Email</p>
									<p style={{ margin: 0, color: "#666" }}>
										{contactSection.email}
									</p>
								</div>
							</div>

							{/* Timing */}
							<div style={{ display: "flex", marginBottom: "30px" }}>
								<ClockCircleOutlined
									style={{
										fontSize: "24px",
										color: "#667eea",
										marginRight: "15px",
									}}
								/>
								<div>
									<p style={{ fontWeight: "600", margin: 0 }}>
										Check-in / Check-out
									</p>
									<p style={{ margin: 0, color: "#666" }}>
										{contactSection.checkin} / {contactSection.checkout}
									</p>
								</div>
							</div>

							<Button
								type="primary"
								size="large"
								block
								icon={<CalendarOutlined />}
								onClick={() => setBookingModal(true)}
								style={{
									background: contactSection.gradient,
									border: "none",
									height: "50px",
									fontWeight: "600",
									fontSize: "16px",
									borderRadius: "8px",
								}}
							>
								{contactSection.ctaText}
							</Button>
						</div>
					</Col>
				</Row>
			</div>
		</section>
	);
};

export default ContactSection;
