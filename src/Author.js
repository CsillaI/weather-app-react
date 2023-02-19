import React from "react";
import "./Author.css";

export default function Author() {
  return (
    <small className="Author">
      <span className="footer">
        Designed & Coded by{" "}
        <a
          href="https://www.linkedin.com/in/csilla-i-587b9474/"
          target="_blank"
          rel="noreferrer"
          className="linkedIn-link"
        >
          Csilla Ihnatiuc
        </a>
        , open sourced on{" "}
        <a
          href="https://github.com/CsillaI/my-weather-app"
          target="_blank"
          rel="noreferrer"
          className="git-link"
        >
          GitHub
        </a>
        , & hosted on{" "}
        <a
          href="https://bespoke-melomakarona-f38b91.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="netlify-link"
        >
          Netlify
        </a>
        !
      </span>
    </small>
  );
}
