import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const StyledHeader = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #333;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	box-sizing: border-box;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		height: 60px;
		padding: 0 20px;
	}

	.logo {
		font-size: 24px;
		color: #fff;
		text-decoration: none;
		margin: 10px 0;

		@media (min-width: 1024px) {
			font-size: 36px;
		}
	}
`;
const Header = () => {
	return (
		<StyledHeader>
			<Link to="/" className="logo">
				박진수
			</Link>
			<Navbar />
		</StyledHeader>
	);
};

export default Header;
