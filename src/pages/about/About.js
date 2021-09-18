import React, { useContext, useEffect } from "react";
import { UserContext } from "../../Store";

import ProfilePhoto from "../../../assets/gwebb_profile.jpg";

const PhotoGrid = ({ data }) => {
  return (
    <div className="p-4 flex flex-wrap overflow-hidden">
      {data.map((image) => (
        <div
          key={image.label}
          className="my-3 px-3 w-full overflow-hidden md:my-5 md:px-5 lg:w-1/4"
        >
          <img
            className="m-0 sm:h-auto lg:h-56 w-full rounded-t-md object-cover border-accent border-b-2"
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
    <div className="mt-3 h-full d-flex flex-col flex-wrap align-items-center justify-content-around">
      <div className="px-4 pb-12">
        <div className="flex flex-col md:float-left mr-2 mt-0">
          <img
            className=" mt-1 lg:h-64 sm:h-56 sm:w-auto sm:h-auto md:w-auto rounded-t-md border-accent border-b-4"
            src={ProfilePhoto}
          />
          <p className="bg-panel px-1 py-2 text-white w-full rounded-b-md text-center">
            {user.firstName + " " + user.lastName}
          </p>
        </div>

        <p className="my-4 px-0 text-white text-left">
          {user.bio}
        </p>
      </div>
      <div className="w-100 mt-32 mx-4 border-t-2 border-accent"></div>
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
