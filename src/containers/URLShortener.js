import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import ImageAlbum from "../components/tutorials/ImageAlbum";
import { Link } from "react-router-dom";

import axios from "axios";
import moment from "moment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCheck } from "@fortawesome/free-solid-svg-icons";

import styles from "../css/URLShortener.scss";
// import styles2 from '../css/Printing.scss';

export default function Home(props) {
  let [mode, setMode] = useState("create");

  let [urlsCreatedCount, setUrlsCreatedCount] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get("https://url.jack-gooding.com/urls/count");
        setUrlsCreatedCount(res.data.count);
      } catch (e) {
        setUrlsCreatedCount(0);
      }
    })();
  }, []);

  let getShortURL = async (e) => {
    let res = "jack-gooding.com/url/aIUb5c";
    let x;
    x = await axios.get("https://url.jack-gooding.com");
    // console.log(x.data.message);
    // let shortURL = await axios.post("https://url.jack-gooding.com/url", {url: })
    return res;
  };

  // let setCounter = () => {
  //   counterDec = setInterval(() => {
  //     let newSeconds = timeoutSecondsRemaining;
  //     newSeconds -= 1;
  //     console.log("new secs");
  //     console.log(newSeconds);
  //     setTimeoutSecondsRemaining(newSeconds);
  //     if (newSeconds <= 0) {
  //       clearInterval(counterDec);
  //     }
  //   }, 1000);
  // };

  // <FontAwesomeIcon icon={faCheck} />
  return (
    <div className="url-shortener-page">
      <Helmet>
        <title>Jack Gooding // URL Shortener</title>
        <meta name="description" content="URL Shortener tool." />
      </Helmet>
      <div className="page-title">
        <h1>URL Shortener!</h1>
        <h2>
          <span>{urlsCreatedCount}</span> URLs shrunk!
        </h2>
      </div>
      <div className="url-tools-container">
        <div className="url-tools-panel">
          <div className="mode-toggle">
            <button
              onClick={(e) => {
                setMode("create");
              }}
            >
              Create URL
            </button>
            <button
              onClick={(e) => {
                setMode("stats");
              }}
            >
              View URL Stats
            </button>
          </div>
          {mode === "create" ? (
            <RenderCreate
              useState={useState}
              urlsCreatedCount={urlsCreatedCount}
              setUrlsCreatedCount={setUrlsCreatedCount}
            />
          ) : (
            <RenderStats useState={useState} />
          )}
        </div>
      </div>
    </div>
  );
}

let RenderCreate = (props) => {
  let [url, updateURL] = props.useState("");
  let [slug, updateSlug] = props.useState("");
  let [creatingURL, setCreatingURL] = props.useState(false);
  let [urlErr, setURLErr] = props.useState(null);
  let [shortURL, setShortURL] = props.useState("");
  let [timeoutSecondsRemaining, setTimeoutSecondsRemaining] = props.useState(0);

  let handleSubmit = async (e) => {
    e.preventDefault();
    setShortURL("");

    //remove leading and trailing whitespace
    updateURL(url.trim());

    let validURL = await checkValidURL(url);
    // console.log(validURL ? "Valid URL!" : "Invalid URL!");

    if (validURL) {
      setURLErr(null);
      setCreatingURL(true);

      // let res = await getShortURL(url);
      let res = await createShortURL(url, slug);
      if (res.status == 201 || res.status == 200) {
        setShortURL(res.data.url);
        props.setUrlsCreatedCount(props.urlsCreatedCount + 1);
      }
      setCreatingURL(false);
    } else {
      setURLErr("Invalid URL! Please try again.");
    }
  };

  let checkValidURL = async (url) => {
    //URL pattern
    let regex = new RegExp(
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
    );
    let test = regex.test(url);

    return test;
  };

  let createShortURL = async (url, slug) => {
    try {
      let res = await axios.post("https://url.jack-gooding.com/url", {
        // let res = await axios.post("http://localhost:3021/url", {
        url,
        slug,
      });
      // console.log(res);
      return res;
    } catch (e) {
      if (e.response.status === 429) {
        let secondsRemaining = Math.round(
          moment(e.response.data.resetTime).diff(moment(), "seconds")
        );
        console.log("secs");
        console.log(secondsRemaining);

        await setTimeoutSecondsRemaining(secondsRemaining);

        // await setCounter();

        setURLErr(`You have created too many URLs recently. Please wait ${
          Math.floor(secondsRemaining / 60) > 0
            ? " " +
              Math.floor(secondsRemaining / 60) +
              " minute" +
              (Math.floor(secondsRemaining / 60) > 1 ? "s" : "")
            : ""
        }
                      ${
                        Math.floor(secondsRemaining / 60) > 0 &&
                        secondsRemaining > 0
                          ? " and"
                          : ""
                      }
                      ${
                        secondsRemaining > 0
                          ? " " +
                            (secondsRemaining % 60) +
                            " second" +
                            (secondsRemaining > 1 ? "s" : "")
                          : ""
                      }`);
      } else {
        setURLErr(e.response.data);
      }
      return e;
    }
  };

  return (
    <div className="url-shortner-container">
      <form onSubmit={handleSubmit}>
        <div className="url-input">
          <FontAwesomeIcon icon={faExternalLinkAlt} />
          <input
            aria-label="Enter URL here"
            name="url"
            placeholder="Enter URL here..."
            value={url}
            onChange={(e) => updateURL(e.target.value)}
            autoComplete="off"
          ></input>
        </div>

        <div className="url-slug">
          <p>url.jack-gooding.com/</p>
          <input
            aria-labelledby="Enter your desired slug here"
            name="slug"
            placeholder="(optional) Enter slug here..."
            value={slug}
            id="slug-input"
            onChange={(e) => updateSlug(e.target.value)}
            autoComplete="off"
          ></input>
        </div>
        <div id="uerr" className="e-msg">
          <p>{urlErr}</p>
        </div>
        <button id="url-create" type="submit" disabled={creatingURL}>
          {creatingURL ? "Shortening..." : "Shorten!"}
        </button>
      </form>
      <div>{shortURL}</div>
    </div>
  );
};

let RenderStats = (props) => {
  let [input, updateInput] = props.useState("");
  let [slug, updateSlug] = props.useState("");

  let [gettingURLStats, setGettingURLStats] = props.useState(false);

  //Get URL stats
  let [urlURL, setUrl] = useState(null);
  let [urlCreatedTime, setURLCreatedTime] = useState(null);
  let [urlLastAccessed, setLastAccessed] = useState(null);
  let [urlUsedCount, setURLUsedCount] = useState(null);
  let [urlUses, setURLUses] = useState(null);

  let [errMsg, setErrMsg] = useState(null);

  let requestURLData = async (e) => {
    e.preventDefault();
    setGettingURLStats(true);

    let res = await getURLData(slug);
    // console.log(res);

    setGettingURLStats(false);

    if (res.data) {
      setErrMsg(null);
      if (res.data.url != null) {
        let url = unescape(res.data.url.url);
        setUrl(url);
        setURLCreatedTime(
          moment(res.data.url.created).format("YYYY/MM/DD HH:mm")
        );

        let accessedAt = res.data.url.accessedAt;

        if (accessedAt != null) {
          setLastAccessed(moment(accessedAt).format("YYYY/MM/DD HH:mm"));
        }
        setURLUsedCount(res.data.url.count);
        console.log(res.data);
      } else {
        setUrl(null);
        setURLCreatedTime(null);
        setLastAccessed(null);
        setURLUsedCount(null);
      }

      if (res.data.usages != null) {
        setURLUses(res.data.usages);
      } else {
        setURLUses(null);
      }
    } else {
      setURLUses(null);

      setUrl(null);
      setURLCreatedTime(null);
      setLastAccessed(null);
      setURLUsedCount(null);
    }
  };

  let getURLData = async (slug) => {
    try {
      let res = await axios.get(`https://url.jack-gooding.com/usage/${slug}`);
      // let res = await axios.get(`http://localhost:3021/usage/${slug}`);
      return res;
    } catch (e) {
      if (e.response.status == 404) {
        setErrMsg("URL not found. Please try again.");
      } else if (e.response.status != 200) {
        if (e.response.data) {
          setErrMsg("Error. " + e.response.data);
        } else {
          setErrMsg("Error. ");
        }
      }
      return e;
    }
  };

  let parseSlug = (value) => {
    updateInput(value);
    let slug = "";
    if (value.split("/").length > 1) {
      slug = value.split("/")[value.split("/").length - 1];
    } else {
      slug = value;
    }
    updateSlug(slug);
  };

  return (
    <div className="url-shortner-container">
      <form onSubmit={requestURLData}>
        <div className="url-input">
          <FontAwesomeIcon icon={faExternalLinkAlt} />
          <input
            aria-label="Enter URL here"
            name="url"
            placeholder="Enter URL or slug here..."
            value={input}
            onChange={(e) => parseSlug(e.target.value)}
            autoComplete="off"
          ></input>
        </div>
        <div id="uerr" className="e-msg">
          <p>{errMsg}</p>
        </div>
        <button id="url-create" type="submit" disabled={gettingURLStats}>
          {gettingURLStats ? "Getting..." : "Get stats!"}
        </button>
      </form>
      {urlURL != null ? (
        <>
          <div className="url-stats">
            <p>
              <span>URL: </span>
              {unescape(urlURL)}
            </p>
            <p>
              <span>URL Created: </span>
              {urlCreatedTime}
            </p>
            <p>
              <span>Last Accessed: </span>
              {urlLastAccessed}
            </p>
            <p>
              <span>Times Used: </span>
              {urlUsedCount}
            </p>
            {urlUses != null ? (
              <>
                <p>
                  <span>Accessed: </span>
                </p>
                <ul>{RenderUses(urlUses)}</ul>
              </>
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

let RenderUses = (uses) => {
  return uses.map((use, index) => (
    <li key={"use-" + index}>
      {moment(use.accessedAt).format("YYYY/MM/DD HH:mm")}
    </li>
  ));
};
