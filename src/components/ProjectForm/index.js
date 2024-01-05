// ProjectForm.js
import React, { useState } from 'react';
import "./index.css"

const ProjectForm = ({ onAddProject }) => {
  const [projectDetails, setProjectDetails] = useState({
    projectName: '',
    projectLink: '',
    description: '',
    imgUrl:'',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectDetails({
      ...projectDetails,
      [name]: value,
    });
  };

  const handleAddProject = () => {
    onAddProject(projectDetails);
    // Clear the form after adding the project
    setProjectDetails({
      projectName: '',
      projectLink: '',
      description: '',
      imgUrl:'',
    });
  };

  return (
    <>
    <div className="project-form">
    <label>
      Project Name:
      <input
        type="text"
        name="projectName"
        value={projectDetails.projectName}
        onChange={handleInputChange}
      />
    </label>
    <label>
      Project Link:
      <input
        type="text"
        name="projectLink"
        value={projectDetails.projectLink}
        onChange={handleInputChange}
      />
    </label>
    <label>
      Description:
      <textarea
        name="description"
        value={projectDetails.description}
        onChange={handleInputChange}
      />
    </label>
    <label>
      Img URL:
      <input
        type="text"
        name="imgUrl"
        value={projectDetails.imgUrl}
        onChange={handleInputChange}
      />
    </label>
    <div className="add-project-container">
    <button className="add-project" onClick={handleAddProject}>Add</button>
    </div>
    </div>
    </>   
  );
};

export default ProjectForm;
