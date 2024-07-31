import React from "react";
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
	justify-content: center;
	align-items: center;
	padding-top: 60px;
	margin: auto;

	@media (min-width: 768px) {
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100vw;
	}
`;

const ProfileImage = styled.img`
	width: 150px;
	height: 150px;
	// border-radius: 50%;
	margin-bottom: 20px;
	object-fit: cover;
	align-items: center;

	@media (min-width: 768px) {
		width: 210px;
		height: 210px;
		margin-right: 2em;
		margin-bottom: 0;
	}

	@media (min-width: 1024px) {
		width: 210px;
		height: 210px;
		margin-right: 2em;
	}
`;

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 5px;
	

	.info-item {
		display: flex;
		align-items: center;
		margin-bottom: 0.3em;
		font-size: 0.8em;

		.icon {
			color: #555;
			font-size: 1em;
			width: 1em;
			height: 1em;
	
		}
		
		span, a{
			padding: 0 10px;
		}
	}

	@media (min-width: 768px) {
		font-size: 1.2em;
		}
	}
`;

const About = () => {
	return (
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
					<span>방송통신대학교 컴퓨터과학과 재학중</span>
				</div>
				<div className="info-item">
					<FontAwesomeIcon icon={faEnvelope} className="icon" />
					<a href="mailto:jinsubox@gmail.com">jinsubox@gmail.com</a>
				</div>

				<div className="info-item">
					<FontAwesomeIcon icon={faGithub} className="icon" />
					<a
						href="https://github.com/jinsubox"
						target="_blank"
						rel="noopener noreferrer"
					>
						https://github.com/jinsubox
					</a>
				</div>
			</InfoContainer>
		</AboutContainer>
	);
};

export default About;
