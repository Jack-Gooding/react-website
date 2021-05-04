import React, { useEffect, useState } from "react";

export default function ShowoffBackground(props) {
  let path1 = "M0 0";
  let path2 = "M0 20";
  let points = 24;
  for (let i = 0; i <= points; i++) {
    let x = (300 * i) / points;
    path1 += `L${x} ${Math.sin((x * Math.PI) / 60) + x / 20}`;
    path2 += `L${x} ${20 - Math.sin((x * Math.PI) / 60) - x / 20}`;
  }
  path1 += "L300 21 V21 H0 z";
  path2 += "L300 21 V21 H0 z";

  useEffect(() => {
    let handleResize = () => {
      console.log(window.innerWidth);
      console.log(window.devicePixelRatio);

      // let minSize = device.innerWidth 96px  25.4mm
      let height = 1122.52 + 20;
      let width = 793.8;
      let padding = 20;

      if (window.innerWidth <= width + padding * 2) {
        let ratio = window.innerWidth / (width + padding * 2);
        // setScale(ratio);
        // setTranslateX(-padding + width * (1 - ratio));
        // setTranslateY(-padding + (height - height * ratio) / 2);
        // setNegativeMarginY((height * (1 - ratio)) / 2);
      } else {
        // setScale(1);
        // setTranslateX(0);
        // setTranslateY(0);
        // setNegativeMarginY(0);
      }
      // setDimensions({
      //   height: window.innerHeight,
      //   width: window.innerWidth,
      // });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="showoff-background">
      <div className="layer1">
        <div></div>
        <svg className="showoff-svg" viewBox="0 0 300 20">
          <path d={path1}></path>
        </svg>
        <div></div>
      </div>
      <div className="layer2">
        <div></div>
        <svg className="showoff-svg" viewBox="0 0 300 20">
          <path d={path2}></path>
        </svg>
        <div></div>
      </div>
    </div>
  );
}
