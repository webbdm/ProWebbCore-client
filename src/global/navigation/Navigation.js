import React from "react";
import { Link } from "react-router-dom";

import LinkedIn from "../../../assets/linkedin_2.svg";
import GitHub from "../../../assets/github_logo.png";

import "./Navigation.sass";

const Navigation = () => (
  <div className="nav-links d-flex justify-content-between">
    <div className="social-links d-flex flex-nowrap justify-content-around">
      <a href="https://www.linkedin.com/in/geoff-webb-85637586">
        <img src={LinkedIn} />
      </a>
      <a href="https://github.com/webbdm">
        <img src={GitHub} />
      </a>
    </div>
    <div className="page-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/work">Work</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/projects">Projects</Link>
    </div>
  </div>
);

export default Navigation;
