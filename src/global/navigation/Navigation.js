import React from "react";
import { Link } from "react-router-dom";

import LinkedIn from "../../../assets/linkedin_2.svg";
import GitHub from "../../../assets/github_logo.png";

import "./Navigation.css";

const Navigation = () => (
  <div className="flex flex-row items-center w-1/2 self-end -mr-2">
    <div className="social-links flex flex-row border-accent w-100 border-b-2">
      <a
        className="my-2"
        href="https://www.linkedin.com/in/geoff-webb-85637586"
      >
        <img className="icon" src={LinkedIn} />
      </a>
      <a className="my-2 mr-4" href="https://github.com/webbdm">
        <img className="icon" src={GitHub} />
      </a>
    </div>
    <div className="page-links text-white border-accent w-100 border-b-2">
      <Link className="mr-4" to="/">Home</Link>
      <Link className="mr-4" to="/about">About</Link>
      <Link className="mr-4" to="/work">Work</Link>
      <Link className="mr-4" to="/projects">Projects</Link>
    </div>
  </div>
);

export default Navigation;
