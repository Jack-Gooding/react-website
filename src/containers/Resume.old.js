import React from "react";
import styles from "../css/Resume.old.scss";

import { Container, Row, Col } from "reactstrap";

let printCV = () => {
  window.print();
};

export default function CV(props) {
  return (
    <div style={styles} className="curriculum_vitae container">
      <Container>
        <Row>
          <Col>
            <a className="not-print" href="/" onclick="goBack()">
              {" "}
              &lt; Home
            </a>
          </Col>
          <div className="download">
            <p className="not-print">
              This page is printable.{" "}
              <button className="unstyle" onclick={() => printCV()}>
                Print resume
              </button>{" "}
              or{" "}
              <a href="http://www.jack-gooding.com/resume_tech.pdf">
                Download PDF.
              </a>
            </p>
            <p className="print-only">
              To view the most up to date version of this document, visit{" "}
              <a href="http://www.jack-gooding.com/curriculum_vitae_tech">
                Jack-Gooding.com.
              </a>
            </p>
          </div>
        </Row>
        <Row>
          <header>
            <h1>Jack Gooding</h1>
          </header>
        </Row>
        <Row>
          <div className="col">
            <table>
              <tr>
                <td style={{ fontWeight: 600 }} valign="top">
                  Address:
                </td>
                <td>
                  Exeter,
                  <br />
                  Devon,
                  <br />
                  EX4
                </td>
              </tr>
            </table>
          </div>
          <div className="col">
            <table id="CV-links">
              <tr className="print-only">
                <td style={{ fontWeight: 600 }}>Phone:</td>
                <td>
                  <a href="tel:012347890">+44 (0)12347890</a>
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>Email:</td>
                <td>
                  <a href="mailto:jack-gooding-@outlook.com">
                    <span>Jack-Gooding-@outlook.com</span>
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>Website:</td>
                <td>
                  <a href="http://www.jack-gooding.com" target="_blank">
                    <span>Jack-Gooding.com</span>
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </Row>
        <section>
          <h2 className="section-title">Summary</h2>
          <p className="section-content">
            I'm a technology enthusiast, very interested in making things both
            physical and digital. I enjoy a challenge and love solving problems.
            I've always been very interested in computers and the surrounding
            technology and I'm very up to date with news, updates and releases.
            I have extensive experience supporting all major operating systems,
            mobile devices and peripherals.
          </p>
        </section>
        <section>
          <h2 className="section-title">Key Skills</h2>
          <table className="section-content">
            <tr>
              <td>Support:</td>
              <td>Windows 7-10, Mac OS, Linux, Android, iOS, Office 365</td>
            </tr>
            <tr>
              <td>Support Methods:</td>
              <td>Deskside, Remote Desktop, Phone Suppoprt</td>
            </tr>
            <tr>
              <td>Experience:</td>
              <td>5 Months Tier 1 Support, 2 Years Tier 2 Support</td>
            </tr>
            <tr>
              <td>Addition Experience:</td>
              <td>
                Escalation Support, Equipment Installation, SQL/SQLite,
                AWS/Azure
              </td>
            </tr>
          </table>
        </section>
        <section>
          <h2 className="section-title">Employment</h2>
          <div className="clearfix">
            <h4 className="section-sub-title float-left">
              {" "}
              Software Support, John Lewis
            </h4>
            <h4 className="float-right">November 2016 - 2018</h4>
          </div>
          <p className="section-sub-content">
            {" "}
            In this role, my main responsibility is to provide advanced
            specialist support for colleagues in the lower tiers of customer
            support. This support is primarily troubleshooting issues customers
            have faced with their purchases, whether hardware or software
            related. I am required to constantly use my own in-depth knowledge
            of the main operating systems and popular devices, as well as
            learning and researching new information and techniques rapidly,
            while also handling either one of my colleagues or a customer. In
            addition to this, I step up to fill spaces in all other facets of
            the business, providing cover wherever needed, including managerial
            positions, direct customer support and staff training.
          </p>
          <div className="clearfix">
            <h4 className="section-sub-title float-left">
              Outreach Presenter, Plymouth University
            </h4>
            <h4 className="float-right">May - July 2016</h4>
          </div>
          <p className="section-sub-content">
            {" "}
            As an Outreach Presenter, I gave presentations to visiting classes
            from secondary schools in the Plymouth area. These presentations
            were based on the concept of energy and electricity, how different
            countries generate electricity, and how they cope with the various
            problems surrounding it. In addition to this, I prepared and oversaw
            several group activities; in one of which, the children designed,
            built, and tested wind turbines made from office supplies.
          </p>
        </section>
        <section>
          <h2 className="section-title project-container">Personal Projects</h2>
          <div>
            <h4 className="section-sub-title">Personal Website</h4>
            <p className="section-sub-content">
              As a test of my abilities, I put together a static personal
              website with multiple sections, routed through Angular. This page
              is hosted on a custom domain at jack-gooding.com, and has sections
              for my current projects and interests. There are also several
              subdomains attached which are linked to various servers I have
              between AWS and local devices. This CV is written using HTML and
              hosted here.
            </p>
          </div>
          <div>
            <h4 className="section-sub-title">Home Automation</h4>
            <p className="section-sub-content">
              A NodeJs server running on a Rasberry Pi 3b: this project's goal
              is to control all the IoT devices I have from one interface, from
              commercial products to devices that I've made using either Arduino
              microcontrollers or a Raspberry Pi. These devices include Philips
              Hue Bulbs, TP-Link WiFi Plugs, Temperature/Humidity Sensors,
              databases, Stepper/Servo Motors and WS2812b LED strips.
            </p>
          </div>
          <div>
            <h4 className="section-sub-title">Idle Game</h4>
            <p className="section-sub-content">
              I have always enjoyed Idle Games, and I thought that creating one
              would be a good way of increasing my knowledge of JavaScript and
              general web design. I started building while still learning a lot
              of the basics of JavaScript as an outlet to experiment and try the
              new methods I learned in an actual project. I set myself the
              challenge of having as little HTML hard coded, and instead
              generating it using JavaScript and a few objects as a base.
            </p>
          </div>
          <div>
            <h4 className="section-sub-title">PC Horse Transport</h4>
            <p className="section-sub-content">
              I was approached by a relative to help with a recently purchased
              business in which workflow inherited was very manually intensive,
              with all bookings and calculations being done on paper and by
              hand. I created a system to streamline this using a combination of
              Google services and scripting, to allow her and her customers to
              use an online booking form to submit their job requests,
              responding with a cost estimate, a new calendar event and a
              confirmation email.
            </p>
          </div>
        </section>
        <section>
          <h2 className="section-title">Education</h2>
          <div className="clearfix">
            <h4 className="section-sub-title float-left">
              Plymouth University
            </h4>
            <h4 className="float-right">2012-2016</h4>
          </div>
          <div className="section-sub-content">
            <h6>BEng Mechanical Engineering, Lower Second Class Honours</h6>
            <table className="section-content">
              <tr>
                <td>Engineering Drawing, CAD, and Design</td>
                <td>69%</td>
              </tr>
              <tr>
                <td>Introduction to Thermo-Fluids</td>
                <td>64%</td>
              </tr>
              <tr>
                <td>Engineering Mathematics</td>
                <td>61%</td>
              </tr>
              <tr>
                <td>Integrated System Design</td>
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
            <br />
            <p>
              As part of my Third Year at Plymouth University, I completed a
              dissertation on efficient energy generation in rural areas, which
              focused on a small village in Cameroon, West Africa, with a very
              weak and unreliable power grid. I researched the area, determined
              which method of energy generation was most suitable, selecting
              wind turbines as the most practical and then tested several
              designs to determine the most efficient blade type, whilst
              minimising the necessary materials and cost of the solution.
            </p>
          </div>
          <div className="clearfix">
            <h4 className="section-sub-title float-left">Tavistock College</h4>
            <h4 className="float-right">2006-2012</h4>
          </div>
          <div className="section-sub-content">
            <h6>A-Levels</h6>
            <p className="section-sub-sub-content">
              A* - Electronics, B - Maths, B - Physics
            </p>
            <h6>GCSEs</h6>
            <p className="section-sub-sub-content">
              11 GCSEs including Electronics, Maths, Physics, Chemistry, Biology
              and Graphic Design
            </p>
          </div>
        </section>
        <section>
          <h2 className="section-title">Hobbies/Interests</h2>
          <div>
            <h4 className="section-sub-title">Making</h4>
            <p className="section-sub-content">
              I have always had a keen interest in making and building things. I
              am always working on at least one project in various
              specialisations, and always looking to improve my knowledge and
              abilities. The creations I am most proud of are: a Digital Clock
              made from scratch using logic gates, a 3D printed key holder, and
              a handmade wooden cabinet. Recently I have mostly been doing a lot
              of CAD work and 3D printing as I have just purchased a 3D printer.
            </p>
          </div>
          <div>
            <h4 className="section-sub-title">Board Games</h4>
            <p className="section-sub-content">
              I often meet with different groups to take part in various
              tabletop games both as part of competitions and working as teams.
              I enjoy both the problem solving aspect and the social team
              building.
            </p>
          </div>
        </section>
        <footer style={{ textAlign: "center" }}>
          <i>Last Updated: April 2021</i>
        </footer>
      </Container>
    </div>
  );
}
