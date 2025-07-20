import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const services = [
	{ id: 1, name: "Security Service" },
	{ id: 2, name: "Facility Management" },
	{ id: 3, name: "Consulting" },
];

const ContactForm = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		service: "",
		message: "",
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [snackbarOpen, setSnackbarOpen] = useState(false);

	const validate = () => {
		const newErrors = {};
		if (!form.name || form.name.length < 2)
			newErrors.name = "Name must be at least 2 characters.";
		if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
			newErrors.email = "Please enter a valid email address.";
		if (form.phone && form.phone.length < 10)
			newErrors.phone = "Phone number must be at least 10 digits.";
		if (!form.message || form.message.length < 10)
			newErrors.message = "Message must be at least 10 characters.";
		if (form.message && form.message.length > 500)
			newErrors.message = "Message must not exceed 500 characters.";
		return newErrors;
	};

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const validationErrors = validate();
		setErrors(validationErrors);
		if (Object.keys(validationErrors).length > 0) return;
		setIsSubmitting(true);
		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1500));
		setIsSubmitting(false);
		setSnackbarOpen(true);
		setForm({
			name: "",
			email: "",
			phone: "",
			service: "",
			message: "",
		});
	};

	return (
		<form
			onSubmit={handleSubmit}
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "stretch",
				gap: "1.25rem",
				width: "100%",
				maxWidth: "400px",
				margin: "0 auto",
				boxSizing: "border-box",
			}}
		>
			<TextField
				label="Full Name"
				name="name"
				value={form.name}
				onChange={handleChange}
				error={!!errors.name}
				helperText={errors.name}
				required
				fullWidth
				inputProps={{ style: { textAlign: "left" } }}
			/>
			<TextField
				label="Email Address"
				name="email"
				type="email"
				value={form.email}
				onChange={handleChange}
				error={!!errors.email}
				helperText={errors.email}
				required
				fullWidth
				inputProps={{ style: { textAlign: "left" } }}
			/>
			<TextField
				label="Phone Number (Optional)"
				name="phone"
				type="tel"
				value={form.phone}
				onChange={handleChange}
				error={!!errors.phone}
				helperText={errors.phone}
				fullWidth
				inputProps={{ style: { textAlign: "left" } }}
			/>
			<FormControl fullWidth>
				<InputLabel id="service-label">
					Service of Interest (Optional)
				</InputLabel>
				<Select
					labelId="service-label"
					name="service"
					value={form.service}
					label="Service of Interest (Optional)"
					onChange={handleChange}
				>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					{services.map((service) => (
						<MenuItem key={service.id} value={service.name}>
							{service.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<TextField
				label="Your Message"
				name="message"
				multiline
				minRows={4}
				value={form.message}
				onChange={handleChange}
				error={!!errors.message}
				helperText={errors.message}
				required
				fullWidth
				inputProps={{ style: { textAlign: "left" } }}
			/>
			<Button
				type="submit"
				variant="contained"
				color="primary"
				disabled={isSubmitting}
				style={{
					width: "100%",
					padding: "0.75rem",
					borderRadius: "8px",
					background: "#fbbf24",
					color: "#fff",
					fontWeight: 600,
					fontSize: "1rem",
					border: "none",
					cursor: "pointer",
					textTransform: "none",
					transition: "background 0.2s",
				}}
				onMouseOver={(e) => (e.currentTarget.style.background = "#e0a800")}
				onMouseOut={(e) => (e.currentTarget.style.background = "#fbbf24")}
			>
				{isSubmitting ? "Sending..." : "Send Message"}
			</Button>
			<Snackbar
				open={snackbarOpen}
				autoHideDuration={4000}
				onClose={() => setSnackbarOpen(false)}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			>
				<Alert
					onClose={() => setSnackbarOpen(false)}
					severity="success"
					sx={{ width: "100%" }}
				>
					Message Sent! Thank you for contacting us. We'll get back to you
					shortly.
				</Alert>
			</Snackbar>
		</form>
	);
};

export default ContactForm;
