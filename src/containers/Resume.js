import React, { useEffect, useState } from "react";
import styles from "../css/Resume.scss";
import Header from "../components/Header2";
import { Helmet } from "react-helmet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faMapMarkerAlt,
  faEnvelope,
  faGlobe,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { Container, Row, Col } from "reactstrap";

let printCV = () => {
  window.print();
};

export default function CV(props) {
  const [scale, setScale] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [negativeMarginY, setNegativeMarginY] = useState(0);

  useEffect(() => {
    let handleResize = () => {
      console.log(window.innerWidth);
      console.log(window.devicePixelRatio);

      // let minSize = device.innerWidth 96px  25.4mm
      let height = 1122.52 + 20;
      let width = 793.8;
      let padding = 20;

      if (window.innerWidth <= width + padding * 2) {
        let ratio = window.innerWidth / (width + padding * 2);
        setScale(ratio);
        // setTranslateX(-padding + width * (1 - ratio));
        // setTranslateY(-padding + (height - height * ratio) / 2);
        setNegativeMarginY((height * (1 - ratio)) / 2);
      } else {
        setScale(1);
        // setTranslateX(0);
        // setTranslateY(0);
        setNegativeMarginY(0);
      }
      // setDimensions({
      //   height: window.innerHeight,
      //   width: window.innerWidth,
      // });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <Header />
      <Helmet>
        <title>Jack Gooding // Resume</title>
        <meta name="description" content="Jack Gooding // CV" />
      </Helmet>
      <div className="cv-page-background">
        <div className="page-container">
          <div
            className="page"
            style={{
              transform: `scale(${scale})`,
              margin: `calc(4rem - ${negativeMarginY}px) auto -${negativeMarginY}px auto`,
            }}
          >
            <Sidebar />
            <div className="main">
              <div className="download">
                <p className="not-print">
                  This document is printable.{" "}
                  <button className="unstyle" onClick={() => window.print()}>
                    Print resume
                  </button>{" "}
                  or <a href="/Jack%20Gooding%20-%20CV.pdf">Download PDF.</a>
                </p>
                <p className="print-only">
                  To view the most up to date version of this document, visit{" "}
                  <a href="http://www.jack-gooding.com/curriculum_vitae_tech">
                    Jack-Gooding.com.
                  </a>
                </p>
              </div>
              <section className="summary">
                <p className="section-content">
                  I'm a technology enthusiast, very interested in making things
                  both physical and digital. I enjoy a challenge and love
                  solving problems. I've always been very interested in
                  computers and the surrounding technology and am very up to
                  date with news, updates and releases. I have experience
                  developing software and extensive experience providing
                  software support.
                </p>
              </section>
              <section>
                <h2 className="section-title">Skills</h2>
                <table className="section-table smaller">
                  <tr>
                    <td>Web:</td>
                    <td>JavaScript, HTML, CSS, SASS, JQuery, Angular</td>
                  </tr>
                  <tr>
                    <td>Server:</td>
                    <td>Node.js, React, Electron, AWS, SQL, Python</td>
                  </tr>
                  <tr>
                    <td>Rapid Prototyping:</td>
                    <td>
                      CAD (Solidworks, Onshape), 3D Printing, Laser Cutting,
                      Arduino
                    </td>
                  </tr>
                  <tr>
                    <td>Additional Experience:</td>
                    <td>
                      Customer Service, Escalation Support, Equipment
                      Installation
                    </td>
                  </tr>
                </table>
              </section>
              <section>
                <h2 className="section-title project-container">Projects</h2>
                <div>
                  <h4 className="section-sub-title">
                    <a href="#">
                      Home Automation
                      <span className="faint small"> - Personal</span>
                      <FontAwesomeIcon
                        className="not-print faint"
                        icon={faExternalLinkAlt}
                      />
                    </a>
                  </h4>
                  <p className="section-sub-content">
                    An ongoing endeavour, spanning many different microservices
                    and devices with the goal of contolling all the IoT devices
                    in my home through simple interfaces. The main structure
                    consists of an MQTT broker hosted on an AWS EC2 instance
                    with a controlling server running locally on a Raspberry Pi.
                    The local server handles many local devices, some being
                    commercial products like smart bulbs, plugs and sensors,
                    with others being MQTT devices I have built, such as an{" "}
                    <a href="https://jack-gooding.com/projects/keypad">
                      MQTT keypad
                    </a>
                    , various lights, sensors, and a set of{" "}
                    <a href="https://www.youtube.com/watch?v=n9Rm_RFn6rI">
                      motorised window blinds
                    </a>
                    .
                  </p>
                </div>
                <div>
                  <h4 className="section-sub-title">
                    <a href="#">
                      Data Exporter
                      <span className="faint small"> - Webrecruit</span>
                      <FontAwesomeIcon
                        className="not-print faint"
                        icon={faExternalLinkAlt}
                      />
                    </a>
                  </h4>
                  <p className="section-sub-content">
                    At Webrecruit, clients often request their successful
                    applicant's data exported in specific formats which they can
                    then import into their HR management software. One of our
                    larger clients requested we build a recurring export,
                    containing all recently successful candidates, delivered
                    into an SFTP server.
                  </p>
                </div>
                <div>
                  <h4 className="section-sub-title">
                    <a href="#">
                      Portfolio Website
                      <span className="faint small"> - Personal</span>
                      <FontAwesomeIcon
                        className="not-print faint"
                        icon={faExternalLinkAlt}
                      />
                    </a>
                  </h4>
                  <p className="section-sub-content">
                    As a test of my abilities, I put together a static personal
                    website with multiple sections, routed through Angular. This
                    page is hosted on a custom domain at jack-gooding.com, and
                    has sections for my current projects and interests. There
                    are also several subdomains attached which are linked to
                    various servers I have between AWS and local devices. This
                    CV is written using HTML and hosted here.
                  </p>
                </div>
              </section>

              <footer style={{ textAlign: "center" }}>
                <i>Updated: April 2021</i>
                <div className="pageNum">1/2</div>
              </footer>
            </div>
          </div>
        </div>
        <div className="page-container">
          <div
            className="page"
            style={{
              transform: `scale(${scale})`,
              margin: `calc(4rem - ${negativeMarginY}px) auto calc(2rem - ${negativeMarginY}px) auto`,
            }}
          >
            <Sidebar />
            <div className="main">
              <section>
                <h2 className="section-title">Employment</h2>
                <div className="section-block">
                  <h4 className="section-date">2019 - present</h4>
                  <h4 className="section-sub-title">
                    Software Support Executive
                    <span className="faint"> - Webrecruit</span>
                  </h4>
                  <div>
                    <ul classname="smaller">
                      <li>
                        Liase directly with clients, handling bug reports,
                        diagnosing faults, providing training.
                      </li>
                      <li>
                        Manage IT assets, ensuring all staff have adequate
                        tools. Handle repairs, upgrades or
                      </li>
                      <li>
                        Maintain business critical IT infrastruture, managing
                        network routers, switches and VOIP systems.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="section-block">
                  <h4 className="section-date">2016 - 2018</h4>
                  <h4 className="section-sub-title">
                    Software Support Agent
                    <span className="faint"> - John Lewis</span>
                  </h4>
                  <p className="section-sub-content">
                    In this role, my main responsibility was to provide advanced
                    specialist support for colleagues in the lower tiers of
                    customer support. This support is primarily troubleshooting
                    issues customers have faced with their purchases, whether
                    hardware or software related. I am required to constantly
                    use my own in-depth knowledge of the main operating systems
                    and popular devices, as well as learning and researching new
                    information and techniques rapidly, while also handling
                    either one of my colleagues or a customer. In addition to
                    this, I step up to fill spaces in all other facets of the
                    business, providing cover wherever needed, including
                    managerial positions, direct customer support and staff
                    training.
                  </p>
                </div>
              </section>
              <section>
                <h2 className="section-title">Education</h2>
                <div className="section-block">
                  <h4 className="section-date">2012-2016</h4>
                  <h4 className="section-sub-title">University of Plymouth</h4>
                  <div className="section-sub-content">
                    <h6>
                      BEng Mechanical Engineering
                      <span className="faint">
                        {" "}
                        - Lower Second Class Honours
                      </span>
                    </h6>
                    <table className="section-table smaller faint">
                      <tr>
                        <td>Engineering Drawing, CAD, and Design</td>
                        <td>69%</td>
                      </tr>
                      <tr>
                        <td>Introduction to Thermo-Fluids</td>
                        <td>64%</td>
                      </tr>
                      <tr>
                        <td>Integrated System Design</td>
                        <td>61%</td>
                      </tr>
                      <tr>
                        <td>Engineering Mathematics</td>
                        <td>61%</td>
                      </tr>
                      <tr>
                        <td>Business Dynamics</td>
                        <td>59%</td>
                      </tr>
                      <tr>
                        <td>Mechanics</td>
                        <td>59%</td>
                      </tr>
                    </table>
                    <p>
                      As part of my Third Year at Plymouth University, I
                      completed a dissertation on efficient energy generation in
                      rural areas, which focused on a small village in Cameroon,
                      West Africa, with a weak and unreliable power grid. I
                      researched the area, determined which method of energy
                      generation was most suitable, selecting wind turbines as
                      the most practical and then tested several designs to
                      determine the most efficient blade type, whilst minimising
                      the necessary materials and cost of the solution.
                    </p>
                  </div>
                </div>
                <div className="section-block">
                  <h4 className="section-date">2006-2012</h4>
                  <h4 className="section-sub-title">Tavistock College</h4>
                  <div className="section-sub-content">
                    <h6>A-Levels</h6>
                    <p className="section-sub-sub-content smaller">
                      A* - Electronics (100%), B - Maths, B - Physics
                    </p>
                    <h6>GCSEs</h6>
                    <p className="section-sub-sub-content smaller">
                      11 GCSEs including Electronics, Maths, Physics, Chemistry,
                      Biology and Graphic Design
                    </p>
                  </div>
                </div>
              </section>
              <footer style={{ textAlign: "center" }}>
                <i>Updated: April 2021</i>
                <div className="pageNum">2/2</div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Sidebar(props) {
  return (
    <div className="sidebar">
      <h1 className="name">
        Jack <span className="indent">Gooding</span>
      </h1>
      <Hr />

      <div className="contact">
        <h2 className="section-title">Contact</h2>
        <div>
          <span className="icon">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </span>
          <span>Pinhoe, Exeter, EX4</span>
        </div>
        <div>
          <span className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <a href="mailto:j-gooding-@outlook.com ">J-Gooding-@outlook.com</a>
        </div>
        <div>
          <span className="icon">
            <FontAwesomeIcon icon={faGlobe} />
          </span>
          <a href="https://www.jack-gooding.com">jack-gooding.com</a>
        </div>
        <div>
          <span className="icon">
            <FontAwesomeIcon icon={faGithub} />
          </span>
          <a href="https://www.github.com/jack-gooding" target="_blank">
            github.com/jack-gooding
          </a>
        </div>
      </div>
      <Hr />
      <div>
        <h2 className="section-title">Key Skills</h2>
        <SkillBars />
      </div>
      <Hr />

      <div className="attributes">
        <h2 className="section-title">Strengths</h2>
        <ul>
          <li>Logical</li>
          <li>Quick Learner</li>
          <li>Enthusiatic</li>
          <li>Adaptable</li>
          <li>Professional</li>
          <li>Customer Service</li>
        </ul>
      </div>
    </div>
  );
}

let skills = [
  {
    name: "JavaScript",
    level: 0.9,
  },
  {
    name: "ReactJS",
    level: 0.8,
  },
  {
    name: "SQL",
    level: 0.74,
  },
  {
    name: "Python",
    level: 0.7,
  },
];

function SkillBars(props) {
  return (
    <div className="skill-bar-container">
      <table>{renderSkillbars(skills)}</table>
    </div>
  );
}

let renderSkillbars = (skills) => {
  return skills.map((skill, index) => (
    <tr>
      <td className="skill-name">{skill.name}</td>
      <td>
        <div
          className="skill-bar left"
          style={{ width: `${skill.level * 100}%` }}
        />
        <div
          className="skill-bar right"
          style={{ width: `${100 - skill.level * 100}%` }}
        />
      </td>
    </tr>
  ));
};

let Hr = () => {
  return (
    <div className="horizontal-line">
      <svg>
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 15 10"
            refX="7"
            refY="5"
            markerHeight="7"
            markerWidth="6"
            markerUnits="strokeWidth"
            orient="auto-start-reverse"
          >
            <path d="M 0 5 L 5 0 L 15 5 L 5 10 z" />
          </marker>
        </defs>

        <line
          x1="5%"
          y1="50%"
          x2="95%"
          y2="50%"
          strokeWidth="1px"
          marker-start="url(#arrow)"
          marker-end="url(#arrow)"
        />
      </svg>
    </div>
  );
};
