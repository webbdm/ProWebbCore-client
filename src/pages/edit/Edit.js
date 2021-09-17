import React, { useContext, useEffect, useState } from "react";

import { UserContext } from "../../Store";

import { projectApi, userApi, fileApi } from "../../providers/api.js";

import ProfilePhoto from "../../../assets/gwebb_profile.jpg";

const EditProject = ({ project, update }) => {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);

  const [image, setImage] = useState(project.image);

  const saveProject = () =>
    projectApi.update(project.id, { ...project, name, description, image });

  return (
    <div className="flex flex-row flex-wrap lg:flex-no-wrap items-start justify-between my-4">
      <div className="lg:h-32 sm:h-64 mb-2 rounded">
        <img
          className="sm:w-auto md:w-64 h-52 mr-4 mb-2 rounded-sm object-cover"
          src={`${process.env.BUCKET_URL}/${image}`}
        />
      </div>
      <div className="flex flex-col h-auto w-full md:ml-4">
        <div className="flex flex-row justify-between bg-panel rounded-t border-accent border-b w-100">
          <input
            className="outline-none h-100 text-white bg-panel rounded-t focus:font-semibold cursor-pointer flex-grow p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div
            className="bg-panel rounded px-4 py-1 mt-1 text-white cursor-pointer hover:font-semibold"
            onClick={() => saveProject()}
          >
            Save
          </div>
        </div>
        <textarea
          className="bg-panel text-white h-40 w-100 outline-none rounded-b focus:font-semibold resize-none p-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

const Edit = () => {
  const [user] = useContext(UserContext);

  const [bio, setBio] = useState(user.bio);
  const [image, setImage] = useState("");
  const [designFile, setDesignFile] = useState("");

  const saveUser = () => userApi.update(user.id, { ...user, bio });

  const uploadFile = () => {
    const formData = new FormData();
    formData.append(
      "formFiles",
      designFile,
      designFile.name
    );
    fileApi.upload(formData, 'designFile');
  };

  useEffect(() => {
    setBio(user.bio);
  }, [user.bio]);

  //if (!process.env.WRITE_ACCESS) return null;

  if (!user) return null;

  return (
    <div className="h-full w-100 flex flex-col m-4">
      <div className="flex flex-row flex-wrap lg:flex-no-wrap justify-between items-center border-accent border-b my-4 ml-0 pb-2">
        <h1 className="text-white text-2xl">Bio</h1>
        <div
          className="bg-panel rounded px-4 py-1 text-white cursor-pointer hover:border-accent hover:border"
          onClick={() => saveUser()}
        >
          Save
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-start mb-2">
        <img
          className="lg:h-64 sm:h-56 sm:w-auto sm:h-auto md:w-auto rounded-t-md border-accent border-b-4"
          src={ProfilePhoto}
        />
        <textarea
          value={bio}
          className="bg-panel p-2 flex-1 text-white lg:ml-4 resize-none focus:font-semibold rounded-t-md outline-none"
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
      </div>

      <div className="flex flex-row justify-between items-center border-accent border-b my-4 ml-0 pb-2">
        <h1 className="text-white text-2xl m-0">Projects</h1>
      </div>

      <div className="flex flex-col justify-between items-start border-accent border-b my-4 ml-0 pb-2">
        <h1 className="text-white text-2xl m-0">Designs</h1>
        <div className="flex flex-row">
          <div>
            <input type="file" onChange={e => setDesignFile(e.target.files[0])} />
            <button onClick={() => uploadFile()}>Create</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        {user.projects.map((project) => (
          <EditProject key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Edit;
