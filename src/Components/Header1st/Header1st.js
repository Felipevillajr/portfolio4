import React from "react";
import "./Header1st.scss";
import { Link } from "react-router-dom";

export default function Header1st() {
  return (
    <div className="header1st">
      <Link to="/Portfolio">
        <div className="link_border">Work</div>
      </Link>
      <Link to="/About-the-Creator">About</Link>
    </div>
  );
}