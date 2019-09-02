import React from 'react';
import logo from '../assets/laboy-logo.svg';

const Nav = () => (
  <nav>
      <div className="container-fluid">
        <div className="row middle-xs nav-wrapper">
          <div className="col-sm-4">
            <a href="/">
              <img className="nav-logo" src={logo} alt="laboy logo" />
            </a>
          </div>
          <div className="col-sm-6 col-sm-offset-2 end-sm">
            <a className="navbar-links">
              Projects
            </a>
            <a className="navbar-links">
              About
            </a>
            <a className="navbar-links">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
);

export default Nav;