import React, { useContext } from "react";
import { UserContext } from "../../Store";

import ProfilePhoto from "../../../assets/gwebb_profile.jpg";

const About = () => {
  const [user] = useContext(UserContext);

  if (!user) return null;

  return (
    <div className="h-100 d-flex flex-row flex-wrap align-items-cener justify-content-around">
      <img
        className="m-4 rounded"
        src={ProfilePhoto}
        style={{ height: "auto", width: "35vw" }}
      />
      <div>
        <p className="m-4 w-7 text-white text-left">
          Born and raised in Wichita, Kansas, I grew up making trips out West
          hiking & snowboarding through the Rockies. I also had a passion for
          music & entertainment, which led me to Nashville in 2011 when I
          enrolled at Belmont University for music business. When I discovered
          the music & incredible outdoor adventures Tennessee had to offer, I
          knew it was the place for me. Working in entertainment marketing, I
          found myself assisting with & managing numerous artist and brand
          websites. The moment I started delving into the code, it sparked an
          instant zeal to learn the craft of creating visually impressive and
          immersive websites. After 2 years of continued work in marketing, web
          development became something I did not because it was work, but
          because it was my passion. To me, it’s like solving a giant puzzle or
          having a Lego set with endless possibilities. Four incredible years
          into software development, I'm still always waking up each day looking forward
          to the next tech idea that I can make a reality.
        </p>
      </div>
    </div>
  );
};

export default About;
