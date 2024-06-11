import React from "react";
import Layout from "./Layout";
import styled from "styled-components";

const Heading = styled.h1`
	font-size: 36px;
	margin-bottom: 20px;
`;

const ProjectsList = styled.ul`
	list-style: none;
	padding: 0;
`;

const ProjectsItem = styled.li`
	font-size: 18px;
	margin-bottom: 10px;
`;

const Projects = () => {
	return (
		<Layout>
			<Heading>Projects</Heading>
			<ProjectsList>
				<ProjectsItem>Project 1</ProjectsItem>
				<ProjectsItem>Project 2</ProjectsItem>
				{/* Add more projects as needed */}
			</ProjectsList>
		</Layout>
	);
};

export default Projects;
