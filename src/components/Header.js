import React from 'react';
import logo from "../images/JG_logo.png";

import { Link } from 'react-router-dom';


export default class Header extends React.Component {

  render() {
    return (
      <div className="header-bar">
        <div className="nav-bar">
          <ul>
            <li className="nav-link">
              <Link to="/projects"><p>Projects</p></Link>
            </li>
            <li className="nav-link">
              <Link to="/tutorials"><p>Tutorials</p></Link>
            </li>
          </ul>
          <Link to="/">
            <div  className="logo">
              <img src={logo} alt="JG Logo"/>
            </div>
          </Link>
          <ul>
            <li className="nav-link">
              <Link to="/3DPrinting"><p>3D Printing</p></Link>
            </li>
            <li className="nav-link">
              <Link to="/about"><p>About</p></Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };
};
