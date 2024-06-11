import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
	background-color: #333;
	color: #fff;
	padding: 20px;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	text-align: center;
	z-index: 999;

	@media screen and (max-width: 1023px) {
		padding: 15px;
	}

	@media screen and (max-width: 767px) {
		padding: 10px;
	}
`;

const Footer = () => {
	return (
		<FooterContainer>
			<p>&copy; 2024 My Portfolio. All rights reserved.</p>
		</FooterContainer>
	);
};

export default Footer;
