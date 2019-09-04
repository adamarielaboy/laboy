import React, { Fragment } from 'react';
import Nav from '../components/Nav';
import ProjectNav from '../components/ProjectNav';

import styles from 'styles/index.css'

import mainContent from 'static/content/main.json';

const PageWrapper = ({ children }) => (
  <Fragment>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" />
    <style dangerouslySetInnerHTML={{ __html: styles }} />    
    <Nav projects={mainContent.nav.projects} logo={mainContent.nav.logo} />
    <ProjectNav projects={mainContent.nav.projects} />
    { children }
  </Fragment>
)

export default PageWrapper;