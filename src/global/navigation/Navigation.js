import React from "react";
import { Link } from "react-router-dom";

import LinkedIn from "../../../assets/linkedin_2.svg";

import "./Navigation.sass";

const Navigation = () => (
  <div className="nav-links d-flex justify-content-between position-sticky sticky-top">
    <div className="social-links">
      <a href="https://www.linkedin.com/in/geoff-webb-85637586">
        <img src={LinkedIn} />
      </a>
    </div>
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/work">Work</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/projects">Projects</Link>
    </div>
  </div>
);

export default Navigation;
