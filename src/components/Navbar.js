import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
	ul {
		list-style: none;
		display: flex;
		padding: 0;
		margin: 0;

		@media (max-width: 767px) {
			flex-direction: row;
		}
	}

	li {
		margin-left: 20px;

		a {
			color: #fff;
			text-decoration: none;
			display: flex;
			align-items: center;

			span {
				margin-right: 8px;
			}

			&:hover {
				text-decoration: underline;
			}

			&.active {
				text-decoration: underline;
			}
		}

		&.active a {
			color: #ff6347; /* Active link color */
		}

		@media (max-width: 767px) {
			margin-left: 10px;
			font-size: 14px;
		}
	}
`;

const Navbar = (props) => {
	return (
		<NavbarContainer>
			<ul>
				<li className={props.page === "about" ? "active" : ""}>
					<Link to="/about">
						<span>About</span>
						<i className="fas fa-user"></i>
					</Link>
				</li>
				<li className={props.page === "projects" ? "active" : ""}>
					<Link to="/projects">
						<span>Projects</span>
						<i className="fas fa-tasks"></i>
					</Link>
				</li>
				<li className={props.page === "contact" ? "active" : ""}>
					<Link to="/contact">
						<span>Contact</span>
						<i className="fas fa-book"></i>
					</Link>
				</li>
			</ul>
		</NavbarContainer>
	);
};

export default Navbar;
