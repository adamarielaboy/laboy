import React, { Fragment } from 'react';
import Nav from '../components/Nav';
import ProjectNav from '../components/ProjectNav';
import styles from '../styles/styles.css';

import mainContent from '../static/content/main.json';

const PageWrapper = ({ children }) => (
  <Fragment>
    <style dangerouslySetInnerHTML={{ __html: styles }} />
    <Nav projects={mainContent.nav.projects} logo={mainContent.nav.logo} />
    <ProjectNav projects={mainContent.nav.projects} />
    { children }
  </Fragment>
)

export default PageWrapper;