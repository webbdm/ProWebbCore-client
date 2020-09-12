import React from "react";
import { Link } from "react-router-dom";

import LinkedIn from "../../../assets/linkedin_2.svg";
import GitHub from "../../../assets/github_logo.png";

import "./Home.sass";

const MainLogo = () => (
  <div className="rounded border border-accent px-2">
    <span className="text-white text-6xl">WEB</span>
    <span className="text-accent text-6xl">B</span>
  </div>
);

const Home = () => (
  <div className="h-screen home-wrapper flex flex-col justify-between p-2">
    <div className="home-nav flex flex-row justify-between self-end border-accent w-24 border-b-2 -mr-2">
      <a className="my-2" href="https://www.linkedin.com/in/geoff-webb-85637586">
        <img className="icon" src={LinkedIn} />
      </a>
      <a className="my-2 mr-4" href="https://github.com/webbdm">
        <img className="icon" src={GitHub} />
      </a>
    </div>
    <div className="home-main flex flex-row justify-around">
      <div className="flex flex-col justify-center items-center">
        <MainLogo />
        <h1 className="text-white text-center m-2">
          Visually-minded software developer with a passion for solivng puzzles
        </h1>
      </div>
    </div>
    <div className="home-footer flex flex-col justify-around">
      <div className="page-links flex flex-row flex-wrap justify-around text-center text-white text-4xl mb-2 px-2">
        <Link className="border-accent border-b-2 mx-8 mb-4" to="/about">
          ABOUT
        </Link>
        <Link className="border-accent border-b-2 mx-8 mb-4" to="/work">
          WORK
        </Link>
        <Link className="border-accent border-b-2 mx-8 mb-4" to="/projects">
          PROJECTS
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
