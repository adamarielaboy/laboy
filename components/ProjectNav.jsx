import React, { Component } from 'react';
import Link from 'next/link';

const ProjectNav = ({ projects }) => {
  let index = 0;

  // for(let i = 0; i < projects.length; i++) {
  //   if (projects[i].url === window.location.pathname) {
  //     index = i;
  //   }
  // }

  const projectIndexAmount = projects.length - 1;
  const nextIndex = index === projectIndexAmount ? 0 : index + 1;
  const previousIndex = index === 0 ? projectIndexAmount : index - 1;

  return (
    <div className="row project-navigation-wrapper">
      <div className="col-xs-12">
        { !isNaN(previousIndex) && (
          <Link>
            <a className="project-navigation-links previous-project" href={projects[previousIndex].url}>
              {"< Previous"}
            </a>
          </Link>
        ) }
        { !isNaN(nextIndex) && 
            (<Link>
              <a className="project-navigation-links next-project" href={projects[nextIndex].url}>
                {"Next >"}
              </a>
            </Link>) }
      </div>
    </div>
  )
}

export default ProjectNav;