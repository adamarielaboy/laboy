import React, { Component } from 'react';

export default class ProjectNav extends Component {
  constructor() {
    super();
    this.state = {
      next: {},
      previous: {},
    }
  }

  UNSAFE_componentWillMount() {
    const { projects } = this.props;
    let index;

    for(let i = 0; i < projects.length; i++) {
      if (projects[i].url === window.location.pathname) {
        index = i;
      }
    }

    const projectAmount = projects.length - 1;
    const nextIndex = index === projectAmount ? 0 : index + 1;
    const previousIndex = index === 0 ? projectAmount : index - 1;

    this.setState({
      next: projects[nextIndex],
      previous: projects[previousIndex],
    });
  }

  render() {
    const { next, previous } = this.state;
    return (
      <div className="row project-navigation-wrapper">
        <div className="col-xs-12">
          { previous && previous.url && <a href={previous.url} className="project-navigation-links previous-project">{"< Previous"}</a> }
          { next && next.url && <a href={next.url} className="project-navigation-links next-project">{"Next >"}</a> }
        </div>
      </div>
    )
  }
}