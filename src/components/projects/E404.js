import React from 'react';

import Image from '../tutorials/Image';
import Section from '../tutorials/Section';
import Contents from '../tutorials/Contents';
import CodeBlock from '../tutorials/CodeBlock';

import '../../css/Project.scss';

import keypad1 from '../../images/projects/keypad1.jpg';
import keypad2 from '../../images/projects/keypad2.jpg';

import face1 from '../../images/projects/keypad_face2.png';
import face2 from '../../images/projects/keypad_face1.png';

import base1 from '../../images/projects/keypad_base2.png';
import base2 from '../../images/projects/keypad_base1.png';
import base3 from '../../images/projects/keypad_base3.png';
import base4 from '../../images/projects/keypad_base4.png';
import base5 from '../../images/projects/keypad_base5.png';

import circuit1 from '../../images/projects/circuit1.png';


export default class Keypad extends React.Component {

  render() {
    return (
      <div className="project, keypad">
        <h2>{this.props.title}</h2>
        <Section>
          Project not found
          <br/>
          <br/>
          <a href="/">Return Home</a>
        </Section>
      </div>
    );
  };
};
