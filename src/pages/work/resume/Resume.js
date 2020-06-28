import React, { useState } from "react";

import { Col, Container, Row } from "react-bootstrap";

import LaravelIcon from "../../../../assets/laravel_logo.svg";
import ReactIcon from "../../../../assets/react_logo.svg";
import PHPIcon from "../../../../assets/php_logo.svg";
import DotnetIcon from "../../../../assets/dotnet_core_logo.svg";

import "./Resume.sass";

const Resume = ({ name, resumes }) => {
  const [resume, setResume] = useState(resumes[0]);

  return (
    <div className="resume-panel d-flex flex-row flex-wrap">
      <Col lg={4} sm={12} className="user-wrapper">
        <div className="user-panel panel">
          <img src="https://avatars3.githubusercontent.com/u/13399339?s=460&u=e68da19dc1c8782f445ffaacbb5a3a55074e185f&v=4" />
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
          {/* Will source from API Data later */}
          {/* {resume.skills.map((skill) => (
            <Col key={skill.name} md>
              <span>{skill.name}</span>
            </Col>
          ))} */}
          {/* // TODO: Use from S3 or AWS CDN */}
          <img src={ReactIcon} />
          <img src={DotnetIcon} />
          <img src={LaravelIcon} />
          <img src={PHPIcon} />
        </Row>
        <Row className="job-panel panel">
          <div className="job-info">
            <div className="job-company">Atiba</div>
            <p className="job-title">Software Developer</p>
            <div className="job-description"></div>
          </div>
          <div className="job-info">
            <div className="job-company">
              Gilbert | McLaughlin | Casella architects{" "}
              <span className="job-dates">2015-2017</span>
            </div>
            <p className="job-title">Marketing & Office Coordinator</p>
            <div className="job-description"></div>
          </div>
          <div className="job-info">
            <div className="job-company">
              Crowd Surf <span className="job-dates">Fall 2014</span>
            </div>
            <p className="job-title">Marketing Intern</p>
            <div className="job-description"></div>
          </div>
          <div className="job-info">
            <div className="job-company">
              MCN Interactive <span className="job-dates">Summer 2014</span>
            </div>
            <p className="job-title">Marketing Intern</p>
            <div className="job-description"></div>
          </div>
          <div className="job-info">
            <div className="job-company">
              Rockhouse Partners <span className="job-dates">Spring 2014</span>
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
