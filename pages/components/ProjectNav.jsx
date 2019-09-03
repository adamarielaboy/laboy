import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

const ProjectNav = ({ projects }) => {
  let index;

  for(let i = 0; i < projects.length; i++) {
    if (projects[i].url === window.location.pathname) {
      index = i;
    }
  }

  const projectIndexAmount = projects.length - 1;
  const nextIndex = index === projectIndexAmount ? 0 : index + 1;
  const previousIndex = index === 0 ? projectIndexAmount : index - 1;

  return (
    <div className="row project-navigation-wrapper">
      <div className="col-xs-12">
        { !isNaN(previousIndex) && <Link to={projects[previousIndex].url} className="project-navigation-links previous-project">{"< Previous"}</Link> }
        { !isNaN(nextIndex) && <Link to={projects[nextIndex].url} className="project-navigation-links next-project">{"Next >"}</Link> }
      </div>
    </div>
  )
}

export default withRouter(ProjectNav);