import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import RoomsSection from "./RoomsSection";
import BookingModal from "./BookingModal";
import Frontpage from "./Frontpage";
import AmenitiesSection from "./AmenitiesSection";
import ReviewsSection from "./ReviewsSection";
import ContactSection from "./ContactSection";
import {
	Button,
	Card,
	Row,
	Col,
	Carousel,
	Rate,
	Form,
	Input,
	DatePicker,
	Select,
	Modal,
	Drawer,
} from "antd";
import {
	EnvironmentOutlined,
	PhoneOutlined,
	ClockCircleOutlined,
	MenuOutlined,
	StarFilled,
} from "@ant-design/icons";

import About from "./About";

export default function HotelBanquesta() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("home");
	const [bookingModal, setBookingModal] = useState(false);
	const [mobileMenu, setMobileMenu] = useState(false);
	const [form] = Form.useForm();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
			setActiveSection(id);
			setMobileMenu(false);
		}
	};

	const handleBooking = (values) => {
		console.log("Booking submitted:", values);
		Modal.success({
			title: "Booking Request Submitted!",
			content:
				"Thank you for your interest. Our team will contact you shortly to confirm your reservation.",
		});
		form.resetFields();
		setBookingModal(false);
	};

	const rooms = [
		{
			title: "2 BHK Fully Furnished Apartment",
			price: "₹18,000 / Month",
			image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
			features: [
				"2 Bedrooms",
				"Hall & Kitchen",
				"Attached Bathrooms",
				"Balcony",
				"Power Backup",
				"Washing Machine",
				"Refrigerator",
				"Water Purifier",
			],
			capacity: "Family / 3-4 Persons",
		},
		{
			title: "PG Accommodation (Single Sharing)",
			price: "₹8,000 / Month",
			image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800",
			features: [
				"Single Bed",
				"Wardrobe",
				"Study Table & Chair",
				"WiFi",
				"Geyser",
				"Power Backup",
			],
			capacity: "1 Person",
		},
		{
			title: "PG Accommodation (Double Sharing)",
			price: "₹6,000 / Month",
			image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800",
			features: [
				"2 Beds",
				"Wardrobe",
				"WiFi",
				"Attached/Common Bathroom",
				"Geyser",
				"Power Backup",
			],
			capacity: "2 Persons",
		},
		{
			title: "PG Accommodation (Triple Sharing)",
			price: "₹5,000 / Month",
			image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800",
			features: [
				"3 Beds",
				"Wardrobe",
				"WiFi",
				"Common Bathroom",
				"Water Purifier",
				"24/7 Security",
			],
			capacity: "3 Persons",
		},
	];

	return (
		<div
			style={{
				fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
			}}
		>
			<nav
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					right: 0,
					zIndex: 1000,
					background: isScrolled
						? "rgba(255, 255, 255, 0.98)"
						: "rgba(255, 255, 255, 0.95)",
					backdropFilter: "blur(10px)",
					boxShadow: isScrolled ? "0 2px 20px rgba(0,0,0,0.1)" : "none",
					transition: "all 0.3s ease",
					padding: "0 5%",
				}}
			>
				<div
					style={{
						maxWidth: "1400px",
						margin: "0 auto",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						height: "70px",
					}}
				>
					<div
						style={{
							fontSize: "28px",
							fontWeight: "700",
							background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							letterSpacing: "-0.5px",
						}}
					>
						Shri Hariman Apartments
					</div>

					<div style={{ display: "flex", gap: "35px", alignItems: "center" }}>
						{/* Desktop Menu */}
						<div
							style={{
								display: window.innerWidth > 768 ? "flex" : "none",
								gap: "35px",
							}}
						>
							{["home", "rooms", "amenities", "reviews", "contact"].map((item) => (
								<a
									key={item}
									onClick={() => scrollToSection(item)}
									style={{
										cursor: "pointer",
										color: activeSection === item ? "#667eea" : "#333",
										fontWeight: activeSection === item ? "600" : "500",
										fontSize: "15px",
										textTransform: "capitalize",
										transition: "all 0.3s ease",
										borderBottom:
											activeSection === item ? "2px solid #667eea" : "none",
										paddingBottom: "5px",
									}}
									onMouseEnter={(e) => (e.target.style.color = "#667eea")}
									onMouseLeave={(e) =>
										activeSection !== item && (e.target.style.color = "#333")
									}
								>
									{item}
								</a>
							))}
						</div>

						<Button
							type="primary"
							size="large"
							onClick={() => setBookingModal(true)}
							style={{
								background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
								border: "none",
								borderRadius: "8px",
								fontWeight: "600",
								height: "45px",
								padding: "0 30px",
								display: window.innerWidth > 768 ? "block" : "none",
							}}
						>
							Book Now
						</Button>

						{/* Mobile Menu Button */}
						<Button
							icon={<MenuOutlined />}
							onClick={() => setMobileMenu(true)}
							style={{
								display: window.innerWidth <= 768 ? "block" : "none",
								border: "none",
								fontSize: "20px",
							}}
						/>
					</div>
				</div>
			</nav>

			{/* Mobile Drawer */}
			<Drawer
				title="Menu"
				placement="right"
				onClose={() => setMobileMenu(false)}
				open={mobileMenu}
			>
				<div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
					{["home", "rooms", "amenities", "reviews", "contact"].map((item) => (
						<Button
							key={item}
							type="text"
							onClick={() => scrollToSection(item)}
							style={{
								textAlign: "left",
								fontSize: "16px",
								textTransform: "capitalize",
								height: "auto",
								padding: "10px",
							}}
						>
							{item}
						</Button>
					))}
					<Button
						type="primary"
						onClick={() => {
							setMobileMenu(false);
							setBookingModal(true);
						}}
						style={{
							background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
							border: "none",
							marginTop: "10px",
						}}
					>
						Book Now
					</Button>
				</div>
			</Drawer>

			<Frontpage setBookingModal={setBookingModal} scrollToSection={scrollToSection} />

			{/* Quick Info Bar */}
			<section
				style={{
					background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
					padding: "30px 5%",
					color: "white",
				}}
			>
				<div
					style={{
						maxWidth: "1400px",
						margin: "0 auto",
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
						gap: "30px",
						textAlign: "center",
					}}
				>
					<div>
						<EnvironmentOutlined style={{ fontSize: "32px", marginBottom: "10px" }} />
						<h3 style={{ color: "white", margin: "10px 0 5px" }}>Location</h3>
						<p style={{ margin: 0, opacity: 0.95 }}>
							Raipur Khadar, Sector 126, Noida, Uttar Pradesh{" "}
						</p>
					</div>
					<div>
						<PhoneOutlined style={{ fontSize: "32px", marginBottom: "10px" }} />
						<h3 style={{ color: "white", margin: "10px 0 5px" }}>Phone</h3>
						<p style={{ margin: 0, opacity: 0.95 }}>+91 XXXX XXXXXX</p>
					</div>
					<div>
						<ClockCircleOutlined style={{ fontSize: "32px", marginBottom: "10px" }} />
						<h3 style={{ color: "white", margin: "10px 0 5px" }}>Check-in</h3>
						<p style={{ margin: 0, opacity: 0.95 }}>2:00 PM - 11:00 PM</p>
					</div>
					<div>
						<StarFilled style={{ fontSize: "32px", marginBottom: "10px" }} />
						<h3 style={{ color: "white", margin: "10px 0 5px" }}>Rating</h3>
						<p style={{ margin: 0, opacity: 0.95 }}>5 Stars</p>
					</div>
				</div>
			</section>

			<About />
			<RoomsSection rooms={rooms} setBookingModal={setBookingModal} />
			<AmenitiesSection />
			<ReviewsSection />
			<ContactSection />
			<Footer />
			<BookingModal
				bookingModal={bookingModal}
				setBookingModal={setBookingModal}
				rooms={rooms}
				form={form}
				handleBooking={handleBooking}
			/>
		</div>
	);
}
