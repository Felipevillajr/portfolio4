import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="borderbot"></div>
      <Link to="/">Home</Link>
      <div className="borderbot"></div>
      <Link to="/Portfolio">Work</Link>
      <div className="borderbot"></div>
      <Link to="/About-the-Creator">About</Link>
      <div className="borderbot"></div>
    </div>
  );
}
