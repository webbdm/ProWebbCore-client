import React from "react";

import ProfilePhoto from "../../../assets/gwebb_profile.jpg";
import Logo from "../../../assets/gwebb_logo.png";

import "./Home.sass";

const Home = () => (
  <div className="home-wrapper mh-100 d-flex flex-column justify-content-center">
    {/* <div className="my-4 mx-16">
      <img className="home-profile-photo rounded" src={ProfilePhoto} />
    </div> */}
    <div className="my-4 mx-4">
      <img className="mb-4 home-logo" src={Logo} />
      <h3 className="text-white">Visually minded software developer with a passsion for solving puzzles</h3>
    </div>
  </div>
);

export default Home;
