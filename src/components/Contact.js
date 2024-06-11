// components/Contact.js
import React from "react";
import Layout from "./Layout";
import styled from "styled-components";

const Heading = styled.h1`
	font-size: 36px;
	margin-bottom: 20px;
`;

const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	padding: 10px;
	margin-bottom: 10px;
`;

const TextArea = styled.textarea`
	padding: 10px;
	margin-bottom: 10px;
`;

const Button = styled.button`
	padding: 10px 20px;
	background-color: #007bff;
	color: #fff;
	border: none;
	cursor: pointer;

	&:hover {
		background-color: #0056b3;
	}
`;

const Contact = () => {
	return (
		<Layout>
			<Heading>Contact Me</Heading>
			<ContactForm>
				<Input type="text" placeholder="Name" />
				<Input type="email" placeholder="Email" />
				<TextArea placeholder="Message" rows="5" />
				<Button>Send</Button>
			</ContactForm>
		</Layout>
	);
};

export default Contact;
