import React, { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";

import LaravelIcon from "../../../../assets/laravel_logo.svg";
import NodeIcon from "../../../../assets/node_logo.svg";
import ReactIcon from "../../../../assets/react_logo.svg";
import PHPIcon from "../../../../assets/php_logo.svg";
import ProfileImage from "../../../../assets/gwebb_profile.jpg";
import DotnetIcon from "../../../../assets/dotnet_core_logo.svg";

import "./Resume.sass";

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
      <div className="job-employer">
        <span className="job-employer-name">{employer}</span>
        <span className="job-dates">
          {endDate ? (
            <React.Fragment>
              {moment(startDate).format("MMM YYYY")} -{" "}
              {moment(endDate).format("MMM YYYY")}
            </React.Fragment>
          ) : null}
        </span>
      </div>
      <p className="job-title">{title}</p>
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
    <div className="resume-panel h-100 d-flex flex-row flex-wrap">
      <div className="user-wrapper">
        <div className="user-panel panel">
          <img src={ProfileImage} />
          <h3 className="user-name">{name}</h3>
          <p className="user-tagline">
            Software Developer at Atiba with a passion for solving puzzles
          </p>
          <div className="user-education-panel">
            <div className="user-education-school">
              <h3>
                Nashville Software School <span>2017</span>
              </h3>
              <p>Full Stack Web Development</p>
            </div>
            <div className="user-education-school">
              <h3>
                Belmont University <span>2014</span>
              </h3>
              <p>B.S. Entertainment Industry Studies</p>
            </div>
          </div>
        </div>
      </div>
      <div className="work-wrapper">
        <div className="skill-panel panel justify-content-between">
          {resume.skills.map((skill) => (
            <div key={skill.name}>
              <div className="skill-wrapper">
                <img src={mapSkillImages(skill.name)} />
                <span className="skill-name">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="job-panel panel">
          {resume.jobs.map((job) => (
            <Job job={job} key={job.employer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
