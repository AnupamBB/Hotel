import React from "react";
import { Row, Col } from "antd";
import {
	PhoneOutlined,
	MailOutlined,
	EnvironmentOutlined,
	FacebookFilled,
	InstagramFilled,
	TwitterSquareFilled,
} from "@ant-design/icons";

const Footer = () => {
	return (
		<footer
			style={{
				background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
				color: "white",
				padding: "60px 5% 20px 5%",
			}}
		>
			<div style={{ maxWidth: "1400px", margin: "0 auto" }}>
				<Row gutter={[40, 40]}>
					{/* HOTEL INFO */}
					<Col xs={24} md={6}>
						<h3 style={{ fontSize: "24px", fontWeight: "700" }}>
							Shri Hariman Apartments
						</h3>
						<p style={{ opacity: 0.9 }}>
							Experience luxury and exceptional comfort in the heart of Greater Noida.
							At Shri Hariman Apartments, we blend modern amenities with warm
							hospitality to ensure a memorable stay, whether you’re here for
							business, leisure, weddings, or special celebrations.
						</p>
					</Col>

					{/* QUICK LINKS */}
					<Col xs={24} md={6}>
						<h4 style={{ fontWeight: "600", marginBottom: "15px" }}>Quick Links</h4>
						<p>About Us</p>
						<p>Rooms</p>
						<p>Banquet Hall</p>
						<p>Gallery</p>
						<p>Contact</p>
					</Col>

					{/* SERVICES */}
					<Col xs={24} md={6}>
						<h4 style={{ fontWeight: "600", marginBottom: "15px" }}>Our Services</h4>
						<p>Deluxe & Executive Rooms</p>
						<p>Free Wi-Fi</p>
						<p>24/7 Room Service</p>
						<p>Event & Wedding Hosting</p>
						<p>Secure Parking</p>
					</Col>

					{/* CONTACT INFO */}
					<Col xs={24} md={6}>
						<h4 style={{ fontWeight: "600", marginBottom: "15px" }}>Contact Us</h4>
						<p>
							<EnvironmentOutlined /> Greater Noida, Uttar Pradesh
						</p>
						<p>
							<PhoneOutlined /> +91 XXXXX XXXXX
						</p>
						<p>
							<MailOutlined /> info@hotelbanquesta.com
						</p>

						{/* Social Icons */}
						<div style={{ marginTop: "15px", fontSize: "22px" }}>
							<FacebookFilled style={{ marginRight: 15 }} />
							<InstagramFilled style={{ marginRight: 15 }} />
							<TwitterSquareFilled />
						</div>
					</Col>
				</Row>

				{/* Divider */}
				<div
					style={{
						height: "1px",
						background: "rgba(255,255,255,0.3)",
						margin: "40px 0 20px",
					}}
				/>

				{/* Bottom Section */}
				<div style={{ textAlign: "center", opacity: 0.9 }}>
					© 2026 Shri Hariman Apartments | Designed with ❤️ | All Rights Reserved
				</div>
			</div>
		</footer>
	);
};

export default Footer;
