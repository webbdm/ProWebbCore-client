import React, { useContext } from "react";
import { UserContext } from "../../Store";

import ProfilePhoto from "../../../assets/gwebb_profile.jpg";

const Edit = () => {
  const [user] = useContext(UserContext);

  if (!user) return null;
  return (
    <div className="h-full w-100 flex flex-col m-4">
      <div className="flex flex-row flex-wrap justify-start">
        <img
          className="lg:h-64 sm:h-56 sm:w-auto sm:h-auto md:w-auto rounded-t border-accent border-b-4"
          src={ProfilePhoto}
        />
        <textarea
          value="This is where the about page description goes"
          className="bg-panel p-2 flex-grow text-white mx-4"
        ></textarea>
      </div>
      <div></div>
    </div>
  );
};

export default Edit;
