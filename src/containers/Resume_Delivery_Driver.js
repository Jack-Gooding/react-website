import React from 'react';
import styles from '../css/Resume.scss';

import {Container, Row, Col} from 'reactstrap';

export default class Resume extends React.Component {
    constructor(props) {
    super(props);
    this.state = {

    };
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick = function(e = "undef") {
    //e.preventDefault();
    console.log("print press");
    setTimeout(function() {
      window.print();
    },0)

  };

  render() {
    return (
      <div style={styles} className="curriculum_vitae container">
        <Container>
              <Row>
                  <Col>
                    <a className="not-print" href="/"> &lt; Home</a>
                  </Col>
                  <div className="download">
                    <p className="not-print">This page is printable. <span onClick={() =>{setTimeout(window.print(),100)}}>Print resume</span> or <a href="https://www.jack-gooding.com/cv_delivery.pdf">Download PDF.</a></p>
                    <p className="print-only">To view the most up to date version of this document, visit <a href="https://www.jack-gooding.com/cv_delivery">Jack-Gooding.com.</a></p>
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
                    <tbody>
                    <tr>
                      <td style={{fontWeight: 600}} valign="top">Address:</td>
                      <td>
                        Exeter,
                        <br/>
                        Devon,
                        <br/>

                        EX2
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col">
                  <table id="CV-links">
                    <tbody>
                    <tr>
                      <td style={{fontWeight: 600}}>Phone:</td>
                      <td><a href="tel:07891858960">+44 (0)7891858960</a></td>
                    </tr>
                    <tr>
                      <td style={{fontWeight: 600}}>Email:</td>
                      <td><a href="mailto:jack-gooding-@outlook.com"><span>Jack-Gooding-@outlook.com</span></a></td>
                    </tr>
                    <tr>
                      <td style={{fontWeight: 600}}>Website:</td>
                      <td><a href="http://www.jack-gooding.com" target="_blank"><span>Jack-Gooding.com</span></a></td>
                    </tr>
                    </tbody>
                  </table>
                 </div>
              </Row>
              <section>
                <h2 className="section-title"></h2>
                {
                /*
                  <p className="section-content">
                    I'm a technology enthusiast, very interested in making things both physical and digital. I enjoy a challenge and love solving problems.
                    I've always been very interested in computers and the surrounding technology and I'm very up to date with news, updates and releases.
                    I have extensive experience supporting both specialist software and computers generally.
                  </p>
                */
                }
                <p className="section-content">
                  A professional and hard working employee who thrives in a busy environment. I pride myself on my attention to detail and efficiency and have a proven history of providing great customer satisfaction.
                  As a recently furloughed worker, I'm looking for part time secondary employment, ideally working evenings and weekends.
                </p>
              </section>
              <section>
                <h2 className="section-title">Key Skills</h2>
                <table className="section-content">
                  <tbody>
                  <tr>
                    <td>Licence:</td>
                    <td>Clean UK Driving Licence with own car</td>
                  </tr>
                  <tr>
                    <td>Relevant Talents:</td>
                    <td>Excellent mathematical skills, experience reading maps</td>
                  </tr>
                  <tr>
                    <td>Personality:</td>
                    <td>Calm, professional manner, with varied experience in customer service</td>
                  </tr>
                  </tbody>
                </table>
              </section>
              <section>
                <h2 className="section-title">Employment</h2>
                  <div className="clearfix">
                    <h4 className="section-sub-title float-left"> Software Support Executive, Webrecruit</h4>
                    <h4 className="float-right">June 2019 - Ongoing</h4>
                  </div>
                  <p className="section-sub-content">
                    As a Software Support Executive, my main function is to provide support for all in-house software built by Webrecruit.
                    The primary software I support is an Applicant Tracking System (ATS), an all-in-one recruitment tool for businesses.
                    For this, I support both recruiting clients and aspiring candidates with any issues they encounter, liasing directly with the in-house development team whenever necessary.
                    This requires extensive knowledge of both the customer facing front end of the software and an understanding of how the software functions in the back-end and at the database level.
                  </p>
                  <div className="clearfix">
                    <h4 className="section-sub-title float-left"> Software Support Agent, John Lewis</h4>
                    <h4 className="float-right">November 2016 - 2018</h4>
                  </div>
                  {
                    //Possibly could mention ticketing systems?
                  }
                  <p className="section-sub-content">
                          In this role, my main responsibility was to provide advanced specialist support for colleagues in the lower tiers of customer support.
                          This support was primarily troubleshooting issues customers have faced with their purchases, whether hardware or software related.
                          I was required to constantly use my own in-depth knowledge of the main operating systems and popular devices, as well as learning and
                          researching new information and techniques rapidly, while also handling either one of my colleagues or a customer.
                          In addition to this, I would often step up to fill spaces in all other facets of the business, providing cover wherever needed, including managerial positions,
                          direct customer support and staff training.
                  </p>
                {
                    /* // 2 Months experience as a presenter is not really needed for this.
                  <div className="clearfix">
                    <h4 className="section-sub-title float-left">Outreach Presenter, Plymouth University</h4>
                    <h4 className="float-right">May - July 2016</h4>
                  </div>
                  <p className="section-sub-content"> As an Outreach Presenter, I gave presentations to visiting classes from secondary schools in the Plymouth area.
                      These presentations were based on the concept of renewable energy and electricity, how different countries generate electricity, and how they cope with the various problems surrounding it.
                      In addition to this, I prepared and oversaw several group activities; in one of which, the children designed, built, and tested wind turbines made from office supplies.
                  </p>
                  */
                }
                <div className="clearfix">
                  <h4 className="section-sub-title float-left"> Crew Member, Burger King</h4>
                  <h4 className="float-right">November 2013 - June 2014</h4>
                </div>
                <p className="section-sub-content">
                  My main responsibilities as a Crew Member were working in the dining area, ensuring that all the dispensers were constantly filled, keeping the area as clean as possible, and dealing with any customer requests or complaints. I would often be rotated to other workstations.
                </p>
              </section>
              {
                /*
              <section>
                <h2 className="section-title project-container">Personal Projects</h2>
                <div>
                  <h4 className="section-sub-title">Personal Website</h4>
                  <p className="section-sub-content">As a test of my programming abilities, I put together a static personal website with multiple sections, routed through Angular. This page is hosted on a custom domain at jack-gooding.com, and has sections for my current projects and interests.
                    There are also several subdomains attached which are linked to various servers I have between AWS and local devices. This CV is written using HTML and hosted here.
                  </p>
                </div>
                  <div>
                    <h4 className="section-sub-title">Home Automation</h4>
                    <p className="section-sub-content">A NodeJs server running on a Rasberry Pi 3b: this project's goal is to control all the IoT devices I have from one interface, from commercial products to devices that I've made using either Arduino microcontrollers or a Raspberry Pi.
                      These devices include Philips Hue Bulbs, TP-Link WiFi Plugs, Temperature/Humidity Sensors, databases, Stepper/Servo Motors and WS2812b LED strips.
                    </p>
                  </div>
              </section>
              */
              }
              {
                //Education goes above experience, only if experience isn't relevant
              }
              <section>
                <h2 className="section-title">Education</h2>
                  <div className="clearfix">
                    <h4 className="section-sub-title float-left">Plymouth University</h4>
                    <h4 className="float-right">2012-2016</h4>
                  </div>
                  <div className="section-sub-content">
                    <h6>BEng Mechanical Engineering, Lower Second Class Honours</h6>
                    <table className="section-content">
                      <tbody>
                      <tr><td>Engineering Drawing, CAD, and Design</td><td>69%</td></tr>
                      <tr><td>Introduction to Thermo-Fluids</td><td>64%</td></tr>
                      <tr><td>Engineering Mathematics</td><td>61%</td></tr>
                      <tr><td>Integrated System Design</td><td>61%</td></tr>
                      <tr><td>Business Dynamics</td><td>59%</td></tr>
                      <tr><td>Mechanics</td><td>59%</td></tr>
                      </tbody>
                    </table>
                    <br/>
                    <p>As part of my Third Year at Plymouth University, I completed a dissertation on efficient energy generation in rural areas, which focused on a small village in Cameroon, West Africa, with a very weak and unreliable power grid. I researched the area, determined which method of energy generation was most suitable, selecting wind turbines as the most practical and then tested several designs to determine the most efficient blade type, whilst minimising the necessary materials and cost of the solution.</p>
                  </div>
                    <div className="clearfix">
                      <h4 className="section-sub-title float-left">Tavistock College</h4>
                      <h4 className="float-right">2006-2012</h4>
                    </div>
                    <div className="section-sub-content">
                      <h6>A-Levels</h6>
                      <p className="section-sub-sub-content">A* - Electronics, B - Maths, B - Physics</p>
                      <h6>GCSEs</h6>
                      <p className="section-sub-sub-content">11 GCSEs including Electronics, Maths, Physics, Chemistry, Biology and Graphic Design</p>
                    </div>
              </section>
              <section>
                <h2 className="section-title">Hobbies/Interests</h2>
                <div>
                  <h4 className="section-sub-title">Making</h4>
                  <p className="section-sub-content">
                    I have always had a keen interest in making and building things.
                    I am always working on at least one project in various specialisations, and always looking to improve my knowledge and abilities.
                    The creations I am most proud of are: a Digital Clock made from scratch using logic gates, a 3D printed key holder, and a handmade wooden cabinet.
                    I do a lot of 3D modelling and 3D printing, interfacing with custom made circuits and software.
                  </p>
                </div>
                <div>
                  <h4 className="section-sub-title">Programming</h4>
                  <p className="section-sub-content">
                    I'm a self-taught programmer, always working on some new way to control an aspect of my home. From building my own website from scratch, or designing and programming automated blinds and turning my lights on and off when I get home, I love improving efficiency through automation.
                  </p>
                </div>
                <div>
                  <h4 className="section-sub-title">Board Games</h4>
                  <p className="section-sub-content">I often meet with different groups to take part in various tabletop games both as part of competitions and working as teams. I enjoy both the problem solving aspect and the social team building.</p>
                </div>
              </section>
              <footer style={{textAlign: "center"}}>
                <i>Last Updated: May 2020</i>
              </footer>
              </Container>
            </div>
    );
  };
};
