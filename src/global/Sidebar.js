import React from "react";
import { Link } from "react-router-dom";

import LinkedIn from "../../assets/linkedin_2.svg";
import GitHub from "../../assets/github_logo.png";

import "./Sidebar.css";

const Sidebar = () => (
  <div
    className="sidebar hidden lg:flex xl:flex h-100 px-2 bg-panel flex-col justify-start items-center"
  >
    <div className="sticky top-0 flex flex-col items-center h-100 w-full">
      <Link to="/">
        <div className="rounded-sm border-2 border-accent px-2 mt-4 text-center">
          <span className="text-white inline-block text-4xl m-1">W</span>
        </div>
      </Link>
      <div className="w-full flex flex-col items-center my-2">
        <a
          className="w-full flex flex-row justify-center hover:border-accent hover:border-l-4 block py-2 my-8"
          href="https://www.linkedin.com/in/geoff-webb-85637586"
        >
          <img className="icon" src={LinkedIn} />
        </a>

        <a
          className="w-full flex flex-row justify-center hover:border-accent hover:border-l-4 block py-2 my-8"
          href="https://github.com/webbdm"
        >
          <img className="icon" src={GitHub} />
        </a>
      </div>
    </div>
  </div>
);

export default Sidebar;
