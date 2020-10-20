import React, { useContext, useState } from "react";
import { UserContext } from "../../Store";

import ProfilePhoto from "../../../assets/gwebb_profile.jpg";

const EditProject = ({ project, update }) => {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);

  const [image, setImage] = useState(project.image);

  return (
    <div className="flex flex-row flex-wrap flex-nowrap justify-start my-4">
      <img
        className="h-32 mb-2 w-auto rounded-sm object-cover"
        src={`${process.env.BUCKET_URL}/${image}`}
      />
      <div className="flex flex-col h-auto w-full sm:mt-2">
        <div className="flex flex-row justify-between bg-panel rounded-t p-2 border-accent border-b w-100">
          <input
            className="outline-none text-white bg-panel"
            value={name}
            onChange={(e) => setName[e.target.value]}
          />
          <div className="bg-panel rounded px-4 py-1 text-white cursor-pointer hover:font-semibold">
            Save
          </div>
        </div>
        <textarea
          className="bg-panel text-white h-32 w-100 outline-none rounded-b resize-none p-2"
          value={description}
          onChange={(e) => setDescription[e.target.value]}
        ></textarea>
      </div>
    </div>
  );
};

const Edit = () => {
  const [user] = useContext(UserContext);

  if (!user) return null;
  return (
    <div className="h-full w-100 flex flex-col m-4">
      <div className="flex flex-row justify-between items-center border-accent border-b m-4 ml-0 pb-2">
        <h1 className="text-white text-2xl m-0">Bio</h1>
        <div className="bg-panel rounded px-4 py-1 text-white cursor-pointer hover:border-accent hover:border">
          Save
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-start mb-2">
        <img
          className="lg:h-64 sm:h-56 sm:w-auto sm:h-auto md:w-auto rounded-t border-accent border-b-4"
          src={ProfilePhoto}
        />
        <textarea
          value="This is where the about page description goes"
          className="bg-panel p-2 flex-grow text-white lg:mx-4 resize-none rounded outline-none"
        ></textarea>
      </div>

      <div className="flex flex-row justify-between items-center border-accent border-b m-4 ml-0 pb-2">
        <h1 className="text-white text-2xl m-0">Projects</h1>
      </div>

      <div className="flex flex-col w-full">
        {user.projects.map((project) => (
          <EditProject project={project} />
        ))}
      </div>
    </div>
  );
};

export default Edit;
