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
  const [designFile, setDesignFile] = useState("");
  const [image, setImage] = useState(project.image);
  const [preview, setPreview] = useState("");

  const setAndPreview = file => {
    setDesignFile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function (e) {
      setPreview(reader.result);
    }.bind(this);
  }
  const uploadFile = () => {
    const formData = new FormData();
    formData.append(
      "formFiles",
      designFile,
      designFile.name
    );
    fileApi.upload(formData, 'designFile');
  };
  const saveProject = () => {
    uploadFile();
    projectApi.update(project.id, { ...project, name, description, image });
  }

  return (
    <div className="flex flex-col flex-wrap lg:flex-no-wrap items-center">
      <div className="flex flex-col justify-between bg-panel rounded-t border-accent border-b w-full">
      </div>
      <div className="flex flex-row items-center justify-start w-full ">
        {/* <label className="text-white">Name: </label> */}
        <input
          className="outline-none h-100 w-full text-white bg-panel rounded-t-md focus:font-semibold cursor-pointer flex-grow p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter project name"
        />
      </div>
      <div className="bg-primary flex flex-col justify-start w-full">
        {/* <label className="pl-2 pt-2 text-white">Description: </label> */}
        <textarea
          placeholder="Enter description"
          className="bg-primary text-white h-40 w-full outline-none focus:font-semibold resize-none p-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="w-full flex flex-row justify-between">
        <img
          className="w-1/2 h-auto object-cover"
          src={preview ? preview : `${process.env.BUCKET_URL}/${image}`}
        />

        <div className="flex flex-col items-center justify-around text-white h-100 w-1/2 p-2">
          <div className="flex flex-col justify-center items-center bg-panel mt-1">
            {/* <div className="mb-2 font-semibold">Upload Project Image</div> */}
            {/* <input className="rounded-md my-1" type="file" onChange={e => setDesignFile(e.target.files[0])} /> */}
            <div className="flex w-full items-center justify-center bg-panel">
              <label className="w-full flex flex-col items-center px-4 py-6 bg-accent rounded-lg shadow-lg tracking-wide border border-accent cursor-pointer">
                <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span className="mt-2 text-primary leading-normal">Upload Project Image</span>
                <input type='file' className="hidden" onChange={e => setAndPreview(e.target.files[0])} />
              </label>
            </div>
            <div className="text-xs mt-1 self-start overflow-hidden">{designFile && "File: " + designFile.name}</div>
          </div>
          <div
            className="bg-accent text-center w-63 py-2 rounded-md px-4 py-1 mt-1 text-primary cursor-pointer hover:font-semibold"
            onClick={() => saveProject()}
          >
            Save Project
          </div>
        </div>

      </div>


    </div>
  );
};

const Edit = () => {
  const [user] = useContext(UserContext);
  const [bio, setBio] = useState(user.bio);
  const [isShowingModal, setIsShowingModal] = useState(false);

  const saveUser = () => userApi.update(user.id, { ...user, bio });

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
            {/* <button onClick={() => uploadFile()}>Create</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
