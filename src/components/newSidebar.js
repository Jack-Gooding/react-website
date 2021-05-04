import React from 'react';
import pPhoto from '../images/profile.jpg';
import '../css/newSidebar.scss';
import { Link } from 'react-router-dom';

export default class NewSidebar extends React.Component {

  render() {
    return (
      <div className="sidebar-window">
        <div className="sidebar">
          <img src={pPhoto} alt="Profile"/>
          <p className="name-badge">Jack Gooding</p>
          <ul>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/3DPrinting">3D Printing</Link></li>
            <li><Link to="/Tutorials">Tutorials</Link></li>
            <li><Link to="/about">About</Link></li>
            <br/>
            <li>
              <a href="/cv" target="_blank">Curriculum Vitae</a>
            </li>
          </ul>
        </div>
      </div>
    );
  };
};
