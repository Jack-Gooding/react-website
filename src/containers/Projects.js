import React from "react";
import { Helmet } from "react-helmet";

import todoImg from "../images/todo_logo.png";
import urlImg from "../images/projects/URL-shortener/thumb.png";
import expImg from "../images/life.bmp";
import mqttImg from "../images/mqtticon-large.png";
import keypadImg from "../images/projects/keypad1.jpg";
import automationImg from "../images/favicon.ico";
import heatmapImg from "../images/projects/click-tracker/colourmap-min.png";
import facebookImg from "../images/projects/facebook-digest/james-o.svg";

import thingiverseImg from "../images/thingiverse.png";
// import faYoutube from "../images/youtube.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";

const youtubeUrl = "https://www.youtube.com/channel/UCqPZBdPr8lvG_b4jNSeKlfg";
const githubUrl = "https://github.com/Jack-Gooding";
const thingiverseUrl = "https://www.thingiverse.com/JackGooding/about";

export default class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <Helmet>
          <title>Jack Gooding // Projects</title>
          <meta
            name="description"
            content="Portfolio Website built using React.js"
          />
        </Helmet>
        <div className="current-projects">
          <h2>Projects</h2>
          <Project
            projectUrl="projects/keypad"
            externalUrl="projects/keypad"
            img={keypadImg}
            title="MQTT Mechanical Keypad"
            description="I designed a keypad using Cherry MX switches to interface with my MQTT server. It has 9 keys with unlimited mappable functions, sent over wifi."
            tags={["Arduino", "MQTT", "3D Printing"]}
            links={[
              {
                url: "https://broker.jack-gooding.com",
                img: faExternalLinkAlt,
              },
              { url: "link1", img: faYoutube },
              { url: "link1", img: faGithub },
            ]}
          />
          <Project
            projectUrl={"https://experiments.jack-gooding.com"}
            externalUrl="https://experiments.jack-gooding.com"
            img={expImg}
            title="Experiments"
            description="This page is mainly a repository for any small projects i've made with no real function or end-goal other than my own enjoyment, mainly these experiments are made using a HTML5 canvas element and P5.js.
The experiments i'm most pleased with are the Trapped Knight, Tearing and Mobius Rotation."
            tags={["P5.js", "AWS"]}
            links={[
              {
                url: "https://experiments.jack-gooding.com",
                img: faExternalLinkAlt,
              },
              { url: "link1", img: faGithub },
            ]}
          />
          <Project
            projectUrl="projects/homeautomation"
            externalUrl="https://broker.jack-gooding.com"
            img={automationImg}
            title="Home Automation Server"
            description={`A Node.js server for personal use, to control as much of my home as posible.
Will be controlling several IoT Devices, both commercial and made by myself.
Made using React.js.
This server controls: Philips Hue Lights, TP-Link Smart Plugs, several Arduino devices attached to: WS2812b RGB LED strips, Temperature/Humidity monitors, Stepper motors, along with several commercial products.
It's currently hosted and visible on an AWS EC2 instance, however it is also currently running on a Raspberry Pi at my home.

This project has been merged with my MQTT broker to replace many of the API calls within my home with MQTT messages. This greatly helps with maintenance and extensibility.
                `}
            tags={["Node.js", "MQTT", "Express", "React", "Python", "AWS"]}
            links={[
              {
                url: "https://broker.jack-gooding.com",
                img: faExternalLinkAlt,
              },
              { url: "link1", img: faYoutube },
              { url: "link1", img: faGithub },
            ]}
          />
          <Project
            projectUrl="projects/mqtt"
            externalUrl="https://broker.jack-gooding.com"
            img={mqttImg}
            title="MQTT Broker"
            description="An MQTT broker hosted on an AWS EC2 instance.
Designed to support my MQTT Home Automation Server which controls several commercial HA devices and a handful of custom designed/built MQTT devices."
            tags={["MQTT", "AWS"]}
            links={[{ url: "link1", img: faGithub }]}
          />
        </div>
        <div className="past-projects">
          <h2>Past Projects</h2>

          <Project
            projectUrl="projects/click-tracker"
            externalUrl="projects/click-tracker"
            img={heatmapImg}
            title="Click Tracker"
            description={`I was interested in tracking where I clicked most during my work at Webrecruit, so created a basic click tracker using robot.js and stored the results in an SQLite database.
The database is exported manually to several images.`}
            tags={["SQL", "Node.js"]}
            links={[{ url: "link1", img: faGithub }]}
          />
          <Project
            projectUrl="projects/facebookdigest"
            externalUrl="projects/facebookdigest"
            img={facebookImg}
            title="Facebook Data Digest"
            description={`For some of my friendships and relationships, the online aspect has been almost completely through Facebook.
After discovering their excellent JSON data export tools, I was interested in representing these interactions in some intuitive way.
I used Node.js to parse the JSON structure of these files into a usable format and hosted them using Express, then used Processing to visualise them.`}
            tags={["Node.js", "Processing", "Express"]}
            links={[{ url: "link1", img: faGithub }]}
          />
          <Project
            projectUrl="projects/todo"
            externalUrl="https://todo.jack-gooding.com"
            img={todoImg}
            title="Todo App"
            description={`This To Do app is a Node.js experiment to increase my knowledge of SQL/SQLite.
It's built using Node.js and React, with several features planned, primarily multiple users with some form of authentication and notifications when a task is due.
It, like all my other viewable projects are hosted on an AWS EC2 instance, and accessible as a subdomain.`}
            links={[
              { url: "https://todo.jack-gooding.com", img: faExternalLinkAlt },
              { url: githubUrl, img: faGithub },
            ]}
          />
          <Project
            projectUrl="url"
            externalUrl="url"
            img={urlImg}
            title="URL Shortener"
            description={`This URL shortener is built as an alternative to Bit.ly or other URL shortener services.
URL clicks are tracked, and can be easily routed through the hosting domain.`}
            links={[
              {
                url: "https://url.jack-gooding.com/urls",
                img: faExternalLinkAlt,
              },
              { url: githubUrl, img: faGithub },
            ]}
          />
          <Project
            projectUrl="projects/assets"
            externalUrl="https://assets.jack-gooding.com"
            img={expImg}
            title="Asset Manager"
            description="An asset manager I created to help inventory management while working as an IT Technician.
Very specific to my needs, this asset manager has many linked database tables, displayed in a simple UI."
            links={[{ url: "link1", img: faGithub }]}
          />
        </div>
      </div>
    );
  }
}

function Project(props) {
  const links = props.links;
  const renderLinks = links.map((link) => <Link data={link} />);
  return (
    <div className="project-card">
      <div className="project-card-image">
        <a href={props.externalUrl}>
          <img src={props.img} alt="" />
        </a>
      </div>
      <div className="project-card-title">
        <a href={props.projectUrl}>
          <p>{props.title}</p>
        </a>
      </div>
      <div className="project-card-description">
        <p>{props.description}</p>
        <ul className="project-card-tags">{renderTags(props.tags)}</ul>
      </div>
      <div className="project-card-links">{renderLinks}</div>
    </div>
  );
}

function Link(props) {
  return (
    <div className="link">
      <a href={props.data.url}>
        <FontAwesomeIcon icon={props.data.img} />
      </a>
    </div>
  );
}

let renderTags = (tags) => {
  if (tags != null) {
    return tags.map((tag) => <li type={tag}>{tag}</li>);
  }
};
