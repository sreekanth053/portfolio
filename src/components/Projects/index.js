// Projects.js
import React, { useState } from 'react';
import ProjectForm from '../ProjectForm';
// import { HiOutlineExternalLink } from "react-icons/hi"
import './index.css'; // Import the CSS file for styling

const Projects = () => {
  const [projectList, setProjectList] = useState([]);

  const handleAddProject = (newProject) => {
    // Add the new project to the projectList
    setProjectList([...projectList, newProject]);
  };

  return (
    <div className="project-container">
      <h1 className="home-name left-padding">
        Add
        <span className="span-name"> Project</span>
      </h1>
      <ProjectForm onAddProject={handleAddProject} />

      {/* Display the added projects */}
      <h1 className="home-name left-padding" id="myProjects">
        My
        <span className="span-name"> Projects</span>
      </h1>
      {projectList.map((project, index) => (
        <>
        <div className="projects-container">
        <div key={index} className="project-card">
          
          <h3 className="project-name">{project.projectName}</h3>
          <a
        href={project.projectLink}
        target="_blank"
        rel="noreferrer"
        className="anchor-txt"
         >
        <p className="button">
          {project.projectLink}
        </p>
      </a>
          <p className="description">{project.description}</p>
        </div>
        <img src={project.imgUrl} alt={project.projectName} className="project-image" />
        </div>
        
        </>
      ))}
    </div>
  );
};

export default Projects;
