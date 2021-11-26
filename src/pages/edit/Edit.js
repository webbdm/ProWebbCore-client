import React, { useContext, useEffect, useState } from "react";
import Modal from "../../global/modal/Modal";

import { UserContext } from "../../Store";

import { projectApi, userApi, fileApi } from "../../providers/api.js";

import ProfilePhoto from "../../../assets/gwebb_profile.jpg";
import ProjectOrDesign from "./ProjectOrDesign";

const Edit = () => {
  const [user] = useContext(UserContext);
  const [bio, setBio] = useState(user.bio);
  const [isShowingModal, setIsShowingModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const saveUser = () => userApi.update(user.id, { ...user, bio });

  useEffect(() => {
    setBio(user.bio);
  }, [user.bio]);

  const initModal = project => {
    setIsShowingModal(true);
    setCurrentProject(project)
  }

  const closeModal = () => {
    setIsShowingModal(false);
    setCurrentProject(null);
  };

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
        <ProjectOrDesign
          currentProject={currentProject}
          initModal={initModal}
          closeModal={closeModal}
          isShowingModal={isShowingModal}
          setIsShowingModal={setIsShowingModal}
          projects={user.projects}
          isProjectType={true} // Project type
        />
        <ProjectOrDesign
          currentProject={currentProject}
          initModal={initModal}
          closeModal={closeModal}
          isShowingModal={isShowingModal}
          setIsShowingModal={setIsShowingModal}
          projects={user.projects}
          isProjectType={false} // Design Type
        />
      </div>

      {/* <div className="flex flex-col justify-between items-start border-accent border-b my-4 ml-0 pb-2">
        <div className="flex flex-row justify-start">
          <h1 className="text-white text-2xl m-0">Designs</h1>
          <div className="text-center cursor-pointer bg-accent text-primary rounded-md m-2 px-2"
            onClick={() => setIsShowingModal(true)}>+</div>
        </div>
        <div className="divide-y-2 divide-blue-500 flex flex-col w-full">
          {user.projects.filter(p => p.type === 'design').map((project) => (
            <div className="cursor-pointer flex flex-row justify-between items-center py-1 text-white" key={project.id}>
              <div onClick={() => initModal(project)}>{project.name}</div>
              <div className="flex flex-row justify-between items-center">
                <div className="cursor-pointer bg-accent text-primary rounded-md m-1 p-1">Delete</div>
              </div>
            </div>
          ))}

        </div>
      </div> */}
      {/* <Modal isOpen={isShowingModal} onClose={() => setIsShowingModal(false)}>
        <div style={MODAL_STYLES} className="flex flex-col filter drop-shadow-2xl rounded-lg bg-panel">
          <EditProject project={currentProject} />
          <div onClick={() => setIsShowingModal(false)} className="text-bg rounded-bl-lg rounded-br-lg bg-accent font-bold text-center cursor-pointer">X Close</div>
        </div>
      </Modal> */}
    </div>
  );
};

export default Edit;
