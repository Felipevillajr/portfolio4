import React from "react";
import "./Home.scss";
import Bg from "../../Components/Bg/Bg";
import { Parallax as Para } from "react-parallax";
import typing2 from "../../Images/leaf_bg.jpg";

export default function Home() {
  return (
    <>
      <div className="home__section__1">
        <Para
          contentClassName="para1"
          blur={1}
          bgImage={typing2}
          bgImageAlt="leaves"
          strength={400}
        >
          <div className="home__shape"></div>
          <h1 className="home__name">Felipe Villa Jr</h1>{" "}
          <h3 className="home__subtitle">Web Developer/Designer</h3>
        </Para>
        <p className="bodytext">Technology I use:</p>
        <p className="bodytext">
          <ul className="bodytext__list">
            <p>React.JS</p>
            <p>JavaScript</p>
            <p>MySQL</p>
            <p>CSS</p>
            <p>Sass</p>
            <p>Shopify</p>
            <p>HTML5</p>
          </ul>
          <ul className="bodytext__list">
            <p>Node.JS</p>
            <p>GitHub</p>
            <p>Heroku</p>
            <p>REST API</p>
            <p>SEO Services</p>
            <p>Adobe Suite</p>
            <p>WordPress</p>
          </ul>
        </p>

        <br />
        <p className="bodytext">Some Examples of my Work</p>
        <ul>
          <li className="examples">
            <a
              className="bodylinks"
              href="https://codesandbox.io/s/spacemanparallax-qut1r?file=/src/styles.css"
              target="_blank"
              rel="noreferrer"
            >
              CSS and Javascript Creations
            </a>

            <a
              className="bodylinks"
              href="https://pacific-retreat-51764.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Message Board
            </a>
          </li>
        </ul>
      </div>

      <Bg />
    </>
  );
}
