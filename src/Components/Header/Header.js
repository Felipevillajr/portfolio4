import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/Portfolio">Work</Link>
      <Link to="/About-the-Creator">About</Link>
    </div>
  );
}
