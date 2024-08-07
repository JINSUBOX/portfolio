// components/Contact.js
import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
	padding-top: 60px;
	margin: 50px;
	width: 85%;
	margin: auto;
`;

const Heading = styled.h1`
	font-size: 36px;
	margin-bottom: 20px;
	color: #555;
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
	background-color: #555;
	color: #fff;
	border: none;
	cursor: pointer;

	&:hover {
		background-color: #999;
	}
`;

const Contact = () => {
	return (
		<ContactContainer>
			<Heading>Contact Me</Heading>
			<ContactForm>
				<Input type="text" placeholder="Name" />
				<Input type="email" placeholder="Email" />
				<TextArea placeholder="Message" rows="5" />
				<Button>Send</Button>
			</ContactForm>
		</ContactContainer>
	);
};

export default Contact;
