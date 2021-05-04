import React, {useEffect, useState} from 'react';

import ImageAlbum from '../components/tutorials/ImageAlbum';
import { Link } from 'react-router-dom';

import styles from '../css/Art.scss';
// import styles2 from '../css/Printing.scss';

import stars from "../images/Artwork/Generative/stars_round.png";
import mandelbrot from "../images/Artwork/Generative/mandelbrot.png";
import mobius from "../images/Artwork/Generative/mobius.gif";
import moon from "../images/Artwork/Generative/moon.png";
import polestar from "../images/Artwork/Generative/polestar.jpg";
import simplexSeafoam from "../images/Artwork/Generative/simplex_seafoam.gif";
import tearing from "../images/Artwork/Generative/tearing.gif";
import topography from "../images/Artwork/Generative/topography.gif";


import image1 from "../images/Artwork/image (1).jpg";
import image2 from "../images/Artwork/image (2).jpg";
import image3 from "../images/Artwork/image (3).jpg";



let plotterImages = [
  {
    title: "test2",
    src: image1
  },
  {
    title: "test3",
    src: image2
  },
  {
    title: "test4",
    src: image3
  }
];

let generativeImages = [
  {
    title: "test1",
    src: stars
  },
  {
    title: "mandelbrot",
    src: mandelbrot
  },
  {
    title: "mobius",
    src: mobius
  },
  {
    title: "moon",
    src: moon
  },
  {
    title: "polestar",
    src: polestar
  },
  {
    title: "simplexSeafoam",
    src: simplexSeafoam
  },
  {
    title: "tearing",
    src: tearing
  },
  {
    title: "topography",
    src: topography
  },

];

export default function Art(props) {

  // let [mobileNavExpand, setMobileNavExpand] = useState(false);

    return (
        <div className="">
          <h2>Artwork</h2>

          <div className="art-container">
            Plotter Art
            <div className="image-container">
              {renderImages(plotterImages)}
            </div>
          </div>
          <div className="art-container">
            Generative Art
            <div className="image-container">
              {renderImages(generativeImages)}
            </div>
          </div>
        </div>
    );
};

let renderImages = (images) => {

  let album = [];

  images.forEach(image => {
    album.push(image.src);
  });

  return <ImageAlbum src={album} />;
}
