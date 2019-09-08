import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ProjectNav = ({ projects }) => {
  const router = useRouter();
  let index = 0;

  if (!router.asPath.includes('/projects')) {
    return null;
  }
  
  for(let i = 0; i < projects.length; i++) {
    if (projects[i].url === router.asPath) {
      index = i;
    }
  }

  
  const projectIndexAmount = projects.length - 1;
  const nextIndex = index === projectIndexAmount ? 0 : index + 1;
  const previousIndex = index === 0 ? projectIndexAmount : index - 1;

  return (
    <div className="row project-navigation-wrapper">
      <div className="col-xs-12">
        { !isNaN(previousIndex) && (
          <Link href={projects[previousIndex].url}>
            <a className="project-navigation-links previous-project">
              {"< Previous"}
            </a>
          </Link>
        ) }
        { !isNaN(nextIndex) && 
            (<Link href={projects[nextIndex].url}>
              <a className="project-navigation-links next-project">
                {"Next >"}
              </a>
            </Link>) }
      </div>
    </div>
  )
}

export default ProjectNav;