// components/Home.js
import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/portfolio_background.png";

const HomeContainer = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: url(${backgroundImage}) center center no-repeat;
	background-size: cover;
	z-index: -1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: #555;
	width: 100vw;
	height: 100vh;
`;

const Title = styled.h2`
	margin: 0;
	padding: 0;

	span:nth-child(3) {
		font-weight: bold;
		margin-top: 0.3em;
	}
`;

const MainTitleText = styled.span`
	display: block;
	line-height: 1;
	font-weight: normal;
	text-transform: uppercase;

	@media (min-width: 300px) {
		font-size: 1.5em;
	}

	@media (min-width: 768px) {
		font-size: 1.8em;
	}

	@media (min-width: 1024px) {
		font-size: 2.25em;
	}
`;

const Home = () => {
	return (
		<HomeContainer>
			<Title>
				<MainTitleText>Back_end</MainTitleText>
				<MainTitleText>developer</MainTitleText>
				<MainTitleText id="name">jinsu Pak</MainTitleText>
			</Title>
		</HomeContainer>
	);
};

export default Home;
