import React, { useContext } from "react";
import { UserContext } from "../../Store";

import ProfilePhoto from "../../../assets/gwebb_profile.jpg";

const PhotoGrid = ({ data }) => {
  return (
    <div className="p-4 flex flex-wrap -mx-3 overflow-hidden md:-mx-5">
      {data.map((image) => (
        <div
          key={image.label}
          // className="my-2 mx-2 max-w-sm overflow-hidden flex flex-col shadow-lg flex-grow items-center"
          className="my-3 px-3 w-full overflow-hidden md:my-5 md:px-5 lg:w-1/4"
        >
          <img
            className="m-0 sm:h-auto lg:h-56 w-full rounded-t object-cover border-accent border-b-2"
            src={`${process.env.BUCKET_URL}/${image.url}`}
          />
          <p className="bg-panel px-1 py-2 text-white w-full rounded-b text-center">
            {image.label}
          </p>
        </div>
      ))}
    </div>
  );
};

const About = () => {
  const [user] = useContext(UserContext);

  if (!user) return null;

  return (
    <div className="h-100 d-flex flex-col flex-wrap align-items-center justify-content-around">
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
      <PhotoGrid
        data={[
          { label: "Backpacking through Tennessee", url: "scsp_2018.jpg" },
          { label: "Final Vans Warped Tour", url: "warped_tour_2018.jpg" },
          {
            label: "Nashville Software School",
            url: "skill_hackathon.jpg",
          },
          {
            label: "Titans 2018 (Derrick Henry's 99-Yard TD Run)",
            url: "TNF_2018.jpg",
          },
        ]}
      />
    </div>
  );
};

export default About;
