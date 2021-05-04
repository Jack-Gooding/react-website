import React from "react";
import { Helmet } from "react-helmet";

import Header from "./components/Header2";
import ContentWindow from "./components/ContentWindow";

import Projects from "./containers/Projects";
import Tutorials from "./containers/Tutorials";
import Keypad from "./components/projects/Keypad";
import ClickTracker from "./components/projects/ClickTracker";

import E404 from "./components/projects/E404";

import Home from "./containers/Home";
import Printing from "./containers/Printing";
import Art from "./containers/Art";
import About from "./containers/About";
import Resume from "./containers/Resume";
import ResumeOld from "./containers/Resume.old";
import Resume_Delivery from "./containers/Resume_Delivery_Driver";
import URLShortener from "./containers/URLShortener";

// import NewSidebar from "./components/newSidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import bodyStyles from "./css/body.scss";
import styles from "./css/main.scss";

//<Sidebar/>
// <NewSidebar/>
function App() {
  if (window.location.host.split(".")[0] == "experiments") {
    return (
      <Router>
        <Switch path="/">
          <Header />
          <ContentWindow>Experiments</ContentWindow>
        </Switch>
      </Router>
    );
  } else {
    return (
      <div className="app">
        <Helmet>
          <title>Jack Gooding // Home</title>
          <meta
            name="description"
            content="Portfolio Website built using React.js"
            user-scalable="no"
          />
        </Helmet>
        <Router>
          <Switch>
            // <Route exact path="/cv" component={Resume} />
            <Route
              exact
              path="/resume /cv /curriculum_vitae"
              component={Resume}
            />
            <Route exact path="/cv_old" component={ResumeOld} />
            <Route exact path="/cv_delivery" component={Resume_Delivery} />
            <Route exact path="/" component={Home} />
            <Route path="/">
              <Header />
              <ContentWindow>
                <Switch>
                  <Route exact path="/projects" component={Projects} />
                  <Route
                    exact
                    path="/projects/keypad"
                    component={() => <Keypad title={"MQTT Keypad"} />}
                  />
                  <Route
                    exact
                    path="/projects/click-tracker"
                    component={() => <ClickTracker title={"Click Tracker"} />}
                  />
                  <Route
                    exact
                    path="/projects/*"
                    component={() => <E404 title={"Error: 404"} />}
                  />
                  <Route path="/tutorials" component={Tutorials} />
                  <Route path="/3DPrinting" component={Printing} />
                  <Route path="/Art" component={Art} />
                  <Route path="/about" component={About} />
                  <Route path="/url" component={URLShortener} />

                  <Route
                    path="/contact"
                    render={() => (
                      <h1>Contact me at Jack-Gooding-@outlook.com</h1>
                    )}
                  />

                  <Route render={() => <h1>Page not found</h1>} />
                </Switch>
              </ContentWindow>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
