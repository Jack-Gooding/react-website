import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import ImageFullscreen from './ImageFullscreen';

import styles from '../../css/ImageAlbum.scss';
//Requires an Array to use as a src prop.

export default function ImageAlbum(props) {


  let [visible, setVisible] = useState(false);
  let [active, setActive] = useState(0);

  let handleClick = function(index) {
    setVisible(!visible);
    setActive(index);
  }

  let incrementCounter = function(num) {
    console.log(num);
    if (typeof(props.src) == "object") {
      if (active + num >= props.src.length) {
        setActive(0);
      } else if (active + num < 0) {
        setActive(props.src.length-1);
      } else {
        setActive(active+num);
      }
    }
  };

  let handleKeyPress = (e) => {
    let k = e.keyCode;
    if (k === 27) {
      e.preventDefault();
      setVisible(false);
    } else if (k == 39) {
      e.preventDefault();

      incrementCounter(1);
    }  else if (k == 37) {
      e.preventDefault();
      
      incrementCounter(-1);
    };
  }

    let listItems = props.src.map((img, index) =>  (
        <div key={index} className="image-wrapper" tabIndex={`${active == index ? 0 : -1}`} onClick={() => {handleClick(index)}} onKeyDown={(e) => handleKeyPress(e)}>
          <img src={img} alt=""/>
          <div className="image-blur">
            <div className="image-expand-button">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </div>
      ));

    return (
      <div className="image-album">
        <div className="album-container">
          {listItems}
        </div>
        <p>{props.description}</p>
        <ImageFullscreen
        keys={handleKeyPress}
        active={active}
        tabIndex={0}
        description={props.description}
        increment={(e) => incrementCounter(e)}
        visible={visible}
        close={() => handleClick()}
        src={props.src}
        keyPress={(e) => handleKeyPress(e)}
        />
      </div>
    );
};
