import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Odyssey from './pages/Odyssey';
import Enroute from './pages/Enroute';

import Nav from './components/Nav';
import ProjectNav from './components/ProjectNav';

import mainContent from './content/main.json';

export default class App extends Component {
    render() {
      return (
        <Fragment>
          <Router>
            <Nav projects={mainContent.nav.projects} logo={mainContent.nav.logo} />
            <ProjectNav projects={mainContent.nav.projects} />
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/projects/odyssey" component={Odyssey}/>
                <Route path="/projects/enroute" component={Enroute}/>
            </Switch>
          </Router>
        </Fragment>
      )
    }
}