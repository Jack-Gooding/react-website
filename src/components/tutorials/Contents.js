import React from 'react';

export default class Contents extends React.Component {

  render() {
    return (
      <div className="project-contents">
        <h3>Contents</h3>
        {this.props.children}
      </div>
    );
  };
};
