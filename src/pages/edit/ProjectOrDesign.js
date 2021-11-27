import React from "react";
import Modal from "../../global/modal/Modal";
import EditProject from "./EditProject";

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    minWidth: "50%",
    transform: 'translate(-50%, -50%)',
    zIndex: 1000
}

const ProjectOrDesign = ({
    currentProject,
    initModal,
    closeModal,
    isShowingModal,
    isProjectType,     // Prop isProjectType denotes whether it's a Project or Design
    projects,
    setIsShowingModal,
}) => {
    const filterByProjectType = projects => projects.filter(project => project.type === (isProjectType ? 'project' : 'design'));
    return (
        <React.Fragment>

            <div className="flex flex-row justify-start">
                <h1 className="text-white text-2xl m-0">{isProjectType ? 'Projects' : 'Designs'}</h1>
                <div className="text-center cursor-pointer bg-accent text-primary rounded-md m-2 px-2"
                    onClick={() => setIsShowingModal(true)}>+</div>
            </div>
            <div className="divide-y-2 divide-blue-500 flex flex-col w-full">
                {filterByProjectType(projects).map((project) => (
                    <div className="cursor-pointer flex flex-row justify-between items-center py-1 text-white" key={project.id}>
                        <div onClick={() => initModal(project)}>{project.name}</div>
                        <div className="flex flex-row justify-between items-center">
                            <div className="cursor-pointer bg-accent text-primary rounded-md m-1 p-1">Delete</div>
                        </div>
                    </div>
                ))}
            </div>

            <Modal isOpen={isShowingModal} onClose={() => closeModal()}>
                <div style={MODAL_STYLES} className="flex flex-col filter drop-shadow-2xl rounded-lg bg-panel">
                    <EditProject projectType={isProjectType ? 'project' : 'design'} project={currentProject} closeModal={closeModal} />
                    <div onClick={() => closeModal()} className="text-bg rounded-bl-lg rounded-br-lg bg-accent font-bold text-center cursor-pointer">X Close</div>
                </div>
            </Modal>
        </React.Fragment>
    );
};

export default ProjectOrDesign;