import { useState } from "react";
import baseball from "../../static/baseball.png";
import "./HomePage.scss";

function HomePage() {
  return (
    <div className="Homepage">
      <div className="Homepage-body">
        <img src={baseball} className="Homepage-logo" alt="logo" />
        <p>BatBoyz Homepage</p>
        <a
          className="Homepage-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Documentation Here
        </a>
      </div>
    </div>
  );
}

export default HomePage;
