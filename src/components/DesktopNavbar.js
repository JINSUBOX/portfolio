import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const DesktopNavbarContainer = styled.nav`
	width: 50vw;

	ul {
		display: flex;
		justify-content: space-between;
		list-style: none;
	}

	li {
		a {
			color: var(--main-text-color);
			text-decoration: none;
			text-transform: uppercase;

			span {
				font-size: 1em;
			}

			&:hover {
				text-decoration: underline;
			}
		}
	}
	li:nth-child(3) {
		display: none;
	}

	@media ${(props) => props.theme.laptop} {
	}

	@media ${(props) => props.theme.mobile} {
		display: none;
	}
`;

const DesktopNavbar = ({ isOpaque }) => {
	return (
		<DesktopNavbarContainer $isOpaque={isOpaque}>
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
		</DesktopNavbarContainer>
	);
};

export default DesktopNavbar;
