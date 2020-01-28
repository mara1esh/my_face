import React, { useState, useEffect } from "react";
import "./styles.scss";
import ReactLoading from "react-loading";
import cx from "classnames";

const Loading = ({ setLoaded }) => {
  const [phrases] = useState([
    "Generating random skills ...",
    "Translation to English ...",
    "Loading emojis ...",
    "Grabbing your data ...",
    "Connecting w/ Elon Musk ...",
    "Starting server ...",
    "Capturing your location ..."
  ]);

  const [faded, setFade] = useState(false);
  const [showButton, setShow] = useState(false);

  const RenderRandomPhrase = () =>
    phrases[Math.floor(Math.random() * (phrases.length - 1))];

  useEffect(() => {
    if (!showButton) setTimeout(() => setFade(!faded), 2000);
  }, [faded, showButton]);

  useEffect(() => {
    setTimeout(() => setShow(true), 3000);
  }, []);

  const LoadingContent = () => (
    <div className="loading-content">
      <ReactLoading type="bars" color="white" />
    </div>
  );

  return (
    <div className="loading">
      <div className={cx({ hide: showButton })}>
        <LoadingContent />
        <RenderRandomPhrase />
      </div>

      <button
        className={cx({
          continue: true,
          showing: showButton
        })}
        onClick={() => setLoaded(true)}
      >
        Continue
      </button>
    </div>
  );
};

export default Loading;
