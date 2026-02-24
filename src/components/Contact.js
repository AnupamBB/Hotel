import React from "react";
import businessData from "../config/business.json";

const Contact = () => {
	const { contact } = businessData;

	return (
		<section id="contact" className="contact">
			<h2>{contact.title}</h2>

			<form>
				<input type="text" placeholder={contact.form.namePlaceholder} required />
				<input type="email" placeholder={contact.form.emailPlaceholder} required />
				<textarea placeholder={contact.form.messagePlaceholder} required></textarea>

				<button type="submit">{contact.form.buttonText}</button>
			</form>

			<div className="map">
				<iframe
					title="Business Location"
					width="100%"
					height="300"
					src={contact.map.embedUrl}
					style={{ border: 0 }}
					allowFullScreen=""
				></iframe>
			</div>
		</section>
	);
};

export default Contact;
