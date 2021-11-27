import React, { useContext } from "react";
import { UserContext } from "../../Store";

import LinkIcon from "../../../assets/link_icon.svg";

const Tags = ({ tags }) => (
  <div className="ml-2 mb-1 flex flex-row flex-wrap">
    {tags.map((tag) => (
      <span
        className="mx-2 px-2 p-1 my-1 flex-grow align-bottom rounded bg-accent text-center text-primary text-xs"
        key={tag}
      >
        {tag}
      </span>
    ))}
  </div>
);

const Projects = () => {
  const [user] = useContext(UserContext);
  if (!user) return null;

  return (
    <div className="min-h-full flex flex-col m-4">
      <div className="bg-panel p-4 mb-2 rounded-md">
        <div className="flex flex-row items-center border-b-2 border-accent">
          <h2 className="text-white text-2xl">webbdm.net</h2>
          <Tags tags={["react", ".net", "S3", "nginx", "mysql"]} />
        </div>
        <h2 className="p-5 pl-0 text-white text-left">
          First and foremost, my main personal project right now is this very
          website. What you're seeing is a React app powered by a .NET Core API
          (fully functional CMS) behind NGINX, running on a Digital Ocean Ubuntu
          Droplet with a MySQL database.
        </h2>
      </div>
      <div className="flex flex-col justify-between">
        {user.projects.filter(p => p.type === 'project').map((project) => (
          <div
            key={project.name}
            className="flex flex-col flex-shrink-0 text-white"
          >
            <a
              href={project.link}
              className="mt-2 flex flex-row justify-start items-center border-b-2 border-accent"
            >
              <h2 className="text-2xl hover:text-accent">{project.name}</h2>
              <img className="ml-2 mr-1 mb-2 mt-3" src={LinkIcon} />
              {/* <Tags tags={project.tags} /> */}
            </a>
            <div className="py-1 mb-2 md:flex md:flex-row md:flex-no-wrap">
              <img
                className="mt-2 sm:w-auto md:w-64 h-52 mr-4 mb-2 mt-1 rounded-sm object-cover"
                src={`${process.env.BUCKET_URL}/${project.image}`}
              />
              <p className="mt-1">
                {project.description}
                <a href={project.link} className="flex flex-row items-center ">
                  <span className="font-semibold"> View Project: </span>
                  <img className="ml-1 mt-1" src={LinkIcon} />
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
