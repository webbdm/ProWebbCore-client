import React, { useState } from "react";

import { Col, Container, Row } from "react-bootstrap";

import "./Resume.sass";

const Resume = ({ resumes }) => {
  const [resume, setResume] = useState(resumes[0]);

  return (
    <div className="resume-wrapper">
      <div className="user-panel"></div>
      <div className="resume-panel">
        <Container>
          <Col>
            <img src="" />
            <h2>Summary</h2>
            <div>Education Box</div>
          </Col>
          <Col>
            <Row className="skill-panel justify-content-between">
              {resume.skills.map((skill) => (
                <Col key={skill.name} md>
                  <span>{skill.name}</span>
                </Col>
              ))}
            </Row>
            <Row className="job-panel">
              <h2>Job 1</h2>
              <h2>Job 2</h2>
              <h2>Job 3</h2>
            </Row>
          </Col>
        </Container>
      </div>
    </div>
  );
};

export default Resume;
