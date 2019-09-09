import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

class ProjectNav extends React.Component {
  constructor() {
    super();
    this.resize = this.resize.bind(this);

    this.state = {
      previousIndex: 0,
      nextIndex: 0,
      isMobile: false,
    }
  }

  componentWillMount() {
    const { projects, router } = this.props;
    let index = 0;
    
    for(let i = 0; i < projects.length; i++) {
      if (projects[i].url === router.asPath) {
        index = i;
      }
    }
    
    const projectIndexAmount = projects.length - 1;
    const nextIndex = index === projectIndexAmount ? 0 : index + 1;
    const previousIndex = index === 0 ? projectIndexAmount : index - 1;

    this.setState({
      nextIndex,
      previousIndex,
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);

    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize() {
    const { isMobile } = this.state;
    
    if (window.innerWidth < 767 && !isMobile) {
      this.setState({
        isMobile: true
      });
    }

    if (window.innerWidth >= 767 && isMobile) {
      this.setState({
        isMobile: false,
      });
    }
  }

  render() {
    const { previousIndex, nextIndex, isMobile } = this.state;
    const { projects, router } = this.props;

    if (!router.asPath.includes('/projects')) {
      return null;
    }

    return (
      <div className="row project-navigation-wrapper">
        <div className="col-xs-12">
          { !isNaN(previousIndex) && (
            <Link href={projects[previousIndex].url}>
              <a className="project-navigation-links previous-project">
                {`<${isMobile ? "" : " Previous"}`}
              </a>
            </Link>
          ) }
          { !isNaN(nextIndex) && 
              (<Link href={projects[nextIndex].url}>
                <a className="project-navigation-links next-project">
                  {`${isMobile ? "" : "Next "}>`}
                </a>
              </Link>) }
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectNav);