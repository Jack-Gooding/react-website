import React, { useEffect, useState, useRef } from "react";

import "../css/header2.scss";

import { Link } from "react-router-dom";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, setMobileNavExpand) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        // alert("You clicked outside of me!");
        setMobileNavExpand(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default function Header(props) {
  let [mobileNavExpand, setMobileNavExpand] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setMobileNavExpand);

  return (
    <>
      <div ref={wrapperRef} className="header-bar">
        <div className="logo">
          <span>Jack Gooding</span>
        </div>
        <div className="nav-menu">
          <ul>
            <li className="nav-link">
              <Link to="/">
                <span>Home</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/projects">
                <span>Projects</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/3DPrinting">
                <span>3D Printing</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/Art">
                <span>Art</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/about">
                <span>About</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={`mobile nav-menu`}>
          <button onClick={() => setMobileNavExpand(!mobileNavExpand)}>
            <div className="burger-div">
              <span className="hamburger-icon"></span>
            </div>
          </button>
        </div>
      </div>
      <div className={`mobile nav-popout ${mobileNavExpand ? "active" : ""}`}>
        <ul>
          <li onClick={() => setMobileNavExpand(!mobileNavExpand)}>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li onClick={() => setMobileNavExpand(!mobileNavExpand)}>
            <Link to="/projects">
              <span>Projects</span>
            </Link>
          </li>
          <li onClick={() => setMobileNavExpand(!mobileNavExpand)}>
            <Link to="/3DPrinting">
              <span>3D Printing</span>
            </Link>
          </li>
          <li onClick={() => setMobileNavExpand(!mobileNavExpand)}>
            <Link to="/Art">
              <span>Art</span>
            </Link>
          </li>
          <li onClick={() => setMobileNavExpand(!mobileNavExpand)}>
            <Link to="/about">
              <span>About</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
