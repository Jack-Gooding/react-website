import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import styles from "./css/main.scss";
// import './css/sidebar.scss';
// import './css/newSidebar.scss';
import "./index.scss";
import "./css/ContentWindow.scss";
import "./css/Projects.scss";

import "bootstrap/dist/css/bootstrap.min.css";

// <React.StrictMode>
ReactDOM.render(
  // </React.StrictMode>,
  <App />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
