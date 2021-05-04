import React from 'react';
import profile from '../images/profile.jpg';

export default class Sidebar extends React.Component {

  render() {
    return (
      <>

  <div class="side-nav">
    <div class="profile-container">
      <img data-tilt="" data-tilt-perspective="1000" class="profile-picture" src={profile} alt="Profile" />
      <p class="profile-name">Jack Gooding</p>
    </div>
    <div class="side-nav-quick-links">
      <ul>
        <li><a href="index.html#!/projects">Projects</a></li>
        <li><a href="index.html#!/tutorials">Tutorials</a></li>
        <li><a href="index.html#!/about">About</a></li>
        <li><br/></li>
        <li><a href="components\curriculum_vitae.html">Curriculum Vitae</a></li>
      </ul>
    </div>
  </div>

      </>
    );
  };
};
