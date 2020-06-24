import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.sass";

const Navigation = () => (
  <div className="nav-links">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/background">Background</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/projects">Projects</Link>
  </div>
);

export default Navigation;
