import React from 'react';

export default class Section extends React.Component {

  render() {
    return (
      <div className="project-section" id={this.props.heading}>
        <h2>{this.props.heading}</h2>
        {this.props.children}
      </div>
    );
  };
};
