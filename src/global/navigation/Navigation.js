import React from "react";
import { Link } from "react-router-dom";

import LinkedIn from "../../../assets/linkedin_2.svg";
import GitHub from "../../../assets/github_logo.png";

import "./Navigation.css";

const Navigation = () => (
  <div className="flex flex-row sticky top-0 bg-background items-center justify-end w-full self-end ">
    <div className="social-links lg:hidden flex flex-row border-accent border-b-2">
      <a
        className="my-2 mr-12"
        href="https://www.linkedin.com/in/geoff-webb-85637586"
      >
        <img className="icon" src={LinkedIn} />
      </a>
      <a className="my-2 mr-8" href="https://github.com/webbdm">
        <img className="icon" src={GitHub} />
      </a>
    </div>
    <div className="page-links py-2 text-white border-accent lg:flex xl:flex hidden border-b-2">
      {/* <Link className="text-xl mr-4" to="/">Home</Link> */}
      <Link className="text-xl mr-12" to="/work">Work</Link>
      <Link className="text-xl mr-12" to="/projects">Projects</Link>
      <Link className="text-xl mr-12" to="/about">About</Link>
    </div>
  </div>
);

export default Navigation;
