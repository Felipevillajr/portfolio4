import React from "react";
import "./Home.scss";
import Bg from "../../Components/Bg/Bg";
import { Parallax as Para } from "react-parallax";
import typing from "../../Images/takingnotes.jpg";
import typing2 from "../../Images/leaf_bg.jpg";
import computer from "../../Images/computer_typing.jpg";

export default function Home() {
  return (
    <>
      <div className="home__section__1">
        <Para
          blur={1}
          bgImage={typing2}
          bgImageAlt="typing on Computer"
          strength={400}
        >
          <div className="home__shape"></div>
          <h1 className="home__name">Felipe Villa Jr</h1>
        </Para>

        <h3 className="home__subtitle">Web Developer/Web Designer</h3>
        <h4 className="home__subtitle2">
          Unique and Boutique Style Design/Development
        </h4>
        <Para
          blur={1}
          bgImage={typing}
          bgImageAlt="typing on Computer"
          strength={500}
        >
          <div className="home__para"></div>
        </Para>
        <br />
        <Para
          blur={1}
          bgImage={typing}
          bgImageAlt="typing on Computer"
          strength={500}
        >
          <div className="home__para"></div>
        </Para>
        <br />
        <Para
          blur={1}
          bgImage={typing}
          bgImageAlt="typing on Computer"
          strength={500}
        >
          <div className="home__para"></div>
        </Para>
        <br />
        <Para
          blur={1}
          bgImage={typing}
          bgImageAlt="typing on Computer"
          strength={500}
        >
          <div className="home__para"></div>
        </Para>
        <br />
        <Para
          blur={1}
          bgImage={typing}
          bgImageAlt="typing on Computer"
          strength={500}
        >
          <div className="home__para"></div>
        </Para>
        <br />
        <Para
          blur={1}
          bgImage={typing}
          bgImageAlt="typing on Computer"
          strength={500}
        >
          <div className="home__para"></div>
        </Para>
        <br />
        <Para
          blur={1}
          bgImage={typing}
          bgImageAlt="typing on Computer"
          strength={500}
        >
          <div className="home__para"></div>
        </Para>
        <br />
        <Para
          blur={1}
          bgImage={typing}
          bgImageAlt="typing on Computer"
          strength={500}
        >
          <div className="home__para"></div>
        </Para>
        <br />

        <h3>
          Reliable Web Solutions<p>Engaging Designs</p>
          <p>Digital Innovation</p>
        </h3>

        <Para
          blur={1}
          bgImage={computer}
          bgImageAlt="typing on Computer"
          strength={400}
        >
          <div className="home__para2"></div>
        </Para>
        <h3>Empower Your Business</h3>
        <h3>
          Bring cyberspace to your business and enpower yourself to focus on
          growth. My goal is to provide full individualized service and support
          for all web based technical needs. So you can generate more revenue
          for your business.
        </h3>
        <br />
        <h3>Focus On Growth</h3>
      </div>
      <Bg />
    </>
  );
}
