import React, { useState } from "react";
import { projectApi, fileApi } from "../../providers/api.js";

const EditProject = ({ project, update, closeModal }) => {
    const checkProject = project => {
        return project ? project :
            {
                id: 0,
                name: "",
                description: "",
                image: ""
            }
    }
    const { id: projectId, name: projectName, description: projectDescription, image: projectImage } = checkProject(project);
    const [name, setName] = useState(projectName);
    const [description, setDescription] = useState(projectDescription);
    const [designFile, setDesignFile] = useState("");
    const [image, setImage] = useState(projectImage);
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
        fileApi.upload(formData, 'designFile'); // TODO: Add ImageUploads table inputs EntityType, EntityID
    };

    const saveProject = () => {
        if (designFile.name) uploadFile();
        // TODO
        // Create ImageUploads table
        // ID, EntityType, EntityID, FileName
        projectApi.update(project.id, { ...project, name, description, image });
        closeModal();
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
                    placeholder={`${!projectId ? 'Add a' : 'Enter'} project name`}
                />
            </div>
            <div className="bg-primary flex flex-col justify-start w-full">
                {/* <label className="pl-2 pt-2 text-white">Description: </label> */}
                <textarea
                    placeholder={`${!projectId ? 'Add a' : 'Enter'} description`}
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

export default EditProject;