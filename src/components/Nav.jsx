import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  constructor() {
    super();

    this.state = {
      projectsHover: false,
    }
  }
  render() {
    const { projectsHover } = this.state;
    const { projects, logo } = this.props;

    return (
      <nav>
        <div className="container-fluid">
          <div className="row middle-xs nav-wrapper">
            <div className="col-sm-4">
              <Link to="/">
                <img className="nav-logo" src={logo} alt="laboy logo" />
              </Link>
            </div>
            <div className="col-sm-6 col-sm-offset-2 end-sm">
              <ul style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center"
              }}>
                <li
                  onMouseEnter={() => {
                    this.setState({
                      projectsHover: true
                    });
                  }}
                  onMouseLeave={() => {
                    this.setState({
                      projectsHover: false
                    });
                  }}
                >
                  <span
                    className="navbar-links"
                  >
                    Projects
                  </span>
                  {
                    projectsHover && (
                      <div style={{
                        position: "relative"
                      }}>
                          <ul 
                            className="navbar-links"
                            style={{
                              position: "absolute",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              flexWrap: "wrap"
                            }}
                          >
                          {
                            projects.map(project => (
                              <li key={project.name}>
                                <Link to={project.url}>{project.name}</Link>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    )
                  }
                </li>
                <li>
                  <Link to="/" className="navbar-links">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/" className="navbar-links">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );  
  }  
}