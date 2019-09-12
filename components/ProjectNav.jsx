import React from 'react';
import classNames from 'classnames'; 
import Link from 'next/link';
import { withRouter } from 'next/router';

class ProjectNav extends React.Component {
  SCROLL_TIMEOUT = null;

  constructor() {
    super();

    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      previousIndex: 0,
      nextIndex: 0,
      isScrolling: false
    }
  }

  componentDidMount() {
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

    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (!this.state.isScrolling && window.scrollY !== 0) {
      this.setState({
        isScrolling: true
      });
    }


    if (this.SCROLL_TIMEOUT) {
      clearTimeout(this.SCROLL_TIMEOUT);
    }

    this.SCROLL_TIMEOUT = window.setTimeout(() => {
      this.setState({
        isScrolling: false
      })
    }, 2000)
  }

  componentWillUnmount() {
    clearTimeout(this.SCROLL_TIMEOUT);
    this.SCROLL_TIMEOUT = null;
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { previousIndex, nextIndex, isScrolling } = this.state;
    const { projects, router, isMobile } = this.props;

    if (!router.asPath.includes('/projects')) {
      return null;
    }

    return (
      <div className="row project-navigation-wrapper">
        <div className="col-xs-12">
          { !isNaN(previousIndex) && (
            <Link href={projects[previousIndex].url}>
              <a className={classNames("project-navigation-links previous-project", {
                "hide": isScrolling
              })}>
                {`<${isMobile ? "" : " Previous"}`}
              </a>
            </Link>
          ) }
          { !isNaN(nextIndex) && 
              (<Link href={projects[nextIndex].url}>
                <a className={classNames("project-navigation-links next-project", {
                  "hide": isScrolling
                })}>
                  {`${isMobile ? "" : "Next "}>`}
                </a>
              </Link>) }
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectNav);