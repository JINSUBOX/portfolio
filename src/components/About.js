import React from "react";
import Layout from "./Layout";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faMapMarkerAlt,
	faUser,
	faBirthdayCake,
	faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import profileImage from "../assets/profile_image.png";

const AboutContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;

	@media (min-width: 768px) {
		flex-direction: row;
		align-items: flex-start;
		padding: 40px;
	}
`;

const ProfileImage = styled.img`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	margin-bottom: 20px;
	object-fit: cover;

	@media (min-width: 768px) {
		width: 300px;
		height: 300px;
		margin-right: 60px;
		margin-bottom: 0;
	}

	@media (min-width: 1024px) {
		width: 375px;
		height: 375px;
		margin-right: 75px;
	}
`;

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;

	.info-item {
		display: flex;
		align-items: center;
		margin-bottom: 15px;
		font-size: 24px;

		.icon {
			margin-right: 15px;
			color: #555;
			font-size: 27px;
		}
	}

	@media (min-width: 768px) {
		align-items: flex-start;
		text-align: left;

		.info-item {
			justify-content: flex-start;
			width: 100%;

			.icon {
				margin-right: 15px;
				color: #555;
				font-size: 27px;
			}
		}
	}
`;

const About = () => {
	return (
		<Layout>
			<AboutContainer>
				<ProfileImage src={profileImage} alt="Profile" />
				<InfoContainer>
					<div className="info-item">
						<FontAwesomeIcon icon={faUser} className="icon" />
						<span>박진수</span>
					</div>
					<div className="info-item">
						<FontAwesomeIcon icon={faBirthdayCake} className="icon" />
						<span>1995-04-04</span>
					</div>
					<div className="info-item">
						<FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
						<span>서울 광진구</span>
					</div>
					<div className="info-item">
						<FontAwesomeIcon icon={faGraduationCap} className="icon" />
						<span>안면고등학교 졸업</span>
					</div>
					<div className="info-item">
						<a href="mailto:jinsubox@gmail.com">
							<FontAwesomeIcon icon={faEnvelope} className="icon" />
							jinsubox@gmail.com
						</a>
					</div>

					<div className="info-item">
						<a
							href="https://github.com/jinsubox"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faGithub} className="icon" />
							https://github.com/jinsubox
						</a>
					</div>
				</InfoContainer>
			</AboutContainer>
		</Layout>
	);
};

export default About;
