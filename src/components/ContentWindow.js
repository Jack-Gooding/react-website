import React from "react";
import ShowoffBackground from "../components/ShowoffBackground";

export default class ContentWindow extends React.Component {
  render() {
    return (
      <div className="content-window">
        <ShowoffBackground />

        <div className="content-main">{this.props.children}</div>
      </div>
    );
  }
}
