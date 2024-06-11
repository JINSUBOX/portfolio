import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const LayoutContainer = styled.div`
	padding: 80px 20px 20px; /* Adjust padding to accommodate Navbar */
`;

const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			<LayoutContainer>{children}</LayoutContainer>
			<Footer />
		</div>
	);
};

export default Layout;
