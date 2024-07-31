import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.div`
	padding-top: 60px;
	text-align: left;
	width: 85%;
	margin: auto;
`;

const Heading = styled.h1`
	font-size: 36px;
	margin: 20px;
	text-transform: uppercase;
`;

const ProjectsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 20px;

	@media ${(props) => props.theme.laptop} {
	}

	@media ${(props) => props.theme.mobile} {
		grid-template-columns: 1fr;
	}
`;

const ProjectCard = styled.div`
	background-color: #f9f9f9;
	border: 1px solid #e0e0e0;
	border-radius: 5px;
	padding: 20px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s, box-shadow 0.3s;
	min-height: 320px;

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	}
`;

const ProjectTitle = styled.h2`
	font-size: 24px;
	margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
	font-size: 16px;
	color: #666;
`;

const Projects = () => {
	return (
		<ProjectsContainer>
			<Heading>Projects</Heading>
			<ProjectsGrid>
				<ProjectCard>
					<ProjectTitle>Project 1</ProjectTitle>
					<ProjectDescription>Description of project 1.</ProjectDescription>
				</ProjectCard>
				<ProjectCard>
					<ProjectTitle>Project 2</ProjectTitle>
					<ProjectDescription>Description of project 2.</ProjectDescription>
				</ProjectCard>
				<ProjectCard>
					<ProjectTitle>Project 3</ProjectTitle>
					<ProjectDescription>Description of project 3.</ProjectDescription>
				</ProjectCard>
				<ProjectCard>
					<ProjectTitle>Project 4</ProjectTitle>
					<ProjectDescription>Description of project 4.</ProjectDescription>
				</ProjectCard>
			</ProjectsGrid>
		</ProjectsContainer>
	);
};

export default Projects;
