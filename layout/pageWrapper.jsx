import React, { Fragment, Component } from 'react';
import Nav from '../components/Nav';
import ProjectNav from '../components/ProjectNav';

import styles from 'styles/index.css'

import mainContent from 'static/content/main.json';

export default class PageWrapper extends Component {
  constructor() {
    super();
    this.resize = this.resize.bind(this);
    this.state = {
      isMobile: false,
    }
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
    const { isMobile } = this.state;
    const { children } = this.props;

    return (
      <Fragment>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" />
        <style dangerouslySetInnerHTML={{ __html: styles }} />    
        <Nav projects={mainContent.nav.projects} logo={mainContent.nav.logo} isMobile={isMobile} />
        <ProjectNav projects={mainContent.nav.projects} isMobile={isMobile} />
        { children }
      </Fragment>
    )
  }
}