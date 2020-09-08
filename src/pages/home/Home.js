import React from "react";

import ProfilePhoto from "../../../assets/gwebb_profile.jpg";
import Logo from "../../../assets/gwebb_logo.png";

import "./Home.sass";

const Home = () => (
  <div className="h-100 mx-4 home-wrapper d-flex flex-column align-items-center justify-content-center">
    <div className="name-wrapper">
      <h1>
        WEB<span>B</span>
      </h1>
    </div>
    <h3 className="mt-4 text-white">
      Visually minded software developer with a passsion for solving puzzles
    </h3>
  </div>
);

export default Home;
