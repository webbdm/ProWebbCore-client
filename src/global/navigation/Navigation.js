import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import MobileDropdown from "./MobileDropdown.js";

import LinkedIn from "../../../assets/linkedin_2.svg";
import GitHub from "../../../assets/github_logo.png";

import "./Navigation.css";

const Navigation = () => {
  const [showingDropdown, setShowingDropdown] = useState(false);
  return (
    <div className="flex flex-row sticky-all top-0 bg-background items-center justify-end w-full self-end ">
      <div className="social-links lg:hidden flex flex-row border-accent border-b-2 items-center">
        <a
          className="my-2 mr-12"
          href="https://www.linkedin.com/in/geoff-webb-85637586"
        >
          <img className="icon" src={LinkedIn} />
        </a>
        <a className="my-2 mr-8" href="https://github.com/webbdm">
          <img className="icon" src={GitHub} />
        </a>
        <div
          className="mobile-nav-button border-accent border rounded m-3"
          onClick={() => setShowingDropdown(!showingDropdown)}
          onMouseOver={() => setShowingDropdown(true)}
        >
          <svg
            className="p-1 px-2 pb-0"
            fill="#FFF"
            viewBox="0 0 100 80"
            width="40"
            height="40"
          >
            <rect width="100" height="5"></rect>
            <rect y="30" width="100" height="5"></rect>
            <rect y="60" width="100" height="5"></rect>
          </svg>
          <MobileDropdown
            setShowingDropdown={setShowingDropdown}
            showingDropdown={showingDropdown}
          />
        </div>
      </div>
      <div className="page-links py-2 text-white border-accent lg:flex xl:flex hidden border-b-2">
        {[
          { name: "Work", path: "/work" },
          { name: "Projects", path: "/projects" },
          { name: "About", path: "/about" },
        ].map((link) => (
          <NavLink
            key={link.name}
            className="text-xl mr-12"
            activeStyle={{ fontWeight: "bold" }}
            to={link.path}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
