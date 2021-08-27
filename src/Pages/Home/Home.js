import React from "react";
import "./Home.scss";
import Header1st from "../../Components/Header1st/Header1st";
import Bg from "../../Components/Bg/Bg";

export default function Home() {
  return (
    <>
      <Header1st />
      <div className="home__section__1"></div>
      <Bg />
    </>
  );
}
