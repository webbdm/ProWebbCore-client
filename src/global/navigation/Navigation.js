import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.sass";

const Navigation = () => (
  <div className="nav-links">
    <div className="social-links">
      <span>Twitter</span>
      <span>Email</span>
      <span>LinkedIn</span>
    </div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/work">Work</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/projects">Projects</Link>
  </div>
);

export default Navigation;
