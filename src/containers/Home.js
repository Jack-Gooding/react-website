import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import ShowoffBackground from "../components/ShowoffBackground";
import Header from "../components/Header2";
import { Link } from "react-router-dom";

import styles from "../css/Home.scss";
// import styles2 from '../css/Printing.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faMapMarkerAlt,
  faEnvelope,
  faGlobe,
  faShapes,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import thingiverseImg from "../images/thingiverse.png";

export default function Home(props) {
  // let [mobileNavExpand, setMobileNavExpand] = useState(false);

  return (
    <div className="">
      <Helmet>
        <title>Jack Gooding // Home</title>
        <meta
          name="description"
          content="Portfolio Website built using React.js"
        />
      </Helmet>
      <Header />
      <ShowoffBackground />

      <div className="intro">
        <div className="intro-text">
          <h1>Hi, I'm Jack</h1>
          <div className="intro-paragraph">
            <p>I like making things and solving problems.</p>
            <p>
              I have a BEng in Mechanical Engineering, and have developed a
              passion for programming.
            </p>
            <p>
              I'm multi-skilled, profficient at software and web development, 3D
              design, rapid prototyping, and any type of making.
            </p>
          </div>
        </div>
        <div className="social-links">
          <p>Connect</p>
          <div className="social-buttons">
            <ul>
              <li>
                <a href="https://github.com/Jack-Gooding">
                  <FontAwesomeIcon type="github" icon={faGithub} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/jackgooding39/">
                  <FontAwesomeIcon type="instagram" icon={faInstagram} />
                </a>
              </li>
              <li type="youtube">
                <a href="https://www.youtube.com/channel/UCqPZBdPr8lvG_b4jNSeKlfg">
                  <FontAwesomeIcon type="youtube" icon={faYoutube} />
                </a>
              </li>
              <li>
                <a href="https://www.thingiverse.com/jackgooding/designs">
                  <img src={thingiverseImg} />
                </a>
              </li>
              <li>
                <a href="mailto:jack-gooding-@outlook.com">
                  <FontAwesomeIcon type="email" icon={faEnvelope} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <svg width="0" height="0">
          <radialGradient id="rg" r="150%" cx="30%" cy="107%">
            <stop stopColor="#fdf497" offset="0" />
            <stop stopColor="#fdf497" offset="0.05" />
            <stop stopColor="#fd5949" offset="0.45" />
            <stop stopColor="#d6249f" offset="0.6" />
            <stop stopColor="#285AEB" offset="0.9" />
          </radialGradient>
        </svg>
      </div>
    </div>
  );
}
