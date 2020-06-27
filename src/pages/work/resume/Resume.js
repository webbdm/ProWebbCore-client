import React, { useState } from "react";

import { Col, Container, Row } from "react-bootstrap";

import "./Resume.sass";

const Resume = ({ name, resumes }) => {
  const [resume, setResume] = useState(resumes[0]);

  return (
    <Container className="resume-panel">
      <Col sm="1" className="user-panel">
        <img src="https://avatars3.githubusercontent.com/u/13399339?s=460&u=e68da19dc1c8782f445ffaacbb5a3a55074e185f&v=4" />
        <h2>{name}</h2>
        <div className="user-education-panel">
          <div>
            <h3>Nashville Software School 2017</h3>
            <p>Fullstack Web Development</p>
          </div>
          <div>
            <h3>Belmont University 2014</h3>
            <p>Entertainment Industry Studies</p>
          </div>
        </div>
      </Col>
      <Col sm="auto" className="work-panel">
        <Row className="skill-panel justify-content-between">
          {resume.skills.map((skill) => (
            <Col key={skill.name} md>
              <span>{skill.name}</span>
            </Col>
          ))}
        </Row>
        <Col className="job-panel">
          <div class="job-info">
            <h2>Atiba</h2>
          </div>
          <div class="job-info">
            <h2>Gilbert | McLaughlin | Casella architects</h2>
          </div>
          <div class="job-info">
            <h2>Crowd Surf</h2>
          </div>
          <div class="job-info">
            <h2>MCN Interactive</h2>
          </div>
          <div class="job-info">
            <h2>Rockhouse Partners</h2>
          </div>
        </Col>
      </Col>
    </Container>
  );
};

export default Resume;
