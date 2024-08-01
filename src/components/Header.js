import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const StyledHeader = styled.header`
	width: 100vw;
	min-height: 60px;
	position: fixed;
	padding: 0 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${(props) =>
		props.$isOpaque ? "#C5C7C6" : "rgba(255, 255, 255, 0)"};
	transition: background 0.3s ease;
	z-index: 99;

	.logo {
		flex-basis: calc(100% / 4);
		font-size: 1.2em;
		color: #444;
		font-weight: bold;
		text-decoration: none;
		text-transform: uppercase;
		// overflow: hidden;
	}

	@media ${(props) => props.theme.laptop} {
	}

	@media ${(props) => props.theme.mobile} {
	}
`;
const Header = () => {
	const [isOpaque, setIsOpaque] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > window.innerHeight) {
			setIsOpaque(true);
		} else {
			setIsOpaque(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<StyledHeader $isOpaque={isOpaque}>
			<Link to="home" smooth={true} duration={500} className="logo">
				Pak's portfolio
			</Link>
			<div className="navbar-container">
				<DesktopNavbar />
				<MobileNavbar $isOpaque={isOpaque} />
			</div>
		</StyledHeader>
	);
};

export default Header;
