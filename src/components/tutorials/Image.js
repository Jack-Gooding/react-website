import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import ImageFullscreen from './ImageFullscreen';




export default class Image extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    visible: false,
    active: 0,
  };
  this.handleClick = this.handleClick.bind(this);
  this.incrementCounter = this.incrementCounter.bind(this);

}


  handleClick = function(index) {
    this.setState({visible: !this.state.visible, active: index})
  }

  incrementCounter = function(num) {
    console.log(num);
    if (typeof(this.props.src) == "object") {
      if (this.state.active + num >= this.props.src.length) {
        this.setState({active: 0});
      } else if (this.state.active + num < 0) {
        this.setState({active: this.props.src.length-1});
      } else {
        this.setState({active: this.state.active+num,});
      }
    }
  };

  handleKeyPress = (e) => {
    e.preventDefault();
    let k = e.keyCode;
    if (k === 27) {
      this.setState({visible: false});
    } else if (k == 39) {
      this.incrementCounter(1);
    }  else if (k == 37) {
      this.incrementCounter(-1);
    };
  }

  render() {
    let listItems
    if (this.props.src.length >= 1 && typeof(this.props.src) === "object") {
      listItems = this.props.src.map((img, index) =>  (
        <div key={index} className="image-wrapper" onClick={() => {this.handleClick(index)}} tabIndex="0" onKeyDown={(e) => this.handleKeyPress(e)}>
          <img src={img} alt=""/>
          <div className="image-blur">
            <div className="image-expand-button">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </div>
      ));
    } else {
      listItems = (
          <div className="image-wrapper">
            <img src={this.props.src} alt=""/>
          </div>
      );
    }

    return (
      <div className="project-image">
        <div className="image-container">
          {listItems}
        </div>
        <p>{this.props.description}</p>
        <ImageFullscreen keys={this.handleKeyPress} active={this.state.active} description={this.props.description} increment={(e) => this.incrementCounter(e)} visible={this.state.visible} close={() => this.handleClick()} src={this.props.src}/>
      </div>
    );
  };
};
