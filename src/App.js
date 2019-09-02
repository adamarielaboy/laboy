import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Odyssey from './pages/Odyssey';
import Enroute from './pages/Enroute';

import Nav from './components/Nav';
import ProjectNav from './components/ProjectNav';

const PROJECTS = [
  {
    name: "Odyssey",
    url: "/odyssey"
  },
  {
    name: "Main",
    url: "/"
  },
  {
    name: "Enroute",
    url: "/enroute"
  }
]

export default class App extends Component {
    render() {
      return (
        <Fragment>
          <Nav />
          <ProjectNav projects={PROJECTS} />
          <Router>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/odyssey" component={Odyssey}/>
                <Route path="/enroute" component={Enroute}/>
            </Switch>
          </Router>
        </Fragment>
      )
    }
}