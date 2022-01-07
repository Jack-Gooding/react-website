import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

export default class Image extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      counter: undefined,
      visible: false,
    };
  }

  componentDidMount() {
    this.setState({ counter: this.props.active });
  }

  checkClose(e) {
    this.props.close();
  }

  render() {
    let visible;
    if (this.props.visible) {
      visible = { display: "inline-block" };
    } else {
      visible = { display: "none" };
    }

    return (
      <div
        style={visible}
        className="image-fullscreen"
        tabIndex="0"
        onClick={(e) => this.checkClose(e)}
        onKeyDown={(e) => this.props.keys(e)}
      >
        <div
          className="image-fullscreen-container"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <img src={this.props.src[this.props.active]} alt={""} />
          <div className="image-fullscreen-description">
            <p>{this.props.description}</p>
          </div>
          <div className="image-fullscreen-counter">
            <p>{`${this.props.active + 1}/${this.props.src.length}`}</p>
          </div>
        </div>
        <div
          className="image-fullscreen-dec"
          onClick={(e) => {
            this.props.increment(-1);
            e.stopPropagation();
          }}
        >
          <FontAwesomeIcon icon={faChevronCircleLeft} />
        </div>
        <div
          className="image-fullscreen-inc"
          onClick={(e) => {
            this.props.increment(1);
            e.stopPropagation();
          }}
        >
          <FontAwesomeIcon icon={faChevronCircleRight} />
        </div>
        <div
          onClick={() => this.props.close()}
          className="image-fullscreen-close"
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </div>
    );
  }
}
