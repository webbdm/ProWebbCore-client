import React from "react";
import { Link } from "react-router-dom";

import LinkedIn from "../../assets/linkedin_2.svg";
import GitHub from "../../assets/github_logo.png";

import "./Sidebar.css";

const Sidebar = () => (
  <div className="sidebar flex h-screen bg-panel w-40 flex-col align-items-center">
    <img className="icon" src={LinkedIn} />
    <img className="icon" src={GitHub} />
  </div>
);

export default Sidebar;
