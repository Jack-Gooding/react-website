import React from "react";

import Image from "../tutorials/ImageAlbum";
import Section from "../tutorials/Section";
import Contents from "../tutorials/Contents";
import CodeBlock from "../tutorials/CodeBlock";

import "../../css/Project.scss";

import keypad1 from "../../images/projects/keypad1.jpg";
import keypad2 from "../../images/projects/keypad2.jpg";

import face1 from "../../images/projects/keypad_face2.png";
import face2 from "../../images/projects/keypad_face1.png";

import base1 from "../../images/projects/keypad_base2.png";
import base2 from "../../images/projects/keypad_base1.png";
import base3 from "../../images/projects/keypad_base3.png";
import base4 from "../../images/projects/keypad_base4.png";
import base5 from "../../images/projects/keypad_base5.png";

import circuit1 from "../../images/projects/circuit1.png";

export default class Keypad extends React.Component {
  render() {
    return (
      <div className="project, keypad">
        <h2>{this.props.title}</h2>
        <Section heading={"Intro"}>
          <p>
            After finishing my <a href="/projects/MQTT Server">MQTT Server</a>,
            I wanted an easy way to send commands to my devices. I initially
            created a device with three push buttons connected to an arduino.
          </p>
          <p>
            This device worked well for sending three commands, but could not be
            expanded far without running out of readable pins on the NodeMCU
            arduino device I was using. After some resarch into 'Keyboard
            Matrices' and thanks to many guides made by others in the Mechanical
            Keyboard community, I decided to build my own switch matrix.
          </p>
          <p>
            A switch matrix minimises the amount of readable pins required,
            while still allowing for accurate independent key tracking. It's the
            same technology used in modern keyboards.
          </p>
        </Section>
        <Image
          src={[keypad1, keypad2]}
          description="pictured above: isometric and top view of keypad"
        />
        <Section heading={"Parts List"}>
          <ul>
            <li>(1x) NodeMCU Arduino</li>
            <li>(9x) Cherry MX Switches</li>
            <li>(9x) Diodes</li>
            <li>(3x) WS2812b individually addressable LEDs</li>
            <li>(4x) M4 25mm bolts & 4mm nuts</li>
            <li>Access to a 3D Printer</li>
          </ul>
        </Section>
        <Contents>
          <ol>
            <li>Intro</li>
            <li>Parts List</li>
            <li>Designing The Case</li>
            <li>Wiring</li>
          </ol>
        </Contents>
        <Section heading={"Designing The Case"}>
          <p>
            To design the Case, I started with the face panel. I first designed
            the cutouts for the switches, and from there added cutouts for a
            WS2812B panel, two linear encoders and two LEDs.
          </p>
          <p>
            I designed this part to fit recessed into the top seciton of the
            case.
          </p>
        </Section>
        <Image
          src={[face1, face2]}
          description={
            "pictured above: top and bottom view of the keypad faceplate."
          }
        />
        <Section heading={"Designing The Case"}>
          <p>
            I designed the case in two parts, with the bottom having space to
            tighly hold a half-size breadbord, a row of WS2812b LEDs, and an
            opening for the required Micro USB cable.
            <br />I left enough room for wiring and possible future
            modifications.
          </p>
        </Section>
        <Image
          src={[base1, base2]}
          description={
            "pictured above: isometric and top view of the keypad base."
          }
        />
        <Section>
          <p>
            The top section of the case was designed to protect the keypad
            faceplate, and any exposed wiring underneath during testing and
            assembly.
            <br />
            The two sections are joined using 4x 25mm M4 bolts.
          </p>
        </Section>
        <Image src={[base3, base4, base5]} description={"pictured above: "} />
        <Section heading={"Wiring"}>
          <p>
            I chose to wire my key switches in a switch matrix instead of using
            a dedicated digital pin for each to reduce the number of pins
            required.
            <br />
            This reduction is achieved by changing individual switches into rows
            and columns of switches. The arduino loops through each column,
            checking for active rows. When an active row is found, the arduino
            knows both the column and row of the active switch, and so knows the
            exact switch that was pressed.
            <br />
            <br />I followed a{" "}
            <a
              href="https://www.baldengineer.com/arduino-keyboard-matrix-tutorial.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              guide from BaldEngineer.com
            </a>{" "}
            to achieve this, among many other guides and screenshots of other
            custom mechanical keyboards.
            <br />I was able to reduce a 9 pin requirement to a 7 pin
            requirement, with better potential savings for larger switch counts.
          </p>
        </Section>
        <Image
          src={[circuit1]}
          description={
            "pictured above: the circuit diagram I designed to follow during wiring and the wired circuit."
          }
        />
        <Section heading={"Keypad Code"}>
          <p>
            The following code is a bare-bones script for the keypad.
            <br />
            The final version is viewable on my Github, and contains extra
            controls for connecting to the internet, sending and receiving
            messages from MQTT server, along with controlling WS2812B leds.
            <br />
            <br />
            The basic code constructs a 3D array, compares readings of each row
            against this array and then updates the array.
            <br />
            If changes are detected between the new readings and the array, a
            message is sent to the MQTT server.
          </p>
          <CodeBlock>
            <pre>
              {`
byte rows[] = {5,4};
byte cols[] = {0,2,14,12,13};

const int rowCount = sizeof(rows)/sizeof(rows[0]);


const int colCount = sizeof(cols)/sizeof(cols[0]);

int activeCol = 0;

byte keys[rowCount][colCount];
byte lastKeys[rowCount][colCount];

void allPinsLow() {
  for (int i = 0; i < colCount; i++) {
    digitalWrite(cols[i], LOW);
  }
};

void setup() {

  delay( 1000 ); // power-up safety delay
  Serial.begin(115200);

  for (int i = 0; i < rowCount; i++) {
    pinMode(rows[i], INPUT);
  }

  for (int i = 0; i < colCount; i++) {
    pinMode(cols[i], OUTPUT);
  }

}


void loop() {

  allPinsLow();
  digitalWrite(cols[activeCol], HIGH);

  for (int i = 0; i < rowCount; i++)  {
    int rowVal = digitalRead(rows[i]);
    if (rowVal != lastKeys[i][activeCol])  {

      if (rowVal == HIGH)  {

       client.publish("keypad/button/pressed", buttonNames[i][activeCol]);

     }

      if (rowVal == LOW)  {

       client.publish("keypad/button/released", buttonNames[i][activeCol]);
     }

   }
    lastKeys[i][activeCol] = rowVal;
  }

    activeCol++;
    if (activeCol > 4)  {
      activeCol = 0;
    }
    delay(1);
  }
`}
            </pre>
          </CodeBlock>
        </Section>
        <Section heading={"MQTT Code"}>
          <p>
            This is a basic version of the code Added to my MQTT server to
            interpret keypresses. The actual code in production is more complex
            and can be found on my Github.
            <br />
            The server subscribes to the topics 'keypad/button/pressed' and
            'keypad/button/released', and reacts depending on the button number
            in the message content.
            <br />
            <br />
            Each button has an assigned function, with multiple press-types,
            'short press', 'long press', and 'longer press'.
            <br />
            Short press and long press trigger a one-time action such as turning
            a device on or off or sending a play/pause command to a computer.
            'longer press' triggers repeatable actions, such as increasing a
            lights brightness, or raising/lowering my blinds.
          </p>
          <CodeBlock>
            <pre>
              {`
if (topic === ) {

}
`}
            </pre>
          </CodeBlock>
        </Section>
      </div>
    );
  }
}
