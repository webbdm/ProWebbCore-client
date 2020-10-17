import React, { useContext } from "react";
import { UserContext } from "../../Store";

import ProfilePhoto from "../../../assets/gwebb_profile.jpg";

const About = () => {
  const [user] = useContext(UserContext);

  if (!user) return null;

  return (
    <div className="h-100 d-flex flex-col flex-wrap align-items-center justify-content-around mx-4">
      <div className="px-4 pb-12">
        <img
          className="mt-1 mb-1 mr-4 lg:h-56 sm:h-64 w-auto rounded float-left"
          src={ProfilePhoto}
        />

        <p className="my-4 px-0 text-white text-left">
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
          because it was my passion. To me, software is like solving a giant
          puzzle or having a Lego set with endless possibilities. Four
          incredible years into software development, I'm still always waking up
          each day looking forward to the next tech idea that I can make a
          reality.
        </p>
      </div>
      <div className="clear-both w-100 mt-20 mx-4 border-t-2 border-accent"></div>
      <div className="mt-16 px-4 flex flex-row flex-wrap justify-between items-center">
        {[
          { label: "Backpacking through Tennessee", url: "scsp_2018.jpg" },
          { label: "Final Vans Warped Tour", url: "warped_tour_2018.jpg" },
          { label: "Nashville Software School", url: "skill_hackathon.jpg" },
          { label: "Titans 2018 (Derrick Henry's 99-Yard TD Run)", url: "TNF_2018.jpg" },
        ].map((image) => (
          <div
            key={image.label}
            className="my-2 py-4 flex flex-col flex-grow items-center"
          >
            <img
              className="h-56 w-56 rounded object-cover"
              src={`${process.env.BUCKET_URL}/${image.url}`}
            />
            <p className="text-white w-full mt-1 text-center">{image.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
