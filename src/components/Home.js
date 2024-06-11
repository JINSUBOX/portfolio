// components/Home.js
import React from "react";
import styled from "styled-components";
import Layout from "./Layout";

const HomeContainer = styled.div`
	padding: 20px;
`;

const Home = () => {
	return (
		<Layout>
			<HomeContainer></HomeContainer>
		</Layout>
	);
};

export default Home;
