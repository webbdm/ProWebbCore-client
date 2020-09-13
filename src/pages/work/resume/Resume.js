import React, { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";

import LaravelIcon from "../../../../assets/laravel_logo.svg";
import NodeIcon from "../../../../assets/node_logo.svg";
import ReactIcon from "../../../../assets/react_logo.svg";
import PHPIcon from "../../../../assets/php_logo.svg";
import ProfileImage from "../../../../assets/gwebb_profile.jpg";
import DotnetIcon from "../../../../assets/dotnet_core_logo.svg";

import "./Resume.css";

// Using this for now until S3 Image storage is configured
const mapSkillImages = (name) => {
  switch (name) {
    case "React":
      return ReactIcon;
    case "C#":
      return DotnetIcon;
    case "Node":
      return NodeIcon;
    case "PHP":
      return PHPIcon;
    case "Laravel":
      return LaravelIcon;
    default:
      break;
  }
};

const Job = ({ job }) => {
  const { description, employer, title, startDate, endDate } = job;
  return (
    <div className="job-info">
      <div className="job-employer border-accent border-b-2 flex flex-row justify-between">
        <span className="job-employer-name text-xl font-bold py-1">
          {employer}
        </span>
        <span className="job-dates text-xl text-right font-bold py-1">
          {endDate ? (
            <React.Fragment>
              {moment(startDate).format("MMM YYYY")} -{" "}
              {moment(endDate).format("MMM YYYY")}
            </React.Fragment>
          ) : null}
        </span>
      </div>
      <p className="job-title mb-4 my-1">{title}</p>
      <p className="job-description">{description}</p>
    </div>
  );
};

Job.propTypes = {
  description: PropTypes.string,
  employer: PropTypes.string,
  title: PropTypes.string,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
};

const Resume = ({ name, resumes }) => {
  const [resume, setResume] = useState(resumes[0]);

  return (
    <div className="resume-panel h-full w-full flex flex-row flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap">
      {/* <div className="user-wrapper"> */}
      <div className="user-panel text-white bg-panel rounded-md m-2">
        <img
          className="border-accent rounded-t-md border-b-2"
          src={ProfileImage}
        />
        <h1 className="user-name text-5xl px-2 text-center text-white">
          {name}
        </h1>
        <p className="user-tagline px-2">
          Software Developer at Atiba with a passion for solving puzzles
        </p>
        <div className="user-education-panel p-2">
          <div className="user-education-school">
            <h3 className="text-white text-xl font-bold flex flex-row justify-between border-accent border-b-2">
              Nashville Software School <span>2017</span>
            </h3>
            <p>Full Stack Web Development</p>
          </div>
          <div className="user-education-school">
            <h3 className="text-white text-xl font-bold flex flex-row justify-between items-center border-accent border-b-2">
              Belmont University <span>2014</span>
            </h3>
            <p>B.S. Entertainment Industry Studies</p>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className="work-wrapper flex-1">
        <div className="text-white skill-panel bg-panel rounded-md flex flew-row flex-wrap justify-between m-2">
          {resume.skills.map((skill) => (
            <div className="m-4" key={skill.name}>
              <div className="flex flex-col justify-between items-center">
                <img className="skill-img" src={mapSkillImages(skill.name)} />
                <span className="skill-name">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="job-panel bg-panel rounded-md text-white px-2 m-2">
          {resume.jobs.map((job) => (
            <Job job={job} key={job.employer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
