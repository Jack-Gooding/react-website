import React from "react";
import { Helmet } from "react-helmet";

import Image from "../tutorials/ImageAlbum";
import Section from "../tutorials/Section";
import Contents from "../tutorials/Contents";
import CodeBlock from "../tutorials/CodeBlock";

import "../../css/Project.scss";

import colourmapImg from "../../images/projects/click-tracker/colourmap-min.png";
import heatmapImg from "../../images/projects/click-tracker/heatmap-min.png";

export default class Keypad extends React.Component {
  render() {
    return (
      <div className="project, keypad">
        <Helmet>
          <title>Jack Gooding // Click Tracker</title>
        </Helmet>
        <h2>{this.props.title}</h2>
        <Section heading={"Intro"}>
          <p>
            While working at Webrecruit, I wanted to track my click activity and
            generate statistics. I was interested in tracking:
            <ul>
              <li>The number of clicks made</li>
              <li>The type of click (Left, Right, Middle)</li>
              <li>The coordinate location of the click</li>
              <li>The average colour at each click location</li>
            </ul>
          </p>
          <p>
            In addition to generating click statistics, I wanted to be able to
            construct an image of my click behaiour. I wanted to be able to
            generate:
            <ul>
              <li>A heatmap of click locations</li>
              <li>
                A colour map of the average pixel colour at each click location
              </li>
            </ul>
          </p>
        </Section>
        <Image
          src={[colourmapImg, heatmapImg]}
          description="pictured above: left - colour map, right - heat map"
        />
        <Section heading={"The Process"}>
          <p>
            I used <a href="https://www.npmjs.com/package/iohook">iohook</a> to
            capture the clicks, an SQLite database to store the clicks, and{" "}
            <a href="https://www.npmjs.com/package/jimp">Jimp</a> to build the
            images.{" "}
          </p>

          <CodeBlock>
            <pre>
              {`ioHook.on("mousedown", (event) => {
  console.log(event);
  let ctrlKey = event.ctrlKey ? "true" : "false";
  let altKey = event.altKey ? "true" : "false";
  let shiftKey = event.shiftKey ? "true" : "false";

  let inBounds = true;

  if (event.y >= height) {
    event.y = height;
    inBounds = false;
  }
  if (event.x >= width) {
    event.x = width;
    inBounds = false;
  }
  if (inBounds) {
    insertDataMouseUse.run(
      event.x,
      event.y,
      event.button,
      event.clicks,
      event.type,
      ctrlKey,
      altKey,
      shiftKey
    );
  }
});`}
            </pre>
          </CodeBlock>
        </Section>
      </div>
    );
  }
}
