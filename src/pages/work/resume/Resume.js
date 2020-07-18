import React, { useState } from "react";

import { Col, Container, Row } from "react-bootstrap";

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

const Job = ({ name, title, dates, description }) => (
  <div className="job-info">
    <div className="job-company">
      <span className="job-company-name">{name}</span>
      <span className="job-dates">{dates}</span>
    </div>
    <p className="job-title">{title}</p>
    <div className="job-description">{description}</div>
  </div>
);

const Resume = ({ name, resumes }) => {
  const [resume, setResume] = useState(resumes[0]);

  return (
    <div className="resume-panel d-flex flex-row flex-wrap">
      <Col lg={4} sm={12} className="user-wrapper">
        <div className="user-panel panel">
          <img src={ProfileImage} />
          <h3 className="user-name">{name}</h3>
          <p className="user-tagline">
            Software Developer at Atiba and a passion for solving puzzles
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
      </Col>
      <Col lg={8} sm={12} className="work-wrapper">
        <Row className="skill-panel panel justify-content-between">
          {resume.skills.map((skill) => (
            <Col key={skill.name} md>
              <div className="skill-wrapper">
                <img src={mapSkillImages(skill.name)} />
                <span className="skill-name">{skill.name}</span>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="job-panel panel">
          <div className="job-info">
            <div className="job-company">
              <span className="job-company-name">Atiba</span>
              <span className="job-dates"></span>
            </div>
            <p className="job-title">Software Developer</p>
            <div className="job-description"></div>
          </div>
          <div className="job-info">
            <div className="job-company">
              <span className="job-company-name">
                Gilbert | McLaughlin | Casella architects{" "}
              </span>
              <span className="job-dates">2015-2017</span>
            </div>
            <p className="job-title">Marketing & Office Coordinator</p>
            <div className="job-description"></div>
          </div>
          <div className="job-info">
            <div className="job-company">
              <span className="job-company-name">Crowd Surf</span>
              <span className="job-dates">Fall 2014</span>
            </div>
            <p className="job-title">Marketing Intern</p>
            <div className="job-description"></div>
          </div>
          <div className="job-info">
            <div className="job-company">
              <span className="job-company-name">MCN Interactive</span>
              <span className="job-dates">Summer 2014</span>
            </div>
            <p className="job-title">Marketing Intern</p>
            <div className="job-description"></div>
          </div>
          <div className="job-info">
            <div className="job-company">
              <span className="job-company-name">Rockhouse Partners</span>
              <span className="job-dates">Spring 2014</span>
            </div>
            <p className="job-title">Marketing Intern</p>
            <div className="job-description"></div>
          </div>
        </Row>
      </Col>
    </div>
  );
};

export default Resume;
