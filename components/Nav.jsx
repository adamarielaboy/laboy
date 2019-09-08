import React, { Component } from 'react';
import Link from 'next/link';

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
            <div className="col-sm-4 col-xs-4">
              <Link href="/">
                <a>
                  <img className="nav-logo" src={logo} alt="laboy logo" />
                </a>
              </Link>
            </div>
            <div className="col-sm-6 col-sm-offset-2 end-sm col-xs-8">
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
                                <Link href={project.url}>
                                  <a>
                                    {project.name}
                                  </a>
                                </Link>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    )
                  }
                </li>
                <li>
                  <Link href="/">
                    <a className="navbar-links">
                      About
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="navbar-links">
                      Contact
                    </a>
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