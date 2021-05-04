import React from 'react';


export default class CodeBlock extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
  };
}


  render() {
    return (
      <div className="code-block">
          {this.props.children}
      </div>
    );
  };
};
