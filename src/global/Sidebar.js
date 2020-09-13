import React from "react";
import { Link } from "react-router-dom";

import LinkedIn from "../../assets/linkedin_2.svg";
import GitHub from "../../assets/github_logo.png";

import "./Sidebar.css";

const Sidebar = () => (
  <div className="sidebar hidden lg:flex xl:flex h-auto bg-panel w-56 py-2 flex-col justify-start items-center">
    <div>
      <Link to="/">
        <div className="rounded border-2 border-accent px-2 mt-4 text-center">
          <span className="text-white inline-block text-4xl m-1">W</span>
        </div>
      </Link>
    </div>
    <div className="my-2">
      <a
        className="block my-8"
        href="https://www.linkedin.com/in/geoff-webb-85637586"
      >
        <img className="icon" src={LinkedIn} />
      </a>
      <a className="block my-8" href="https://github.com/webbdm">
        <img className="icon" src={GitHub} />
      </a>
    </div>
  </div>
);

export default Sidebar;
