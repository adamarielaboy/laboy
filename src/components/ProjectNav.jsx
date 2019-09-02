import React from 'react';

const ProjectNav = () => (
  <div className="row project-navigation-wrapper">
      <div className="col-xs-12">
        <a href="/" className="project-navigation-links previous-project">{"< Previous"}</a>
        <a href="/" className="project-navigation-links next-project">{"Next >"}</a>
      </div>
    </div>
);

export default ProjectNav;
