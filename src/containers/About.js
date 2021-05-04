import React from "react";
import { Link } from "react-router-dom";

export default class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h2>About me</h2>
        <p>
          I'm Jack Gooding, I like learning new things, building and making.
        </p>
        <p>
          I like to develop using Javascript as both a front end and a back end,
          I have experience in Python, HTML, CSS, JavaScript, Node and SQL.
          <br />I prefer building projects with the back end as a main focus, I
          feel working on the building blocks of something and putting together
          something functional is very rewarding.
          <br />
          <br />
          My preferred way to build a project is with React.js, although i have
          experience hosting backends using LAMP, Python Flask, and Node.js.
          <br />
          I'm comfortable with Linux, AWS instances, and domain routing in
          general.
        </p>
        <h2>This website.</h2>
        <p>
          This page is an ongoing learning excercise.
          <br />
          It's built using React.js, Bootstrap and SASS, and hosted on an Amazon
          EC2 Instance with the domain routed through Amazon's Route 53 domain
          routing service, alongside other subdomains and hosted projects. (
          <a
            href="http://todo.jack-gooding.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            todo
          </a>
          ,{" "}
          <a
            href="http://35.178.73.23:3000/"
            target="_blank"
            rel="noopener noreferrer"
          >
            iot-react-server
          </a>
          )
          <br />
          I'm using it as centralised public face for my programming work, and
          for any 3D Printing designs / prints i'm proud of.
        </p>

        <h2>Contact me</h2>
        <p>
          If you would like to contact me, feel free to do so via email:{" "}
          <a href="mailto:Jack-Gooding-@outlook.com">
            Jack-Gooding-@outlook.com
          </a>
          .
        </p>
        <h2>My Resume</h2>
        <p>
          You can view my resume <Link to="/cv">here</Link>.
        </p>
      </div>
    );
  }
}
