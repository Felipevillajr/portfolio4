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
          bgImageAlt="typing on Computer"
          strength={400}
        >
          <div className="home__shape"></div>
          <h1 className="home__name">Felipe Villa Jr</h1>{" "}
          <h3 className="home__subtitle">Web Developer/Designer</h3>
          <h3 className="home__subtitle2">
            <div>Unique and Boutique Style Design/Development</div>
            <br />
            <div>Reliable Web Solutions </div>
            <br />
            <div>Engaging Digital Designs</div>
            <br />
            <div>Empower Innovation and Your Business</div>
          </h3>
        </Para>
        <p className="bodytext">
          Bring cyberspace to your business and enpower yourself to focus on
          growth. My goal is to provide full individualized service and support
          for all web based technical needs. So you can generate more revenue
          for your business.
        </p>
        <br />
        <p className="bodytext">Some Examples of my Work</p>
        <ul>
          <li>
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
