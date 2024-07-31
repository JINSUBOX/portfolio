import React, { useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const MobileNavbarContainer = styled.nav`
	width: 100%;

	.menu-icon {
		display: none;
		font-size: 1.5em;
		cursor: pointer;
		color: var(--main-text-color);
		z-index: 100;
	}
	.menu {
		background-color: rgba(255, 255, 255, 0.5);
		flex-direction: column;
		width: 100vw;
		height: 100vh;
		display: none;
		position: fixed;
		z-index: 99;
		top: 60px;
		left: 60vw;

		ul {
			grid-row-gap: 20px;
			flex-direction: column;
			align-items: flex-start;
			display: flex;
			padding: 50px 20px;

			li {
				a {
					color: var(--main-text-color);
					text-decoration: none;
					text-transform: uppercase;

					&:hover {
						text-decoration: underline;
					}
				}
			}
			li:nth-child(3) {
				display: none;
			}
		}
	}

	@media ${(props) => props.theme.laptop} {
	}

	@media ${(props) => props.theme.mobile} {
		.menu-icon {
			display: block;
		}
		.menu {
			display: flex;
		}
	}
`;

const MobileNavbar = (sOpaque) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<MobileNavbarContainer>
			<FontAwesomeIcon
				$isOpen={isOpen}
				icon={isOpen ? faTimes : faBars}
				className="menu-icon"
				onClick={toggleMenu}
			/>
			<motion.div
				className="menu"
				initial={{ x: "100%" }}
				animate={{ x: isOpen ? 0 : "+100%" }}
				transition={{ duration: 0.3 }}
			>
				<ul>
					<li>
						<Link to="about" smooth={true} duration={500}>
							About
						</Link>
					</li>
					<li>
						<Link to="projects" smooth={true} duration={500}>
							Projects
						</Link>
					</li>
					<li>
						<Link to="contact" smooth={true} duration={500}>
							Contact
						</Link>
					</li>
				</ul>
			</motion.div>
		</MobileNavbarContainer>
	);
};

export default MobileNavbar;
