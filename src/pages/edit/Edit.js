import React, { useContext, useEffect, useState } from "react";
import Modal from "../../global/modal/Modal";

import { UserContext } from "../../Store";

import { projectApi, userApi, fileApi } from "../../providers/api.js";

import ProfilePhoto from "../../../assets/gwebb_profile.jpg";

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  minWidth: "50%",
  transform: 'translate(-50%, -50%)',
  zIndex: 1000
}

const EditProject = ({ project, update }) => {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);

  const [image, setImage] = useState(project.image);

  const saveProject = () =>
    projectApi.update(project.id, { ...project, name, description, image });

  return (
    <div className="flex flex-col flex-wrap lg:flex-no-wrap items-center">
      <img
        className="sm:w-auto md:w-64 h-52 mr-4 m-2 rounded-md object-cover"
        src={`${process.env.BUCKET_URL}/${image}`}
      />

      <div className="flex flex-col justify-between bg-panel rounded-t border-accent border-b w-full">
        <input
          className="outline-none h-100 w-full text-white bg-panel rounded-t focus:font-semibold cursor-pointer flex-grow p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Project Name"
        />
      </div>
      <textarea
        placeholder="Enter Description"
        className="bg-primary text-white h-40 w-full outline-none rounded-b focus:font-semibold resize-none p-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <div
        className="bg-panel rounded px-4 py-1 mt-1 text-white cursor-pointer hover:font-semibold"
        onClick={() => saveProject()}
      >
        Save
          </div>

    </div>
  );
};

const Edit = () => {
  const [user] = useContext(UserContext);

  const [bio, setBio] = useState(user.bio);
  const [image, setImage] = useState("");
  const [designFile, setDesignFile] = useState("");
  const [isShowingModal, setIsShowingModal] = useState(false);

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
          className="bg-accent rounded-md px-4 py-1 text-primary cursor-pointer hover:border-accent hover:border"
          onClick={() => saveUser()}
        >
          Save
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-start mb-2">
        <img
          className="lg:h-64 sm:h-56 sm:w-auto sm:h-auto md:w-auto rounded-l-md m-0 border-accent border-b-4"
          src={ProfilePhoto}
        />
        <textarea
          value={bio}
          className="bg-panel p-2 flex-1 text-white lg:ml-0 resize-none focus:font-semibold rounded-r-md outline-none"
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
      </div>

      <div className="flex flex-col justify-between items-start border-accent border-b my-4 ml-0 pb-2">
        <div className="flex flex-row justify-start">
          <h1 className="text-white text-2xl m-0">Projects</h1>
          <div className="text-center cursor-pointer bg-accent text-primary rounded-md m-2 px-2"
            onClick={() => setIsShowingModal(true)}>+</div>
        </div>
        <div className="divide-y-2 divide-blue-500 flex flex-col w-full">
          {user.projects.map((project) => (
            <div className="cursor-pointer flex flex-row justify-between items-center py-1 text-white" key={project.id}>
              <Modal isOpen={isShowingModal} onClose={() => setIsShowingModal(false)}>
                <div style={MODAL_STYLES} className="flex flex-col filter drop-shadow-2xl rounded-lg bg-panel">
                  <EditProject project={project} />
                  <div onClick={() => setIsShowingModal(false)} className="text-bg mt-3 rounded-bl-lg rounded-br-lg bg-accent font-bold text-center cursor-pointer">X Close</div>
                </div>
              </Modal>
              <div onClick={() => setIsShowingModal(true)}>{project.name}</div>
              <div className="flex flex-row justify-between items-center">
                <div className="cursor-pointer bg-accent text-primary rounded-md m-1 p-1">Delete</div>
              </div>
            </div>
          ))}

        </div>
      </div>

      <div className="flex flex-col justify-between items-start border-accent border-b my-4 ml-0 pb-2">

        <div className="flex flex-row justify-start">
          <h1 className="text-white text-2xl m-0">Designs</h1>
          <div className="text-center cursor-pointer bg-accent text-primary rounded-md m-2 px-2">+</div>
        </div>
        <div className="flex flex-row">
          <div>
            {/* <input type="file" onChange={e => setDesignFile(e.target.files[0])} /> */}
            <button onClick={() => uploadFile()}>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
